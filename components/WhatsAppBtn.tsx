import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const WhatsAppBtn: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 md:w-9 md:h-9" fill="white" />
    </a>
  );
};

export default WhatsAppBtn;