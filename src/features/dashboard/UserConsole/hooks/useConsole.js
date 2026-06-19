import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from '../utils/menuItems';
import { AuthContext } from '../../../../context/AuthContext';

export const useConsole = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Desktop sidebar state
    const [sidebarOpen, setSidebarOpen] = useState(true);
    // Mobile sidebar state
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [mobileMenuOpen]);

    const { user, logout } = useContext(AuthContext);

    const logoutuser = () => {
        logout();
        navigate('/');
    };

    const userRole = user?.role || 'user';
    const userEmail = userRole === 'admin' 
        ? 'admin@example.com' 
        : user?.email || 'misafir@example.com';

    const userName = userRole === 'admin' 
        ? (user?.username || 'Yönetici') 
        : userRole === 'vendor' 
            ? (user?.company_title || 'Acente') 
            : (user?.fullname || 'Misafir');

    const currentRoleMenuItems = menuItems[userRole] || menuItems.user;

    // Determine current title from location
    const currentMenu = currentRoleMenuItems.find(i => location.pathname === i.path || (location.pathname === '/console' && i.path === '/console/dashboard'));
    const topBarTitle = currentMenu ? currentMenu.label : 'Panel';

    return {
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
        currentRoleMenuItems,
        userRole
    };
};
