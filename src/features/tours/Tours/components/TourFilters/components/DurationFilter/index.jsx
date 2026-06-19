import React from 'react';
import { MdCalendarToday } from 'react-icons/md';

const DurationFilter = ({ duration, onChange }) => {
    return (
        <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <MdCalendarToday className="text-gray-400" />
                Gün Sayısı
            </label>
            <div className="relative">
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Örn: 3"
                    min="1"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-[#c51f1f] focus:border-[#c51f1f] block p-3 transition-colors outline-none"
                />
                <span className="absolute right-4 top-3 text-gray-400 font-medium text-sm">Gün</span>
            </div>
        </div>
    );
};

export default DurationFilter;
