import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const TourHeader = ({ title, location }) => {
    return (
        <div className="mb-6 border-b pb-6 border-gray-200">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4 leading-tight">
                {title}
            </h1>
            <div className="flex items-center text-slate-500 font-medium">
                <FaMapMarkerAlt className="text-[#c51f1f] mr-2 text-lg" />
                <span className="text-lg">{location}</span>
            </div>
        </div>
    );
};

export default TourHeader;
