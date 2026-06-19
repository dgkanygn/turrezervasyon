import React from 'react';
import Input from '@/components/ui/Input';
import Number from '@/components/ui/Number';
import Password from '@/components/ui/Password';
import { FaUserPlus } from 'react-icons/fa';

const UserSignUp = () => {
    return (
        <div className="min-h-screen relative flex items-center justify-center bg-[#c51f1f] overflow-hidden py-12">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white opacity-5 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-black opacity-15 blur-[120px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-lg p-8 sm:p-10 bg-white rounded-3xl shadow-2xl m-4">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-red-100">
                        <FaUserPlus className="text-[#c51f1f] text-3xl ml-1" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Kayıt Ol</h2>
                    <p className="text-gray-500 mt-2 text-sm text-center">Seyahat dünyasına adım atmak için hesabınızı oluşturun</p>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Ad Soyad</label>
                            <Input
                                placeholder="Adınız ve Soyadınız"
                                className="bg-gray-50 border-gray-200 focus:bg-white transition-all py-3 rounded-xl mb-0"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Telefon</label>
                            <Number
                                placeholder="05XX XXX XX XX"
                                maxLength={11}
                                className="bg-gray-50 border-gray-200 focus:bg-white transition-all py-3 rounded-xl mb-0"
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">E-posta Adresi</label>
                        <Input
                            type="email"
                            placeholder="ornek@posta.com"
                            className="bg-gray-50 border-gray-200 focus:bg-white transition-all py-3 rounded-xl mb-0"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Şifre</label>
                            <Password
                                placeholder="Şifreniz"
                                className="bg-gray-50 border-gray-200 focus:bg-white transition-all py-3 rounded-xl mb-0"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Şifre (Tekrar)</label>
                            <Password
                                placeholder="Tekrar"
                                className="bg-gray-50 border-gray-200 focus:bg-white transition-all py-3 rounded-xl mb-0"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#c51f1f] text-white py-3.5 px-4 rounded-xl font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-300 mt-8"
                    >
                        Hesabımı Oluştur
                    </button>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-sm text-gray-600">
                            Zaten bir hesabınız var mı? <a href="/user-signin" className="font-bold text-[#c51f1f] hover:text-red-800 transition-all ml-1">Giriş Yapın</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserSignUp;
