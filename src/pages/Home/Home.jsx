import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Hero from './components/Hero';
import FloatingContact from '../../components/common/FloatingContact';
import AestheticBackground from '../../components/common/AestheticBackground';
import LazyRender from '../../components/common/LazyRender';
import { 
  FooterSkeleton, 
  InstagramSkeleton, 
  TreatmentsSkeleton 
} from '../../components/common/Skeletons';

// Lazy load de componentes pesados (reduce bundle inicial ~40%)
const ConsultationProcess = lazy(() => import('./components/ConsultationProcess'));
const FeaturedServices = lazy(() => import('./components/FeaturedServices'));
const CallToAction = lazy(() => import('./components/CallToAction'));
const InstagramStories = lazy(() => import('../../components/ui/InstagramStories'));
// PromoBanner carga con delay de 4s para no interferir con LCP
const PromoBanner = lazy(() => 
  new Promise(resolve => {
    // Defer load until well after LCP measurement (~4s)
    setTimeout(() => {
      import('../../components/ui/PromoBanner').then(resolve);
    }, 4000);
  })
);
const Footer = lazy(() => import('../../components/layout/Footer'));

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <AestheticBackground />
      <Navbar />
      
      <main>
        {/* SECCIÓN 1 (IMPAR): Hero - Fondo #F0F2EE (por defecto en Navbar/Hero) */}
        <section className="bg-[#F0F2EE]">
          {/* Hero se carga inmediatamente - crítico para FCP/LCP */}
          <Hero />
          
          {/* PromoBanner se renderiza DESPUÉS del Hero para no bloquear LCP */}
          <Suspense fallback={null}>
            <PromoBanner />
          </Suspense>
        </section>
        
        {/* SECCIÓN 2 (PAR): Proceso - Fondo blanco */}
        <section className="bg-white">
          <LazyRender 
            placeholder={<TreatmentsSkeleton />}
            rootMargin="200px"
          >
            <Suspense fallback={<TreatmentsSkeleton />}>
              <ConsultationProcess />
            </Suspense>
          </LazyRender>
        </section>
        
        {/* SECCIÓN 3 (IMPAR): Servicios - Fondo #F0F2EE */}
        <section className="bg-[#F0F2EE]">
          <LazyRender 
            placeholder={<div className="h-screen bg-brand-white/50"></div>}
            rootMargin="200px"
          >
            <Suspense fallback={<div className="h-screen bg-brand-white/50"></div>}>
              <FeaturedServices />
            </Suspense>
          </LazyRender>
        </section>
        
        {/* SECCIÓN 4 (PAR): CTA - Fondo blanco */}
        <section className="bg-white">
          <LazyRender rootMargin="150px">
            <Suspense fallback={<div className="h-64 bg-brand-green/5"></div>}>
              <CallToAction />
            </Suspense>
          </LazyRender>
        </section>
        
        {/* SECCIÓN 5 (IMPAR): Instagram - Fondo #F0F2EE */}
        <section className="bg-[#F0F2EE]">
          <LazyRender 
            placeholder={<InstagramSkeleton />}
            rootMargin="150px"
          >
            <Suspense fallback={<InstagramSkeleton />}>
              <InstagramStories />
            </Suspense>
          </LazyRender>
        </section>
      </main>

      <FloatingContact />

      {/* Footer solo se carga cuando está cerca */}
      <LazyRender 
        placeholder={<FooterSkeleton />}
        rootMargin="100px"
      >
        <Suspense fallback={<FooterSkeleton />}>
          <Footer />
        </Suspense>
      </LazyRender>
    </div>
  );
};

export default Home;
