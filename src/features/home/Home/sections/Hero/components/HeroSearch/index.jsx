import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaSearch } from 'react-icons/fa';

const HeroSearch = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const [duration, setDuration] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        
        const params = new URLSearchParams();
        if (location) params.append('location', location);
        if (duration) params.append('duration', duration);
        if (maxPrice) params.append('max_price', maxPrice);

        navigate(`/tours?${params.toString()}`);
    };

    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Turunuzu Bulun
            </h3>
            
            <form onSubmit={handleSearch} className="space-y-5">
                {/* Location */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Gidilecek Şehir</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaMapMarkerAlt className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Örn: Kapadokya, İzmir..."
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#c51f1f]/20 focus:border-[#c51f1f] transition-all outline-none"
                        />
                    </div>
                </div>

                {/* Duration */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Süre (Gün)</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaCalendarAlt className="text-gray-400" />
                        </div>
                        <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#c51f1f]/20 focus:border-[#c51f1f] transition-all outline-none appearance-none"
                        >
                            <option value="">Farketmez</option>
                            <option value="1">1 Gün</option>
                            <option value="2">2 Gün</option>
                            <option value="3">3 Gün</option>
                            <option value="4">4 Gün</option>
                            <option value="5">5 Gün</option>
                            <option value="6">6 Gün</option>
                            <option value="7">7 Gün</option>
                        </select>
                    </div>
                </div>

                {/* Max Price */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Maksimum Fiyat (₺)</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaMoneyBillWave className="text-gray-400" />
                        </div>
                        <input
                            type="number"
                            placeholder="Örn: 5000"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#c51f1f]/20 focus:border-[#c51f1f] transition-all outline-none"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#c51f1f] text-white py-4 rounded-xl font-bold text-base mt-4 flex justify-center items-center shadow-[0_5px_15px_rgba(197,31,31,0.3)] hover:bg-red-800 hover:shadow-[0_8px_25px_rgba(197,31,31,0.4)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                    <FaSearch className="mr-2" />
                    Turları Ara
                </button>
            </form>
        </div>
    );
};

export default HeroSearch;
