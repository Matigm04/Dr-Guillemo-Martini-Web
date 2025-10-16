import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Masculinización Facial",
      subtitle: "Mandíbula & Mentón",
      description:
        "Definición y masculinización de rasgos faciales mediante técnicas avanzadas de remodelación no quirúrgica.",
      image: "/masculine-facial-contouring-jaw-and-chin-treatment.png",
      features: ["Ácido Hialurónico", "Hidroxiapatita de Calcio", "Resultados Naturales"],
    },
    {
      title: "Bioestimuladores de Colágeno",
      subtitle: "PLLA & Hidroxiapatita",
      description: "Estimulación natural de colágeno para rejuvenecimiento facial y corporal con resultados duraderos.",
      image: "/collagen-biostimulator-treatment-facial-rejuvenati.png",
      features: ["PLLA (Sculptra)", "Radiesse", "Efecto Progresivo"],
    },
    {
      title: "Tratamientos Híbridos",
      subtitle: "Combinaciones Avanzadas",
      description: "Protocolos personalizados que combinan diferentes técnicas para resultados óptimos y naturales.",
      image: "/hybrid-aesthetic-treatment-combination-therapy.png",
      features: ["Protocolos Personalizados", "Múltiples Técnicas", "Resultados Superiores"],
    },
    {
      title: "Armonización Facial",
      subtitle: "Equilibrio & Proporción",
      description: "Análisis facial completo y tratamientos para lograr la armonía perfecta de tus rasgos.",
      image: "/facial-harmonization-aesthetic-treatment-proportio.png",
      features: ["Análisis Facial 3D", "Proporciones Áureas", "Resultados Armónicos"],
    },
  ]

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Nuestros Tratamientos</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Ofrecemos una amplia gama de tratamientos especializados en medicina estética, utilizando las técnicas más
            avanzadas y productos de la más alta calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
                <p className="text-secondary font-medium">{service.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-secondary group-hover:text-white transition-colors bg-transparent"
                >
                  Más Información
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
