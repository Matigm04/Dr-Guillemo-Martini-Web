"use client"

import { useState } from "react"
import { Calendar, Clock, User, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

interface ConciergeFormProps {
  initialTreatment?: string
}

export function ConciergeForm({ initialTreatment = "" }: ConciergeFormProps) {
  const [nombre, setNombre] = useState("")
  const [preferencia, setPreferencia] = useState("")
  
  // Estados de error
  const [errors, setErrors] = useState({
    nombre: false,
    preferencia: false
  })

  const handleSchedule = () => {
    // Validación de campos
    const newErrors = {
      nombre: !nombre.trim(),
      preferencia: !preferencia || preferencia === ""
    }

    setErrors(newErrors)

    // Si hay errores, no continuar
    if (newErrors.nombre || newErrors.preferencia) {
      return
    }

    // Construcción del mensaje
    const message = `Hola, soy ${nombre}. Vi la web del Dr. Martini y me interesa el tratamiento de ${initialTreatment}. Mi preferencia para coordinar el turno es por la ${preferencia}.`
    
    // Número de WhatsApp en formato internacional
    const phoneNumber = "5493518596064"
    
    // URL de WhatsApp con mensaje codificado
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // Abrir en nueva pestaña
    window.open(whatsappUrl, "_blank")
  }

  // Limpiar error al escribir
  const handleNombreChange = (value: string) => {
    setNombre(value)
    if (errors.nombre && value.trim()) {
      setErrors({ ...errors, nombre: false })
    }
  }

  const handlePreferenciaChange = (value: string) => {
    setPreferencia(value)
    if (errors.preferencia && value) {
      setErrors({ ...errors, preferencia: false })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm"
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl lg:text-2xl font-light text-gray-900 mb-2 tracking-tight">
          Asistente de <span className="font-serif italic text-emerald-600">Pre-Consulta</span>
        </h3>
        <p className="text-sm text-gray-600 font-light">
          Completa tus datos y coordinaremos tu turno por WhatsApp
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Nombre Completo */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-600" />
              <span>Nombre Completo</span>
            </div>
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => handleNombreChange(e.target.value)}
            placeholder="Tu nombre completo"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.nombre 
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" 
                : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/20"
            } focus:ring-2 transition-all outline-none font-light text-gray-900`}
          />
          {errors.nombre && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1 mt-1.5"
            >
              <AlertCircle className="w-3.5 h-3.5 text-red-500" />
              <p className="text-xs text-red-500 font-light">
                Por favor ingresa tu nombre completo
              </p>
            </motion.div>
          )}
        </div>

        {/* Tratamiento de Interés - ReadOnly */}
        <div>
          <label htmlFor="tratamiento" className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>Tratamiento de Interés</span>
            </div>
          </label>
          <input
            id="tratamiento"
            type="text"
            value={initialTreatment}
            readOnly
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 font-light text-gray-700 cursor-not-allowed"
          />
          <p className="text-xs text-gray-500 mt-1.5 font-light">
            Tratamiento seleccionado desde la tarjeta
          </p>
        </div>

        {/* Preferencia Horaria */}
        <div>
          <label htmlFor="preferencia" className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Preferencia Horaria</span>
            </div>
          </label>
          <select
            id="preferencia"
            value={preferencia}
            onChange={(e) => handlePreferenciaChange(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.preferencia 
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" 
                : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/20"
            } focus:ring-2 transition-all outline-none font-light text-gray-900 bg-white`}
          >
            <option value="">Selecciona una preferencia</option>
            <option value="Mañana">Mañana</option>
            <option value="Tarde">Tarde</option>
          </select>
          {errors.preferencia && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1 mt-1.5"
            >
              <AlertCircle className="w-3.5 h-3.5 text-red-500" />
              <p className="text-xs text-red-500 font-light">
                Por favor selecciona tu preferencia horaria
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        onClick={handleSchedule}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 flex items-center justify-center gap-2"
      >
        <svg 
          className="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Agendar Turno por WhatsApp
      </motion.button>

      {/* Privacy Note */}
      <p className="text-xs text-gray-500 text-center mt-4 font-light">
        Serás redirigido a WhatsApp para completar la coordinación de tu turno
      </p>
    </motion.div>
  )
}
