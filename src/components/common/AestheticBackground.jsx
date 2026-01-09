import { motion } from 'framer-motion';

const AestheticBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-brand-bg">
      {/* 1. TEXTURA DE RUIDO ANALÓGICO (Crucial para eliminar lo "liso") */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")` }}>
      </div>

      {/* 2. LUCES ORGÁNICAS EN MOVIMIENTO (Mesh Gradient) */}
      {/* Mancha Verde Bosque */}
      <motion.div 
        animate={{ 
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-brand-primary/15 blur-[120px] rounded-full"
      />

      {/* Mancha Verde Oliva */}
      <motion.div 
        animate={{ 
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.3, 1.1, 1] 
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] bg-brand-secondary/10 blur-[150px] rounded-full"
      />

      {/* Destello de Luz clara */}
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-brand-white/40 blur-[100px] rounded-full opacity-50" />
      
      {/* Manchas adicionales para más profundidad */}
      <motion.div 
        animate={{ 
          x: [0, 60, -30, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.15, 1.05, 1] 
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-[10%] w-[45vw] h-[45vw] bg-brand-primary/8 blur-[130px] rounded-full"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -70, 35, 0],
          y: [0, 90, -45, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[30%] w-[40vw] h-[40vw] bg-brand-white/20 blur-[110px] rounded-full"
      />
      
      {/* 3. CAPA DE GRADIENTE VIGNETTE (Para centrar la atención) */}
      <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-transparent to-brand-primary/5" />
    </div>
  );
};

export default AestheticBackground;
