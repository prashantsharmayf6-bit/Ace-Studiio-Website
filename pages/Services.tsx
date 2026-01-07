import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../constants';
import Button from '../components/Button';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-400 text-lg">
            We provide a comprehensive suite of creative and technical services designed to elevate your brand in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-20">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white/5 rounded-3xl p-8 md:p-16 border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-400">Simple, transparent, and effective.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your goals and brand vision.' },
              { step: '02', title: 'Creation', desc: 'Our team designs, edits, and develops.' },
              { step: '03', title: 'Delivery', desc: 'You get premium assets ready to publish.' }
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="text-6xl font-bold text-white/5 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10 text-brand-neon">{item.title}</h3>
                <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <Button to="/contact">Get a Quote</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;