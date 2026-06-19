import React, { useState, useContext, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi'
import { AuthContext } from '../../context/AuthContext'

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isMobileMenuOpen]);

    const content = {
        logo: "turrezervasyon.com",
        links: [
            { name: "Ana Sayfa", path: "/" },
            { name: "Turlar", path: "/tours" },
            { name: "Hakkımızda", path: "/about" },
            { name: "İletişim", path: "/contact-us" }
        ],
        login: "Giriş Yap",
        loginPath: "/user-signin"
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm border-b border-gray-200">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="w-auto z-50 relative">
                        <Link to="/" className="text-red-600 text-2xl font-bold flex items-center gap-2 no-underline hover:no-underline">
                            <span className="text-red-600 font-extrabold">
                                {content.logo}
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-1 justify-center gap-4 lg:gap-8">
                        {content.links.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.path}
                                className={({ isActive }) => 
                                    `font-medium text-sm lg:text-base px-4 py-2 rounded-full transition-all duration-300 border no-underline hover:no-underline ${
                                        isActive 
                                        ? "bg-red-50 border-red-300 text-red-600 shadow-sm" 
                                        : "text-gray-800 border-transparent hover:bg-red-50 hover:border-red-300 hover:text-red-600"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex w-auto justify-end items-center gap-4">
                        {user ? (
                            <>
                                <span className="text-gray-800 font-medium text-sm">{user.fullname}</span>
                                <button
                                    onClick={logout}
                                    className="cursor-pointer flex items-center gap-2 text-gray-800 font-medium text-sm px-5 py-2 rounded-full transition-all duration-300 border border-gray-200 hover:bg-red-50 hover:border-red-300 hover:text-red-600 focus:outline-none group"
                                >
                                    <FiLogOut className="group-hover:rotate-12 transition-transform" />
                                    Çıkış Yap
                                </button>
                            </>
                        ) : (
                            <Link to={content.loginPath} className="text-gray-800 font-medium text-sm px-5 py-2 rounded-full transition-all duration-300 border border-gray-200 hover:bg-red-50 hover:border-red-300 hover:text-red-600 no-underline hover:no-underline">
                                {content.login}
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center z-50 relative">
                        <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none cursor-pointer p-2 -mr-2">
                            {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 flex flex-col pt-24 px-8 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col gap-6 mt-4">
                    {content.links.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.path}
                            className={({ isActive }) => 
                                `font-medium text-lg border-b border-gray-100 pb-3 transition-colors ${
                                    isActive ? "text-red-600 border-red-200" : "text-gray-800 hover:text-red-600"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="mt-8 flex flex-col gap-4">
                    {user ? (
                        <>
                            <span className="text-gray-600 text-sm font-medium uppercase tracking-wider">Hoş geldin</span>
                            <span className="text-gray-800 font-bold text-xl pb-4 border-b border-gray-100">{user.fullname}</span>
                            <button
                                onClick={logout}
                                className="cursor-pointer flex items-center justify-center gap-2 mt-4 text-center text-red-600 bg-red-50 font-medium text-base px-5 py-3 rounded-xl transition-all duration-300 hover:bg-red-100 border border-red-100"
                            >
                                <FiLogOut />
                                Çıkış Yap
                            </button>
                        </>
                    ) : (
                        <Link
                            to={content.loginPath}
                            className="text-center text-white bg-red-600 font-medium text-base px-5 py-3 rounded-xl transition-all duration-300 hover:bg-red-700 shadow-md shadow-red-200"
                        >
                            {content.login}
                        </Link>
                    )}
                </div>
            </div>

            {/* Backdrop for Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm transition-opacity duration-300 cursor-pointer ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={toggleMobileMenu}
                aria-hidden="true"
            />
        </nav>
    )
}

export default Header
