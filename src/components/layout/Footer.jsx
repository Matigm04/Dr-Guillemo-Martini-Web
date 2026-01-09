import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-brand-white">
      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          
          {/* Columna izquierda - Información del doctor */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4">
              Dr. Guillermo <span className="italic">Martini</span>
            </h3>
            <p className="text-brand-white/80 mb-6 leading-relaxed">
              Medicina Estética en Córdoba. Botox - Rellenos - Bioestimuladores - PRP - Armonizaciones - Endolifting
            </p>
            
            {/* Iconos sociales */}
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/dr.guillermomartini/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-brand-white/30 flex items-center justify-center hover:bg-brand-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:dr.guillermomartini@gmail.com"
                className="w-10 h-10 rounded-full border-2 border-brand-white/30 flex items-center justify-center hover:bg-brand-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna derecha - Contacto */}
          <div className="md:pl-16 lg:pl-60">
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <div className="space-y-3 text-brand-white/80">
              <p>
                <a href="tel:+5493518596064" className="hover:text-brand-white transition-colors">
                  +54 9 3518 59-6064
                </a>
              </p>
              <p>
                <a href="mailto:dr.guillermomartini@gmail.com" className="hover:text-brand-white transition-colors">
                  dr.guillermomartini@gmail.com
                </a>
              </p>
              <p>Leopoldo Lugones 168, Córdoba Capital</p>
              <p>Lun, Mar, Mie, Vie: 10:00-19:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-brand-white/10 py-6">
        <p className="text-center text-brand-white/60 text-sm">
          © 2026 Dr. Guillermo Martini. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
