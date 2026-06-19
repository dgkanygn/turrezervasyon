import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Password = ({ error, className = '', ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full mb-4 relative">
            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:border-transparent pr-10 ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                        } ${className}`}
                    {...props}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 pl-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                    tabIndex="-1"
                >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
            </div>
            {error && <span className="text-red-500 text-sm mt-1 px-1 block">{error}</span>}
        </div>
    );
};

export default Password;
