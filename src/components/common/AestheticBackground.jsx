import { memo } from 'react';

const AestheticBackground = memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-brand-bg via-brand-bg to-brand-bg/80">
      {/* 1. TEXTURA DE RUIDO ANALÓGICO */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")` }}>
      </div>

      {/* 2. LUCES ORGÁNICAS ESTÁTICAS - Sin blur, usando opacity y gradientes */}
      {/* Mancha Verde Superior Izquierda */}
      <div 
        className="absolute -top-[15%] left-[5%] w-[65vw] h-[65vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(132, 189, 167, 0.15) 0%, transparent 70%)',
          willChange: 'auto'
        }}
      />

      {/* Mancha Verde Superior Derecha */}
      <div 
        className="absolute -top-[10%] right-[10%] w-[60vw] h-[60vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(157, 192, 139, 0.10) 0%, transparent 70%)',
          willChange: 'auto'
        }}
      />

      {/* Mancha Centro */}
      <div 
        className="absolute top-[35%] left-[15%] w-[55vw] h-[55vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(132, 189, 167, 0.12) 0%, transparent 70%)',
          willChange: 'auto'
        }}
      />

      {/* Destello de Luz inferior */}
      <div 
        className="absolute bottom-[-5%] left-[25%] w-[50vw] h-[50vw] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(240, 242, 238, 0.35) 0%, transparent 70%)',
          willChange: 'auto'
        }}
      />
      
      {/* 3. GRADIENTE VERTICAL DE ARRIBA A ABAJO */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/3 to-brand-primary/8" />
    </div>
  );
});

AestheticBackground.displayName = 'AestheticBackground';

export default AestheticBackground;
