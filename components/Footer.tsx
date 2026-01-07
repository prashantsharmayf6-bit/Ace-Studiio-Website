import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import { BRAND_NAME, INSTAGRAM_URL, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 border-t border-white/5 py-12 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-16 h-16" />
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-bold text-white leading-none">{BRAND_NAME}</h2>
                <span className="text-xs text-brand-neon tracking-widest mt-1">CREATIVE AGENCY</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Creative • Video • Web</p>
          </div>

          <div className="flex items-center gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-neon transition-colors">
              <Instagram size={24} />
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="text-gray-400 hover:text-brand-neon transition-colors">
              <Mail size={24} />
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="text-gray-400 hover:text-brand-neon transition-colors">
              <Phone size={24} />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end text-sm text-gray-500">
            <Link to="/contact" className="hover:text-white transition-colors mb-1">Contact Us</Link>
            <p>&copy; {new Date().getFullYear()} {BRAND_NAME}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;