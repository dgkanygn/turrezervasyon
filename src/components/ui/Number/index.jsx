import React from 'react';

const Number = ({ error, maxLength, className = '', onChange, ...props }) => {
    const handleChange = (e) => {
        // Sadece rakamlara izin ver
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        if (onChange) {
            onChange(e);
        }
    };

    const handleKeyDown = (e) => {
        // İzin verilen tuşlar: Backspace, Tab, End, Home, Sol-Sağ yon tuşları, Delete vb.
        const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter', 'Home', 'End'];
        if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
        }
    };

    return (
        <div className="w-full mb-4">
            <input
                type="text"
                inputMode="numeric"
                maxLength={maxLength}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:border-transparent ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    } ${className}`}
                {...props}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {error && <span className="text-red-500 text-sm mt-1 px-1 block">{error}</span>}
        </div>
    );
};

export default Number;
