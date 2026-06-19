import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaTimes, FaGlobeAmericas } from 'react-icons/fa';
import { MdCardTravel } from 'react-icons/md';

const LoginPrompt = ({ onClose }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden transform scale-100 transition-all border border-gray-100 relative animate-scaleIn">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer z-50 ring-1 ring-white/10"
            >
                <FaTimes size={18} />
            </button>

            {/* Header Graphic */}
            <div className="bg-gradient-to-br from-[#c11b1b] via-[#d32f2f] to-[#b71c1c] px-8 py-14 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 text-white/10 pointer-events-none rotate-12 transition-transform duration-1000 group-hover:rotate-45">
                    <FaGlobeAmericas size={220} />
                </div>
                <div className="relative z-10 flex justify-center mb-6">
                    <div className="bg-white/15 p-5 rounded-full backdrop-blur-md border border-white/25 shadow-2xl ring-4 ring-white/5">
                        <MdCardTravel className="text-white text-5xl drop-shadow-lg" />
                    </div>
                </div>
                <h3 className="text-3xl font-black text-white relative z-10 tracking-tight drop-shadow-md mb-2">
                    Giriş Yapın
                </h3>
                <p className="text-red-50/70 text-base relative z-10 font-semibold max-w-[240px] mx-auto leading-tight italic">
                    Rezervasyon yapmak için hesabınıza devam edin
                </p>
            </div>

            {/* Body Content */}
            <div className="p-10 px-8 pb-12 bg-white">
                <div className="space-y-5">
                    <button
                        onClick={() => {
                            onClose();
                            navigate('/user-signin');
                        }}
                        className="w-full flex items-center justify-center gap-4 px-8 py-5 bg-gray-950 text-white rounded-[1.5rem] font-bold hover:bg-gray-800 hover:shadow-2xl hover:shadow-black/20 transition-all transform active:scale-[0.97] cursor-pointer group relative overflow-hidden border border-gray-100/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span className="text-lg">Giriş Yap</span>
                    </button>
                    <button
                        onClick={() => {
                            onClose();
                            navigate('/user-signup');
                        }}
                        className="w-full flex items-center justify-center gap-4 px-8 py-5 bg-white border-2 border-gray-100 text-gray-800 rounded-[1.5rem] font-bold hover:border-red-200 hover:bg-red-50/30 hover:text-red-600 transition-all transform active:scale-[0.97] cursor-pointer group shadow-sm hover:shadow-md"
                    >
                        <span className="text-lg">Kaydol</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPrompt;
