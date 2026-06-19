import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
    const [mainImage, setMainImage] = useState(images?.[0] || '');

    if (!images || images.length === 0) return null;

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-md">
                <img
                    src={mainImage}
                    alt="Tur Görseli"
                    className="w-full h-full object-cover transition-opacity duration-300"
                />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                {images.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => setMainImage(img)}
                        className={`
                            min-w-[100px] w-[100px] h-[80px] rounded-lg overflow-hidden cursor-pointer
                            border-2 transition-all duration-200
                            ${mainImage === img ? 'border-[#c51f1f] scale-105' : 'border-transparent opacity-70 hover:opacity-100'}
                        `}
                    >
                        <img
                            src={img}
                            alt={`Görsel ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
