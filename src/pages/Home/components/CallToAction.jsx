import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="relative bg-brand-green py-20 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-green-dark rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            ¿Lista para tu transformación?
          </h2>
          <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto">
            Agenda tu consulta personalizada y descubre cómo podemos realzar tu belleza natural.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a href="/contacto" className="bg-white text-brand-green px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-xl">
              Reservar Turno
            </a>
            <a href="/galeria" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-green transition-colors">
              Ver Galería
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
