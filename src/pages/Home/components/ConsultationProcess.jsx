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
    <section className="py-20 bg-gradient-to-b from-white to-brand-primary/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Título */}
        <SectionHeader 
          title="Tu Camino a la Mejor Versión"
          subtitle="Un proceso cuidadoso y profesional diseñado para tu comodidad y resultados excepcionales"
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mt-16">
          
          {/* Línea vertical central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-brand-primary/20">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="w-full bg-brand-primary/40"
            />
          </div>

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative grid grid-cols-2 gap-8 items-center min-h-[200px]"
                >
                  {/* Contenido Left */}
                  {isLeft && (
                    <div className="pr-12 text-right">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-primary/10 shadow-md hover:shadow-lg transition-all"
                      >
                        <h3 className="text-2xl font-serif text-brand-primary mb-2">
                          {step.title}
                        </h3>
                        <p className="text-brand-primary/60 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  )}

                  {/* Espacio vacío cuando el contenido está a la derecha */}
                  {!isLeft && <div />}

                  {/* Icono Central */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      {/* Círculo del icono */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 flex items-center justify-center shadow-lg border-2 border-white">
                        <Icon className="w-9 h-9 text-brand-primary" strokeWidth={1.5} />
                      </div>
                      
                      {/* Número dentro del círculo */}
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white text-sm font-bold shadow-md">
                        {step.number}
                      </div>
                    </motion.div>
                  </div>

                  {/* Contenido Right */}
                  {!isLeft && (
                    <div className="pl-12">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-primary/10 shadow-md hover:shadow-lg transition-all"
                      >
                        <h3 className="text-2xl font-serif text-brand-primary mb-2">
                          {step.title}
                        </h3>
                        <p className="text-brand-primary/60 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-brand-primary/70 italic font-serif text-lg mb-6">
            "Cada consulta es única, cada resultado es natural"
          </p>
          <button className="px-8 py-3 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-primary/90 transition-colors shadow-lg hover:shadow-xl">
            COMENZAR MI CONSULTA
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationProcess;
