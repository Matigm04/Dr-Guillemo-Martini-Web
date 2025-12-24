"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

// Array de servicios disponibles
const SERVICIOS_DISPONIBLES = [
  "Consulta Estética",
  "Recuperación Capilar",
  "Toxina Botulínica (Botox)",
  "Ácido Hialurónico",
  "Skinbooster",
  "Bichectomía",
  "Rinomodelación",
  "Mentoplastia",
  "Marcación Mandibular",
  "Armonización Facial",
  "Bioestimulador Aessthella",
  "Bioestimulador Radiesse",
  "Surco Nasogeniano",
  "Plasma Rico en Plaquetas (PRP) - Facial",
  "Plasma Rico en Plaquetas (PRP) - Corporal",
  "Peeling Facial",
  "Peeling Corporal",
  "Botox Área Superior",
  "Botox Área Inferior",
  "Botox Tercio Medio",
  "Botox Hiperhidrosis",
  "Armonización Labial",
  "Armonización Ojeras",
  "Armonización Mandibular",
  "Armonización de Mentón",
  "Skinbooster Facial",
  "Skinbooster Cuello y Escote",
  "Premium Black",
  "Premium Hydro Deluxe",
  "Premium Cellular Reset",
  "Otra Consulta"
]

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    tratamiento: "",
    mensaje: ""
  })

  const [errors, setErrors] = useState({
    nombre: false,
    telefono: false,
    email: false,
    tratamiento: false,
    mensaje: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validación
    const newErrors = {
      nombre: !formData.nombre.trim(),
      telefono: !formData.telefono.trim(),
      email: !formData.email.trim() || !formData.email.includes("@"),
      tratamiento: !formData.tratamiento || formData.tratamiento === "",
      mensaje: !formData.mensaje.trim()
    }

    setErrors(newErrors)

    // Si hay errores, no continuar
    if (Object.values(newErrors).some(error => error)) {
      return
    }

    // Construcción del mensaje para WhatsApp
    const message = `Hola, soy ${formData.nombre}.

📧 Email: ${formData.email}
📱 Teléfono: ${formData.telefono}
💉 Tratamiento: ${formData.tratamiento}

📝 Mensaje: ${formData.mensaje}`

    const phoneNumber = "5493518596064"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: false })
    }
  }
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
              <CardTitle className="text-2xl text-card-foreground font-light tracking-tight">
                Solicita tu <span className="font-serif italic text-emerald-600">Consulta</span>
              </CardTitle>
              <p className="text-muted-foreground font-light">Completa el formulario y nos pondremos en contacto contigo</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nombre</label>
                    <Input 
                      placeholder="Tu nombre completo" 
                      value={formData.nombre}
                      onChange={(e) => handleChange("nombre", e.target.value)}
                      className={errors.nombre ? "border-red-400" : ""}
                    />
                    {errors.nombre && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 mt-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                        <p className="text-xs text-red-500 font-light">
                          Por favor ingresa tu nombre
                        </p>
                      </motion.div>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Teléfono</label>
                    <Input 
                      placeholder="Tu número de teléfono" 
                      value={formData.telefono}
                      onChange={(e) => handleChange("telefono", e.target.value)}
                      className={errors.telefono ? "border-red-400" : ""}
                    />
                    {errors.telefono && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 mt-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                        <p className="text-xs text-red-500 font-light">
                          Por favor ingresa tu teléfono
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="tu@email.com" 
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={errors.email ? "border-red-400" : ""}
                  />
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1.5"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                      <p className="text-xs text-red-500 font-light">
                        Por favor ingresa un email válido
                      </p>
                    </motion.div>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Tratamiento de Interés</label>
                  <select 
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.tratamiento ? "border-red-400" : "border-border"
                    } bg-input focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none font-light text-foreground`}
                    value={formData.tratamiento}
                    onChange={(e) => handleChange("tratamiento", e.target.value)}
                  >
                    <option value="">Selecciona un tratamiento</option>
                    {SERVICIOS_DISPONIBLES.map((servicio, index) => (
                      <option key={index} value={servicio}>
                        {servicio}
                      </option>
                    ))}
                  </select>
                  {errors.tratamiento && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1.5"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                      <p className="text-xs text-red-500 font-light">
                        Por favor selecciona un tratamiento
                      </p>
                    </motion.div>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Mensaje</label>
                  <Textarea 
                    placeholder="Cuéntanos sobre tus objetivos y expectativas..." 
                    rows={4} 
                    value={formData.mensaje}
                    onChange={(e) => handleChange("mensaje", e.target.value)}
                    className={errors.mensaje ? "border-red-400" : ""}
                  />
                  {errors.mensaje && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1.5"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                      <p className="text-xs text-red-500 font-light">
                        Por favor escribe un mensaje
                      </p>
                    </motion.div>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
