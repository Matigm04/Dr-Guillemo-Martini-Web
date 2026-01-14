import { memo } from 'react';

const AestheticBackground = memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-brand-bg via-brand-bg to-brand-bg/80">
      {/* 1. TEXTURA DE RUIDO ANALÓGICO - OPTIMIZADO */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      {/* 2. MANCHAS ESTÁTICAS (SIN ANIMACIÓN) - MÍNIMO BLUR */}
      <div className="absolute -top-[15%] left-[5%] w-[65vw] h-[65vw] bg-brand-primary/10 blur-[8px] rounded-full" />
      <div className="absolute -top-[10%] right-[10%] w-[60vw] h-[60vw] bg-brand-primary/8 blur-[10px] rounded-full" />
      <div className="absolute top-[35%] left-[15%] w-[55vw] h-[55vw] bg-brand-primary/6 blur-[6px] rounded-full" />
      <div className="absolute bottom-[-5%] left-[25%] w-[50vw] h-[50vw] bg-brand-white/20 blur-[8px] rounded-full" />
      
      {/* 3. GRADIENTE VERTICAL */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/2 to-brand-primary/5" />
    </div>
  );
});

AestheticBackground.displayName = 'AestheticBackground';

export default AestheticBackground;
