import React from 'react';
import Input from '@/features/dashboard/UserConsole/components/Input';

const AdminProfileForm = ({ formState, onInputChange }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
                label="Kullanıcı Adı"
                id="username"
                value={formState.username || ''}
                onChange={(e) => onInputChange('username', e.target.value)}
                placeholder="Admin kullanıcı adı"
                required
            />

            <Input
                label="Şifre Hash (Salt Okunur / Değiştirilebilir)"
                id="password_hash"
                value={formState.password_hash || ''}
                onChange={(e) => onInputChange('password_hash', e.target.value)}
                placeholder="Şifre hash değeri"
            />
        </div>
    );
};

export default AdminProfileForm;
