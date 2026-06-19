import React from 'react';

const TourDescription = ({ description }) => {
    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 mt-10 text-gray-700 leading-relaxed min-h-[150px] shadow-sm border border-gray-100 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">Tur Hakkında Açıklama</h2>
            <div className="text-lg text-slate-600 font-normal">
                {description}
            </div>
        </div>
    );
};

export default TourDescription;
