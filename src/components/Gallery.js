// components/Gallery.jsx

import React from 'react';

const Gallery = () => {
  const images = [
    '/dron.jpeg',
    '/drone2.jpeg',
    '/image/drone3.jpg',
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">Galerie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={src}
                alt={`Galerie obrázek ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
