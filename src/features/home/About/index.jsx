import React from 'react';
import { FaGlobe, FaPlane, FaDollarSign, FaMapMarkerAlt, FaRocket, FaBullseye, FaChartBar } from 'react-icons/fa';

const About = () => {
    const content = {
        hero: {
            title: "Neden turrezervasyon.com?",
            subtitle: "Türkiye'nin en güvenilir ve kapsamlı seyahat platformu"
        },
        features: [
            {
                id: 1,
                icon: FaGlobe,
                title: "🌍 Geniş Destinasyon",
                description: "Türkiye'nin her köşesine ulaşım sağlıyoruz. İstanbul'dan Van'a, Antalya'dan Trabzon'a kadar tüm rotalar."
            },
            {
                id: 2,
                icon: FaPlane,
                title: "Güvenli Seyahat",
                titleIcon: FaPlane,
                description: "Lisanslı firmalarla çalışıyor, tüm araçlarımız sigortalı ve denetimli. Güvenliğiniz bizim önceliğimiz."
            },
            {
                id: 3,
                icon: FaDollarSign,
                title: "💰 Uygun Fiyat",
                description: "En uygun fiyatlarla kaliteli hizmet sunuyoruz. Özel kampanyalar ve indirimlerle bütçenize uygun seyahat."
            },
            {
                id: 4,
                icon: FaMapMarkerAlt,
                title: "Kolay Rezervasyon",
                titleIcon: FaBullseye,
                description: "Tek tıkla rezervasyon yapın. Mobil uygulamamızla her yerden erişim. 7/24 müşteri desteği."
            }
        ],
        stats: {
            title: "Rakamlarla Biz",
            subtitle: "Başarılarımızı rakamlarla anlatıyoruz",
            items: [
                { number: "50K+", label: "Mutlu Müşteri" },
                { number: "100+", label: "Destinasyon" },
                { number: "24/7", label: "Müşteri Desteği" },
                { number: "5 Yıl", label: "Deneyim" }
            ]
        }
    };

    return (
        <div className="bg-white min-h-screen relative">
            <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-24 relative overflow-hidden">
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
                ></div>

                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 relative z-10">
                    <div className="text-center mb-16 shadow-sm">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg flex items-center justify-center gap-3">
                            <FaRocket className="text-3xl" /> {content.hero.title}
                        </h2>
                        <p className="text-red-100 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                            {content.hero.subtitle}
                        </p>
                    </div>

                    <div className="flex flex-wrap -mx-4 justify-center">
                        {content.features.map((feature) => (
                            <div key={feature.id} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white/20 hover:shadow-[0_20px_40px_rgba(220,38,38,0.3)] hover:border-white/40 group">
                                    <div className="text-5xl text-white mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 flex justify-center drop-shadow-md">
                                        <feature.icon />
                                    </div>
                                    <h4 className="text-white text-xl font-bold mb-4 flex items-center justify-center gap-2 drop-shadow-md">
                                        {feature.titleIcon && <feature.titleIcon className="text-xl" />}
                                        {feature.title}
                                    </h4>
                                    <p className="text-red-50 text-base leading-relaxed m-0 font-medium opacity-90">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* İstatistikler Bölümü */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-gray-800 text-4xl font-bold mb-5 flex items-center justify-center gap-3">
                            <FaChartBar className="text-red-600" /> {content.stats.title}
                        </h2>
                        <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">
                            {content.stats.subtitle}
                        </p>
                    </div>

                    <div className="flex flex-wrap -mx-4">
                        {content.stats.items.map((stat, index) => (
                            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                                <div className="bg-white rounded-3xl py-10 px-6 text-center shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                                    <div className="text-5xl font-extrabold bg-gradient-to-br from-red-600 to-red-800 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                                        {stat.number}
                                    </div>
                                    <div className="text-lg text-gray-600 font-bold uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
