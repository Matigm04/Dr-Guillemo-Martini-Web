import { useState, useEffect } from 'react';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 bg-gradient-to-r from-[#D3DBD6]/95 to-[#E6EBE8]/95 backdrop-blur-md shadow-sm border-b border-emerald-900/10 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full h-20 flex justify-between items-center px-6 md:px-12">
        
        {/* LOGO */}
        <div className="h-full flex items-center">
            <a href="/">
            <img 
                src={logo} 
                alt="Dr. Guillermo Martini" 
                className="h-12 md:h-16 w-auto object-contain mix-blend-multiply" 
            />
            </a>
        </div>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] font-bold text-emerald-950">
          <a href="/" className="hover:text-emerald-700 transition-all">Inicio</a>
          <a href="/sobre-nosotros" className="hover:text-emerald-700 transition-all">Nosotros</a>
          <a href="/servicios" className="hover:text-emerald-700 transition-all">Servicios</a>
          <a href="/faqs" className="hover:text-emerald-700 transition-all">FAQ's</a>
          <a href="/contacto" className="hover:text-emerald-700 transition-all">Contacto</a>
        </div>

        {/* MENÚ HAMBURGUESA MOBILE */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-emerald-950 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-emerald-950 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-emerald-950 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* MENÚ MOBILE DESPLEGABLE */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-brand-primary/10 shadow-lg">
          <div className="flex flex-col text-[11px] uppercase tracking-[0.25em] font-bold text-brand-primary/80">
            <a href="/" className="px-6 py-4 hover:bg-brand-bg transition-all border-b border-brand-primary/5">Inicio</a>
            <a href="/sobre-nosotros" className="px-6 py-4 hover:bg-brand-bg transition-all border-b border-brand-primary/5">Nosotros</a>
            <a href="/servicios" className="px-6 py-4 hover:bg-brand-bg transition-all border-b border-brand-primary/5">Servicios</a>
            <a href="/faqs" className="px-6 py-4 hover:bg-brand-bg transition-all border-b border-brand-primary/5">FAQ's</a>
            <a href="/contacto" className="px-6 py-4 hover:bg-brand-bg transition-all">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
