import React from 'react';
import { FaBuilding } from 'react-icons/fa';

const VendorHeader = ({ vendor }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="px-6 md:px-10 py-8 relative">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-gray-100 shadow-md bg-gray-50 flex items-center justify-center relative z-10">
                        <FaBuilding className="text-gray-400 w-12 h-12 md:w-16 md:h-16" />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-black text-gray-900">{vendor.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorHeader;
