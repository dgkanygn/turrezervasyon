import React, { useState } from 'react';
import { useTourDetail } from './hooks/useTourDetail';
import ImageGallery from './components/ImageGallery';
import TourHeader from './components/TourHeader';
import TourInfoSidebar from './components/TourInfoSidebar';
import TourDescription from './components/TourDescription';
import TourItinerary from './components/TourItinerary';
import TourIncludesExcludes from './components/TourIncludesExcludes';
import { FaSpinner } from 'react-icons/fa';
import ReservationModal from '../../../components/ReservationModal';
import calculateTotalDays from '../../../helpers/calculateTotalDays';

const TourDetails = () => {
    const { tour, loading } = useTourDetail();
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(tour);

    if (loading) {
        return (
            <div className="flex-1 min-h-[60vh] flex flex-col items-center justify-center p-8 bg-gray-50/50">
                <FaSpinner className="animate-spin text-[#c51f1f] text-5xl mb-4" />
                <p className="text-gray-500 font-medium text-lg">Tur detayları yükleniyor...</p>
            </div>
        );
    }

    if (!tour) {
        return (
            <div className="flex-1 min-h-[60vh] flex items-center justify-center p-8 text-xl text-gray-500 font-medium tracking-wide">
                Tur bulunamadı.
            </div>
        );
    }

    return (
        <div className="bg-[#fcfaf9] min-h-screen py-10 md:py-16">
            <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-7xl">

                {/* Header Information (Title & Location) */}
                <TourHeader title={tour.title} location={tour.location} />

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full mt-6">
                    {/* Left Side: Images & Description & Itinerary */}
                    <div className="flex-1">
                        <ImageGallery images={tour.images} />
                        <TourDescription description={tour.description} />
                        <TourIncludesExcludes included={tour.included} excluded={tour.excluded} />
                        <TourItinerary itinerary={tour.itinerary} />
                    </div>

                    {/* Right Side: Tour Info Sidebar */}
                    <div className="w-full lg:w-[400px] xl:w-[450px]">
                        <TourInfoSidebar
                            price={tour.price}
                            date={tour.date}
                            time={tour.time}
                            capacity={tour.capacity}
                            occupied={tour.occupied}
                            duration={calculateTotalDays(tour.startDate, tour.endDate)}
                            vendorEmail={tour.vendorEmail}
                            vehicleType={tour.vehicleType}
                            onReserve={() => setIsModalOpen(true)}
                        />
                    </div>
                </div>

                <ReservationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    tour={tour}
                />
            </div>
        </div>
    );
};

export default TourDetails;