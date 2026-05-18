import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Facebook, Mail } from 'lucide-react';
import { PineCone } from './BotanicalElements';

export const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-bg-dark text-text-light relative overflow-hidden">
      <div className="absolute inset-0 forest-texture opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gold/30" />
            <span className="font-mono text-gold uppercase tracking-[0.25em] text-xs">SKONTAKTUJ SIĘ</span>
            <div className="h-[1px] w-12 bg-gold/30" />
          </div>
          <h2 className="text-5xl font-display text-center italic">Zacznijmy wspólną historię</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-bg-mid/50 p-8 md:p-12 border border-border-gold rounded-sm backdrop-blur-sm">
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-display mb-8 text-gold-light italic">Dane kontaktowe</h3>
              <div className="space-y-8">
                <a href="tel:662382159" className="flex items-start gap-6 group">
                  <div className="mt-1 p-3 bg-gold/10 rounded-sm border border-gold/20 group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gold/60 uppercase tracking-widest mb-1">Telefon</div>
                    <div className="text-2xl font-display group-hover:text-gold transition-colors">662 382 159</div>
                  </div>
                </a>

                <div className="flex items-start gap-6 group">
                  <div className="mt-1 p-3 bg-gold/10 rounded-sm border border-gold/20">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gold/60 uppercase tracking-widest mb-1">Adres</div>
                    <div className="text-2xl font-display">Mireń 9, Pionki 26-670</div>
                  </div>
                </div>

                <a href="https://www.facebook.com/profile.php?id=61583468397062" target="_blank" rel="noreferrer" className="flex items-start gap-6 group">
                  <div className="mt-1 p-3 bg-gold/10 rounded-sm border border-gold/20 group-hover:bg-gold/20 transition-colors">
                    <Facebook className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gold/60 uppercase tracking-widest mb-1">Social Media</div>
                    <div className="text-2xl font-display group-hover:text-gold transition-colors">Zielony Gaj na Facebooku</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-gold/10">
              <div className="p-6 bg-gold-glow flex items-center justify-center gap-6 rounded-sm">
                 <PineCone className="w-8 h-8 text-gold" />
                 <span className="font-display italic text-lg">Zapraszamy do odwiedzin po wcześniejszym umówieniu telefonicznym.</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-full min-h-[400px] rounded-sm overflow-hidden border border-border-gold grayscale-[30%] hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.040281342359!2d21.48343677707213!3d51.43905411569344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471889a013915cbd%3A0x8799b4ce13ef5b06!2sMire%C5%84%209A%2C%2026-670!5e0!3m2!1spl!2spl!4v1779091980776!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="py-12 bg-bg-darker text-text-light/40 text-center border-t border-gold/5">
    <div className="container mx-auto px-4">
      <div className="mb-8 flex items-center justify-center gap-4 text-gold/20">
        <PineCone className="w-5 h-5" />
        <div className="h-[1px] w-24 bg-current" />
        <PineCone className="w-5 h-5" />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.4em]">© {new Date().getFullYear()} ZIELONY GAJ DOM WESELNY • MIREŃ 9</p>
      <p className="mt-4 font-accent text-lg text-gold/40">Gdzie natura spotyka miłość</p>
    </div>
  </footer>
);
