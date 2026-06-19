import React from 'react';

// local
import Input from '../../../../../../../components/Input';
import Button from '../../../../../../../components/Button';
import TextArea from '../../../../../../../components/TextArea';

// src
import { TOUR_LIMITS } from '@/constants/tourLimits';

const TourFormStep2 = ({
    formData,
    addListItem,
    updateListItem,
    removeListItem,
    addItineraryDay,
    updateItineraryDay,
    removeItineraryDay
}) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
                {/* Included Items */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-slate-700 underline decoration-blue-500/30 underline-offset-4">Dahil Olanlar</label>
                        {formData.included.length < TOUR_LIMITS.INCLUDED_MAX_ITEMS && (
                            <button
                                type="button"
                                onClick={() => addListItem('included')}
                                className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        )}
                    </div>
                    <div className="space-y-2">
                        {formData.included.map((item, idx) => (
                            <div key={idx} className="flex gap-2">
                                <div className="flex-1">
                                    <Input
                                        value={item}
                                        onChange={(e) => updateListItem('included', idx, e.target.value)}
                                        placeholder="Örn: Kahvaltı"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeListItem('included', idx)}
                                    className="p-2 text-slate-300 hover:text-red-500 cursor-pointer"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                        {formData.included.length === 0 && <p className="text-xs text-slate-400 italic">Henüz eklenmedi...</p>}
                        {formData.included.length >= TOUR_LIMITS.INCLUDED_MAX_ITEMS && <p className="text-xs text-red-500 mt-1">Maksimum {TOUR_LIMITS.INCLUDED_MAX_ITEMS} madde ekleyebilirsiniz.</p>}
                    </div>
                </div>

                {/* Excluded Items */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-slate-700 underline decoration-red-500/30 underline-offset-4">Dahil Olmayanlar</label>
                        {formData.excluded.length < TOUR_LIMITS.EXCLUDED_MAX_ITEMS && (
                            <button
                                type="button"
                                onClick={() => addListItem('excluded')}
                                className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white cursor-pointer"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        )}
                    </div>
                    <div className="space-y-2">
                        {formData.excluded.map((item, idx) => (
                            <div key={idx} className="flex gap-2">
                                <div className="flex-1">
                                    <Input
                                        value={item}
                                        onChange={(e) => updateListItem('excluded', idx, e.target.value)}
                                        placeholder="Örn: Kişisel harcamalar"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeListItem('excluded', idx)}
                                    className="p-2 text-slate-300 hover:text-red-500 cursor-pointer"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                        {formData.excluded.length === 0 && <p className="text-xs text-slate-400 italic">Henüz eklenmedi...</p>}
                        {formData.excluded.length >= TOUR_LIMITS.EXCLUDED_MAX_ITEMS && <p className="text-xs text-red-500 mt-1">Maksimum {TOUR_LIMITS.EXCLUDED_MAX_ITEMS} madde ekleyebilirsiniz.</p>}
                    </div>
                </div>
            </div>

            {/* Daily Program */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-slate-700">Tur Programı (Günlük)</label>
                    <Button
                        variant="primary"
                        onClick={addItineraryDay}
                        className="!px-3 !py-1.5 !text-xs !rounded-xl"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        Gün Ekle
                    </Button>
                </div>
                <div className="space-y-4">
                    {formData.itinerary.map((item, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 relative group">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-black text-blue-600 uppercase tracking-widest">GÜN {item.day}</span>
                                {formData.itinerary.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeItineraryDay(idx)}
                                        className="text-slate-300 hover:text-red-500 cursor-pointer"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <TextArea
                                value={item.description}
                                onChange={(e) => updateItineraryDay(idx, e.target.value)}
                                placeholder="Bugünün programını detaylandırın..."
                                rows={3}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TourFormStep2;

