import { motion } from 'framer-motion';
import { Calendar, Search, Sparkles, Heart } from 'lucide-react';
import SectionHeader from '../../../components/common/SectionHeader';

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
          <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-1 -translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full bg-gradient-to-b from-brand-primary/30 to-brand-primary"
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${
                    isEven ? '' : 'md:grid-flow-dense'
                  }`}>
                    
                    {/* Contenido */}
                    <div className={`${isEven ? 'md:text-right' : 'md:col-start-2'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-brand-primary/10 shadow-lg hover:shadow-xl transition-shadow"
                      >
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
                      </motion.div>
                    </div>

                    {/* Círculo central con icono (solo desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.15 + 0.3,
                          type: 'spring',
                          stiffness: 200
                        }}
                        className="relative"
                      >
                        {/* Anillo exterior */}
                        <div className="absolute inset-0 w-24 h-24 rounded-full bg-brand-primary/10 animate-pulse" />
                        
                        {/* Círculo principal */}
                        <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${step.color} border-4 border-brand-white shadow-xl flex items-center justify-center`}>
                          <Icon className="w-10 h-10 text-brand-primary" strokeWidth={2.5} />
                        </div>

                        {/* Número */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center border-2 border-brand-white shadow-md">
                          <span className="text-xs font-bold text-brand-white">
                            {step.number}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Espaciador (solo desktop) */}
                    <div className={`hidden md:block ${isEven ? 'md:col-start-2' : ''}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
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
        </motion.div>

      </div>
    </section>
  );
};

export default ConsultationProcess;
