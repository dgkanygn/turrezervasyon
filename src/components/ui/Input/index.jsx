import React from 'react';

const Input = ({ error, maxLength, className = '', ...props }) => {
    return (
        <div className="w-full mb-4">
            <input
                type="text"
                maxLength={maxLength}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:border-transparent ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    } ${className}`}
                {...props}
            />
            {error && <span className="text-red-500 text-sm mt-1 px-1 block">{error}</span>}
        </div>
    );
};

export default Input;
