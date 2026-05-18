import { motion } from 'motion/react';
import React from 'react';
import { Wreath, Deer } from './BotanicalElements';

interface FireflyProps {
  delay: number;
  key?: React.Key;
}

const Firefly = ({ delay }: FireflyProps) => (
  <motion.div
    className="absolute w-1 h-1 bg-gold-light rounded-full blur-[1px]"
    initial={{ opacity: 0, x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
    animate={{
      opacity: [0, 0.8, 0],
      y: [null, '-=20'],
      x: [null, `+=${(Math.random() - 0.5) * 50}`]
    }}
    transition={{
      duration: 3 + Math.random() * 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  />
);

export const Hero = () => {
  const title = "ZIELONY GAJ";
  const subtitle = "Dom weselny w Mireniu";

  return (
    <section className="relative h-screen bg-bg-dark flex items-center justify-center overflow-hidden">
      {/* Texture & Background elements */}
      <div className="absolute inset-0 forest-texture opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg-dark/50 to-bg-dark" />
      
      {/* Animated Deer */}
      <motion.div
        className="absolute bottom-20 left-[-10%] text-white/5 w-64 h-64 pointer-events-none"
        animate={{ x: '120vw' }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        <Deer className="w-full h-full" />
      </motion.div>

      {/* Rotating Wreath */}
      <div className="absolute flex items-center justify-center">
        <motion.div 
          className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] text-green-light/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <Wreath className="w-full h-full" />
        </motion.div>
      </div>

      {/* Fireflies */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <Firefly key={i} delay={i * 0.4} />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-text-light font-display font-bold leading-tight" style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)' }}>
            {title.split(' ').map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4 last:mr-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.8 }}
              >
                {word === 'GAJ' ? <span className="font-accent text-gold">{word}</span> : word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            className="text-gold-light font-display italic text-2xl md:text-3xl mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            {subtitle}
          </motion.p>

          <motion.div 
            className="mt-12 flex flex-col md:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <a href="#kontakt" className="px-8 py-4 bg-gold text-bg-dark font-medium rounded-sm hover:bg-gold-light transition-colors duration-300">
              Zaplanuj Wesele
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583468397062" target="_blank" rel="noreferrer" className="px-8 py-4 border border-gold text-gold font-medium rounded-sm hover:bg-gold/10 transition-colors duration-300">
              Odwiedź Facebook
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/0 via-gold to-gold/0" />
      </motion.div>
    </section>
  );
};
