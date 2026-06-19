import React from 'react';

const VendorDescription = ({ description }) => {
    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Hakkında</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
                {description}
            </p>
        </div>
    );
};

export default VendorDescription;
