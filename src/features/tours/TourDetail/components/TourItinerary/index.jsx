import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const TourItinerary = ({ itinerary }) => {
    // İlk günün açık gelmesi için default değeri 0 verebilirsiniz
    const [openIndex, setOpenIndex] = useState(0);

    if (!itinerary || itinerary.length === 0) return null;

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 mt-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Tur Programı</h2>
            <div className="space-y-4">
                {itinerary.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md ring-1 ring-red-100' : 'hover:border-red-200 hover:shadow-sm'}`}
                        >
                            {/* Accordion Header */}
                            <div
                                onClick={() => toggleAccordion(index)}
                                className={`flex items-center justify-between p-5 cursor-pointer transition-colors ${isOpen ? 'bg-red-50/50' : 'bg-white'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="bg-[#c51f1f] text-white px-3 py-1 rounded-lg text-sm font-bold shadow-sm">
                                        {item.day}. Gün
                                    </span>
                                </div>
                                <div className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#c51f1f]' : ''}`}>
                                    <FaChevronDown />
                                </div>
                            </div>

                            {/* Accordion Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                            >
                                <div className="p-5 pt-2 border-t border-gray-100 bg-white">
                                    <p className="text-slate-600 leading-relaxed text-[15px]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TourItinerary;
