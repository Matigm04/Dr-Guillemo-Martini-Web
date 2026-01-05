"use client"

import { BeforeAfterSlider } from "@/components/before-after-slider"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export function Results() {
  const testimoniosEjemplo = [
    {
      nombre: "María González",
      texto: "Los resultados superaron mis expectativas. El Dr. Martini es muy profesional.",
      rating: 5
    },
    {
      nombre: "Carlos Rodríguez",
      texto: "Me siento mucho más seguro con mi apariencia. Totalmente recomendado.",
      rating: 5
    },
    {
      nombre: "Ana Martínez",
      texto: "El doctor es muy profesional y explica todo el proceso perfectamente.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Resultados <span className="font-serif italic text-emerald-600">Naturales</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Cada rostro cuenta una historia de transformación sutil y elegante.
              Descubre cómo realzamos la belleza natural de nuestros pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Galería de <span className="font-serif italic text-emerald-600">Transformaciones</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Resultados reales de tratamientos realizados en nuestra clínica
            </p>
          </div>
          <BeforeAfterSlider 
            imageBefore="/antes-ejemplo.jpg"
            imageAfter="/despues-ejemplo.jpg"
            alt="Resultado de tratamiento de armonización facial"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Testimonios de <span className="font-serif italic text-emerald-600">Pacientes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              La satisfacción de nuestros pacientes es nuestro mayor logro
            </p>
          </div>
          <TestimonialCarousel testimonios={testimoniosEjemplo} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              ¿Listo para tu transformación?
            </h2>
            <p className="text-xl text-emerald-50 mb-8 font-light">
              Agenda tu consulta personalizada y descubre cómo podemos realzar tu belleza natural
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-white text-emerald-600 px-8 py-4 text-lg font-medium hover:bg-emerald-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
