import React from 'react';
import Input from '@/components/ui/Input';
import Password from '@/components/ui/Password';
import { FaUserCircle } from 'react-icons/fa';

const UserSignIn = () => {
    return (
        <div className="min-h-screen relative flex items-center justify-center bg-[#c51f1f] overflow-hidden py-12">
            {/* Arka plan süslemeleri */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-white opacity-5 
blur-[100px]"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-black opacity-20 blur-[100px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-md p-8 sm:p-10 bg-white rounded-3xl shadow-2xl m-4">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-red-100">
                        <FaUserCircle className="text-[#c51f1f] text-4xl" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Hoşgeldiniz</h2>
                    <p className="text-gray-500 mt-2 text-sm text-center">Hesabınıza giriş yapmak için bilgilerinizi doldurun</p>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1 ml-1" htmlFor="email-input">E-posta Adresi</label>
                        <Input
                            id="email-input"
                            type="email"
                            placeholder="ornek@posta.com"
                            className="bg-gray-50 border-gray-200 focus:bg-white transition-all py-3 rounded-xl"
                            required
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1 ml-1" htmlFor="password-input">Şifre</label>
                        <Password
                            id="password-input"
                            placeholder="Şifrenizi girin"
                            className="bg-gray-50 border-gray-200 focus:bg-white transition-all py-3 rounded-xl"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end text-sm mb-6 mt-[-10px]">
                        <a href="#" className="font-medium text-[#c51f1f] hover:text-red-800 transition-colors">Şifremi unuttum</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#c51f1f] text-white py-3.5 px-4 rounded-xl font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center"
                    >
                        Giriş Yap
                    </button>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-sm text-gray-600">
                            Hesabınız yok mu? <a href="/user-signup" className="font-bold text-[#c51f1f] hover:text-red-800 transition-all ml-1">Kayıt Olun</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserSignIn;
