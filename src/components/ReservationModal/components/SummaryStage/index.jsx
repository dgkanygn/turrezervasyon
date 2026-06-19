import React from 'react';
import { FaInfoCircle, FaCalendarAlt, FaUsers, FaArrowRight, FaTimes } from 'react-icons/fa';

const SummaryStage = ({ tour, onContinue, onCancel }) => {
    if (!tour) return null;
    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {/* Tour Info Brief */}
                <div className="bg-red-50/50 rounded-2xl p-5 mb-6 border border-red-100/50">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{tour.title}</h4>
                    <div className="space-y-3">
                        <div className="flex items-center text-gray-700">
                            <FaCalendarAlt className="text-red-500 mr-3 shrink-0" />
                            <span className="font-medium">{tour.date} - {tour.time}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaUsers className="text-red-500 mr-3 shrink-0" />
                            <span className="font-medium">{tour.busSeats} Kişilik Tur</span>
                        </div>
                    </div>
                </div>

                {/* Warning Message */}
                <div className="bg-amber-50 rounded-2xl p-5 mb-6 border border-amber-100 flex items-start gap-4">
                    <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
                        <FaInfoCircle size={20} />
                    </div>
                    <div>
                        <p className="text-amber-800 text-sm font-semibold leading-relaxed">
                            "Koltuk seçimi yapılamaz. Rezervasyon yaptıktan sonra size atanan koltuk numaraları bildirilecektir."
                        </p>
                    </div>
                </div>

                {/* Pricing Summary */}
                <div className="flex justify-between items-center py-4 border-t border-gray-100 mt-2">
                    <span className="text-gray-500 font-medium">Toplam Tutar:</span>
                    <span className="text-2xl font-black text-red-600">₺{tour.price?.toLocaleString('tr-TR')}</span>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-6 border-t border-gray-100 mt-auto">
                <button
                    onClick={onCancel}
                    className="flex-1 py-4 px-6 bg-gray-50 text-gray-600 rounded-2xl font-bold hover:bg-gray-100 transition-all cursor-pointer"
                >
                    İptal
                </button>
                <button
                    onClick={onContinue}
                    className="flex-[2] py-4 px-6 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 shadow-lg shadow-red-200 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                    Devam Et
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default SummaryStage;
