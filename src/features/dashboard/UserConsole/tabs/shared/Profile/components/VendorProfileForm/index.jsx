import React from 'react';
import Input from '@/features/dashboard/UserConsole/components/Input';
import TextArea from '@/features/dashboard/UserConsole/components/TextArea';

const VendorProfileForm = ({ formState, onInputChange, onNestedChange }) => {
    const socialMedia = formState.social_media_links || {};

    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Firma Genel Bilgileri */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 pb-1 border-b border-slate-100">
                    Acente Genel Bilgileri
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Firma Unvanı"
                        id="company_title"
                        value={formState.company_title || ''}
                        onChange={(e) => onInputChange('company_title', e.target.value)}
                        placeholder="Örn. Doğukan Turizm A.Ş."
                        required
                    />

                    <Input
                        label="E-posta Adresi"
                        id="email"
                        type="email"
                        value={formState.email || ''}
                        onChange={(e) => onInputChange('email', e.target.value)}
                        placeholder="Örn. acente@firma.com"
                        required
                    />

                    <Input
                        label="Telefon Numarası"
                        id="phone"
                        type="tel"
                        value={formState.phone || ''}
                        onChange={(e) => onInputChange('phone', e.target.value)}
                        placeholder="Örn. +90 555 123 4567"
                    />

                    <Input
                        label="Logo URL"
                        id="logo_url"
                        value={formState.logo_url || ''}
                        onChange={(e) => onInputChange('logo_url', e.target.value)}
                        placeholder="https://..."
                    />

                    <Input
                        label="Şifre Hash (Salt Okunur / Değiştirilebilir)"
                        id="password_hash"
                        value={formState.password_hash || ''}
                        onChange={(e) => onInputChange('password_hash', e.target.value)}
                        placeholder="Şifre hash değeri"
                    />
                </div>
            </div>

            {/* Vergi ve Belge Bilgileri */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 pb-1 border-b border-slate-100">
                    Yasal ve Yetki Bilgileri
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Input
                        label="Vergi Dairesi"
                        id="tax_office"
                        value={formState.tax_office || ''}
                        onChange={(e) => onInputChange('tax_office', e.target.value)}
                        placeholder="Örn. Kadıköy Vergi Dairesi"
                    />

                    <Input
                        label="Vergi Numarası"
                        id="tax_number"
                        value={formState.tax_number || ''}
                        onChange={(e) => onInputChange('tax_number', e.target.value)}
                        placeholder="10 haneli numara"
                    />

                    <Input
                        label="TÜRSAB Belge No"
                        id="tursab_number"
                        value={formState.tursab_number || ''}
                        onChange={(e) => onInputChange('tursab_number', e.target.value)}
                        placeholder="Örn. A-1234"
                    />
                </div>
            </div>

            {/* Detaylar ve Adres */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 pb-1 border-b border-slate-100">
                    Detaylı Bilgiler ve Adres
                </h3>
                <div className="space-y-6">
                    <TextArea
                        label="Firma Açıklaması"
                        id="description"
                        value={formState.description || ''}
                        onChange={(e) => onInputChange('description', e.target.value)}
                        placeholder="Firmanız hakkında detaylı açıklama girin..."
                        rows={3}
                    />

                    <TextArea
                        label="Firma Adresi"
                        id="address"
                        value={formState.address || ''}
                        onChange={(e) => onInputChange('address', e.target.value)}
                        placeholder="Firmanızın yasal adresini girin..."
                        rows={2}
                    />
                </div>
            </div>

            {/* Sosyal Medya Linkleri */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 pb-1 border-b border-slate-100">
                    Sosyal Medya Bağlantıları
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Input
                        label="Instagram"
                        id="instagram"
                        value={socialMedia.instagram || ''}
                        onChange={(e) => onNestedChange('social_media_links', 'instagram', e.target.value)}
                        placeholder="https://instagram.com/..."
                    />

                    <Input
                        label="Facebook"
                        id="facebook"
                        value={socialMedia.facebook || ''}
                        onChange={(e) => onNestedChange('social_media_links', 'facebook', e.target.value)}
                        placeholder="https://facebook.com/..."
                    />

                    <Input
                        label="Twitter"
                        id="twitter"
                        value={socialMedia.twitter || ''}
                        onChange={(e) => onNestedChange('social_media_links', 'twitter', e.target.value)}
                        placeholder="https://twitter.com/..."
                    />
                </div>
            </div>
        </div>
    );
};

export default VendorProfileForm;
