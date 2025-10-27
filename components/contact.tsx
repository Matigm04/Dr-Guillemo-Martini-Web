"use client"

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
                  Ubicaciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">📍 Córdoba Capital</p>
                    <p>Leopoldo Lugones 188</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">📍 Río Tercero</p>
                    <p>Consultorio disponible</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">📍 Villa Mercedes</p>
                    <p>Consultorio disponible</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Phone className="w-5 h-5 mr-3 text-secondary" />
                  Teléfono / WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <a 
                      href="tel:+5493518596064"
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      +54 9 3518 59-6064
                    </a>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-600 hover:bg-green-50"
                    onClick={() => window.open('https://wa.me/5493518596064?text=Hola,%20me%20gustaría%20consultar%20sobre%20los%20tratamientos', '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Enviar WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Phone className="w-5 h-5 mr-3 text-secondary" />
                  Sistema de Turnos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Agendá tu turno online de forma rápida y sencilla:
                </p>
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => window.open('https://www.tuturno.io/drguillermomartini', '_blank')}
                >
                  Agendar en TuTurno
                </Button>
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
                  <a 
                    href="mailto:dr.guillermomartini@gmail.com"
                    className="text-primary hover:underline"
                  >
                    dr.guillermomartini@gmail.com
                  </a>
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
                  <div className="flex justify-between">
                    <span>Lunes:</span>
                    <span className="font-medium text-foreground">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Martes:</span>
                    <span className="font-medium text-foreground">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Miércoles:</span>
                    <span className="font-medium text-foreground">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jueves:</span>
                    <span className="font-medium text-red-500">Cerrado</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Viernes:</span>
                    <span className="font-medium text-foreground">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-medium text-red-500">Cerrado</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-medium text-red-500">Cerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
