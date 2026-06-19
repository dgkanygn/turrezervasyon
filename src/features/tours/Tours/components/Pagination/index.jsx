import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const getPages = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="flex justify-center items-center mt-12 gap-2">
            {/* Previous Button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-all ${currentPage === 1
                        ? 'bg-gray-50 text-gray-400 cursor-not-allowed border border-gray-100'
                        : 'bg-white text-gray-700 hover:bg-[#c51f1f] hover:text-white hover:shadow-lg hover:shadow-red-500/20 shadow-sm border border-gray-100'
                    }`}
            >
                <FaChevronLeft className="text-sm" />
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
                {getPages().map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all disabled:opacity-50 cursor-pointer ${currentPage === page
                                ? 'bg-[#c51f1f] text-white shadow-lg shadow-red-500/30 border border-red-600'
                                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-100'
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-all ${currentPage === totalPages
                        ? 'bg-gray-50 text-gray-400 cursor-not-allowed border border-gray-100'
                        : 'bg-white text-gray-700 hover:bg-[#c51f1f] hover:text-white hover:shadow-lg hover:shadow-red-500/20 shadow-sm border border-gray-100'
                    }`}
            >
                <FaChevronRight className="text-sm" />
            </button>
        </div>
    );
};

export default Pagination;
