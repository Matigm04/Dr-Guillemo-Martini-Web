import { useState } from "react"
import { User } from "lucide-react"
import { motion } from "framer-motion"

export function ConciergeForm({ initialTreatment = "" }) {
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
    const phoneNumber = "5491136452809" // Adjusted number placeholder
    
    // URL de WhatsApp con mensaje codificado
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // Abrir en nueva pestaña
    window.open(whatsappUrl, "_blank")
  }

  // Limpiar error al escribir
  const handleNombreChange = (value) => {
    setNombre(value)
    if (errors.nombre && value.trim()) {
      setErrors({ ...errors, nombre: false })
    }
  }

  const handlePreferenciaChange = (value) => {
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
           {errors.nombre && <p className="text-red-500 text-xs mt-1">Nombre es requerido</p>}
        </div>

        {/* Preferencia Horaria */}
        <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">Preferencia Horaria</label>
           <div className="flex gap-2">
             {['Mañana', 'Tarde'].map((pref) => (
               <button
                 key={pref}
                  onClick={() => handlePreferenciaChange(pref)}
                 className={`flex-1 py-3 px-4 rounded-xl border transition-all duration-200 ${
                   preferencia === pref
                     ? 'bg-emerald-50 border-emerald-500 text-emerald-700 font-medium'
                     : 'bg-white border-gray-200 text-gray-600 hover:border-emerald-200 hover:bg-emerald-50/50'
                 }`}
               >
                 {pref}
               </button>
             ))}
           </div>
           {errors.preferencia && <p className="text-red-500 text-xs mt-1">Selecciona una preferencia</p>}
        </div>

         <button
            onClick={handleSchedule}
            className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
          >
            <span>Consultar Disponibilidad</span>
          </button>
      </div>
    </motion.div>
  )
}
