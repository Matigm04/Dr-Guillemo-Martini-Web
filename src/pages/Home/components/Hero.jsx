import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

// Imágenes originales (manteniendo las importaciones actuales)
import img1 from '../../../assets/carrusel/IMG_7898.JPG';
import img2 from '../../../assets/carrusel/IMG_7902.JPG';
import img3 from '../../../assets/carrusel/IMG_7908.JPG';
import img4 from '../../../assets/carrusel/IMG_7910.JPG';

const carouselImages = [
  { jpg: img1, alt: 'Dr. Guillermo Martini - Consultorio de Medicina Estética' },
  { jpg: img2, alt: 'Tratamientos de armonización facial' },
  { jpg: img3, alt: 'Medicina estética avanzada' },
  { jpg: img4, alt: 'Resultados naturales y duraderos' },
];

const Hero = memo(() => {
  const [index, setIndex] = useState(0);

  // Lógica de Auto-play (5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % carouselImages.length;
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay oscuro para que el texto resalte */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === index ? 1 : 0,
              transform: 'translate3d(0, 0, 0)',
              willChange: i === index ? 'opacity' : 'auto'
            }}
          >
            <img
              src={img.jpg}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              decoding={i === 0 ? "sync" : "async"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 via-transparent to-brand-primary/20" />
      </div>

      {/* Contenedor de texto centrado */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        {/* LEMA PRINCIPAL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-serif text-brand-primary mb-4 italic leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]"
        >
          Dr. Guillermo Martini
        </motion.h1>
        
        {/* TAGLINE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-brand-primary/90 text-base md:text-xl font-serif italic mb-8 drop-shadow-[0_1px_4px_rgba(255,255,255,0.7)]"
        >
          Medicina que renueva tu confianza
        </motion.p>
      </div>

      {/* Indicadores de página */}
      <div className="absolute bottom-8 flex gap-3 z-20">
        {carouselImages.map((_, i) => (
          <div 
            key={i}
            className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-brand-primary' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
