import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importar las imágenes del carrusel
import img1 from '../../../assets/carrusel/IMG_7898.JPG';
import img2 from '../../../assets/carrusel/IMG_7902.JPG';
import img3 from '../../../assets/carrusel/IMG_7908.JPG';
import img4 from '../../../assets/carrusel/IMG_7910.JPG';

const images = [img1, img2, img3, img4];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Lógica de Auto-play (5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % images.length;
        console.log('Carrusel - Índice actual:', prev, '→ Siguiente:', nextIndex, '(Total imágenes:', images.length, ')');
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[75vh] w-full flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay oscuro para que el texto resalte */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut"
            }}
            className="w-full h-full object-cover will-change-opacity"
            loading="eager"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 via-transparent to-brand-primary/20" />
      </div>

      {/* Contenedor de texto centrado */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        {/* LEMA PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="text-brand-primary text-lg md:text-2xl font-light tracking-[0.3em] uppercase drop-shadow-[0_2px_6px_rgba(255,255,255,0.9)]">
            Tu piel, nuestro lienzo
          </p>
        </motion.div>

        {/* NOMBRE DEL DOCTOR */}
        <motion.h1 
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl md:text-8xl font-serif text-brand-primary mb-4 italic leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]"
        >
          Dr. Guillermo Martini
        </motion.h1>
        
        {/* TAGLINE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-brand-primary/90 text-base md:text-xl font-serif italic mb-8 drop-shadow-[0_1px_4px_rgba(255,255,255,0.7)]"
        >
          Medicina que renueva tu confianza
        </motion.p>

        {/* BOTÓN CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href="/contacto"
            className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-brand-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Agendar Consulta
          </a>
        </motion.div>
      </div>

      {/* Indicadores de página */}
      <div className="absolute bottom-8 flex gap-3">
        {images.map((_, i) => (
          <div 
            key={i}
            className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-brand-primary' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
