import { useState } from 'react';
import { Plus } from 'lucide-react';

const BeforeAfterCard = ({ caseData, onOpenDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-brand-primary/10 hover:border-brand-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* CONTENEDOR DE IMAGEN */}
      <div 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full overflow-hidden select-none"
      >
        {/* Imagen Antes - Por defecto */}
        <img 
          src={caseData.beforeImg} 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" 
          alt="Antes" 
        />
        
        {/* Imagen Después - Se muestra al hacer hover */}
        <img 
          src={caseData.afterImg} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          alt="Después" 
        />

        {/* Badges */}
        <div className={`absolute top-4 left-4 bg-brand-primary/70 backdrop-blur-md text-[10px] font-bold tracking-widest px-3 py-1 rounded-full border border-brand-white/20 text-brand-white transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          ANTES
        </div>
        <div className={`absolute top-4 right-4 bg-brand-primary backdrop-blur-md text-[10px] font-bold tracking-widest px-3 py-1 rounded-full border border-brand-white/20 text-brand-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          DESPUÉS
        </div>
      </div>

      {/* INFO Y BOTÓN "MÁS LINDO" */}
      <div className="p-4 sm:p-6 md:p-8 text-center">
        <h3 className="text-xl sm:text-2xl font-serif mb-3 md:mb-4 text-brand-primary italic">{caseData.title}</h3>
        
        <button 
          onClick={() => onOpenDetails(caseData)}
          className="relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-brand-primary text-brand-primary font-bold text-[11px] uppercase tracking-[0.2em] overflow-hidden group/btn transition-all hover:text-brand-white"
        >
          <span className="absolute inset-0 bg-brand-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
          <span className="relative z-10">Ver Caso Completo</span>
          <Plus className="relative z-10 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterCard;