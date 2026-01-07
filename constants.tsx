import React from 'react';
import { NavLink } from './types';
import { Instagram, Smartphone, Globe, Palette, Video, Layout } from 'lucide-react';

export const BRAND_NAME = "ACE STUDIIO";
export const TAGLINE = "Ace Your Growth";
export const PHONE_NUMBER = "6381798761";
export const EMAIL_ADDRESS = "acestudiio60@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/acestudiio06?igsh=eHhnYnB4YngyeDI2";
export const WHATSAPP_URL = "https://wa.me/916381798761?text=Hi%20ACE%20STUDIIO%2C%20I%20am%20interested%20in%20your%20creative%20and%20website%20development%20services.";

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Website Development', path: '/website-development' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES_DATA = [
  {
    id: 'social-media',
    title: 'Social Media Posts',
    description: 'High-quality, engaging static designs tailored for your brand identity to boost engagement.',
    icon: <Palette className="w-8 h-8 text-brand-neon" />,
    highlight: false
  },
  {
    id: 'reels',
    title: 'Reels & Short Videos',
    description: 'Dynamic short-form video content designed to capture attention and go viral.',
    icon: <Video className="w-8 h-8 text-brand-neon" />,
    highlight: false
  },
  {
    id: 'branding',
    title: 'Brand Consistency',
    description: 'Unified visual language across all platforms to build trust and recognition.',
    icon: <Layout className="w-8 h-8 text-brand-neon" />,
    highlight: false
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Blazing fast, SEO-optimized websites built with React and modern technologies.',
    icon: <Globe className="w-8 h-8 text-brand-neon" />,
    highlight: true
  }
];