import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const InstagramStories = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-brand-white to-brand-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Widget oficial de Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-brand-primary/10 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Instagram className="w-6 h-6 text-brand-primary" />
              <h3 className="text-2xl font-serif text-brand-primary italic">
                Seguinos en Instagram
              </h3>
            </div>
            
            <p className="text-center text-brand-primary/70 mb-8 max-w-2xl mx-auto">
              Descubrí más contenido exclusivo, tips de cuidado y resultados reales en nuestro perfil de Instagram
            </p>

            <div className="flex justify-center overflow-hidden">
              <iframe
                src="https://www.instagram.com/dr.guillermomartini/embed"
                width="100%"
                height="700"
                style={{ maxWidth: '540px' }}
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                className="rounded-2xl shadow-lg"
                title="Instagram Widget Dr. Guillermo Martini"
              ></iframe>
            </div>

            <div className="text-center mt-6">
              <a
                href="https://www.instagram.com/dr.guillermomartini/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-primary text-brand-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-bold hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20"
              >
                <Instagram className="w-5 h-5" />
                Ver perfil completo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramStories;
