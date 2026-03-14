import React from 'react';
import { ExternalLink, Globe, Palette, Video, Layout, Instagram } from 'lucide-react';
import Button from '../components/Button';
import { INSTAGRAM_URL } from '../constants';

const PORTFOLIO_ITEMS = [
  {
    title: 'Ezyflow',
    category: 'Website Development',
    description: 'A modern workflow automation platform built for efficiency and scale.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.ezyflow.in',
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: 'Brand Identity Showcase',
    category: 'Instagram Post',
    description: 'Visual storytelling through consistent brand aesthetics and typography.',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop',
    link: INSTAGRAM_URL,
    icon: <Instagram className="w-5 h-5" />
  },
  {
    title: 'Motion Graphics Reel',
    category: 'Instagram Reel',
    description: 'Dynamic motion graphics designed to stop the scroll and engage viewers.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    link: INSTAGRAM_URL,
    icon: <Instagram className="w-5 h-5" />
  },
  {
    title: 'Creative Campaign',
    category: 'Instagram Post',
    description: 'Strategic content series focused on product launches and brand awareness.',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop',
    link: INSTAGRAM_URL,
    icon: <Instagram className="w-5 h-5" />
  },
  {
    title: 'Social Media Strategy',
    category: 'Instagram Post',
    description: 'Comprehensive content planning and engagement growth strategies.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    link: INSTAGRAM_URL,
    icon: <Instagram className="w-5 h-5" />
  },
  {
    title: 'Visual Content Creation',
    category: 'Instagram Post',
    description: 'High-impact visuals designed for maximum brand impact on social feeds.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
    link: INSTAGRAM_URL,
    icon: <Instagram className="w-5 h-5" />
  },
  {
    title: 'Digital Storytelling',
    category: 'Instagram Reel',
    description: 'Narrative-driven short videos that connect brands with their audience.',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop',
    link: INSTAGRAM_URL,
    icon: <Instagram className="w-5 h-5" />
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-purple/10 blur-[120px] -z-10"></div>
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-purple-400">Portfolio</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our latest projects where creativity meets technology. 
            We help brands stand out in the digital landscape.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <div 
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-neon/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-brand-neon flex items-center gap-2">
                    {item.icon}
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-neon transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-neon transition-colors"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-brand-purple/20 to-brand-dark">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with our expert design and development services.
          </p>
          <Button to="/contact">
            Let's Talk
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
