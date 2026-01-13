import { useEffect, useRef, useState } from 'react';

/**
 * Componente que renderiza children solo cuando entra en el viewport
 * Usa Intersection Observer para detectar visibilidad
 */
const LazyRender = ({ 
  children, 
  placeholder = null, 
  rootMargin = '100px',
  threshold = 0.01,
  triggerOnce = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && containerRef.current) {
              observer.unobserve(containerRef.current);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [rootMargin, threshold, triggerOnce]);

  return (
    <div ref={containerRef}>
      {isVisible ? children : placeholder}
    </div>
  );
};

export default LazyRender;
