import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { OakLeaf, IvyVine } from './BotanicalElements';

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center gap-4 mb-8">
    <div className="h-[1px] w-12 bg-gold/30" />
    <span className="font-mono text-gold uppercase tracking-[0.25em] text-xs">
      {text}
    </span>
    <div className="h-[1px] w-12 bg-gold/30" />
  </div>
);

const Card = ({ children, isDark = false }: { children: React.ReactNode; isDark?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`relative p-8 rounded-sm overflow-hidden group transition-all duration-300 ${
        isDark 
        ? 'bg-bg-card border border-border-gold hover:shadow-[0_0_20px_rgba(201,168,76,0.15)]' 
        : 'bg-cream border border-green/10 shadow-sm hover:translate-y-[-5px]'
      }`}
    >
      {/* Decorative Ivy for Light Cards */}
      {!isDark && (
        <div className="absolute top-0 right-0 w-16 h-16 text-green/10 -scale-x-100">
           <IvyVine className="w-full h-full" />
        </div>
      )}
      
      {/* Border accent for Dark Cards */}
      {isDark && (
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green to-gold opacity-60" />
      )}

      {children}
    </motion.div>
  );
};

export const Gallery = () => {
  const images = [
    "https://i.postimg.cc/PrtDvGxP/1.png",
    "https://i.postimg.cc/9FW9w3M4/2.png",
    "https://i.postimg.cc/ZYP3qYTr/3.png",
    "https://i.postimg.cc/44vt34Jp/4.png",
    "https://i.postimg.cc/L4kfs4H2/5.png"
  ];

  return (
    <section id="galeria" className="py-24 bg-bg-section">
      <div className="container mx-auto px-4">
        <SectionLabel text="NASZE WIDOKI" />
        <h2 className="text-4xl md:text-5xl font-display text-center mb-16 italic">Magiczny las i eleganckie wnętrza</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-sm group ${
                i === 0 ? 'md:col-span-4 aspect-video' : 
                i === 1 ? 'md:col-span-2 aspect-video md:aspect-[4/5]' :
                'md:col-span-2 aspect-[4/5]'
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={src} 
                alt={`Zielony Gaj image ${i + 1}`} 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-bg-dark/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Info = () => {
  return (
    <section id="o-nas" className="py-24 bg-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <SectionLabel text="ZNAJDŹ NAS" />
            <h2 className="text-5xl font-display mb-8">W sercu podlaskich lasów</h2>
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              Zielony Gaj to dom weselny w Mireniu. Specjalizujemy się w organizacji imprez okolicznościowych do 200 osób, dbając o wyjątkową atmosferę, smaczne menu i obsługę na najwyższym poziomie.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 text-gold mb-2">
                  <OakLeaf className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest">Goście</span>
                </div>
                <div className="text-4xl font-display">Do 200</div>
                <div className="text-xs font-mono text-text-muted mt-1 uppercase">Sala Bankietowa</div>
              </div>
            </div>

            <Card>
              <h3 className="font-display text-2xl italic mb-4">Głos naszych gości</h3>
              <blockquote className="border-l-2 border-gold/40 pl-6 py-2">
                <p className="text-lg italic text-text">"Wszystko na najwyższym poziomie. Gorąco polecam."</p>
                <footer className="mt-4 text-sm font-mono text-gold uppercase tracking-widest">— Opinia z Facebooka</footer>
              </blockquote>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
             {/* Monogram Section */}
             <div className="bg-bg-dark text-text-light p-12 rounded-full w-full aspect-square max-w-[450px] flex flex-col items-center justify-center border-2 border-gold/20 relative">
                <div className="absolute inset-0 forest-texture opacity-10 rounded-full" />
                <motion.div 
                  className="absolute inset-0 border border-gold/10 rounded-full scale-95" 
                  animate={{ scale: [0.95, 1, 0.95] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <div className="text-gold font-display text-2xl mb-1">Zielony</div>
                <div className="text-gold-light font-display text-9xl font-bold leading-none select-none">ZG</div>
                <div className="text-gold font-accent text-5xl mt-[-10px]">Gaj</div>
                <div className="mt-8 px-4 py-2 border-t border-b border-gold/20 text-xs font-mono tracking-[0.3em] uppercase">Mireń 9</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
