import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    <nav
      className={`fixed top-0 left-0 w-full transition-all z-20 ${
        scrolling ? 'bg-gray-900 bg-opacity-90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center w-full px-4 md:px-10 py-2">
        {/* Logo */}
        <div className="pl-10 pt-2">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="CineSoar logo"
              width="100"
              style={{ height: 'auto' }}
              className="h-8"
            />
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-6 text-white pr-20">
          <a href="#sluzby" className="hover:text-teal-500 transition-colors text-lg font-semibold">
            Naše služby
          </a>
          <a href="#about" className="hover:text-teal-500 transition-colors text-lg font-semibold">
            O nás
          </a>
          <a href="#kontakt" className="hover:text-teal-500 transition-colors text-lg font-semibold">
            Kontakt
          </a>
          <a
            href="#objednat"
            className="hover:bg-gray-800 hover:text-white transition-colors text-lg font-semibold px-2 py-1 rounded-md"
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
        <div className="md:hidden bg-gray-900 bg-opacity-95 w-full flex flex-col items-center space-y-4 py-4">
          <a
            href="#sluzby"
            onClick={() => setMobileOpen(false)}
            className="text-white text-base font-medium hover:text-teal-500 transition-colors"
          >
            Naše služby
          </a>
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="text-white text-base font-medium hover:text-teal-500 transition-colors"
          >
            O nás
          </a>
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="text-white text-base font-medium hover:text-teal-500 transition-colors"
          >
            Kontakt
          </a>
          <a
            href="#objednat"
            onClick={() => setMobileOpen(false)}
            className="bg-gray-800 hover:bg-teal-500 text-white text-base font-medium px-4 py-2 rounded-md transition-colors"
          >
            Objednat let
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
