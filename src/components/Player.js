// src/components/VideoPlayer.js
import React, { useState, useEffect } from 'react';

const videos = [
  {
    src: 'https://tecdn.b-cdn.net/img/video/Tropical.mp4',
    title: 'Tropical Paradise',
    description: 'Experience a vibrant tropical getaway with lush landscapes and turquoise waters.',
  },
  {
    src: 'https://tecdn.b-cdn.net/img/video/forest.mp4',
    title: 'Deep Forest',
    description: 'Immerse yourself in the serene beauty of towering trees and gentle forest sounds.',
  },
  {
    src: 'https://tecdn.b-cdn.net/img/video/Agua-natural.mp4',
    title: 'Natural Waterfall',
    description: 'Feel the power of nature as crystal-clear water cascades over rugged rocks.',
  },
];

export default function VideoPlayer() {
  const [current, setCurrent] = useState(0);
  const { src, title, description } = videos[current];

  const [typedDesc, setTypedDesc] = useState('');

  // Typing effect
  useEffect(() => {
    setTypedDesc('');
    let index = 0;
    const interval = setInterval(() => {
      setTypedDesc((prev) => prev + description.charAt(index));
      index++;
      if (index >= description.length) {
        clearInterval(interval);
      }
    }, 15); // adjust speed (ms) per character
    return () => clearInterval(interval);
  }, [description]);

  const prev = () => setCurrent((i) => (i === 0 ? videos.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === videos.length - 1 ? 0 : i + 1));

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Video Container */}
        <div className="w-full lg:w-2/3 bg-gray-900 rounded-xl overflow-hidden shadow-lg relative">
          <div className="relative pb-[56.25%] bg-black">
            <div className="absolute inset-0 bg-black opacity-20" />
            <video
              key={src}
              src={src}
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-50 p-3 rounded-full"
              aria-label="Previous video"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-50 p-3 rounded-full"
              aria-label="Next video"
            >
              ›
            </button>
            <div className="absolute bottom-4 left-4">
              <h2 className="text-xl md:text-2xl font-semibold text-white bg-black bg-opacity-60 px-3 py-1 rounded">
                {title}
              </h2>
            </div>
          </div>
        </div>

        {/* Text Description with typing effect */}
        <div className="w-full lg:w-1/3 p-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-700 mb-6 h-20">
            {typedDesc}
            <span className="border-r-2 border-gray-700 animate-pulse ml-1" />
          </p>
        </div>
      </div>
    </section>
  );
}
