import React from 'react';
import { MdOutlineAttachMoney } from 'react-icons/md';

const PriceFilter = ({ maxPrice, onChange }) => {
    return (
        <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <MdOutlineAttachMoney className="text-gray-400" />
                Maksimum Fiyat
            </label>
            <div className="relative">
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Örn: 5000"
                    min="0"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-[#c51f1f] focus:border-[#c51f1f] block p-3 transition-colors outline-none"
                />
                <span className="absolute right-4 top-3 text-gray-400 font-medium text-sm">TL</span>
            </div>
        </div>
    );
};

export default PriceFilter;
