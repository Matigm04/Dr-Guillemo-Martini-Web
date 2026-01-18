import { Calendar, Search, Sparkles, Heart } from 'lucide-react';
import SectionHeader from '../../../components/common/SectionHeader';
import { AnimateOnScroll } from '../../../hooks/useInView.jsx';

const ConsultationProcess = () => {
  const steps = [
    {
      number: 1,
      title: 'Consulta Inicial',
      description: 'Conversamos sobre tus objetivos y analizamos tu caso de forma personalizada para diseñar el mejor plan.',
      icon: Calendar,
      color: 'from-brand-primary/20 to-brand-primary/10'
    },
    {
      number: 2,
      title: 'Análisis Personalizado',
      description: 'Evaluamos tu piel, rasgos y necesidades específicas con tecnología de vanguardia.',
      icon: Search,
      color: 'from-brand-primary/30 to-brand-primary/20'
    },
    {
      number: 3,
      title: 'Tratamiento',
      description: 'Aplicamos las técnicas más avanzadas con precisión médica y cuidado profesional.',
      icon: Sparkles,
      color: 'from-brand-primary/40 to-brand-primary/30'
    },
    {
      number: 4,
      title: 'Seguimiento',
      description: 'Te acompañamos después del tratamiento para garantizar resultados óptimos y naturales.',
      icon: Heart,
      color: 'from-brand-primary/50 to-brand-primary/40'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título */}
        <SectionHeader 
          title="Tu Camino a la Mejor Versión"
          subtitle="Un proceso cuidadoso y profesional diseñado para tu comodidad y resultados excepcionales"
        />

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Línea vertical animada (solo desktop) */}
          <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-1 -translate-x-1/2 overflow-hidden z-0">
            <div className="w-full h-full bg-gradient-to-b from-brand-primary/30 to-brand-primary" />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <AnimateOnScroll key={step.number} animation={isEven ? "fade-right" : "fade-left"} delay={index * 150}>
                  <div className="relative">
                    <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${
                      isEven ? '' : 'md:grid-flow-dense'
                    }`}>
                      
                      {/* Contenido */}
                      <div className={`${isEven ? 'md:text-right' : 'md:col-start-2'}`}>
                        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-brand-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          {/* Icono móvil */}
                          <div className="md:hidden flex items-center gap-4 mb-4">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                              <Icon className="w-7 h-7 text-brand-primary" strokeWidth={2} />
                            </div>
                            <span className="text-5xl font-serif text-brand-primary/20">
                              {String(step.number).padStart(2, '0')}
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-serif text-brand-primary mb-4">
                            {step.title}
                          </h3>
                          <p className="text-brand-primary/70 leading-relaxed text-base sm:text-lg">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Círculo central con icono (solo desktop) */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="relative">
                          {/* Fondo que tapa la línea */}
                          <div className="absolute inset-0 w-32 h-32 -left-4 -top-4 rounded-full bg-[#F0F2EE] z-10" />
                          
                          {/* Círculo principal */}
                          <div className={`relative z-20 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} border-4 border-white shadow-xl flex items-center justify-center`}>
                            <Icon className="w-10 h-10 text-brand-primary" strokeWidth={2.5} />
                          </div>

                          {/* Número */}
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center border-2 border-white shadow-md z-30">
                            <span className="text-xs font-bold text-brand-white">
                              {step.number}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Espaciador (solo desktop) */}
                      <div className={`hidden md:block ${isEven ? 'md:col-start-2' : ''}`} />
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-brand-primary/5 to-brand-primary/10 p-10 rounded-3xl max-w-3xl mx-auto">
              <p className="text-brand-primary mb-6 text-xl md:text-2xl font-serif italic font-semibold">
                "Cada consulta es única, cada resultado es natural"
              </p>
              <a
                href="/contacto"
                className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-brand-white px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
              >
                Comenzar Mi Consulta
              </a>
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};

export default ConsultationProcess;
