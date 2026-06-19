import React, { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { FaHandPeace, FaRegCalendarCheck, FaChartLine } from 'react-icons/fa'

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const displayName = user?.role === 'admin' 
        ? user?.username 
        : user?.role === 'vendor' 
            ? user?.company_title 
            : user?.fullname || 'Misafir';

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-[2rem] shadow-sm p-8 border border-slate-100 relative overflow-hidden group">
                {/* Decoration */}
                <div className="absolute top-0 right-0 p-8 text-slate-50 opacity-10 group-hover:opacity-20 transition-opacity">
                    <FaChartLine size={160} />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-50 text-blue-500 p-3 rounded-2xl">
                            <FaHandPeace size={24} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-800 tracking-tight">Hoş geldin, {displayName}!</h2>
                    </div>
                    <p className="text-lg text-slate-500 font-medium max-w-lg leading-relaxed">
                        Hesabına başarıyla giriş yaptın. Buradan tüm rezervasyonlarını, profili ve üyelik bilgilerini kolayca yönetebilirsin.
                    </p>
                </div>
            </div>

            {/* Quick Stats Placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-green-50 text-green-600 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                        <FaRegCalendarCheck />
                    </div>
                    <div className="text-2xl font-black text-slate-800">0</div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Aktif Rezervasyon</p>
                </div>
                {/* More stats could go here */}
            </div>
        </div>
    )
}

export default Dashboard
