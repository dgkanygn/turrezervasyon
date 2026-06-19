import React from 'react';
import TourCard from '../../../../../components/TourCard';

const TourList = ({ tours }) => {
    if (tours.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-24 h-24 mb-6 text-gray-200">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11 2a9 9 0 100 18 9 9 0 000-18zM3 11a8 8 0 1114.32 4.906l5.387 5.387-1.414 1.414-5.387-5.387A8 8 0 013 11z"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tur Bulunamadı</h3>
                <p className="text-gray-500 text-center max-w-md">
                    Arama kriterlerinize uygun tur bulunamamıştır. Lütfen filtrelerinizi değiştirerek tekrar deneyin.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {tours.map(tour => (
                <TourCard
                    key={tour.id}
                    tour={tour}
                />
            ))}
        </div>
    );
};

export default TourList;
