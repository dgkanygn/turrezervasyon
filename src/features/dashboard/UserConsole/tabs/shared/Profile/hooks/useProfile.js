import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export const useProfile = () => {
    const { user, updateProfile } = useContext(AuthContext);
    const [formState, setFormState] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Re-initialize local state when the active user/role changes
    useEffect(() => {
        if (user) {
            setFormState({ ...user });
        } else {
            setFormState({});
        }
        setSuccessMessage('');
    }, [user]);

    const handleInputChange = (field, value) => {
        setFormState(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleNestedChange = (parentField, nestedField, value) => {
        setFormState(prev => ({
            ...prev,
            [parentField]: {
                ...prev[parentField],
                [nestedField]: value
            }
        }));
    };

    // Determine if any of the fields differ from the original context user
    const checkIsDirty = () => {
        if (!user) return false;
        
        if (user.role === 'admin') {
            return (formState.username || '') !== (user.username || '') || 
                   (formState.password_hash || '') !== (user.password_hash || '');
        }
        
        if (user.role === 'vendor') {
            const vendorFieldsChanged = [
                'company_title', 'email', 'password_hash', 'phone', 'logo_url',
                'tax_office', 'tax_number', 'tursab_number', 'address', 'description'
            ].some(field => (formState[field] || '') !== (user[field] || ''));

            const socialChanged = [
                'facebook', 'instagram', 'twitter'
            ].some(socialKey => {
                const formSocial = formState.social_media_links?.[socialKey] || '';
                const userSocial = user.social_media_links?.[socialKey] || '';
                return formSocial !== userSocial;
            });

            return vendorFieldsChanged || socialChanged;
        }
        
        // traveler (user) role
        return (formState.fullname || '') !== (user.fullname || '') || 
               (formState.birthdate || '') !== (user.birthdate || '') || 
               (formState.gender || '') !== (user.gender || '') ||
               (formState.email || '') !== (user.email || '');
    };

    const isDirty = checkIsDirty();

    const handleSubmit = async (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (!isDirty) return;

        setIsLoading(true);
        setSuccessMessage('');

        // Simulate network latency for visual request tracking
        await new Promise(resolve => setTimeout(resolve, 800));

        let payload = {};
        if (user.role === 'admin') {
            payload = {
                username: formState.username || '',
                password_hash: formState.password_hash || ''
            };
        } else if (user.role === 'vendor') {
            payload = {
                company_title: formState.company_title || '',
                email: formState.email || '',
                password_hash: formState.password_hash || '',
                phone: formState.phone || '',
                logo_url: formState.logo_url || '',
                tax_office: formState.tax_office || '',
                tax_number: formState.tax_number || '',
                tursab_number: formState.tursab_number || '',
                address: formState.address || '',
                description: formState.description || '',
                social_media_links: {
                    facebook: formState.social_media_links?.facebook || '',
                    instagram: formState.social_media_links?.instagram || '',
                    twitter: formState.social_media_links?.twitter || ''
                }
            };
        } else {
            payload = {
                fullname: formState.fullname || '',
                birthdate: formState.birthdate || '',
                gender: formState.gender || '',
                email: formState.email || ''
            };
        }

        updateProfile(user.role, payload);
        setIsLoading(false);
        setSuccessMessage('Profil başarıyla güncellendi.');

        // Clear notification after 3 seconds
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return {
        user,
        formState,
        isDirty,
        isLoading,
        successMessage,
        handleInputChange,
        handleNestedChange,
        handleSubmit
    };
};
