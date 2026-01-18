import Hero from '../src/pages/Home/components/Hero';
import ConsultationProcess from '../src/pages/Home/components/ConsultationProcess';
import FeaturedServices from '../src/pages/Home/components/FeaturedServices';
import CallToAction from '../src/pages/Home/components/CallToAction';
import InstagramStories from '../src/components/ui/InstagramStories';

// This is the App Router Page component that implements the "Zebra" styling
export default function Page() {
  return (
    <main className="w-full">
      {/* SECCIÓN 1 (IMPAR): Hero - Fondo Crema Marca (#F0F2EE) */}
      <section className="bg-[#F0F2EE]">
        <Hero />
      </section>

      {/* SECCIÓN 2 (PAR): Proceso - Fondo Blanco */}
      <section className="bg-white">
        <ConsultationProcess />
      </section>

      {/* SECCIÓN 3 (IMPAR): Servicios - Fondo Crema Marca (#F0F2EE) */}
      <section className="bg-[#F0F2EE]">
        <FeaturedServices />
      </section>

      {/* SECCIÓN 4 (PAR): CTA - Fondo Blanco */}
      <section className="bg-white">
        <CallToAction />
      </section>

      {/* SECCIÓN 5 (IMPAR): Instagram - Fondo Crema Marca (#F0F2EE) */}
      <section className="bg-[#F0F2EE]">
        <InstagramStories />
      </section>
    </main>
  );
}
