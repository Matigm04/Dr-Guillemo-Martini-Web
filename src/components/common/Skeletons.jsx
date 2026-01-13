/**
 * Skeleton component para el Footer
 */
export const FooterSkeleton = () => (
  <div className="bg-brand-primary/5 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <div className="h-6 bg-brand-primary/10 rounded w-32"></div>
            <div className="h-4 bg-brand-primary/10 rounded w-full"></div>
            <div className="h-4 bg-brand-primary/10 rounded w-3/4"></div>
            <div className="h-4 bg-brand-primary/10 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/**
 * Skeleton component para Instagram Stories
 */
export const InstagramSkeleton = () => (
  <div className="py-20 px-6 bg-gradient-to-b from-brand-white to-brand-bg">
    <div className="max-w-7xl mx-auto">
      <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-brand-primary/10 shadow-lg animate-pulse">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-6 h-6 bg-brand-primary/10 rounded-full"></div>
          <div className="h-6 bg-brand-primary/10 rounded w-48"></div>
        </div>
        
        <div className="h-4 bg-brand-primary/10 rounded w-3/4 mx-auto mb-8"></div>

        <div className="flex justify-center">
          <div className="w-full max-w-[540px] h-[600px] bg-brand-primary/10 rounded-2xl"></div>
        </div>

        <div className="text-center mt-6">
          <div className="h-12 bg-brand-primary/10 rounded-full w-56 mx-auto"></div>
        </div>
      </div>
    </div>
  </div>
);

/**
 * Skeleton component para Tratamientos
 */
export const TreatmentsSkeleton = () => (
  <div className="py-20 bg-brand-white">
    <div className="max-w-7xl mx-auto px-6 animate-pulse">
      <div className="text-center mb-16">
        <div className="h-12 bg-brand-primary/10 rounded w-96 mx-auto mb-4"></div>
        <div className="h-4 bg-brand-primary/10 rounded w-2/3 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 md:gap-20">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-full max-w-[450px] h-[280px] bg-brand-primary/10 rounded-2xl mb-8"></div>
            <div className="space-y-3 w-full max-w-md text-center">
              <div className="h-8 bg-brand-primary/10 rounded w-64 mx-auto"></div>
              <div className="h-1 bg-brand-primary/10 rounded w-16 mx-auto"></div>
              <div className="h-4 bg-brand-primary/10 rounded w-full"></div>
              <div className="h-4 bg-brand-primary/10 rounded w-5/6 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="h-12 bg-brand-primary/10 rounded-full w-56 mx-auto"></div>
      </div>
    </div>
  </div>
);

/**
 * Skeleton genérico para secciones
 */
export const SectionSkeleton = ({ height = '400px' }) => (
  <div className="w-full bg-brand-primary/5 animate-pulse" style={{ height }}>
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="space-y-4">
        <div className="h-8 bg-brand-primary/10 rounded w-3/4"></div>
        <div className="h-4 bg-brand-primary/10 rounded w-full"></div>
        <div className="h-4 bg-brand-primary/10 rounded w-5/6"></div>
      </div>
    </div>
  </div>
);
