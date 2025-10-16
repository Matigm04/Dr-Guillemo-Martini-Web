import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, Shield } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Award,
      title: "Excelencia Profesional",
      description:
        "Médico especialista con certificaciones internacionales en medicina estética y tratamientos faciales avanzados.",
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada tratamiento es diseñado específicamente para tus necesidades y objetivos estéticos únicos.",
    },
    {
      icon: Heart,
      title: "Cuidado Integral",
      description: "Acompañamiento completo desde la consulta inicial hasta el seguimiento post-tratamiento.",
    },
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Utilizamos solo productos aprobados y técnicas respaldadas por evidencia científica.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">¿Por Qué Elegirnos?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Nuestro objetivo es realzar tu belleza natural utilizando las técnicas más avanzadas en medicina estética,
            siempre priorizando tu seguridad y satisfacción.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
