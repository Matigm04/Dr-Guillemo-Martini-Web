import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Agenda Tu Consulta</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Estamos aquí para ayudarte a alcanzar tus objetivos estéticos. Contáctanos para una consulta personalizada y
            sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <MapPin className="w-5 h-5 mr-3 text-secondary" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Av. Corrientes 1234, Piso 5<br />
                  Ciudad Autónoma de Buenos Aires
                  <br />
                  Argentina
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Phone className="w-5 h-5 mr-3 text-secondary" />
                  Teléfono
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  +54 11 1234-5678
                  <br />
                  WhatsApp: +54 9 11 1234-5678
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Mail className="w-5 h-5 mr-3 text-secondary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  info@esteticacenter.com
                  <br />
                  consultas@esteticacenter.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Clock className="w-5 h-5 mr-3 text-secondary" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p>Lunes a Viernes: 9:00 - 19:00</p>
                  <p>Sábados: 9:00 - 15:00</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar por WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Solicita tu Consulta</CardTitle>
              <p className="text-muted-foreground">Completa el formulario y nos pondremos en contacto contigo</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nombre</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Teléfono</label>
                    <Input placeholder="Tu número de teléfono" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Tratamiento de Interés</label>
                  <select className="w-full p-3 border border-border rounded-md bg-input">
                    <option>Selecciona un tratamiento</option>
                    <option>Masculinización Facial</option>
                    <option>Bioestimuladores de Colágeno</option>
                    <option>Tratamientos Híbridos</option>
                    <option>Armonización Facial</option>
                    <option>Consulta General</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Mensaje</label>
                  <Textarea placeholder="Cuéntanos sobre tus objetivos y expectativas..." rows={4} />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Enviar Consulta
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
