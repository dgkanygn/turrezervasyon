import React from 'react';
import Input from '@/components/ui/Input';
import Password from '@/components/ui/Password';
import { FaSuitcase } from 'react-icons/fa';

const VendorSignIn = () => {
    return (
        <div className="min-h-screen relative flex items-center justify-center bg-[#c51f1f] overflow-hidden py-12">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-white opacity-5 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-black opacity-15 blur-[150px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-md p-8 sm:p-10 bg-white rounded-3xl shadow-2xl m-4 border-2 border-transparent bg-clip-padding">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-red-100">
                        <FaSuitcase className="text-[#c51f1f] text-3xl" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Acente Paneli</h2>
                    <p className="text-gray-500 mt-2 text-sm text-center">Yönetim paneline erişmek için giriş yapın</p>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1 ml-1" >E-posta Adresi</label>
                        <Input
                            type="email"
                            placeholder="acente@posta.com"
                            className="bg-gray-50 border-gray-200 focus:bg-white transition-all py-3 rounded-xl"
                            required
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1 ml-1" >Şifre</label>
                        <Password
                            placeholder="Panel şifrenizi girin"
                            className="bg-gray-50 border-gray-200 focus:bg-white transition-all py-3 rounded-xl"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end text-sm mb-6 mt-[-10px]">
                        <a href="#" className="font-medium text-[#c51f1f] hover:text-red-800 transition-colors">Şifremi unuttum</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#c51f1f] text-white py-3.5 px-4 rounded-xl font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Giriş Yap
                    </button>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-sm text-gray-600">
                            Acente kaydınız yok mu? <a href="/vendor-signup" className="font-bold text-[#c51f1f] hover:text-red-800 transition-all ml-1">Acente Başvurusu</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VendorSignIn;
