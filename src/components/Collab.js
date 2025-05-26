// src/components/Example.js
import React from 'react';

const logos = [
  { src: '/logos/zrnozrnko.png', alt: 'Zrno Zrnko' },
  { src: '/logos/gala_drones.png', alt: 'Gala Drones' },
  { src: '/logos/centercapital.svg', alt: 'Center Capital' },
  { src: '/logos/caferepublic.png', alt: 'Café Republic' },
  { src: '/logos/Stejkarna_repy.png', alt: 'Stejkarna Řepy' },
];

export default function Example() {
  const total = logos.length;

  return (
    <div className="bg-white py-24 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 justify-items-center items-center">
          {logos.map(({ src, alt }, idx) => {
            const spanClass = total % 2 === 1 && idx === total - 1 ? 'col-span-2 sm:col-span-1' : '';
            return (
              <div
                key={idx}
                className={`w-32 h-12 flex items-center justify-center ${spanClass}`}
              >
                <img
                  src={src}
                  alt={alt}
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
