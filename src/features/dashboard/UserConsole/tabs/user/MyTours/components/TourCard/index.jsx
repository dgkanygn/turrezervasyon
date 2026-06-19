import React from 'react';
import { useNavigate } from 'react-router-dom';

const TourCard = ({ tour }) => {
    const navigate = useNavigate();


    const openTourDetails = (tourId) => {
    window.open(`/tours/${tourId}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <div 
            onClick={() => openTourDetails(tour.id)}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
            <div className="relative h-44 overflow-hidden">
                <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                        tour.status === 'Aktif' 
                            ? 'bg-blue-500/80 text-white' 
                            : 'bg-slate-500/80 text-white'
                    }`}>
                        {tour.status}
                    </span>
                </div>
            </div>
            
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {tour.title}
                    </h3>
                </div>
                
                <div className="flex items-center text-slate-500 text-sm mb-4">
                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {tour.location}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400 uppercase font-semibold">Tarih</span>
                        <span className="text-sm font-bold text-slate-700">{tour.date}</span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs text-slate-400 block">Ödenen</span>
                        <span className="text-lg font-black text-blue-600">
                             {tour.price.toLocaleString('tr-TR')} ₺
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
