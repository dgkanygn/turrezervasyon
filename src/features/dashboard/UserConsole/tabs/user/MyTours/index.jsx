import React from 'react';
import { useMyTours } from './hooks/useMyTours';
import TourCard from './components/TourCard';

const MyTours = () => {
    const { tours, loading } = useMyTours();

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center p-20 bg-white/50 rounded-3xl border border-slate-100 backdrop-blur-sm">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mb-4 shadow-lg shadow-blue-500/20"></div>
                <p className="text-slate-500 font-medium">Turlarınız yükleniyor...</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">Turlarım</h2>
                    <p className="text-slate-500 mt-1">Rezerve ettiğiniz turları buradan yönetebilirsiniz.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:shadow-sm transition-all cursor-pointer">
                        Filtrele
                    </button>
                    <button className="px-4 py-2 bg-blue-600 rounded-xl text-sm font-semibold text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all cursor-pointer">
                        Yeni Tur Ara
                    </button>
                </div>
            </div>

            {tours.length === 0 ? (
                <div className="p-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-100">
                    <div className="mb-4 inline-flex p-4 bg-slate-50 rounded-full text-slate-300">
                         <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.341A8.001 8.001 0 115.541 4.54a8.001 8.001 0 0113.887 10.801z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Hiç turunuz yok</h3>
                    <p className="text-slate-500 max-w-xs mx-auto mt-2">Henüz bir tura kayıt olmadınız. Hemen turlarımızı inceleyebilirsiniz.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {tours.map(tour => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyTours;
