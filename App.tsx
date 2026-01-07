import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import Home from './pages/Home';
import Services from './pages/Services';
import WebDev from './pages/WebDev';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// NotFound Component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center flex-col text-center px-4 animate-fade-in-up">
    <h1 className="text-6xl font-bold text-brand-neon mb-4">404</h1>
    <p className="text-xl text-gray-400 mb-8">Page not found.</p>
    <a href="/" className="bg-brand-purple text-white px-6 py-3 rounded-full hover:bg-brand-neon transition-colors">Go Home</a>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <div key={location.pathname} className="animate-fade-in-up w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/website-development" element={<WebDev />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-dark text-white font-sans antialiased selection:bg-brand-neon selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow flex flex-col">
          <AnimatedRoutes />
        </main>
        <WhatsAppBtn />
        <Footer />
      </div>
    </Router>
  );
};

export default App;