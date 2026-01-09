import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Usaremos iconos para dar calidad

const FooterCTA = () => {
  return (
    <section className="bg-brand-bg py-32 px-6 text-center border-t border-brand-primary/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif text-brand-primary mb-8 leading-tight">
          ¿Qué esperás para agendar <span className="italic">tu consulta?</span>
        </h2>
        
        {/* Cambiamos el color a brand-primary con opacidad para que se vea claro */}
        <p className="text-brand-primary/70 text-lg md:text-xl mb-12 font-light">
          Descubrí el tratamiento ideal para vos en una consulta personalizada.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="/galeria" className="text-brand-primary border border-brand-primary/30 px-8 py-4 rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-brand-primary/5 transition-all">
            Ver Galería de Resultados
          </a>
          
          <a href="/contacto" className="bg-brand-primary text-brand-white px-10 py-4 rounded-full text-[11px] uppercase tracking-widest font-bold shadow-xl shadow-brand-primary/20 hover:scale-105 transition-all">
            Contactar ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
