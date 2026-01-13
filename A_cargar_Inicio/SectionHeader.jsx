import { memo } from 'react';
import './SectionHeader.css';

/**
 * SectionHeader - Componente estandarizado para títulos de sección
 * Garantiza consistencia tipográfica en toda la aplicación
 * 
 * @param {string} title - Título principal (Serif, Italic, brand-primary)
 * @param {string} subtitle - Subtítulo descriptivo (Sans-serif, grisáceo)
 * @param {string} titleSize - Tamaño del título (default: 'text-4xl sm:text-5xl md:text-6xl')
 * @param {boolean} animated - Activar animación CSS (default: true)
 * @param {React.ReactNode} children - Contenido adicional (ej: decorador, línea separadora)
 */
const SectionHeader = memo(({
  title,
  subtitle,
  description,
  titleSize = 'text-4xl sm:text-5xl md:text-6xl',
  animated = true,
  children
}) => {
  const content = (
    <div className="text-center mb-16">
      <h2 className={`${titleSize} font-serif text-brand-primary italic leading-tight mb-6`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-brand-primary/70 max-w-3xl mx-auto font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-base md:text-lg text-brand-primary/60 max-w-2xl mx-auto font-sans leading-relaxed mt-4">
          {description}
        </p>
      )}
      {children}
    </div>
  );

  return (
    <div className={animated ? 'section-header-fade-in' : ''}>
      {content}
    </div>
  );
});

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
