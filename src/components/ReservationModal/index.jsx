import React from 'react';
import { useReservationModal } from './hooks/useReservationModal';
import SummaryStage from './components/SummaryStage';
import PaymentStage from './components/PaymentStage';
import LoginPrompt from './components/LoginPrompt';
import { FaTimes, FaPassport } from 'react-icons/fa';

const ReservationModal = ({ isOpen, onClose, tour }) => {
    const {
        user,
        step,
        isLoading,
        handleContinue,
        handleBack
    } = useReservationModal(tour, onClose);

    if (!isOpen) return null;

    // If not logged in, show login prompt
    if (!user) {
        return (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-all duration-300">
                <LoginPrompt onClose={onClose} />
            </div>
        );
    }

    // Reservation flow for logged-in users
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-md transition-all duration-500 overflow-hidden">
            <div className="bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.3)] w-full max-w-lg h-[85vh] max-h-[800px] flex flex-col overflow-hidden transform scale-100 transition-all border border-gray-100 animate-scaleIn relative">
                
                {/* Visual Header Background */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-red-600 to-red-900 z-0 select-none pointer-events-none">
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                        <FaPassport size={240} className="rotate-12 translate-x-20" />
                    </div>
                </div>

                {/* Main Header */}
                <div className="relative z-10 p-8 flex justify-between items-center text-white">
                    <div>
                        <h3 className="text-3xl font-black tracking-tight drop-shadow-sm">Rezervasyon</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="w-8 h-1 bg-white/30 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-white transition-all duration-500" 
                                    style={{ width: step === 1 ? '50%' : '100%' }}
                                />
                            </div>
                            <span className="text-[10px] uppercase font-black tracking-widest opacity-70">
                                Adım {step} / 2
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all cursor-pointer border border-white/10 group focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                        <FaTimes className="group-hover:rotate-90 transition-transform" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="relative z-10 flex-1 bg-white rounded-t-[2.5rem] -mt-4 p-8 pt-10 flex flex-col shadow-[0_-20px_40px_rgba(0,0,0,0.05)] overflow-hidden">
                    {step === 1 ? (
                        <div className="animate-fadeIn h-full">
                            <SummaryStage 
                                tour={tour} 
                                onContinue={handleContinue} 
                                onCancel={onClose} 
                            />
                        </div>
                    ) : (
                        <div className="animate-fadeIn h-full">
                            <PaymentStage 
                                amount={tour.price}
                                onBack={handleBack} 
                                onComplete={handleContinue}
                                isLoading={isLoading}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReservationModal;
