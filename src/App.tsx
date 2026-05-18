import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Gallery, Info } from './components/ContentSections';
import { Contact, Footer } from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Nas', href: '#o-nas' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <div className="min-h-screen bg-bg overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-bg-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="flex flex-col items-center group">
            <span className={`font-display font-bold text-2xl transition-colors duration-300 ${isScrolled ? 'text-gold' : 'text-text-light'}`}>
              ZIELONY <span className="font-accent text-gold">Gaj</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-mono text-xs uppercase tracking-[0.2em] hover:text-gold transition-colors duration-300 ${
                  isScrolled ? 'text-text-light' : 'text-text-light/80'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:662382159" 
              className={`px-6 py-2 border font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                isScrolled 
                ? 'border-gold text-gold hover:bg-gold hover:text-bg-dark' 
                : 'border-white/30 text-white hover:border-gold hover:text-gold'
              }`}
            >
              Zadzwoń
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-bg-dark border-t border-gold/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-2xl text-text-light hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="tel:662382159" 
                  className="text-center py-4 bg-gold text-bg-dark font-display text-xl"
                >
                  Zadzwoń: 662 382 159
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <Hero />
        <Info />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

