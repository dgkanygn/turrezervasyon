import React from 'react';
import { FiX, FiMenu, FiUser, FiHome, FiLogOut } from 'react-icons/fi';

const Sidebar = ({
    sidebarOpen,
    setSidebarOpen,
    mobileMenuOpen,
    setMobileMenuOpen,
    userEmail,
    userName,
    logoutuser,
    location,
    navigate,
    menuItems = []
}) => {
    return (
        <div className={`fixed h-screen z-50 bg-white shadow-xl transition-all duration-300 flex flex-col 
            ${sidebarOpen ? 'md:w-[280px]' : 'md:w-[80px]'} 
            w-[280px] 
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
            {/* Sidebar Header */}
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                <div className={`flex items-center gap-3 overflow-hidden cursor-default transition-opacity ${(!sidebarOpen && !mobileMenuOpen) ? 'md:opacity-0 md:w-0' : 'opacity-100'}`}>
                    <span className="text-xl font-bold text-slate-800 whitespace-nowrap">
                        Konsol
                    </span>
                </div>

                {/* Desktop Toggle Button */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className={`hidden md:block p-2 text-slate-500 hover:text-red-600 hover:bg-slate-100 rounded-lg transition-colors duration-200 focus:outline-none cursor-pointer ${!sidebarOpen && 'mx-auto'}`}
                >
                    {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Mobile Close Button */}
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="md:hidden p-2 text-slate-500 hover:text-red-600 hover:bg-slate-100 rounded-lg transition-colors duration-200 focus:outline-none cursor-pointer"
                >
                    <FiX size={24} />
                </button>
            </div>

            {/* Menu Items */}
            <div className="py-2 flex-1 overflow-y-auto">
                {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path || (location.pathname === '/console' && item.path === '/console/dashboard');

                    return (
                        <button
                            key={index}
                            onClick={() => navigate(item.path)}
                            className={`w-full flex items-center gap-4 px-6 py-3.5 cursor-pointer transition-colors duration-200 border-none outline-none
                            ${isActive
                                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold shadow-md'
                                    : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-red-600 font-medium'
                                }`}
                            title={!sidebarOpen ? item.label : ''}
                        >
                            <Icon size={20} className={sidebarOpen ? 'shrink-0' : 'md:mx-auto shrink-0'} />
                            <span className={`whitespace-nowrap ${!sidebarOpen ? 'md:hidden' : ''}`}>{item.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Bottom User Area */}
            <div className="p-4 border-t border-slate-200 bg-white">
                {/* Full User Area (Desktop Opened or Mobile) */}
                <div className={`flex items-center justify-between gap-1 w-full flex-wrap ${(!sidebarOpen && !mobileMenuOpen) ? 'md:hidden' : ''}`}>
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                            <FiUser size={20} />
                        </div>
                        <div className="flex flex-col overflow-hidden w-[90px]">
                            <span className="font-bold text-slate-800 text-sm truncate capitalize" title={userName}>{userName}</span>
                            <span className="text-xs text-slate-500 truncate" title={userEmail}>{userEmail}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-0.5 shrink-0 pl-1 border-l border-slate-100 h-10 ml-auto">
                        <button onClick={() => navigate('/')} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer" title="Siteye Dön">
                            <FiHome size={18} />
                        </button>
                        <button onClick={logoutuser} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer" title="Çıkış Yap">
                            <FiLogOut size={18} />
                        </button>
                    </div>
                </div>

                {/* Collapsed User Area (Desktop Closed) */}
                <div className={`hidden md:flex flex-col items-center gap-3 ${sidebarOpen ? 'md:hidden' : ''}`}>
                    <button onClick={() => navigate('/')} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer" title="Siteye Dön">
                        <FiHome size={20} />
                    </button>
                    <button onClick={logoutuser} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer" title="Çıkış Yap">
                        <FiLogOut size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
