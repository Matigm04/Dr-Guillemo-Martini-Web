import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { featuredServices } from '../../../data/featuredServices';
import SectionHeader from '../../../components/common/SectionHeader';

const FeaturedServices = memo(() => {
  const displayedServices = featuredServices.slice(0, 3);
  const [activeService, setActiveService] = useState(displayedServices[0]);
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-brand-primary/5 to-white">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-4">
            Servicios Destacados
          </h2>
          <p className="text-lg text-brand-primary/60 font-light">
            Experiencia Personalizada
          </p>
          <p className="text-sm text-brand-primary/50 mt-2 max-w-2xl mx-auto">
            Descubrí los tratamientos más solicitados, diseñados para realzar tu belleza natural
          </p>
        </div>

        {/* Two Column Layout: List + Image */}
        <div className="grid lg:grid-cols-[1fr_450px] gap-12 lg:gap-16 items-start">
          
          {/* Left: Service Cards List */}
          <div className="space-y-6 pb-32">
            {displayedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveService(service)}
                onClick={() => setActiveService(service)}
                className="group relative cursor-pointer"
              >
                <div
                  className={`
                    relative overflow-hidden rounded-2xl transition-all duration-500
                    ${activeService.id === service.id 
                      ? 'bg-white shadow-xl border-2 border-brand-primary/20' 
                      : 'bg-white/60 shadow-md border-2 border-transparent hover:border-brand-primary/10'
                    }
                  `}
                >
                  <div className="p-8">
                    {/* Number Badge */}
                    <span className={`
                      inline-block text-xs font-sans font-semibold mb-2 tracking-wider transition-colors duration-300
                      ${activeService.id === service.id ? 'text-brand-primary' : 'text-brand-primary/40'}
                    `}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Service Name */}
                    <h3 
                      className={`
                        text-3xl mb-3 transition-all duration-300
                        ${activeService.id === service.id 
                          ? 'font-serif italic text-brand-primary' 
                          : 'font-sans font-medium text-brand-primary/70'
                        }
                      `}
                    >
                      {service.name}
                    </h3>

                    {/* Category Badge */}
                    <span className={`
                      inline-block px-3 py-1 text-xs uppercase tracking-wider font-sans font-medium rounded-full mb-3 transition-all duration-300
                      ${activeService.id === service.id 
                        ? 'text-brand-primary bg-brand-primary/10' 
                        : 'text-brand-primary/40 bg-brand-primary/5'}
                    `}>
                      {service.category}
                    </span>

                    {/* Description - Expandable */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: activeService.id === service.id ? 'auto' : 0,
                        opacity: activeService.id === service.id ? 1 : 0
                      }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-brand-primary/60 leading-relaxed pt-2">
                        {service.shortDescription}
                      </p>
                    </motion.div>
                  </div>

                  {/* Bottom Border Indicator */}
                  <motion.div
                    initial={false}
                    animate={{
                      scaleX: activeService.id === service.id ? 1 : 0
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary/50 to-brand-primary origin-left"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Sticky Image Container */}
          <div className="hidden lg:block">
            <div className="sticky top-32 max-h-[calc(100vh-10rem)]">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Images with Crossfade - Optimizado sin motion */}
                {displayedServices.map((service) => (
                  <div
                    key={service.id}
                    className="absolute inset-0 transition-opacity duration-600 ease-in-out"
                    style={{
                      opacity: activeService.id === service.id ? 1 : 0,
                      pointerEvents: activeService.id === service.id ? 'auto' : 'none'
                    }}
                  >
                    <img
                      src={service.preview}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 via-transparent to-transparent" />
                  </div>
                ))}

                {/* Active Service Label on Image - Simplificado */}
                <div className="absolute bottom-8 left-8 right-8 text-white transition-opacity duration-400">
                  <p className="font-serif italic text-3xl drop-shadow-lg">
                    {activeService.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FeaturedServices;
