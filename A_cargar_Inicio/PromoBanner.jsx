import { useState, memo } from 'react';
import { X, Sparkles, Gift } from 'lucide-react';
import './PromoBanner.css';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const hasActivePromo = true; // Cambiar a false cuando no haya promos
  if (!hasActivePromo || !isVisible) return null;

  const promo = {
    title: 'Especial San Valentín',
    description: '20% OFF en Tratamientos Faciales',
    details:
      'Aprovechá esta promoción especial para lucir radiante. Válido para tratamientos de Limpieza Facial Pro y Armonización Facial.',
    validUntil: '14 de Febrero',
    terms: [
      'Promoción válida hasta el 14 de febrero de 2026',
      'No acumulable con otras promociones',
      'Turnos sujetos a disponibilidad',
      'Consultá términos y condiciones en el consultorio',
    ],
  };

  const whatsappNumber = '5493518596064';
  const whatsappMessage = `Hola, quiero más información sobre la promoción de ${promo.title}`;

  return (
    <>
      {isVisible && (
        <div className="promo-banner-slide-down fixed top-20 md:top-24 left-1/2 -translate-x-1/2 z-[90] w-full max-w-4xl px-4 md:px-6">
          <div className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative p-4 md:p-6 flex items-center gap-3 md:gap-6">
              <div className="hidden md:flex items-center justify-center w-20 h-20 bg-white/20 rounded-full flex-shrink-0">
                <Gift className="w-10 h-10 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <span className="text-white/90 text-sm font-bold uppercase tracking-wider">Promoción Especial</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{promo.title}</h3>
                <p className="text-white text-lg mb-3">{promo.description}</p>
                <p className="text-white/80 text-sm">Válido hasta el {promo.validUntil}</p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-white hover:bg-white/90 text-red-600 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-105"
                >
                  Ver Detalles
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white/80 hover:text-white text-xs underline"
                >
                  Cerrar
                </button>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="md:hidden absolute top-3 right-3 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm promo-modal-fade-in"
          />

          <div className="promo-modal-scale-in relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 p-8 text-white">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Gift className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-white/90 text-sm uppercase tracking-wider mb-1">Promoción Especial</p>
                  <h2 className="text-4xl font-serif">{promo.title}</h2>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-serif text-brand-primary mb-3">{promo.description}</h3>
                <p className="text-brand-primary/70 text-lg leading-relaxed">{promo.details}</p>
              </div>

              <div className="bg-brand-primary/5 p-6 rounded-2xl mb-6">
                <h4 className="text-sm uppercase tracking-wider text-brand-primary/60 font-bold mb-3">Términos y Condiciones</h4>
                <ul className="space-y-2 text-brand-primary/70">
                  {promo.terms.map((term, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-brand-primary mt-1">•</span>
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-center px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:scale-105"
                >
                  Agendar Turno
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border-2 border-brand-primary/20 text-brand-primary text-center px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary/5 transition-all"
                >
                  Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(PromoBanner);
