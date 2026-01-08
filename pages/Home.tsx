import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, TrendingUp, Video } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES_DATA } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple/30 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-neon/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              {/* We Are Live Badge */}
              <div className="mb-4 flex justify-center md:justify-start">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-neon/20 border border-brand-neon/50 shadow-[0_0_20px_rgba(217,70,239,0.3)] backdrop-blur-md">
                      <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-neon"></span>
                      </span>
                      <span className="text-xs font-bold tracking-widest text-brand-neon uppercase">We Are Live !</span>
                  </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs md:text-sm font-medium text-gray-300">Accepting New Clients</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
                Monthly <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-purple-400">Creative Services</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
                Designs, Videos, and Websites that grow your brand. 
                Focus on your business while we handle your digital presence.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Button to="/contact">
                  DM Us to Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button to="/services" variant="outline">
                  View Our Work
                </Button>
              </div>
            </div>

            {/* Visual/Image Placeholder */}
            <div className="flex-1 relative w-full max-w-lg animate-float">
               <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-1">
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/40 to-brand-neon/40 mix-blend-overlay z-10"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop" 
                   alt="Social Media Growth" 
                   className="w-full h-full object-cover rounded-[20px]"
                 />
                 
                 {/* Floating Badges */}
                 <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="p-2 bg-brand-neon/20 rounded-lg">
                      <Zap className="w-5 h-5 text-brand-neon" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Growth</p>
                      <p className="text-sm font-bold text-white">+150%</p>
                    </div>
                 </div>

                 <div className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Star className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Quality</p>
                      <p className="text-sm font-bold text-white">Premium</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-400">Everything you need to dominate your market.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.slice(0, 4).map((service) => (
              <Link to={service.id === 'web-dev' ? '/website-development' : '/services'} key={service.id} className="block group">
                <div className="h-full p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-brand-neon/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-4 text-brand-neon group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             {[
               { icon: <TrendingUp />, label: "Client Growth", value: "3x" },
               { icon: <Video />, label: "Videos Edited", value: "500+" },
               { icon: <Star />, label: "Satisfaction", value: "100%" }
             ].map((stat, idx) => (
               <div key={idx} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                 <div className="flex justify-center mb-4 text-brand-neon">
                   {React.cloneElement(stat.icon as React.ReactElement, { size: 40 })}
                 </div>
                 <h3 className="text-4xl font-bold mb-2 text-white">{stat.value}</h3>
                 <p className="text-gray-400">{stat.label}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-brand-purple/20 to-brand-dark">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Ace Your Growth?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join the brands that are scaling up with our creative strategies and development expertise.
          </p>
          <Button to="/contact" className="animate-pulse-slow">
            Start Your Project Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;