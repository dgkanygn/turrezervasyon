import React from 'react';
import { FaRocket, FaTicketAlt } from 'react-icons/fa';
import HeroSearch from './components/HeroSearch';

const Hero = () => {

    const content = {
        heroTitle: "Hayalinizdeki Seyahati Keşfedin",
        heroSubtitle: "Binlerce tur operatörü, yüzlerce destinasyon ve unutulmaz seyahat deneyimleri. Türkiye'nin en güvenilir tur rezervasyon platformu ile hayalinizdeki seyahati planlayın.",
        statsTours: "500+",
        statsToursLabel: "Aktif Tur",
        statsDestinations: "50+",
        statsDestinationsLabel: "Destinasyon",
        statsSupport: "24/7",
        statsSupportLabel: "Destek",
        buttons: {
            primary: "Hemen Rezervasyon Yap",
            secondary: "📖 Daha Fazla Bilgi"
        },
        badge: "Türkiye'nin En Büyük Tur Pazar Yeri",
    };

    return (
        <section className="py-20 md:py-24 relative bg-gradient-to-br from-[#c51f1f] to-red-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <div className="text-white text-left">
                            <div className="inline-flex items-center bg-white/20 px-5 py-2 rounded-full mb-8 text-sm font-medium tracking-wide border border-white/30 backdrop-blur-md">
                                <FaRocket className="mr-2 text-base" /> {content.badge}
                            </div>

                            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white tracking-tight">
                                {content.heroTitle}
                            </h1>

                            <p className="text-lg md:text-xl mb-10 text-white/90 font-normal leading-relaxed max-w-xl">
                                {content.heroSubtitle}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <button className="flex items-center bg-white border-none rounded-full px-8 py-4 text-sm md:text-lg font-bold text-[#c51f1f] shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] cursor-pointer">
                                    <FaTicketAlt className="mr-2 text-lg" /> {content.buttons.primary}
                                </button>

                                <button className="flex items-center bg-transparent border-2 border-white/80 rounded-full px-8 py-4 text-sm md:text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#c51f1f] hover:-translate-y-1 cursor-pointer">
                                    {content.buttons.secondary}
                                </button>
                            </div>

                            {/* İstatistikler */}
                            <div className="flex flex-wrap text-left items-center w-full max-w-lg bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20">
                                <div className="w-1/3 border-r border-white/20 last:border-0 pl-2">
                                    <div className="text-2xl font-black text-white mb-1">
                                        {content.statsTours}
                                    </div>
                                    <div className="text-xs md:text-sm text-white/80 font-medium tracking-wide">
                                        {content.statsToursLabel}
                                    </div>
                                </div>
                                <div className="w-1/3 border-r border-white/20 pl-6">
                                    <div className="text-2xl font-black text-white mb-1">
                                        {content.statsDestinations}
                                    </div>
                                    <div className="text-xs md:text-sm text-white/80 font-medium tracking-wide">
                                        {content.statsDestinationsLabel}
                                    </div>
                                </div>
                                <div className="w-1/3 pl-6">
                                    <div className="text-2xl font-black text-white mb-1">
                                        {content.statsSupport}
                                    </div>
                                    <div className="text-xs md:text-sm text-white/80 font-medium tracking-wide">
                                        {content.statsSupportLabel}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="mt-8 lg:mt-0 lg:ml-8 h-full flex items-center justify-center">
                            <HeroSearch />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
