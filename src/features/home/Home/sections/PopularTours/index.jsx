import React from 'react';
import TourCard from '@/components/TourCard';
import toursData from '@/data/tours.json';

const PopularTours = () => {

    const content = {
        popularTours: {
            title: "Popüler Turlar",
            subtitle: "En çok tercih edilen destinasyonlarımızı keşfedin"
        }
    }

    return (
        <section className="py-20 md:py-28 relative bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-[#c51f1f] text-sm font-bold tracking-widest uppercase mb-3">
                        Öne Çıkanlar
                    </h2>
                    <h3 className="text-gray-900 text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        {content.popularTours.title}
                    </h3>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {content.popularTours.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {toursData.map((tour) => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-white border-2 border-gray-200 text-gray-700 hover:border-[#c51f1f] hover:text-[#c51f1f] py-4 px-10 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-lg inline-flex items-center group">
                        Tüm Turları Gör
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PopularTours;

