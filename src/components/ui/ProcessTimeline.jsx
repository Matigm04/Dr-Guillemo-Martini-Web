import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ProcessTimeline = ({ treatment }) => {
  const steps = [
    {
      number: 1,
      title: 'Consulta Inicial',
      description: 'Evaluamos tu caso, discutimos tus objetivos y diseñamos un plan personalizado.',
      duration: '30-45 min',
      icon: '📋'
    },
    {
      number: 2,
      title: 'Preparación',
      description: 'Te explicamos el procedimiento en detalle y preparamos tu piel para el tratamiento.',
      duration: '10-15 min',
      icon: '🧴'
    },
    {
      number: 3,
      title: 'Durante el Tratamiento',
      description: 'Aplicamos la técnica con precisión, cuidado y las mejores prácticas médicas.',
      duration: treatment.duration || '45-60 min',
      icon: '✨'
    },
    {
      number: 4,
      title: 'Inmediatamente Después',
      description: 'Observamos los primeros resultados y te damos las indicaciones de cuidado.',
      duration: '5-10 min',
      icon: '🔍'
    },
    {
      number: 5,
      title: 'Primeras Semanas',
      description: 'Seguimos tu evolución y respondemos cualquier duda que tengas.',
      duration: '1-2 semanas',
      icon: '📱'
    },
    {
      number: 6,
      title: 'Resultados Finales',
      description: 'Evaluamos los resultados completos y planificamos el mantenimiento si es necesario.',
      duration: treatment.results || '2-4 semanas',
      icon: '🎉'
    }
  ];

  return (
    <div className="py-12">
      <h3 className="text-3xl font-serif text-brand-primary mb-8 text-center">
        El Proceso Paso a Paso
      </h3>
      <p className="text-brand-primary/70 text-center mb-12 max-w-2xl mx-auto">
        Te acompañamos en cada etapa del proceso para garantizar tu comodidad y los mejores resultados
      </p>

      <div className="relative">
        {/* Línea vertical del timeline (solo en desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-primary/20 -translate-x-1/2" />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Contenido del paso */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-primary/10 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 md:block">
                    <span className="text-4xl md:hidden">{step.icon}</span>
                    <div>
                      <h4 className="text-xl font-serif text-brand-primary mb-2">
                        {step.title}
                      </h4>
                      <p className="text-brand-primary/70 mb-3 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm">
                        <span className="font-bold">⏱️</span>
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Número del paso (círculo central) */}
              <div className="hidden md:flex items-center justify-center w-20 h-20 flex-shrink-0 relative z-10">
                <div className="w-full h-full bg-brand-primary rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-brand-bg">
                  <span className="text-3xl mb-1">{step.icon}</span>
                  <span className="text-xs text-brand-white font-bold">{step.number}</span>
                </div>
              </div>

              {/* Espaciador para mantener el diseño */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Check final */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-8"
        >
          <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center shadow-xl">
            <Check className="w-8 h-8 text-brand-white" strokeWidth={3} />
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center mt-12 bg-brand-primary/5 p-8 rounded-2xl"
      >
        <p className="text-brand-primary/80 mb-4 text-lg">
          ¿Querés experimentar este proceso personalizado?
        </p>
        <a
          href="/contacto"
          className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-brand-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:scale-105"
        >
          Agendar Mi Consulta
        </a>
      </motion.div>
    </div>
  );
};

export default ProcessTimeline;
