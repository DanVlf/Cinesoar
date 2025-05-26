// src/components/Footer.js
import React from 'react';
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-700 text-sm py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col items-center md:items-start mb-4 md:mb-0 space-y-1">
          <a href="tel:+420123456789" className="flex items-center hover:text-gray-500">
            <FaPhoneAlt className="mr-2" />
            +420 123 456 789
          </a>
          <a href="mailto:info@cinesoar.cz" className="flex items-center hover:text-gray-500">
            <FaEnvelope className="mr-2" />
            info@cinesoar.cz
          </a>
        </div>

        {/* Copyright text */}
        <div className="flex-1 text-center mb-4 md:mb-0">
          <p>&copy; 2025 CineSoar. Všechna práva vyhrazena.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex-1 flex justify-center md:justify-end space-x-6">
          <a href="https://maps.app.goo.gl/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
            <FaMapMarkerAlt size={20} />
          </a>
          <a href="https://instagram.com/cinesoar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
