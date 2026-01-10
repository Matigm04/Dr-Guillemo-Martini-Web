import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // DEFINICIÓN DE ESTILO PERMANENTE
  // Usamos bg-[#F0F2EE]/90 para el color crema con transparencia
  // backdrop-blur-md para el efecto de vidrio borroso
  // shadow-sm para separarlo sutilmente del contenido
  const navbarClasses = "bg-[#F0F2EE]/90 backdrop-blur-md shadow-sm py-3";

  const linkClasses = "text-[#2F3E30] hover:text-[#7A8B56] font-medium text-sm tracking-wide transition-colors duration-300";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClasses}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">

          {/* 1. LOGO (Izquierda) */}
          <a href="/" className="relative z-50 group">
            <div className="w-12 h-12 md:w-14 md:h-14 relative transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/images/public/Logo/logo_actual.png" 
                alt="Dr. Guillermo Martini"
                className="w-full h-full object-contain"
              />
            </div>
          </a>

          {/* 2. MENÚ ESCRITORIO (Centro) */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className={linkClasses}>INICIO</a>
            <a href="/sobre-nosotros" className={linkClasses}>NOSOTROS</a>
            <a href="/servicios" className={linkClasses}>SERVICIOS</a>
            <a href="/faqs" className={linkClasses}>FAQ'S</a>
            <a href="/contacto" className={linkClasses}>CONTACTO</a>
          </nav>

          {/* 3. CTA (Derecha) - Botón Agendar */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/549351596064"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2F3E30] text-[#F0F2EE] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#7A8B56] transition-colors duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              Agendar Cita <ArrowRight size={14} />
            </a>
          </div>

          {/* 4. HAMBURGUESA MÓVIL (Derecha Mobile) */}
          <button 
            className="md:hidden text-[#2F3E30] z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MENÚ MÓVIL DESPLEGABLE --- */}
      <div className={`fixed inset-0 bg-[#F0F2EE] z-40 transform transition-transform duration-500 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-center p-6">
          <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-[#2F3E30]">INICIO</a>
          <a href="/servicios" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-[#2F3E30]">SERVICIOS</a>
          <a href="/sobre-nosotros" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-[#2F3E30]">NOSOTROS</a>
          <a href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-[#2F3E30]">CONTACTO</a>
          <a href="/faqs" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-[#2F3E30]">FAQ'S</a>
          
          <a 
            href="https://wa.me/549351596064"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 bg-[#2F3E30] text-white px-8 py-3 rounded-full text-lg hover:bg-[#7A8B56] transition-colors duration-300 shadow-xl"
          >
            Reservar Turno
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
