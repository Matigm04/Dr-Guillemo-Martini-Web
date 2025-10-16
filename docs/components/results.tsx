"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function Results() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const beforeAfter = [
    {
      before: "/before-facial-masculinization-treatment-male-face.png",
      after: "/after-facial-masculinization-treatment-defined-jaw.png",
      treatment: "Masculinización Facial",
      description: "Definición de mandíbula y mentón con ácido hialurónico",
    },
    {
      before: "/before-collagen-biostimulator-treatment-aging-face.png",
      after: "/after-collagen-biostimulator-treatment-rejuvenated.png",
      treatment: "Bioestimuladores PLLA",
      description: "Rejuvenecimiento facial con estimulación de colágeno",
    },
    {
      before: "/before-facial-harmonization-treatment-unbalanced-f.png",
      after: "/after-facial-harmonization-treatment-balanced-prop.png",
      treatment: "Armonización Facial",
      description: "Equilibrio y proporción de rasgos faciales",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      treatment: "Bioestimuladores",
      text: "Los resultados superaron mis expectativas. El tratamiento fue muy profesional y los resultados se ven completamente naturales.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      treatment: "Masculinización Facial",
      text: "Excelente atención y resultados increíbles. Me siento mucho más seguro con mi apariencia. Totalmente recomendado.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      treatment: "Armonización Facial",
      text: "El doctor es muy profesional y explica todo el proceso. Los resultados son exactamente lo que esperaba.",
      rating: 5,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfter.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfter.length) % beforeAfter.length)
  }

  return (
    <section id="resultados" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Resultados Reales</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Descubre las transformaciones que hemos logrado con nuestros pacientes. Cada resultado refleja nuestro
            compromiso con la excelencia y la naturalidad.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={beforeAfter[currentSlide].before || "/placeholder.svg"}
                      alt="Antes del tratamiento"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      ANTES
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={beforeAfter[currentSlide].after || "/placeholder.svg"}
                      alt="Después del tratamiento"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm">
                      DESPUÉS
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {beforeAfter[currentSlide].treatment}
                  </h3>
                  <p className="text-muted-foreground">{beforeAfter[currentSlide].description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {beforeAfter.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-secondary" : "bg-border"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Lo Que Dicen Nuestros Pacientes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-secondary">{testimonial.treatment}</p>
                    <div className="flex justify-center mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
