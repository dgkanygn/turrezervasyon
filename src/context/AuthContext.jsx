import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [role, setRole] = useState("vendor"); // admin, vendor, user

    const [userData, setUserData] = useState({
        fullname: "Doğukan",
        birthdate: "1998-05-15",
        gender: "male",
        email: "dogukan@example.com",
    });

    const [vendorData, setVendorData] = useState({
        company_title: "Doğukan Turizm A.Ş.",
        email: "vendor@example.com",
        password_hash: "$2b$10$abcdefghijklmnopqrstuv",
        phone: "+90 555 123 4567",
        logo_url: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=200&auto=format&fit=crop",
        tax_office: "Kadıköy Vergi Dairesi",
        tax_number: "1234567890",
        tursab_number: "A-9876",
        address: "Kadıköy, İstanbul, Türkiye",
        description: "Türkiye'nin her yerine lüks ve konforlu turlar düzenleyen öncü acente.",
        social_media_links: {
            facebook: "https://facebook.com/dogukanturizm",
            instagram: "https://instagram.com/dogukanturizm",
            twitter: "https://twitter.com/dogukanturizm"
        }
    });

    const [adminData, setAdminData] = useState({
        username: "dogukan_admin",
        password_hash: "$2b$10$1234567890abcdefghijkl",
    });

    const logout = () => {
        setIsLoggedIn(false);
    };

    const changeRole = (newRole) => {
        if (["admin", "vendor", "user"].includes(newRole)) {
            setRole(newRole);
            setIsLoggedIn(true); // Re-login if role switches for testing convenience
        }
    };

    const updateProfile = (targetRole, updatedData) => {
        if (targetRole === "user") {
            setUserData(prev => ({ ...prev, ...updatedData }));
        } else if (targetRole === "vendor") {
            setVendorData(prev => ({ ...prev, ...updatedData }));
        } else if (targetRole === "admin") {
            setAdminData(prev => ({ ...prev, ...updatedData }));
        }
    };

    const user = isLoggedIn ? {
        ...(role === "admin" ? adminData : role === "vendor" ? vendorData : userData),
        role
    } : null;

    return (
        <AuthContext.Provider value={{
            user,
            userData,
            vendorData,
            adminData,
            logout,
            changeRole,
            updateProfile
        }}>
            {children}
        </AuthContext.Provider>
    );
};

