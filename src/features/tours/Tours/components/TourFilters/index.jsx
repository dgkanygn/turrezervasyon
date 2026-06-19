import React, { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';
import CityFilter from './components/CityFilter';
import DurationFilter from './components/DurationFilter';
import PriceFilter from './components/PriceFilter';

const TourFilters = ({ currentFilters, onApplyFilters, onClearFilters }) => {
    // Local state for the form before applying
    const [localFilters, setLocalFilters] = useState(currentFilters);

    // Sync if external filters change (like after clearing)
    useEffect(() => {
        setLocalFilters(currentFilters);
    }, [currentFilters]);

    const handleApply = () => {
        onApplyFilters(localFilters);
    };

    const handleClear = () => {
        onClearFilters();
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                <FaFilter className="text-[#c51f1f]" />
                <h2 className="text-xl font-bold text-gray-800">Filtreler</h2>
            </div>

            {/* Şehir Filtresi */}
            <CityFilter
                selectedCities={localFilters.locations}
                onChange={(locs) => setLocalFilters(prev => ({ ...prev, locations: locs }))}
            />

            {/* Gün Sayısı Filtresi */}
            <DurationFilter
                duration={localFilters.duration}
                onChange={(val) => setLocalFilters(prev => ({ ...prev, duration: val }))}
            />

            {/* Maksimum Fiyat Filtresi */}
            <PriceFilter
                maxPrice={localFilters.maxPrice}
                onChange={(val) => setLocalFilters(prev => ({ ...prev, maxPrice: val }))}
            />

            <div className="flex flex-col gap-3 mt-6">
                <button
                    onClick={handleApply}
                    className="w-full py-3 bg-[#c51f1f] text-white rounded-xl font-bold text-sm hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30 transition-all transform active:scale-95 cursor-pointer shadow-sm border border-red-600"
                >
                    Filtrele
                </button>
                <button
                    onClick={handleClear}
                    className="w-full py-2.5 text-sm font-bold text-gray-500 hover:text-[#c51f1f] transition-colors cursor-pointer"
                >
                    Filtreleri Temizle
                </button>
            </div>

            <style jsx="true">{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af;
                }
            `}</style>
        </div>
    );
};

export default TourFilters;
