import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const TourIncludesExcludes = ({ included, excluded }) => {
    const hasIncluded = included && included.length > 0;
    const hasExcluded = excluded && excluded.length > 0;

    if (!hasIncluded && !hasExcluded) return null;

    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 mt-8 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Included */}
            {hasIncluded && (
                <div>
                    <h2 className="text-xl font-bold mb-4 text-slate-800 flex items-center border-b pb-2">
                        <FaCheckCircle className="text-green-500 mr-2" /> Programa Dahil Olanlar
                    </h2>
                    <ul className="space-y-3">
                        {included.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-slate-600">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Excluded */}
            {hasExcluded && (
                <div>
                    <h2 className="text-xl font-bold mb-4 text-slate-800 flex items-center border-b pb-2">
                        <FaTimesCircle className="text-[#c51f1f] mr-2" /> Programa Dahil Olmayanlar
                    </h2>
                    <ul className="space-y-3">
                        {excluded.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <FaTimesCircle className="text-[#c51f1f] mt-1 mr-3 flex-shrink-0" />
                                <span className="text-slate-600">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
};

export default TourIncludesExcludes;
