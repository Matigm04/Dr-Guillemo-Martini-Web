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
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">¿Por Qué <span className="font-serif italic text-emerald-600">Elegirnos?</span></h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Nuestro objetivo es realzar tu belleza natural utilizando las técnicas más avanzadas en medicina estética,
            siempre priorizando tu seguridad y satisfacción.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-gray-100">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
