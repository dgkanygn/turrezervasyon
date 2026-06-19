import React from 'react';

const NumberInput = ({
    label,
    error,
    id,
    value = 0,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    className = ''
}) => {

    const handleDecrement = () => {
        if (disabled) return;
        const newValue = Math.max(min, Number(value) - step);
        if (onChange) onChange(newValue);
    };

    const handleIncrement = () => {
        if (disabled) return;
        const newValue = Math.min(max, Number(value) + step);
        if (onChange) onChange(newValue);
    };

    const handleInputChange = (e) => {
        let val = e.target.value === '' ? '' : Number(e.target.value);
        if (val !== '' && val < min) val = min;
        if (val !== '' && val > max) val = max;
        if (onChange) onChange(val);
    };

    return (
        <div className={`w-full flex flex-col gap-1.5 ${className}`}>
            {label && (
                <label className={`text-xs font-bold uppercase tracking-wider ${error ? 'text-red-500' : 'text-slate-600'}`}>
                    {label}
                </label>
            )}

            <div className="flex items-center relative w-full">
                {/* Azaltma Butonu */}
                <button
                    type="button"
                    disabled={disabled || value <= min}
                    onClick={handleDecrement}
                    className="absolute left-2 w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    -
                </button>

                {/* Sayı Input alanı */}
                <input
                    type="number"
                    id={id}
                    value={value}
                    onChange={handleInputChange}
                    disabled={disabled}
                    min={min}
                    max={max}
                    step={step}
                    className={`w-full px-12 py-3 rounded-xl border font-bold text-sm text-center transition-all outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
            ${error
                            ? 'border-red-500 focus:border-red-600 bg-red-50/30 text-red-900'
                            : 'border-slate-200 focus:border-slate-900 bg-white text-slate-900 focus:shadow-sm'
                        }
            ${disabled ? 'bg-slate-50 border-slate-100 text-slate-400 cursor-not-allowed' : ''}
          `}
                />

                {/* Arttırma Butonu */}
                <button
                    type="button"
                    disabled={disabled || value >= max}
                    onClick={handleIncrement}
                    className="absolute right-2 w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    +
                </button>
            </div>

            {error && <span className="text-xs text-red-500 font-medium mt-0.5">{error}</span>}
        </div>
    );
};

export default NumberInput;