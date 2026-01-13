import { memo } from 'react';
import { motion } from 'framer-motion';

const AestheticBackground = memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-brand-bg via-brand-bg to-brand-bg/80">
      {/* 1. TEXTURA DE RUIDO ANALÓGICO (Crucial para eliminar lo "liso") */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")` }}>
      </div>

      {/* 2. LUCES ORGÁNICAS EN MOVIMIENTO (Mesh Gradient) - Optimizado para performance */}
      {/* Mancha Verde Superior Izquierda - BLUR REDUCIDO */}
      <motion.div 
        animate={{ 
          x: [0, 60, -30, 0],
          y: [0, 25, -15, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        style={{ willChange: 'transform' }}
        className="absolute -top-[15%] left-[5%] w-[65vw] h-[65vw] bg-brand-primary/15 blur-[40px] rounded-full"
      />

      {/* Mancha Verde Superior Derecha - BLUR REDUCIDO */}
      <motion.div 
        animate={{ 
          x: [0, -60, 30, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        style={{ willChange: 'transform' }}
        className="absolute -top-[10%] right-[10%] w-[60vw] h-[60vw] bg-brand-secondary/10 blur-[45px] rounded-full"
      />

      {/* Mancha Centro - ESTÁTICA para reducir carga */}
      <div 
        className="absolute top-[35%] left-[15%] w-[55vw] h-[55vw] bg-brand-primary/12 blur-[35px] rounded-full"
      />

      {/* Destello de Luz inferior - BLUR REDUCIDO */}
      <div className="absolute bottom-[-5%] left-[25%] w-[50vw] h-[50vw] bg-brand-white/35 blur-[30px] rounded-full opacity-50" />
      
      {/* 3. GRADIENTE VERTICAL DE ARRIBA A ABAJO */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/3 to-brand-primary/8" />
    </div>
  );
});

AestheticBackground.displayName = 'AestheticBackground';

export default AestheticBackground;
