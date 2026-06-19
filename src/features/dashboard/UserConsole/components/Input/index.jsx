import React from 'react';

const Input = ({
    label,
    error,
    id,
    disabled = false,
    maxLength, // Karakter sınırı prop'u
    value = '', // Sayaç hesabı için value takibi önemli
    className = '',
    ...props
}) => {
    return (
        <div className={`w-full flex flex-col gap-1.5 ${className}`}>

            {/* Üst Kısım: Label ve Karakter Sayacı */}
            {(label || maxLength) && (
                <div className="flex justify-between items-center">
                    {label && (
                        <label
                            htmlFor={id}
                            className={`text-xs font-bold uppercase tracking-wider ${error ? 'text-red-500' : 'text-slate-600'}`}
                        >
                            {label}
                        </label>
                    )}

                    {/* Sadece maxLength tanımlıysa ve input kilitli değilse sayacı göster */}
                    {maxLength && !disabled && (
                        <span className="text-[11px] font-semibold text-slate-400">
                            {String(value).length}/{maxLength}
                        </span>
                    )}
                </div>
            )}

            {/* Input Alanı */}
            <input
                id={id}
                disabled={disabled}
                maxLength={maxLength} // HTML sınırını buraya paslıyoruz (Yazmayı otomatik engeller)
                value={value}
                className={`w-full px-4 py-3 rounded-xl border font-medium text-sm transition-all outline-none
          ${error
                        ? 'border-red-500 focus:border-red-600 bg-red-50/30 text-red-900 placeholder-red-300'
                        : 'border-slate-200 focus:border-slate-900 bg-white text-slate-900 placeholder-slate-400 focus:shadow-sm'
                    }
          ${disabled ? 'bg-slate-50 border-slate-100 text-slate-400 cursor-not-allowed' : ''}
        `}
                {...props}
            />

            {/* Hata Mesajı */}
            {error && (
                <span className="text-xs text-red-500 font-medium mt-0.5">
                    {error}
                </span>
            )}
        </div>
    );
};

export default Input;