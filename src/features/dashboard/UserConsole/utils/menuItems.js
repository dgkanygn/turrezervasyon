import {
    FiHome,
    FiUser,
    FiBarChart2,
    FiUsers,
    FiBriefcase,
    FiMessageSquare,
    FiBookOpen,
    FiMapPin
} from 'react-icons/fi';

export const menuItems = {
    admin: [
        { path: '/console/dashboard', label: 'Dashboard', icon: FiBarChart2 },
        { path: '/console/vendor-management', label: 'Acente Yönetimi', icon: FiBriefcase },
        { path: '/console/user-management', label: 'Üye Yönetimi', icon: FiUsers },
        { path: '/console/tour-management', label: 'Tur Yönetimi', icon: FiMapPin },
        { path: '/console/booking-management', label: 'Rezervasyon Yönetimi', icon: FiBookOpen },
        { path: '/console/client-feedbacks', label: 'Müşteri Şikayetleri', icon: FiMessageSquare },
        { path: '/console/vendor-feedback', label: 'Acente Şikayetleri', icon: FiMessageSquare },
        { path: '/console/profile', label: 'Kişisel Profil', icon: FiUser }
    ],
    vendor: [
        { path: '/console/dashboard', label: 'Dashboard', icon: FiBarChart2 },
        { path: '/console/tour-management', label: 'Tur Yönetimi', icon: FiMapPin },
        { path: '/console/client-feedbacks', label: 'Müşteri Şikayetleri', icon: FiMessageSquare },
        { path: '/console/profile', label: 'Kişisel Profil', icon: FiUser }
    ],
    user: [
        { path: '/console/dashboard', label: 'Dashboard', icon: FiBarChart2 },
        { path: '/console/my-tours', label: 'Turlarım', icon: FiMapPin },
        { path: '/console/profile', label: 'Kişisel Profil', icon: FiUser }
    ]
};

