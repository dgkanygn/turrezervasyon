import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { useConsole } from './hooks/useConsole';

const UserConsole = () => {
    const {
        sidebarOpen,
        setSidebarOpen,
        mobileMenuOpen,
        setMobileMenuOpen,
        logoutuser,
        userEmail,
        userName,
        topBarTitle,
        location,
        navigate,
        currentRoleMenuItems
    } = useConsole();

    return (
        <div className="font-sans bg-slate-50 min-h-screen flex">
            {/* Mobile Backdrop Overlay */}
            <div
                className={`fixed inset-0 bg-slate-900/50 z-40 transition-opacity duration-300 md:hidden cursor-pointer ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar Component */}
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                userEmail={userEmail}
                userName={userName}
                logoutuser={logoutuser}
                location={location}
                navigate={navigate}
                menuItems={currentRoleMenuItems}
            />

            {/* Main Content */}
            <div className={`flex flex-col w-full transition-all duration-300 min-h-screen ${sidebarOpen ? 'md:ml-[280px]' : 'md:ml-[80px]'}`}>
                {/* Topbar Component */}
                <Topbar
                    topBarTitle={topBarTitle}
                    setMobileMenuOpen={setMobileMenuOpen}
                />

                {/* Page Content using React Router Outlet */}
                <main className="p-4 md:p-8 flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default UserConsole;
