// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// URL tvého Google Formuláře pro objednávku letu
const orderFormUrl = 'https://forms.gle/HL3eiDnHff1VnMwUA';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all z-20 ${
        scrolling ? 'bg-black bg-opacity-40 shadow-lg' : 'bg-transparent'
      }`}>
      <div className={`${mobileOpen ? 'hidden' : 'flex'} items-center w-full px-4 md:px-10 py-2`}>
        {/* Logo */}
        <div className="pl-10 pt-2">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="CineSoar logo"
              width="50"
              className="h-8"
            />
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-6 text-white pr-20">
          <a href="#sluzby" className="hover:text-gray-900 transition-colors text-lg font-semibold">
            Naše služby
          </a>
          <a href="#about" className="hover:text-gray-900 transition-colors text-lg font-semibold">
            O nás
          </a>
          <a href="#kontakt" className="hover:text-gray-900 transition-colors text-lg font-semibold">
            Kontakt
          </a>
          {/* Objednat let otevírá Google Form v novém okně */}
          <a
            href={orderFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-gray-400 bg-gray-200 text-gray-800 text-lg font-semibold px-4 py-1 rounded-md transition-colors"
          >
            Objednat let
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-end ml-auto text-white"
          onClick={toggleMobile}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center space-y-4 pt-16 z-40">
          {/* Header logo + close */}
          <div className="w-full flex justify-between items-center px-4 absolute top-0 left-0 bg-transparent z-50 pt-4">
            <img
              src="/logo.png"
              alt="CineSoar logo"
              width="40"
              className="h-8"
            />
            <button
              className="text-white p-2 z-50"
              onClick={toggleMobile}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <a
            href="#sluzby"
            onClick={() => setMobileOpen(false)}
            className="text-white text-base font-medium hover:text-gray-900 transition-colors"
          >
            Naše služby
          </a>
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="text-white text-base font-medium hover:text-gray-900 transition-colors"
          >
            O nás
          </a>
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="text-white text-base font-medium hover:text-gray-900 transition-colors"
          >
            Kontakt
          </a>
          {/* Objednat let otevírá Google Form v novém okně */}
          <a
            href={orderFormUrl}
            onClick={() => setMobileOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-gray-400 bg-gray-200 text-gray-800 text-base font-medium px-4 py-2 rounded-md transition-colors"
          >
            Objednat let
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
