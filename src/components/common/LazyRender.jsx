import { useEffect, useRef, useState, memo } from 'react';

/**
 * Componente optimizado que renderiza children solo cuando entra en el viewport
 * Usa Intersection Observer para detectar visibilidad
 */
const LazyRender = memo(({ 
  children, 
  placeholder = null, 
  rootMargin = '100px',
  threshold = 0.01,
  triggerOnce = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observerRef.current?.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [rootMargin, threshold, triggerOnce]);

  return (
    <div ref={containerRef}>
      {isVisible ? children : placeholder}
    </div>
  );
});

LazyRender.displayName = 'LazyRender';

export default LazyRender;
