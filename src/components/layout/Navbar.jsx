import { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'INICIO', href: '/' },
  { name: 'NOSOTROS', href: '/sobre-nosotros' },
  { name: 'SERVICIOS', href: '/servicios' },
  { name: 'FAQ\'S', href: '/faqs' },
  { name: 'CONTACTO', href: '/contacto' },
];

const Navbar = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarClasses = "bg-[#F0F2EE]/95 backdrop-blur-md shadow-sm py-3";
  const linkClasses = "text-[#2F3E30] hover:text-[#7A8B56] font-medium text-sm tracking-wide transition-colors duration-300";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClasses}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="relative z-50 group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-12 h-12 md:w-14 md:h-14 relative transition-transform duration-300 group-hover:scale-105">
               <img 
                 src="/images/public/Logo/logo_actual.png"
                 alt="GN Logo"
                 className="w-full h-full object-contain"
               />
            </div>
          </Link>

          {/* MENÚ ESCRITORIO */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} to={link.href} className={linkClasses}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA BOTÓN (Escritorio) */}
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

          {/* BOTÓN HAMBURGUESA MÓVIL */}
          <button 
            className="md:hidden text-[#2F3E30] p-2 relative z-[60]" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL (Renderizado Condicional) */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay de fondo */}
          <div 
            className="fixed inset-0 bg-black/50 z-[48]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Contenedor del menú */}
          <div className="fixed inset-0 z-[49] pointer-events-none">
            <div 
              className="absolute top-0 left-0 right-0 bg-[#F0F2EE] min-h-screen pt-24 pb-12 px-6 overflow-y-auto pointer-events-auto"
            >
              <nav className="flex flex-col items-center gap-8 w-full mt-8">
                {NAV_LINKS.map((link) => (
                  <Link 
                    key={link.href}
                    to={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="text-2xl text-[#2F3E30] hover:text-[#7A8B56] font-semibold tracking-wide transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                
                <a 
                  href="https://wa.me/549351596064"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-6 bg-[#2F3E30] text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl flex items-center gap-3 hover:bg-[#7A8B56] transition-all hover:scale-105"
                >
                  Reservar Turno <ArrowRight size={20}/>
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
