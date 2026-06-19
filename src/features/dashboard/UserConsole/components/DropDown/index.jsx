import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({
    label,
    error,
    options = [], // [{ value: 'male', label: 'Erkek' }] şeklinde dizi
    value,
    onChange,
    placeholder = 'Seçiniz...',
    disabled = false,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Menünün seçili olan elemanının görünen metnini (label) buluyoruz
    const selectedOption = options.find(opt => opt.value === value);

    // Dışarıya tıklandığında menüyü kapatma mantığı
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue) => {
        if (onChange) onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} className={`w-full flex flex-col gap-1.5 relative ${className}`}>

            {/* Etiket (Label) */}
            {label && (
                <label className={`text-xs font-bold uppercase tracking-wider ${error ? 'text-red-500' : 'text-slate-600'}`}>
                    {label}
                </label>
            )}

            {/* Tetikleyici Buton */}
            <button
                type="button"
                disabled={disabled}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-3 rounded-xl border font-medium text-sm  flex items-center justify-between cursor-pointer text-left outline-none
          ${error
                        ? 'border-red-500 bg-red-50/30 text-red-900'
                        : isOpen
                            ? 'border-slate-900 bg-white text-slate-900 shadow-sm'
                            : 'border-slate-200 bg-white text-slate-900 placeholder-slate-400'
                    }
          ${disabled ? 'bg-slate-50 border-slate-100 text-slate-400 cursor-not-allowed' : ''}
        `}
            >
                <span className={!selectedOption ? 'text-slate-400' : 'text-slate-900'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>

                {/* Aşağı/Yukarı Ok İkonu */}
                <svg
                    className={`w-4 h-4 text-slate-500  ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Açılır Menü Listesi */}
            {isOpen && !disabled && (
                <ul className="absolute left-0 right-0 top-[calc(100%+4px)] bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-50 max-h-60 overflow-y-auto">
                    {options.length > 0 ? (
                        options.map((option) => (
                            <li key={option.value}>
                                <button
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className={`w-full px-4 py-2 text-left text-sm font-medium cursor-pointer
                    ${option.value === value
                                            ? 'bg-slate-900 text-white'
                                            : 'text-slate-700 hover:bg-slate-100'
                                        }`}
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="px-4 py-2 text-sm text-slate-400 italic text-center">Seçenek yok</li>
                    )}
                </ul>
            )}

            {/* Hata Mesajı */}
            {error && (
                <span className="text-xs text-red-500 font-medium mt-0.5">
                    {error}
                </span>
            )}
        </div>
    );
};

export default Dropdown;