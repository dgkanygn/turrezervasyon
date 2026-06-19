import React from 'react';

const Button = ({
    children,
    onClick,
    variant = 'primary', // 'primary' veya 'secondary'
    isLoading = false,
    disabled = false,
    type = 'button',
    className = '',
    ...props
}) => {

    // Variant stillerini temiz bir nesne içinde tutuyoruz
    const variants = {
        primary: 'bg-slate-900 text-white hover:bg-slate-800',
        secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300'
    };

    // Butonun kilitli veya yükleniyor olma durumu
    const isDisabled = disabled || isLoading;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2
        ${variants[variant]} 
        ${isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} 
        ${className}`}
            {...props}
        >
            {/* Yükleniyor animasyonu (Spinner) */}
            {isLoading && (
                <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
            )}

            <span>{children}</span>
        </button>
    );
};

export default Button;