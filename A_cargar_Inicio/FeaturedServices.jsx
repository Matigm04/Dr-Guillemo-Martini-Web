import { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { featuredServices } from '../../../data/featuredServices';
import SectionHeader from '../../../components/common/SectionHeader';

const FeaturedServices = memo(() => {
  const [activeService, setActiveService] = useState(featuredServices[0]);
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Experiencia Personalizada"
          title="Servicios Destacados"
          description="Descubrí los tratamientos más solicitados, diseñados para realzar tu belleza natural"
        />

        {/* Interactive List Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-16">
          {/* Left: Service Names List */}
          <div className="space-y-2">
            {featuredServices.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                className="group relative"
              >
                <button
                  className={`
                    w-full text-left py-6 px-8 transition-all duration-500 ease-out
                    border-l-4 
                    ${activeService.id === service.id 
                      ? 'border-brand-primary bg-brand-primary/5 opacity-100' 
                      : 'border-transparent opacity-30 hover:opacity-60'
                    }
                  `}
                >
                  {/* Number Badge */}
                  <span className="inline-block text-xs font-sans font-semibold text-brand-primary/40 mb-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Service Name - Changes to Serif Italic on hover */}
                  <h3 
                    className={`
                      text-2xl md:text-3xl transition-all duration-300
                      ${activeService.id === service.id 
                        ? 'font-serif italic text-brand-primary font-normal' 
                        : 'font-sans font-semibold text-brand-primary'
                      }
                    `}
                  >
                    {service.name}
                  </h3>

                  {/* Category Badge */}
                  <span className={`
                    inline-block mt-2 text-xs uppercase tracking-wider font-sans font-medium
                    transition-opacity duration-300
                    ${activeService.id === service.id ? 'opacity-70' : 'opacity-0'}
                  `}>
                    {service.category}
                  </span>

                  {/* Short Description - Only visible when active */}
                  <p className={`
                    mt-3 text-sm leading-relaxed font-sans transition-all duration-300
                    ${activeService.id === service.id 
                      ? 'opacity-80 max-h-20' 
                      : 'opacity-0 max-h-0 overflow-hidden'
                    }
                  `}>
                    {service.shortDescription}
                  </p>
                </button>
              </div>
            ))}
          </div>

          {/* Right: Floating Image with Crossfade */}
          <div className="relative hidden lg:block">
            <div className="sticky top-24">
              {/* Image Container with Elegant Shadow */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                {featuredServices.map((service) => (
                  <div
                    key={service.id}
                    className={`
                      absolute inset-0 transition-opacity duration-700 ease-in-out
                      ${activeService.id === service.id ? 'opacity-100' : 'opacity-0'}
                    `}
                  >
                    <img
                      src={service.preview}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-transparent"></div>
                  </div>
                ))}

                {/* Floating Service Name on Image */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-3xl font-serif italic text-white drop-shadow-lg">
                    {activeService.name}
                  </h4>
                  <p className="text-sm text-white/90 mt-2 font-sans">
                    {activeService.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          {/* Text Block */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg md:text-xl font-serif italic text-brand-primary leading-relaxed">
              Explorá nuestra carta completa de más de 30 procedimientos diseñados para tu bienestar
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={() => navigate('/servicios')}
            className="
              group relative inline-flex items-center justify-center
              px-12 py-5 
              font-sans font-semibold text-base uppercase tracking-wider
              text-brand-white bg-brand-primary
              rounded-full
              overflow-hidden
              transition-all duration-300
              hover:scale-105 hover:shadow-2xl
              active:scale-95
            "
          >
            {/* Button Background Animation */}
            <span className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-primary/80 transition-transform duration-500 group-hover:scale-110"></span>
            
            {/* Arrow Icon SVG */}
            <svg 
              className="relative w-5 h-5 mr-3 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            
            <span className="relative">Ver Todos Los Servicios</span>
          </button>

          {/* Additional Info */}
          <p className="mt-6 text-sm font-sans text-brand-primary/60">
            + 30 procedimientos especializados | Consulta personalizada gratuita
          </p>
        </div>
      </div>
    </section>
  );
});

FeaturedServices.displayName = 'FeaturedServices';

export default FeaturedServices;
