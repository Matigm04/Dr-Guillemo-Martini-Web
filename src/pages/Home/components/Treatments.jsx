import { motion } from 'framer-motion';
import { useState, useEffect, memo, useCallback } from 'react';
import BounceCards from '../../../components/ui/BounceCards';

// Datos de tratamientos
const treatments = [
  {
    id: 1,
    title: "Limpieza Facial Pro",
    description: "Un tratamiento profundo que elimina impurezas y devuelve el brillo natural a tu piel con tecnología de punta.",
    images: [
      "https://images.unsplash.com/photo-1570172027484-6d3b030e71c1?q=80&w=600",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600",
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600"
    ]
  },
  {
    id: 2,
    title: "Armonización Facial",
    description: "Buscamos el equilibrio perfecto de tus rasgos resaltando tu belleza natural de forma sutil y elegante.",
    images: [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600",
      "https://images.unsplash.com/photo-1526758097130-bab247274f58?q=80&w=600",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=600"
    ]
  },
  {
    id: 3,
    title: "Rellenos Dérmicos",
    description: "Volumen natural y rejuvenecimiento mediante técnicas avanzadas de ácido hialurónico.",
    images: [
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=600",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600",
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=600"
    ]
  },
  {
    id: 4,
    title: "Bioestimulación",
    description: "Estimula la producción de colágeno para una piel firme, luminosa y rejuvenecida desde dentro.",
    images: [
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=600",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600"
    ]
  }
];

const transformStyles3 = [
  'rotate(5deg) translate(-100px)',
  'rotate(-3deg)',
  'rotate(4deg) translate(100px)'
];

const Treatments = memo(() => {
  const [cardDimensions, setCardDimensions] = useState({ width: 450, height: 280 });

  const updateDimensions = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) {
      setCardDimensions({ width: 320, height: 200 });
    } else if (width < 768) {
      setCardDimensions({ width: 400, height: 240 });
    } else {
      setCardDimensions({ width: 450, height: 280 });
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    
    // Debounce para resize
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 150);
    };

    window.addEventListener('resize', debouncedResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedResize);
    };
  }, [updateDimensions]);

  return (
    <section className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-primary italic mb-4">
            Nuestros Tratamientos
          </h2>
          <p className="text-brand-primary/70 text-base md:text-lg max-w-2xl mx-auto">
            Descubrí la excelencia en medicina estética con procedimientos personalizados
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px", amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col items-center"
            >
              {/* BounceCards */}
              <div className="mb-8 w-full flex justify-center">
                <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px]">
                  <BounceCards
                    className="treatment-bounce-cards"
                    images={treatment.images}
                    containerWidth={cardDimensions.width}
                    containerHeight={cardDimensions.height}
                    animationDelay={0.5 + index * 0.2}
                    animationStagger={0.08}
                    easeType="elastic.out(1, 0.5)"
                    transformStyles={transformStyles3}
                    enableHover={true}
                  />
                </div>
              </div>

              {/* Información */}
              <div className="text-center max-w-md">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-primary italic mb-4">
                  {treatment.title}
                </h3>
                <div className="w-16 h-0.5 bg-brand-primary/40 mx-auto mb-4" />
                <p className="text-brand-primary/70 leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});

Treatments.displayName = 'Treatments';

export default Treatments;
