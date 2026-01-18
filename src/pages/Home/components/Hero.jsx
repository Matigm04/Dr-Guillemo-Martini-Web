import { useState, useEffect, memo } from 'react';
import './Hero.css';

// Imágenes optimizadas del carrusel (WebP + JPG fallback)
// Original: 12.4MB → Optimizado: 1MB (-91.5%)
const carouselImages = [
  {
    name: 'consultorio-1',
    jpg: '/images/public/Consultorio/1e031684-8aab-4a5e-a56e-15f5d3b74372.jpg',
    alt: 'Consultorio Dr. Guillermo Martini - Instalaciones modernas',
  },
  {
    name: 'consultorio-2',
    jpg: '/images/public/Consultorio/6476a4cf-60b4-4d86-9640-5a5b2f317744.jpg',
    alt: 'Consultorio Dr. Guillermo Martini - Área de tratamiento',
  },
  {
    name: 'consultorio-3',
    jpg: '/images/public/Consultorio/6fc8544c-f6ae-4777-a408-723e9a580150.jpg',
    alt: 'Consultorio Dr. Guillermo Martini - Equipamiento de vanguardia',
  },
  {
    name: 'consultorio-4',
    jpg: '/images/public/Consultorio/IMG_7898.JPG',
    alt: 'Consultorio Dr. Guillermo Martini - Equipamiento de vanguardia',
  },
  {
    name: 'consultorio-5',
    jpg: '/images/public/Consultorio/IMG_7902.JPG',
    alt: 'Consultorio Dr. Guillermo Martini - Equipamiento de vanguardia',
  },
  {
    name: 'consultorio-6',
    jpg: '/images/public/Consultorio/IMG_7908.JPG',
    alt: 'Consultorio Dr. Guillermo Martini - Equipamiento de vanguardia',
  },
  {
    name: 'consultorio-7',
    jpg: '/images/public/Consultorio/IMG_7910.JPG',
    alt: 'Consultorio Dr. Guillermo Martini - Equipamiento de vanguardia',
  },
];

const Hero = memo(() => {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([0]));

  // Preload de la primera imagen
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    if (carouselImages[0].webp) {
      link.href = carouselImages[0].webp[1280];
      link.type = 'image/webp';
    } else {
      link.href = carouselImages[0].jpg;
      link.type = 'image/jpeg';
    }
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // Lógica de Auto-play optimizada (5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % carouselImages.length;
        // Preload próxima imagen
        if (!loadedImages.has(nextIndex)) {
          setLoadedImages(new Set([...loadedImages, nextIndex]));
        }
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [loadedImages]);

  return (
    <section className="relative h-[85vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay oscuro para que el texto resalte */}
      <div className="hero-carousel-container">
        {carouselImages.map((image, i) => (
          <picture
            key={i}
            className={`hero-carousel-picture ${i === index ? 'hero-carousel-visible' : 'hero-carousel-hidden'}`}
            style={{ willChange: i === index || i === (index + 1) % carouselImages.length ? 'opacity' : 'auto' }}
          >
            {image.webp && (
              <source
                type="image/webp"
                srcSet={`
                  ${image.webp[400]} 400w,
                  ${image.webp[640]} 640w,
                  ${image.webp[768]} 768w,
                  ${image.webp[1024]} 1024w,
                  ${image.webp[1280]} 1280w
                `}
                sizes="(max-width: 480px) 400px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1280px"
              />
            )}
            <img
              src={image.jpg}
              alt={image.alt}
              className="hero-carousel-img"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              decoding={i === 0 ? "sync" : "async"}
            />
          </picture>
        ))}
        {/* 🔥 2. EL NUEVO GRADIENTE MÁGICO (Overlay) 🔥 */}
        {/* Esto crea una sombra suave desde abajo hacia arriba para resaltar el texto oscuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#CED4CA]/90 via-[#CED4CA]/60 to-transparent z-10" />
      </div>

      {/* Contenedor de texto centrado */}
      <div className="relative z-20 text-center max-w-5xl px-6">
        {/* LEMA PRINCIPAL */}
        <div className="mb-6 hero-text-fade-in">
          <p className="text-brand-primary text-lg md:text-2xl font-light tracking-[0.3em] uppercase drop-shadow-sm">
            Tu piel, nuestro lienzo
          </p>
        </div>

        {/* NOMBRE DEL DOCTOR */}
        <h1 
          className="text-4xl sm:text-6xl md:text-8xl font-serif text-brand-primary mb-4 italic leading-tight drop-shadow-sm hero-text-fade-in-delayed"
        >
          Dr. Guillermo Martini
        </h1>
        
        {/* TAGLINE */}
        <p 
          className="text-brand-primary/90 text-base md:text-xl font-serif italic drop-shadow-sm hero-text-fade-in-more-delayed"
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
