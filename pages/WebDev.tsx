import React from 'react';
import { CheckCircle, Code, Rocket, Smartphone, ShieldCheck, Zap } from 'lucide-react';
import Button from '../components/Button';

const WebDev: React.FC = () => {
  const benefits = [
    { icon: <Smartphone />, title: 'Mobile-First Design', desc: 'Looks perfect on every device, from iPhone to desktop.' },
    { icon: <Rocket />, title: 'Blazing Fast', desc: 'Optimized for speed to keep bounce rates low and SEO high.' },
    { icon: <Code />, title: 'Modern Tech Stack', desc: 'Built with React, Vite, and Tailwind for future-proof code.' },
    { icon: <ShieldCheck />, title: 'Secure & Reliable', desc: 'Deployed on Vercel with global CDN and SSL built-in.' },
  ];

  const types = [
    'Business Websites',
    'High-Converting Landing Pages',
    'Creative Portfolios',
    'E-commerce Storefronts',
    'Event Pages'
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Hero */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20 mb-6 text-brand-neon text-sm font-bold">
              <Zap size={16} /> FEATURED SERVICE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Websites that <br />
              <span className="text-brand-neon">Convert & Perform</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Don't settle for slow templates. Get a custom-built, high-performance website tailored to your business goals.
            </p>
            <Button to="/contact">Get Your Website Built</Button>
          </div>
          
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 aspect-video group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-transparent z-10"></div>
              <img 
                src="https://picsum.photos/800/450?random=2" 
                alt="Web Development Code" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                   <div className="flex gap-1">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <div className="h-2 w-32 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="text-brand-neon mb-4">
                {React.cloneElement(benefit.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* What We Build */}
        <div className="bg-gradient-to-br from-brand-purple/20 to-black rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">What We Build</h2>
              <ul className="space-y-4">
                {types.map((type, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                    <CheckCircle className="text-brand-neon w-6 h-6" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 text-center md:text-right">
              <h3 className="text-2xl font-bold text-white mb-4">Why Vercel?</h3>
              <p className="text-gray-400 mb-8 max-w-md ml-auto">
                We deploy on Vercel to ensure your site has 99.99% uptime, global edge caching, and instant loading speeds anywhere in the world.
              </p>
              <Button to="/contact" variant="outline">Start Project</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebDev;