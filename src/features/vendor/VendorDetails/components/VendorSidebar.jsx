import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';

const VendorSidebar = ({ vendor }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                İletişim Bilgileri
            </h3>

            <div className="space-y-5">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="text-[#c51f1f]" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">E-posta</p>
                        <p className="text-gray-900 font-medium text-sm break-all">{vendor.email}</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <FaPhoneAlt className="text-[#c51f1f]" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Telefon</p>
                        <p className="text-gray-900 font-medium text-sm">{vendor.phone}</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <FaCalendarCheck className="text-[#c51f1f]" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Üyelik Tarihi</p>
                        <p className="text-gray-900 font-medium text-sm">{vendor.joinDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorSidebar;
