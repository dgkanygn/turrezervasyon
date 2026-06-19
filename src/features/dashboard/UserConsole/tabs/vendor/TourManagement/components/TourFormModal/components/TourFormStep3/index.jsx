import React from 'react';

// src
import { TOUR_LIMITS } from '@/constants/tourLimits';

const TourFormStep3 = ({ formData, setFormData, removeListItem }) => {
    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-slate-700">Tur Fotoğrafları</label>
                    <span className="text-xs text-slate-500 font-medium">{formData.images.length} / {TOUR_LIMITS.IMAGES_MAX_ITEMS} Fotoğraf</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {formData.images.map((img, idx) => (
                        <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden group border border-slate-100 shadow-sm">
                            <img src={img} alt="" className="w-full h-full object-cover" />
                            <button
                                type="button"
                                onClick={() => removeListItem('images', idx)}
                                className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm text-red-500 rounded-full opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer transition-opacity"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))}

                    {formData.images.length < TOUR_LIMITS.IMAGES_MAX_ITEMS && (
                        <label className="aspect-video rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 hover:border-blue-400 hover:bg-blue-50 text-slate-400 hover:text-blue-500 cursor-pointer transition-colors">
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={(e) => {
                                    const files = Array.from(e.target.files);
                                    if (!files.length) return;

                                    const availableSlots = TOUR_LIMITS.IMAGES_MAX_ITEMS - formData.images.length;
                                    const allowedFiles = files.slice(0, availableSlots);

                                    const newImages = allowedFiles.map(file => URL.createObjectURL(file));

                                    setFormData(prev => ({
                                        ...prev,
                                        images: [...prev.images, ...newImages]
                                    }));

                                    e.target.value = '';
                                }}
                            />
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            <span className="text-xs font-bold uppercase tracking-wider">Fotoğraf Ekle</span>
                        </label>
                    )}
                </div>
                {formData.images.length >= TOUR_LIMITS.IMAGES_MAX_ITEMS && (
                    <p className="text-xs text-red-500 mt-2">Maksimum fotoğraf sınırına ({TOUR_LIMITS.IMAGES_MAX_ITEMS}) ulaştınız.</p>
                )}
            </div>
        </div>
    );
};

export default TourFormStep3;

