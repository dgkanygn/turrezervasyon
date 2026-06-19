import React from 'react';
import Input from '@/features/dashboard/UserConsole/components/Input';
import Dropdown from '@/features/dashboard/UserConsole/components/DropDown';

const UserProfileForm = ({ formState, onInputChange }) => {
    const genderOptions = [
        { value: 'male', label: 'Erkek' },
        { value: 'female', label: 'Kadın' }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
                label="Ad Soyad"
                id="fullname"
                value={formState.fullname || ''}
                onChange={(e) => onInputChange('fullname', e.target.value)}
                placeholder="Adınızı ve soyadınızı girin"
                required
            />

            <Input
                label="E-posta Adresi"
                id="email"
                type="email"
                value={formState.email || ''}
                onChange={(e) => onInputChange('email', e.target.value)}
                placeholder="E-posta adresinizi girin"
                required
            />

            <Input
                label="Doğum Tarihi"
                id="birthdate"
                type="date"
                value={formState.birthdate || ''}
                onChange={(e) => onInputChange('birthdate', e.target.value)}
            />

            <Dropdown
                label="Cinsiyet"
                options={genderOptions}
                value={formState.gender}
                onChange={(val) => onInputChange('gender', val)}
                placeholder="Cinsiyet seçin"
            />
        </div>
    );
};

export default UserProfileForm;
