import React, { useState } from 'react';
import { Phone, Mail, Instagram, Send, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { PHONE_NUMBER, EMAIL_ADDRESS, INSTAGRAM_URL } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend.
    // For this static demo, we'll create a mailto link.
    const subject = `Inquiry about ${formData.service} from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to take your brand to the next level? Fill out the form or reach out directly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="flex-1 order-2 lg:order-1 space-y-8">
             <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="p-3 bg-brand-purple/20 rounded-full group-hover:bg-brand-neon/20 transition-colors">
                      <Phone className="w-6 h-6 text-brand-neon" />
                    </div>
                    <span className="text-lg font-medium tracking-wide">+91 {PHONE_NUMBER}</span>
                  </a>

                  <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="p-3 bg-brand-purple/20 rounded-full group-hover:bg-brand-neon/20 transition-colors">
                      <Mail className="w-6 h-6 text-brand-neon" />
                    </div>
                    <span className="text-lg font-medium">{EMAIL_ADDRESS}</span>
                  </a>

                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                     <div className="p-3 bg-brand-purple/20 rounded-full group-hover:bg-brand-neon/20 transition-colors">
                      <Instagram className="w-6 h-6 text-brand-neon" />
                    </div>
                    <span className="text-lg font-medium">@acestudiio06</span>
                  </a>
                  
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="p-3 bg-brand-purple/20 rounded-full">
                      <MapPin className="w-6 h-6 text-brand-neon" />
                    </div>
                    <span className="text-lg font-medium">India</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="flex-1 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon text-white placeholder-gray-600 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon text-white placeholder-gray-600 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon text-white transition-all appearance-none cursor-pointer"
                >
                  <option value="Web Development">Website Development</option>
                  <option value="Social Media">Social Media Posts</option>
                  <option value="Reels">Reels & Videos</option>
                  <option value="Branding">Brand Consistency</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon text-white placeholder-gray-600 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="w-full bg-brand-neon hover:bg-brand-neon/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-neon/25 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;