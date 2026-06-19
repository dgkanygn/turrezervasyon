import React, { useState } from 'react';

const TextArea = ({ error, maxLength, className = '', onChange, ...props }) => {
    const [currentLength, setCurrentLength] = useState(
        props.value?.length || props.defaultValue?.length || 0
    );

    const handleChange = (e) => {
        setCurrentLength(e.target.value.length);
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className="w-full mb-4">
            <textarea
                maxLength={maxLength}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:border-transparent min-h-[100px] ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    } ${className}`}
                {...props}
                onChange={handleChange}
            />
            <div className="flex justify-between mt-1 px-1">
                <span className="text-red-500 text-sm">{error || ''}</span>
                {maxLength && (
                    <span className="text-xs text-gray-400">
                        {currentLength} / {maxLength}
                    </span>
                )}
            </div>
        </div>
    );
};

export default TextArea;
