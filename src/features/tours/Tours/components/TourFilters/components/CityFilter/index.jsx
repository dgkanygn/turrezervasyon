import React, { useState, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import CITIES from '../../../../../../../contants/cities';

const CityFilter = ({ selectedCities, onChange }) => {
    const [citySearch, setCitySearch] = useState('');

    const filteredCities = useMemo(() => {
        return CITIES.filter(city =>
            city.name.toLowerCase().includes(citySearch.toLowerCase())
        );
    }, [citySearch]);

    const handleCityToggle = (cityName) => {
        if (selectedCities.includes(cityName)) {
            onChange(selectedCities.filter(c => c !== cityName));
        } else {
            onChange([...selectedCities, cityName]);
        }
    };

    return (
        <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FaSearch className="text-gray-400" />
                Şehirler
            </label>
            <div className="relative mb-3">
                <input
                    type="text"
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                    placeholder="Şehir Ara..."
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-[#c51f1f] focus:border-[#c51f1f] block p-3 transition-colors outline-none"
                />
            </div>

            <div className="max-h-48 overflow-y-auto pr-2 custom-scrollbar space-y-1">
                {filteredCities.map(city => {
                    const isSelected = selectedCities.includes(city.name);
                    return (
                        <div
                            key={city.id}
                            onClick={() => handleCityToggle(city.name)}
                            className={`px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm font-medium flex items-center justify-between
                                ${isSelected
                                    ? 'bg-red-50 text-[#c51f1f] border border-red-100'
                                    : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                                }`}
                        >
                            <span>{city.name}</span>
                            <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${isSelected ? 'bg-[#c51f1f] border-[#c51f1f]' : 'border-gray-300'}`}>
                                {isSelected && (
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    );
                })}
                {filteredCities.length === 0 && (
                    <div className="text-sm text-gray-500 text-center py-4">
                        Şehir bulunamadı.
                    </div>
                )}
            </div>
            {selectedCities.length > 0 && (
                <div className="mt-2 text-xs text-gray-500 font-medium">
                    {selectedCities.length} şehir seçildi
                </div>
            )}
        </div>
    );
};

export default CityFilter;
