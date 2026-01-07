import React from 'react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={`
      relative group overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-500
      ${service.highlight 
        ? 'bg-gradient-to-br from-brand-purple/20 to-brand-neon/10 border border-brand-neon/50 shadow-[0_0_30px_rgba(217,70,239,0.15)]' 
        : 'bg-white/5 border border-white/10 hover:border-brand-neon/30 hover:bg-white/10'}
    `}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/20 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="mb-4 inline-block p-3 rounded-lg bg-white/5 text-brand-neon transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-neon/10">
          {service.icon}
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-brand-neon transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-100 transition-colors duration-300">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;