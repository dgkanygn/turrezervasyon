import React from 'react';
import TourFilters from './components/TourFilters';
import TourList from './components/TourList';
import Pagination from './components/Pagination';
import { useTours } from './hooks/useTours';

const Tours = () => {
    const {
        tours,
        filters,
        applyFilters,
        clearFilters,
        currentPage,
        totalPages,
        handlePageChange,
        totalItems
    } = useTours();

    console.log(tours);

    return (
        <div className="bg-gray-50/50 min-h-screen pt-8 pb-16">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Header Section */}
                <div className="mb-10 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
                        Keşfetmeye <span className="text-[#c51f1f]">Hazır mısın?</span>
                    </h1>
                    <p className="text-gray-500 text-lg">
                        En popüler rotalar, unutulmaz deneyimler. Sana en uygun turu bul ve maceraya başla.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 relative items-start">
                    {/* Left Sidebar - Filters */}
                    <div className="w-full lg:w-1/4 flex-shrink-0">
                        <TourFilters
                            currentFilters={filters}
                            onApplyFilters={applyFilters}
                            onClearFilters={clearFilters}
                        />
                    </div>

                    {/* Right Content - Tour List */}
                    <div className="w-full lg:w-3/4 flex flex-col">
                        <div className="mb-6 flex justify-between items-center bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
                            <span className="text-gray-600 font-medium">
                                Toplam <span className="font-bold text-gray-900">{totalItems}</span> tur bulundu
                            </span>
                        </div>

                        <TourList tours={tours} />

                        <div className="mt-8">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tours;