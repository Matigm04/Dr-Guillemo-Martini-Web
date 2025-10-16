import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/elegant-aesthetic-clinic-treatment-room-with-moder.png" alt="Centro de Estética" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            CENTRO DE
            <span className="block text-secondary">ESTÉTICA</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">
            Transformamos tu belleza natural con los tratamientos más avanzados en masculinización facial,
            bioestimuladores y medicina estética
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg">
              Agendar Consulta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg bg-transparent"
            >
              Ver Resultados
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-90">
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>+500 Pacientes Satisfechos</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              <span>15+ Años de Experiencia</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              <span>Tecnología de Vanguardia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
