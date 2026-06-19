import React from 'react';
import {
    FaCalendarAlt,
    FaRegClock,
    FaUsers,
    FaEnvelope,
    FaCarSide,
    FaTicketAlt
} from 'react-icons/fa';
import { MdOutlineTimer } from 'react-icons/md';

const TourInfoSidebar = ({
    price,
    date,
    time,
    capacity,
    occupied,
    duration,
    vendorEmail,
    vehicleType,
    onReserve
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 md:p-8 border border-gray-100 sticky top-8">
            {/* Fiyat Alanı */}
            <div className="mb-6 pb-6 border-b border-gray-100 text-center md:text-left">
                <span className="text-gray-500 font-medium block mb-1">Kişi Başı Fiyat</span>
                <div className="text-4xl font-extrabold text-[#c51f1f]">
                    ₺{price?.toLocaleString('tr-TR')}
                </div>
            </div>

            {/* Tur Detay Listesi */}
            <div className="space-y-5 mb-8">
                <div className="flex items-center text-gray-700">
                    <div className="bg-red-50 p-3 rounded-full mr-4 text-[#c51f1f]">
                        <FaCalendarAlt className="text-xl" />
                    </div>
                    <div>
                        <span className="block text-sm text-gray-400 font-medium">Tarih</span>
                        <span className="font-semibold text-gray-800">{date}</span>
                    </div>
                </div>

                <div className="flex items-center text-gray-700">
                    <div className="bg-red-50 p-3 rounded-full mr-4 text-[#c51f1f]">
                        <FaRegClock className="text-xl" />
                    </div>
                    <div>
                        <span className="block text-sm text-gray-400 font-medium">Saat</span>
                        <span className="font-semibold text-gray-800">{time}</span>
                    </div>
                </div>

                {duration && (
                    <div className="flex items-center text-gray-700">
                        <div className="bg-red-50 p-3 rounded-full mr-4 text-[#c51f1f]">
                            <MdOutlineTimer className="text-xl" />
                        </div>
                        <div>
                            <span className="block text-sm text-gray-400 font-medium">Süre</span>
                            <span className="font-semibold text-gray-800">{duration}</span>
                        </div>
                    </div>
                )}

                <div className="flex items-center text-gray-700">
                    <div className="bg-red-50 p-3 rounded-full mr-4 text-[#c51f1f]">
                        <FaUsers className="text-xl" />
                    </div>
                    <div>
                        <span className="block text-sm text-gray-400 font-medium">Doluluk</span>
                        <span className="font-semibold text-gray-800">
                            {occupied !== undefined && capacity !== undefined ? `${occupied}/${capacity}` : '-'}
                        </span>
                    </div>
                </div>

                <div className="flex items-center text-gray-700">
                    <div className="bg-red-50 p-3 rounded-full mr-4 text-[#c51f1f]">
                        <FaCarSide className="text-xl" />
                    </div>
                    <div>
                        <span className="block text-sm text-gray-400 font-medium">Araç Tipi</span>
                        <span className="font-semibold text-gray-800">{vehicleType}</span>
                    </div>
                </div>

                <div className="flex items-center text-gray-700">
                    <div className="bg-red-50 p-3 rounded-full mr-4 text-[#c51f1f]">
                        <FaEnvelope className="text-xl" />
                    </div>
                    <div className="overflow-hidden">
                        <span className="block text-sm text-gray-400 font-medium">Acente İletişim</span>
                        <a href={`mailto:${vendorEmail}`} className="font-semibold text-gray-800 hover:text-[#c51f1f] transition-colors truncate block cursor-pointer">
                            {vendorEmail}
                        </a>
                    </div>
                </div>
            </div>

            {/* Rezervasyon Butonu */}
            <button 
                onClick={onReserve}
                className="w-full bg-[#c51f1f] text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center shadow-[0_5px_15px_rgba(197,31,31,0.3)] hover:bg-red-800 hover:shadow-[0_8px_25px_rgba(197,31,31,0.4)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
                <FaTicketAlt className="mr-2" />
                Hemen Rezervasyon Yap
            </button>
            <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
                7/24 ücretsiz iptal imkanı.
                <br />
                Kredi kartsız ön rezervasyon yapabilirsiniz.
            </p>
        </div>
    );
};

export default TourInfoSidebar;

