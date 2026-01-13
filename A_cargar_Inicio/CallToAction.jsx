import { motion } from 'framer-motion';
import SectionHeader from '../../../components/common/SectionHeader';

const CallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-primary/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <SectionHeader 
          title={
            <>
              Descubrí todo lo que podemos hacer <span className="italic">por vos</span>
            </>
          }
          subtitle="Explorá nuestra amplia gama de tratamientos personalizados diseñados para realzar tu belleza natural."
          titleSize="text-4xl md:text-5xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a href="/servicios" className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-brand-white px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
            Ver Todos los Servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
