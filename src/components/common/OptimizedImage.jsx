/**
 * Componente de Imagen Optimizada para React/Vite
 * Equivalente funcional a next/image pero sin dependencias de Next.js
 * 
 * Características:
 * - Lazy loading nativo del navegador
 * - Decodificación asíncrona para mejor rendimiento
 * - Priorización configurable (eager/lazy)
 * - Placeholder mientras carga
 */

import { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  onLoad,
  draggable = true,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (e) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Placeholder mientras carga */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      
      {/* Imagen optimizada */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchpriority={priority ? "high" : "auto"}
        draggable={draggable}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
