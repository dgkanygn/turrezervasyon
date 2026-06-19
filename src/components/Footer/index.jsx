import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { BASE_URL } from '../../App';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone, HiPrinter } from 'react-icons/hi';

export const Footer = () => {
    const [dbContent, setDbContent] = useState(null)

    const defaultContent = {
        socialMediaTitle: "Sosyal medyada bizimle bağlantı kurun:",
        socialMediaSubtitle: "En son haberler, kampanyalar ve seyahat ipuçları için bizi takip edin",
        footerDescription: "Türkiye'nin ilk çok satıcılı seyahat platformu. Bugün kayıt olun ve işletmenizin değerini kesintisiz hizmetlerimizle artırın.",
        footerAddress: "İstanbul, Türkiye",
        footerEmail: "info@turrezervasyon.com",
        footerPhone1: "+90 212 555 0123",
        footerPhone2: "+90 212 555 0124",
        copyright: "© 2024 Telif Hakkı: turrezervasyon.com. Tüm hakları saklıdır.",
        links: {
            tours: [
                { name: "Tur Rezervasyonu", path: "/Tours" },
                { name: "Müşteri Geri Bildirimi", path: "/Contact-Us" },
                { name: "Sorun Bildir", path: "/user-Complain-form" },
                { name: "Hakkımızda", path: "/About" }
            ],
            business: [
                { name: "Bize Katılın", path: "/vendor-signup" },
                { name: "Acente Portal", path: "/vendor-signin" },
                { name: "Şikayet", path: "/user-Complain-form" },
                { name: "Hakkımızda", path: "/About" }
            ],
            bottom: [
                { name: "Hakkımızda", path: "/About" },
                { name: "İletişim", path: "/Contact-Us" },
                { name: "Turlar", path: "/Tours" }
            ]
        }
    };

    // useEffect(() => {
    //     fetchFooterContent()
    // }, [])

    const fetchFooterContent = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/Admin/Homepage-Content/Display`)
            setDbContent(response.data)
        } catch (error) {
            console.error('Footer içerikleri yüklenirken hata:', error)
        }
    }

    const content = { ...defaultContent, ...dbContent };

    return (
        <footer className="bg-white border-t border-gray-200">
            {/* Üst Footer - Sosyal Medya */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 py-8 text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
                            <h5 className="font-semibold mb-2 text-lg">
                                {content.socialMediaTitle}
                            </h5>
                            <p className="m-0 opacity-90 text-[0.95rem]">
                                {content.socialMediaSubtitle}
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end gap-4">
                            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="inline-flex items-center justify-center w-11 h-11 bg-white/20 rounded-full text-white no-underline hover:no-underline transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 text-xl">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Ana Footer */}
            <div className="bg-gradient-to-br from-red-800 to-red-900 pt-16 pb-8 text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
                    <div className="flex flex-wrap -mx-4">
                        {/* Hakkımızda */}
                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                            <h5 className="text-white font-bold mb-5 text-lg">TURREZERVASYON.COM</h5>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                {content.footerDescription}
                            </p>
                            <div className="flex gap-2.5">
                                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Turlar */}
                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                            <h5 className="text-white font-bold mb-5 text-lg">TURLAR</h5>
                            <ul className="list-none p-0 m-0">
                                {content.links.tours.map((link, idx) => (
                                    <li key={idx} className="mb-3">
                                        <Link to={link.path} className="text-gray-400 no-underline hover:no-underline text-sm transition-colors duration-300 hover:text-red-500">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* İşletme Geliştirme */}
                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                            <h5 className="text-white font-bold mb-5 text-lg">İŞLETMENİZİ GELİŞTİRİN</h5>
                            <ul className="list-none p-0 m-0">
                                {content.links.business.map((link, idx) => (
                                    <li key={idx} className="mb-3">
                                        <Link to={link.path} className="text-gray-400 no-underline hover:no-underline text-sm transition-colors duration-300 hover:text-red-500">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* İletişim */}
                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                            <h5 className="text-white font-bold mb-5 text-lg">İLETİŞİM</h5>
                            <div className="text-gray-400 text-sm leading-relaxed">
                                <div className="flex items-center mb-3">
                                    <HiLocationMarker className="text-red-600 mr-2.5 text-lg" />
                                    <span>{content.footerAddress}</span>
                                </div>
                                <div className="flex items-center mb-3">
                                    <HiMail className="text-red-600 mr-2.5 text-lg" />
                                    <span>{content.footerEmail}</span>
                                </div>
                                <div className="flex items-center mb-3">
                                    <HiPhone className="text-red-600 mr-2.5 text-lg" />
                                    <span>{content.footerPhone1}</span>
                                </div>
                                <div className="flex items-center mb-3">
                                    <HiPrinter className="text-red-600 mr-2.5 text-lg" />
                                    <span>{content.footerPhone2}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alt Çizgi */}
                    <div className="border-t border-red-600 mt-10 pt-8">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                                <p className="text-gray-400 m-0 text-sm">
                                    {content.copyright}
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-center md:justify-end gap-5">
                                {content.links.bottom.map((link, idx) => (
                                    <Link key={idx} to={link.path} className="text-gray-400 no-underline hover:no-underline text-sm transition-colors duration-300 hover:text-red-500">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
