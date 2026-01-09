import { motion } from 'framer-motion';
import { Award, Users, Heart, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Excelencia Profesional',
    description: 'Médico especialista con certificaciones internacionales en medicina estética y tratamientos faciales avanzados.'
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Cada tratamiento es diseñado específicamente para tus necesidades y objetivos estéticos únicos.'
  },
  {
    icon: Heart,
    title: 'Cuidado Integral',
    description: 'Acompañamiento completo desde la consulta inicial hasta el seguimiento post-tratamiento.'
  },
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description: 'Utilizamos solo productos aprobados y técnicas respaldadas por evidencia científica.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white/80 to-brand-bg/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-4">
            ¿Por Qué <span className="italic text-brand-primary">Elegirnos</span>?
          </h2>
          <p className="text-brand-primary/70 text-base md:text-lg max-w-3xl mx-auto px-4 leading-relaxed">
            Nuestro objetivo es realzar tu belleza natural utilizando las técnicas más avanzadas en medicina estética, 
            siempre priorizando tu seguridad y satisfacción.
          </p>
        </motion.div>

        {/* Grid de razones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-gradient-to-br from-white/90 to-brand-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-brand-primary/5 hover:border-brand-primary/20"
            >
              {/* Ícono con fondo circular verde oscuro */}
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-brand-primary group-hover:bg-brand-primary/90 transition-colors duration-300 mx-auto">
                <reason.icon className="w-9 h-9 text-brand-white" strokeWidth={1.5} />
              </div>

              {/* Contenido */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-brand-primary mb-4 font-serif">
                  {reason.title}
                </h3>
                <p className="text-brand-primary/70 text-sm md:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
