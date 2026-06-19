import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaInfoCircle } from 'react-icons/fa';
import { MdAccessTime, MdOutlineTimer } from 'react-icons/md';
import { RiTicket2Line } from 'react-icons/ri';
import ReservationModal from '../ReservationModal';
import calculateTotalDays from '../../helpers/calculateTotalDays';

const TourCard = ({ tour }) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!tour) return null;

    const { id, title, location, price, startDate, endDate, images, capacity, occupied } = tour;
    const image = images && images.length > 0 ? images[0] : '';
    
    const duration = calculateTotalDays(startDate, endDate);
    
    let date = '';
    let time = '';
    if (startDate) {
        const dateObj = new Date(startDate.replace(' ', 'T'));
        date = dateObj.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
        time = dateObj.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    }

    const formattedPrice = typeof price === 'number' ? price.toLocaleString('tr-TR') : price;

    return (
        <>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col h-full transform hover:-translate-y-1">
                {/* Image Section */}
                <div onClick={() => navigate(`/tours/${id}`)} className="relative h-60 overflow-hidden cursor-pointer">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-2xl text-[15px] font-black text-[#c51f1f] shadow-lg flex items-center gap-1.5 border border-white/50">
                        <RiTicket2Line className="text-lg" />
                        {formattedPrice} ₺
                    </div>
                    {/* Location Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg inline-flex items-center text-white text-xs font-medium max-w-full">
                            <FaMapMarkerAlt className="text-red-400 mr-2 flex-shrink-0" />
                            <span className="truncate">{location}</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-grow">
                    <div onClick={() => navigate(`/tours/${id}`)} className="cursor-pointer mb-4">
                        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 leading-tight group-hover:text-[#c51f1f] transition-colors">
                            {title}
                        </h3>
                    </div>

                    {/* Info Rows */}
                    <div className="space-y-2 mb-6 mt-auto">
                        <div className="flex items-center justify-between text-[13px] font-medium text-gray-700 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100/50">
                            <div className="flex items-center">
                                <FaCalendarAlt className="text-[#c51f1f] mr-2.5 text-sm opacity-90" />
                                <span>{date || 'Belirtilmedi'}</span>
                            </div>
                            <div className="flex items-center">
                                <MdAccessTime className="text-gray-400 mr-1.5 text-base" />
                                <span>{time || 'Belirtilmedi'}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-[13px] font-medium text-gray-700 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100/50">
                            <div className="flex items-center">
                                <MdOutlineTimer className="text-[#c51f1f] mr-2.5 text-base opacity-90" />
                                <span className="truncate">{duration}</span>
                            </div>
                            <div className="flex items-center">
                                <FaUsers className="text-gray-400 mr-2" />
                                <span>{occupied !== undefined && capacity !== undefined ? `${occupied}/${capacity}` : '-'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto">
                        <button
                            onClick={() => navigate(`/tours/${id}`)}
                            className="flex-1 py-3 px-2 bg-gray-50 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-100 hover:text-[#c51f1f] border border-gray-200 transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
                        >
                            <FaInfoCircle className="text-gray-400 group-hover/btn:text-[#c51f1f] transition-colors" />
                            Detay
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex-1 py-3 px-2 bg-[#c51f1f] text-white rounded-xl font-bold text-sm hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30 transition-all transform active:scale-95 cursor-pointer flex items-center justify-center gap-2 shadow-sm border border-red-600"
                        >
                            Rezervasyon
                        </button>
                    </div>
                </div>
            </div>

            <ReservationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                tour={tour}
            />
        </>
    );
};

export default TourCard;

