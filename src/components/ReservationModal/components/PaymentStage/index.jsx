import React, { useState } from 'react';
import { FaCreditCard, FaUniversity, FaLock, FaCalendarAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const PaymentStage = ({ onBack, onComplete, amount, isLoading }) => {
    const [tab, setTab] = useState('card');

    return (
        <div className="flex flex-col h-full overflow-y-auto pr-2 custom-scrollbar">
            {/* Tabs */}
            <div className="flex bg-gray-50 p-1.5 rounded-2xl mb-8 border border-gray-100/50 shadow-inner">
                <button
                    onClick={() => setTab('card')}
                    className={`flex-1 flex items-center justify-center gap-3 py-3.5 rounded-xl font-bold transition-all cursor-pointer ${
                        tab === 'card' 
                        ? "bg-white text-red-600 shadow-md ring-1 ring-black/5" 
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                >
                    <FaCreditCard size={18} />
                    Kart Bilgileri
                </button>
                <button
                    onClick={() => setTab('iban')}
                    className={`flex-1 flex items-center justify-center gap-3 py-3.5 rounded-xl font-bold transition-all cursor-pointer ${
                        tab === 'iban' 
                        ? "bg-white text-red-600 shadow-md ring-1 ring-black/5" 
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                >
                    <FaUniversity size={18} />
                    IBAN Bilgileri
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 min-h-[320px]">
                {tab === 'card' ? (
                    <div className="space-y-6 animate-fadeIn">
                        {/* Card Form */}
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 px-1">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                                    Kart Üzerindeki İsim
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="AD SOYAD" 
                                    className="w-full bg-white border-2 border-gray-100 p-4 rounded-xl focus:outline-none focus:border-red-500 transition-all font-medium placeholder:text-gray-300 shadow-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 px-1">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                                    Kart Numarası
                                </label>
                                <div className="relative group">
                                    <input 
                                        type="text" 
                                        placeholder="0000 0000 0000 0000" 
                                        className="w-full bg-white border-2 border-gray-100 p-4 pl-12 rounded-xl focus:outline-none focus:border-red-500 transition-all font-medium placeholder:text-gray-300 shadow-sm"
                                    />
                                    <FaCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 px-1">S.K.T</label>
                                    <div className="relative group">
                                        <input 
                                            type="text" 
                                            placeholder="AA/YY" 
                                            className="w-full bg-white border-2 border-gray-100 p-4 pl-12 rounded-xl focus:outline-none focus:border-red-500 transition-all font-medium placeholder:text-gray-300 shadow-sm"
                                        />
                                        <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 px-1">CVV</label>
                                    <div className="relative group">
                                        <input 
                                            type="text" 
                                            placeholder="123" 
                                            className="w-full bg-white border-2 border-gray-100 p-4 pl-12 rounded-xl focus:outline-none focus:border-red-500 transition-all font-medium placeholder:text-gray-300 shadow-sm"
                                        />
                                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6 animate-fadeIn">
                        {/* IBAN Info */}
                        <div className="bg-red-50/70 rounded-2xl p-6 border-2 border-dashed border-red-200">
                            <h5 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                                <FaUniversity />
                                Ödeme Alıcısı: TurRezervasyon A.Ş.
                            </h5>
                            <div className="space-y-5">
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-red-100">
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">TR IBAN ADRESİ</label>
                                    <p className="font-mono text-gray-900 font-bold tracking-wider select-all cursor-pointer hover:text-red-600 transition-colors">TR00 0000 0000 0000 0000 0000 00</p>
                                </div>
                                <div className="bg-white/50 rounded-xl p-4">
                                    <p className="text-sm text-gray-600 font-medium leading-relaxed italic">
                                        * Lütfen havale açıklama kısmına <strong>Rezervasyon Kodunu</strong> eklemeyi unutmayın.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-100 bg-white sticky bottom-0">
                <div className="flex gap-4">
                    <button
                        onClick={onBack}
                        disabled={isLoading}
                        className="flex-1 py-4 px-6 bg-gray-50 text-gray-600 rounded-2xl font-bold hover:bg-gray-100 transition-all disabled:opacity-50 cursor-pointer"
                    >
                        Geri
                    </button>
                    <button
                        onClick={onComplete}
                        disabled={isLoading}
                        className="flex-[2] py-4 px-6 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 shadow-lg shadow-red-200 transition-all flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
                    >
                        {isLoading ? (
                            <>
                                <FaSpinner size={18} className="animate-spin" />
                                İşleniyor...
                            </>
                        ) : (
                            <>
                                <FaCheckCircle size={18} />
                                Ödemeyi Tamamla
                            </>
                        )}
                    </button>
                </div>
                <div className="text-center mt-4">
                    <p className="text-xs text-gray-400 font-medium flex items-center justify-center gap-1.5 uppercase tracking-wider">
                        <FaLock className="text-green-500" size={10} />
                        256-bit SSL şifreleme ile güvendesiniz
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentStage;
