import React from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Performance from './components/sections/Performance';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-gray-100 selection:bg-gold selection:text-black font-sans relative overflow-x-hidden">
      {/* Main Experience Flow */}
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Performance />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
