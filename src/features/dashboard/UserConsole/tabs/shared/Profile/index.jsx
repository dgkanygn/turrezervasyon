import React, { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { FaUser, FaLock } from 'react-icons/fa';
import Button from '@/features/dashboard/UserConsole/components/Button';
import { useProfile } from './hooks/useProfile';

import UserProfileForm from './components/UserProfileForm';
import VendorProfileForm from './components/VendorProfileForm';
import AdminProfileForm from './components/AdminProfileForm';

const Profile = () => {
    const { changeRole } = useContext(AuthContext);
    const {
        user,
        formState,
        isDirty,
        isLoading,
        successMessage,
        handleInputChange,
        handleNestedChange,
        handleSubmit
    } = useProfile();

    const displayName = user?.role === 'admin' 
        ? user?.username 
        : user?.role === 'vendor' 
            ? user?.company_title 
            : user?.fullname;

    const displayRole = user?.role === 'admin' 
        ? 'Yönetici' 
        : user?.role === 'vendor' 
            ? 'Acente' 
            : 'Gezgin';

    const avatarChar = displayName?.charAt(0) || 'U';

    return (
        <div className="space-y-6">
            {/* Developer Role Switcher */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Geliştirici Rol Seçici (Test İçin)</span>
                </div>
                <div className="flex gap-2">
                    {[
                        { key: 'user', label: 'Gezgin (User)' },
                        { key: 'vendor', label: 'Acente (Vendor)' },
                        { key: 'admin', label: 'Yönetici (Admin)' }
                    ].map((roleItem) => (
                        <button
                            key={roleItem.key}
                            onClick={() => changeRole(roleItem.key)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all duration-200 ${
                                user?.role === roleItem.key
                                    ? 'bg-slate-900 text-white shadow-sm scale-[1.02]'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                        >
                            {roleItem.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Profile Box */}
            <div className="bg-white rounded-[2rem] shadow-sm p-8 border border-slate-100 animate-fadeIn">
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                    <div className="bg-red-50 text-red-500 p-2.5 rounded-xl">
                        <FaUser size={20} />
                    </div>
                    Kişisel Profil
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Profile Header Card */}
                    <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-slate-50 rounded-[1.5rem] border border-slate-200/50">
                        {user?.role === 'vendor' && user?.logo_url ? (
                            <img 
                                src={user.logo_url} 
                                alt={displayName}
                                className="w-24 h-24 rounded-3xl object-cover border border-slate-200 shadow-sm"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=200&auto=format&fit=crop";
                                }}
                            />
                        ) : (
                            <div className="w-24 h-24 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center text-3xl font-black shadow-inner uppercase">
                                {avatarChar}
                            </div>
                        )}
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-slate-800">{displayName}</h3>
                            <p className="text-slate-500 font-semibold text-sm">{displayRole}</p>
                        </div>
                    </div>

                    {/* Role-Specific Form Fields */}
                    <div className="pt-2">
                        {user?.role === 'admin' && (
                            <AdminProfileForm 
                                formState={formState} 
                                onInputChange={handleInputChange} 
                            />
                        )}

                        {user?.role === 'vendor' && (
                            <VendorProfileForm 
                                formState={formState} 
                                onInputChange={handleInputChange} 
                                onNestedChange={handleNestedChange} 
                            />
                        )}

                        {user?.role === 'user' && (
                            <UserProfileForm 
                                formState={formState} 
                                onInputChange={handleInputChange} 
                            />
                        )}
                    </div>

                    {/* Feedback Messages */}
                    {successMessage && (
                        <div className="p-4 bg-green-50 text-green-700 font-semibold rounded-2xl border border-green-100 text-sm animate-fadeIn">
                            {successMessage}
                        </div>
                    )}

                    {/* Actions */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Button
                            type="submit"
                            disabled={!isDirty}
                            isLoading={isLoading}
                            className="w-full sm:w-auto"
                        >
                            Profili Düzenle
                        </Button>
                        <p className="text-xs text-slate-400 leading-relaxed italic">
                            * Kaydettiğiniz bilgiler, rezervasyon işlemlerinizi kolaylaştırmak ve size daha iyi hizmet sunabilmek için kullanılmaktadır.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;

