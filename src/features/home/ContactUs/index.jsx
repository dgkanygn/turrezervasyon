import React, { useRef } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import { BiMessageSquareDetail } from 'react-icons/bi';

const ContactUs = () => {
    const form = useRef();

    const content = {
        hero: {
            title: "Bizimle İletişime Geçin",
            description: "turrezervasyon.com olarak mükemmel seyahat deneyimleri sunmaya kararlıyız. Sorularınız, önerileriniz veya işbirliği talepleriniz için bizimle iletişime geçin."
        },
        contactInfo: [
            { id: 1, title: "Adres", detail: "İstanbul, Türkiye", icon: HiLocationMarker },
            { id: 2, title: "Telefon", detail: "+90 (212) 555-0123", icon: BsPhone },
            { id: 3, title: "Email", detail: "info@turrezervasyon.com", icon: BiMessageSquareDetail },
            { id: 4, title: "Çalışma Saatleri", detail: "7/24 Hizmet", icon: () => <span className="text-white text-2xl" role="img" aria-label="clock">⏰</span> }
        ],
        form: {
            title: "📧 Mesaj Gönderin",
            nameLabel: "Ad Soyad",
            namePlaceholder: "Adınız ve soyadınız",
            emailLabel: "Email Adresi",
            emailPlaceholder: "ornek@email.com",
            messageLabel: "Mesajınız",
            messagePlaceholder: "Mesajınızı buraya yazın...",
            submitButton: "📤 Mesaj Gönder"
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (!name || !email || !message) {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Lütfen geçerli bir email adresi girin.');
            return;
        }

        alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        form.current.reset();
    };

    return (
        <div className="bg-white min-h-screen relative">
            <div className="bg-white relative overflow-hidden pt-32 pb-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
                    <div className="flex flex-wrap items-center">
                        {/* Sol Taraf - İllüstrasyon ve Bilgiler */}
                        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 px-4">
                            <div className="bg-gradient-to-br from-slate-50 to-slate-200 rounded-3xl p-10 relative overflow-hidden">
                                {/* Dekoratif Arka Plan Elementleri */}
                                <div className="absolute -top-5 -right-5 w-24 h-24 bg-gradient-to-tr from-red-600/10 to-red-700/5 rounded-full z-[1]"></div>
                                <div className="absolute -bottom-7 -left-7 w-36 h-36 bg-gradient-to-tr from-red-600/10 to-red-700/5 rounded-full z-[1]"></div>

                                <div className="relative z-[2]">
                                    <h2 className="text-gray-800 font-bold text-4xl mb-5 text-center">
                                        {content.hero.title}
                                    </h2>

                                    <p className="text-gray-500 text-lg leading-relaxed mb-10 text-center">
                                        {content.hero.description}
                                    </p>

                                    {/* İletişim Bilgileri */}
                                    <div className="flex flex-wrap -mx-2">
                                        {content.contactInfo.map((info) => (
                                            <div key={info.id} className="w-full md:w-1/2 px-2 mb-4">
                                                <div className="flex items-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-gray-100 h-full">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-inner">
                                                        <info.icon className="text-white text-2xl" />
                                                    </div>
                                                    <div>
                                                        <h6 className="text-gray-800 font-semibold mb-1 text-base">
                                                            {info.title}
                                                        </h6>
                                                        <p className="text-gray-500 text-sm m-0">
                                                            {info.detail}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sağ Taraf - İletişim Formu */}
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
                                <h3 className="text-gray-800 font-bold text-3xl mb-8 text-center">
                                    {content.form.title}
                                </h3>

                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="mb-6">
                                        <label className="text-gray-700 font-semibold mb-2 block">
                                            {content.form.nameLabel}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 bg-gray-50 focus:bg-white"
                                            placeholder={content.form.namePlaceholder}
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="text-gray-700 font-semibold mb-2 block">
                                            {content.form.emailLabel}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 bg-gray-50 focus:bg-white"
                                            placeholder={content.form.emailPlaceholder}
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="text-gray-700 font-semibold mb-2 block">
                                            {content.form.messageLabel}
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            rows="5"
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl text-base resize-y transition-all duration-300 focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 bg-gray-50 focus:bg-white"
                                            placeholder={content.form.messagePlaceholder}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full p-4 bg-gradient-to-br from-red-600 to-red-700 text-white border-none rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 shadow-lg shadow-red-600/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/30 active:translate-y-0"
                                    >
                                        {content.form.submitButton}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
