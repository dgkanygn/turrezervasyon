import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Topbar = ({ topBarTitle, setMobileMenuOpen }) => {
    return (
        <header className="bg-white px-6 md:px-8 py-4 md:py-5 shadow-sm border-b border-slate-200 sticky top-0 z-30 flex gap-4 items-center">
            <button
                className="md:hidden p-2 -ml-2 text-slate-500 hover:text-red-600 focus:outline-none bg-slate-50 rounded-lg border border-slate-200 shadow-sm"
                onClick={() => setMobileMenuOpen(true)}
            >
                <FiMenu size={24} />
            </button>

            <h1 className="text-xl md:text-2xl font-bold text-slate-800 m-0">
                {topBarTitle}
            </h1>
        </header>
    );
};

export default Topbar;
