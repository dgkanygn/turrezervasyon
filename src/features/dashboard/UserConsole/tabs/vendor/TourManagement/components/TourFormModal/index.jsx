import React, { useState, useEffect } from 'react';

import Button from '../../../../../components/Button';
import TourFormStep1 from './components/TourFormStep1';
import TourFormStep2 from './components/TourFormStep2';
import TourFormStep3 from './components/TourFormStep3';

const TourFormModal = ({ isOpen, onClose, onSave, tour, isSaving }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        price: '',
        date: '',
        time: '',
        capacity: 20,
        status: 'Aktif',
        description: '',
        included: [],
        excluded: [],
        itinerary: [{ day: 1, description: '' }],
        images: []
    });

    useEffect(() => {
        if (tour) {
            setFormData({
                title: tour.title || '',
                location: tour.location || '',
                price: tour.price || '',
                date: tour.date || '',
                time: tour.time || '',
                capacity: tour.capacity || 20,
                status: tour.status || 'Aktif',
                description: tour.description || '',
                included: tour.included || [],
                excluded: tour.excluded || [],
                itinerary: tour.itinerary || [{ day: 1, description: '' }],
                images: tour.images || []
            });
        } else {
            setFormData({
                title: '',
                location: '',
                price: '',
                date: '',
                time: '',
                capacity: 20,
                status: 'Aktif',
                description: '',
                included: [],
                excluded: [],
                itinerary: [{ day: 1, description: '' }],
                images: []
            });
        }
        setStep(1);
    }, [tour, isOpen]);

    if (!isOpen) return null;

    const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
    const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step < 3) {
            handleNext();
        } else {
            onSave(formData);
        }
    };

    const addListItem = (field) => {
        setFormData(prev => ({
            ...prev,
            [field]: [...prev[field], '']
        }));
    };

    const updateListItem = (field, index, value) => {
        const newList = [...formData[field]];
        newList[index] = value;
        setFormData(prev => ({ ...prev, [field]: newList }));
    };

    const removeListItem = (field, index) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }));
    };

    const addItineraryDay = () => {
        setFormData(prev => ({
            ...prev,
            itinerary: [...prev.itinerary, { day: prev.itinerary.length + 1, description: '' }]
        }));
    };

    const updateItineraryDay = (index, description) => {
        const newItinerary = [...formData.itinerary];
        newItinerary[index] = { ...newItinerary[index], description };
        setFormData(prev => ({ ...prev, itinerary: newItinerary }));
    };

    const removeItineraryDay = (index) => {
        const newItinerary = formData.itinerary
            .filter((_, i) => i !== index)
            .map((item, i) => ({ ...item, day: i + 1 }));
        setFormData(prev => ({ ...prev, itinerary: newItinerary }));
    };

    const renderStepIndicators = () => (
        <div className="flex items-center justify-center gap-2 mb-6">
            {[1, 2, 3].map(i => (
                <div
                    key={i}
                    className={`h-1.5 rounded-full ${step === i ? 'w-8 bg-blue-600' : 'w-4 bg-slate-200'
                        }`}
                />
            ))}
        </div>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
                    <div>
                        <h2 className="text-xl font-black text-slate-800 tracking-tight">
                            {tour ? 'Turu Düzenle' : 'Yeni Tur Oluştur'}
                        </h2>
                        <p className="text-sm text-slate-400 font-medium">Step {step} of 3</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full cursor-pointer text-slate-400 hover:text-slate-600"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                    {renderStepIndicators()}

                    <form id="tour-form" onSubmit={handleSubmit} className="space-y-6">
                        {step === 1 && (
                            <TourFormStep1 formData={formData} setFormData={setFormData} />
                        )}

                        {step === 2 && (
                            <TourFormStep2
                                formData={formData}
                                addListItem={addListItem}
                                updateListItem={updateListItem}
                                removeListItem={removeListItem}
                                addItineraryDay={addItineraryDay}
                                updateItineraryDay={updateItineraryDay}
                                removeItineraryDay={removeItineraryDay}
                            />
                        )}

                        {step === 3 && (
                            <TourFormStep3 formData={formData} setFormData={setFormData} removeListItem={removeListItem} />
                        )}
                    </form>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex gap-3 sticky bottom-0 z-10">
                    {step > 1 && (
                        <Button
                            variant="secondary"
                            onClick={handlePrev}
                            className="!bg-white border border-slate-200 !text-slate-600 hover:!bg-slate-50 shadow-sm"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            Geri
                        </Button>
                    )}
                    <Button
                        variant="primary"
                        form="tour-form"
                        isLoading={isSaving}
                        type="submit"
                        className="flex-1 !bg-blue-600 hover:!bg-blue-700 !text-white shadow-lg shadow-blue-500/20"
                    >
                        {step < 3 ? 'Devam Et' : 'Turu Tamamla'}
                        {step < 3 && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TourFormModal;
