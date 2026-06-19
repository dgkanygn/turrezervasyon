import React from 'react';
import { useVendorDetail } from './hooks/useVendorDetail';
import VendorHeader from './components/VendorHeader';
import VendorSidebar from './components/VendorSidebar';
import VendorDescription from './components/VendorDescription';
import TourList from '../../tours/Tours/components/TourList';
import { FaSpinner } from 'react-icons/fa';

const VendorDetails = () => {
    const { vendor, tours, loading } = useVendorDetail();

    if (loading) {
        return (
            <div className="flex-1 min-h-[60vh] flex flex-col items-center justify-center p-8 bg-gray-50/50">
                <FaSpinner className="animate-spin text-[#c51f1f] text-5xl mb-4" />
                <p className="text-gray-500 font-medium text-lg">Acente bilgileri yükleniyor...</p>
            </div>
        );
    }

    if (!vendor) {
        return (
            <div className="flex-1 min-h-[60vh] flex items-center justify-center p-8 text-xl text-gray-500 font-medium tracking-wide">
                Acente bulunamadı.
            </div>
        );
    }

    return (
        <div className="bg-[#fcfaf9] min-h-screen py-10 md:py-16">
            <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-7xl">
                <VendorHeader vendor={vendor} />

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full mt-6">
                    {/* Left Side: Info & Tours */}
                    <div className="flex-1 flex flex-col">
                        <VendorDescription description={vendor.description} />

                        <div className="mt-4 mb-8">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">Acentenin Turları</h3>
                            <TourList tours={tours} />
                        </div>
                    </div>

                    {/* Right Side: Sidebar */}
                    <div className="w-full lg:w-[350px]">
                        <VendorSidebar vendor={vendor} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorDetails;