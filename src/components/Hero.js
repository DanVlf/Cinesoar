// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50 pointer-events-none"
      >
        <source src="Timeline.mp4" type="video/mp4" />
      </video>

      {/* Text a tlačítko */}
      <div className="absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 mt-56 text-white animate-fade-in max-w-2xl px-6 md:px-12">
        <h1 className="text-2xl md:text-4xl font-semibold text-shadow-2xl leading-tight tracking-wider">
          CineSoar Drone Tours
        </h1>
        <p className="mt-4 text-base md:text-lg font-normal text-shadow-md opacity-90">
          Nejlepší způsob, jak nahlédnout dovnitř.<br />
          CineSoar zachycuje interiéry pomocí speciálně upravených FPV dronů — plynulé a dynamické záběry jako nikdy předtím.
        </p>
        <a
          href="#player"
          className="mt-6 inline-block bg-white text-black hover:bg-gray-800 hover:text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg transform  transition-all"
        >
          Prozkoumat lety
        </a>
      </div>
    </div>
  );
};

export default Hero;
