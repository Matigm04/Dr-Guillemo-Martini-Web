import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Stethoscope, Clock, MapPin } from "lucide-react"

export function Doctor() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Formación Académica",
      description: "Médico Cirujano especializado en Medicina Estética y Dermatología"
    },
    {
      icon: Stethoscope,
      title: "Especialización",
      description: "Certificado en tratamientos faciales avanzados y medicina regenerativa"
    },
    {
      icon: Clock,
      title: "Experiencia",
      description: "Más de 15 años transformando vidas a través de la medicina estética"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      description: "Clínica moderna equipada con tecnología de vanguardia"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Información del Doctor */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              ¿Quién Soy?
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy el <strong className="text-foreground">Dr. Guillermo Martini</strong>, médico especialista en medicina estética 
                con una pasión genuina por ayudar a mis pacientes a verse y sentirse mejor consigo mismos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mi filosofía se basa en la creencia de que la belleza natural debe ser realzada, no transformada. 
                Cada tratamiento que realizo está diseñado para respetar la armonía facial y corporal única de cada persona, 
                utilizando las técnicas más avanzadas y seguras disponibles en medicina estética.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Me mantengo en constante actualización, participando en congresos internacionales y formaciones 
                especializadas para ofrecer a mis pacientes los tratamientos más innovadores y efectivos del mercado.
              </p>
            </div>
          </div>

          {/* Imagen del Doctor y Credenciales */}
          <div className="space-y-8">
            {/* Placeholder para imagen del doctor */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Stethoscope className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Guillermo Martini</h3>
              <p className="text-primary font-medium">Especialista en Medicina Estética</p>
            </div>

            {/* Logros y Certificaciones */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <achievement.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h4 className="font-semibold text-sm text-card-foreground mb-2">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}