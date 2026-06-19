import React from 'react';

const TimePicker = ({ label, error, id, disabled = false, className = '', ...props }) => {
    return (
        <div className={`w-full flex flex-col gap-1.5 ${className}`}>
            {label && (
                <label htmlFor={id} className={`text-xs font-bold uppercase tracking-wider ${error ? 'text-red-500' : 'text-slate-600'}`}>
                    {label}
                </label>
            )}
            <input
                type="time"
                id={id}
                disabled={disabled}
                className={`w-full px-4 py-3 rounded-xl border font-medium text-sm transition-all outline-none cursor-pointer
          ${error
                        ? 'border-red-500 focus:border-red-600 bg-red-50/30 text-red-900'
                        : 'border-slate-200 focus:border-slate-900 bg-white text-slate-900 focus:shadow-sm'
                    }
          ${disabled ? 'bg-slate-50 border-slate-100 text-slate-400 cursor-not-allowed' : ''}
        `}
                {...props}
            />
            {error && <span className="text-xs text-red-500 font-medium mt-0.5">{error}</span>}
        </div>
    );
};

export default TimePicker;