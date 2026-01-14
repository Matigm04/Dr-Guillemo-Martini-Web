import { useEffect, useRef, useState } from 'react';

/**
 * Hook para detectar cuando un elemento entra en el viewport
 * Reemplazo ligero de framer-motion whileInView
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  const { 
    threshold = 0.1, 
    rootMargin = '0px', 
    once = true // Por defecto solo anima una vez
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, once]);

  return [ref, isInView];
}

/**
 * Componente wrapper para animaciones al entrar en viewport
 */
export function AnimateOnScroll({ 
  children, 
  className = '', 
  animation = 'fade-up', // fade-up, fade-in, fade-left, fade-right, scale
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true 
}) {
  const [ref, isInView] = useInView({ threshold, once });

  const animationClasses = {
    'fade-up': 'animate-on-scroll-fade-up',
    'fade-in': 'animate-on-scroll-fade-in',
    'fade-left': 'animate-on-scroll-fade-left',
    'fade-right': 'animate-on-scroll-fade-right',
    'scale': 'animate-on-scroll-scale',
  };

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation] || 'animate-on-scroll-fade-up'} ${isInView ? 'is-visible' : ''} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
}

export default useInView;
