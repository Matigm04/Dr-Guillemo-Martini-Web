import { useState, useEffect, memo } from 'react';
import './Hero.css';

// Imágenes optimizadas del carrusel (WebP + JPG fallback)
// Original: 12.4MB → Optimizado: 1MB (-91.5%)
const carouselImages = [
  {
    name: 'IMG_7898',
    webp: {
      400: '/src/assets/carrusel/IMG_7898-400w.webp',
      640: '/src/assets/carrusel/IMG_7898-640w.webp',
      768: '/src/assets/carrusel/IMG_7898-768w.webp',
      1024: '/src/assets/carrusel/IMG_7898-1024w.webp',
      1280: '/src/assets/carrusel/IMG_7898-1280w.webp',
    },
    jpg: '/src/assets/carrusel/IMG_7898-1280w.jpg',
    alt: 'Dr. Guillermo Martini - Consultorio de Medicina Estética',
  },
  {
    name: 'IMG_7902',
    webp: {
      400: '/src/assets/carrusel/IMG_7902-400w.webp',
      640: '/src/assets/carrusel/IMG_7902-640w.webp',
      768: '/src/assets/carrusel/IMG_7902-768w.webp',
      1024: '/src/assets/carrusel/IMG_7902-1024w.webp',
      1280: '/src/assets/carrusel/IMG_7902-1280w.webp',
    },
    jpg: '/src/assets/carrusel/IMG_7902-1280w.jpg',
    alt: 'Tratamientos de armonización facial',
  },
  {
    name: 'IMG_7908',
    webp: {
      400: '/src/assets/carrusel/IMG_7908-400w.webp',
      640: '/src/assets/carrusel/IMG_7908-640w.webp',
      768: '/src/assets/carrusel/IMG_7908-768w.webp',
      1024: '/src/assets/carrusel/IMG_7908-1024w.webp',
      1280: '/src/assets/carrusel/IMG_7908-1280w.webp',
    },
    jpg: '/src/assets/carrusel/IMG_7908-1280w.jpg',
    alt: 'Medicina estética avanzada',
  },
  {
    name: 'IMG_7910',
    webp: {
      400: '/src/assets/carrusel/IMG_7910-400w.webp',
      640: '/src/assets/carrusel/IMG_7910-640w.webp',
      768: '/src/assets/carrusel/IMG_7910-768w.webp',
      1024: '/src/assets/carrusel/IMG_7910-1024w.webp',
      1280: '/src/assets/carrusel/IMG_7910-1280w.webp',
    },
    jpg: '/src/assets/carrusel/IMG_7910-1280w.jpg',
    alt: 'Resultados naturales y duraderos',
  },
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
      <div className="hero-carousel-container">
        <picture
          key={index}
          className="hero-carousel-picture hero-carousel-fade"
        >
          <source
            type="image/webp"
            srcSet={`
              ${carouselImages[index].webp[400]} 400w,
              ${carouselImages[index].webp[640]} 640w,
              ${carouselImages[index].webp[768]} 768w,
              ${carouselImages[index].webp[1024]} 1024w,
              ${carouselImages[index].webp[1280]} 1280w
            `}
            sizes="(max-width: 480px) 400px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1280px"
          />
          <img
            src={carouselImages[index].jpg}
            alt={carouselImages[index].alt}
            className="hero-carousel-img"
            loading={index === 0 ? "eager" : "lazy"}
            fetchpriority={index === 0 ? "high" : "low"}
            decoding={index === 0 ? "sync" : "async"}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 via-transparent to-brand-primary/20" />
      </div>

      {/* Contenedor de texto centrado */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        {/* LEMA PRINCIPAL */}
        <div className="mb-6 hero-text-fade-in">
          <p className="text-brand-primary text-lg md:text-2xl font-light tracking-[0.3em] uppercase drop-shadow-[0_2px_6px_rgba(255,255,255,0.9)]">
            Tu piel, nuestro lienzo
          </p>
        </div>

        {/* NOMBRE DEL DOCTOR */}
        <h1 
          className="text-4xl sm:text-6xl md:text-8xl font-serif text-brand-primary mb-4 italic leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)] hero-text-fade-in-delayed"
        >
          Dr. Guillermo Martini
        </h1>
        
        {/* TAGLINE */}
        <p 
          className="text-brand-primary/90 text-base md:text-xl font-serif italic drop-shadow-[0_1px_4px_rgba(255,255,255,0.7)] hero-text-fade-in-more-delayed"
        >
          Medicina que renueva tu confianza
        </p>
      </div>

      {/* Indicadores de página */}
      <div className="absolute bottom-8 flex gap-3">
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
