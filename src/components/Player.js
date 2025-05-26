// src/components/VideoPlayer.js
import React, { useState, useEffect, useRef } from 'react';

const videos = [
    {
      src: '/web1.mp4',
      title: 'Tropical Paradise',
      description: 'Dive into vibrant sunsets and swaying palms in a lush coastal haven.',
    },
    {
      src: '/web6.mp4',
      title: 'Deep Forest',
      description: 'Wander among towering pines and misty canopies in an ancient woodland.',
    },
    {
      src: '/web2.mp4',
      title: 'Natural Waterfall',
      description: 'Listen to cascading water carving paths through untouched boulders.',
    },
    {
      src: '/web5.mp4',
      title: 'City Flyover',
      description: 'Witness urban life pulsing below from neon-lit streets to skyscraper tops.',
    },
    {
      src: '/web7.mp4',
      title: 'Mountain Peaks',
      description: 'Ascend to snowy summits bathed in golden light above the clouds.',
    },
];

export default function VideoPlayer() {
  const [current, setCurrent] = useState(0);
  const { src, title, description } = videos[current];
  const [typedDesc, setTypedDesc] = useState('');
  const videoRef = useRef(null);

  // Typing effect
  useEffect(() => {
    setTypedDesc('');
    let index = 0;
    const interval = setInterval(() => {
      setTypedDesc(prev => prev + description.charAt(index));
      index++;
      if (index >= description.length) clearInterval(interval);
    }, 10);
    return () => clearInterval(interval);
  }, [description]);

  const prev = () => setCurrent(i => (i === 0 ? videos.length - 1 : i - 1));
  const next = () => setCurrent(i => (i === videos.length - 1 ? 0 : i + 1));

  // Auto-advance when video ends
  const handleEnded = () => {
    next();
  };

  return (
    <section className="py-12 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Video Container */}
        <div className="w-full lg:w-2/3 bg-gray-900 rounded-xl overflow-hidden shadow-lg relative">
          <div className="relative pb-[56.25%] bg-black">
            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-20 pointer-events-none" />
            <video
              ref={videoRef}
              key={src}
              src={src}
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
              autoPlay
              muted
              playsInline
              onEnded={handleEnded}
              controls={false}
            />
            {/* arrows */}
            <button
              onClick={() => { prev(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-50 p-3 rounded-full z-10"
              aria-label="Previous video"
            >
              ‹
            </button>
            <button
              onClick={() => { next(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-50 p-3 rounded-full z-10"
              aria-label="Next video"
            >
              ›
            </button>
            {/* title overlay */}
            <div className="absolute bottom-4 left-4 z-10">
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