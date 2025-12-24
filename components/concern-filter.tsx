"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { CONCERN_MAP } from "@/data/concern-map"

interface ConcernFilterProps {
  selectedConcern: string
  onConcernChange: (concern: string) => void
}

export function ConcernFilter({ selectedConcern, onConcernChange }: ConcernFilterProps) {
  const concerns = Object.entries(CONCERN_MAP)

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-emerald-600" />
          ¿Qué te gustaría <span className="font-serif italic text-emerald-600">mejorar</span>?
        </h3>
        <p className="text-sm text-gray-600 font-light max-w-2xl mx-auto">
          Selecciona tu principal preocupación y te mostraremos los tratamientos más adecuados
        </p>
      </div>

      {/* Concerns Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
        {/* Opción "Todos" */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onConcernChange("all")}
          className={`
            group relative p-4 rounded-2xl border-2 transition-all duration-300
            ${selectedConcern === "all" 
              ? "border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-500/20" 
              : "border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md"
            }
          `}
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <div className={`
              text-3xl transition-transform duration-300
              ${selectedConcern === "all" ? "scale-110" : "group-hover:scale-110"}
            `}>
              ✨
            </div>
            <div>
              <p className={`
                text-sm font-medium transition-colors
                ${selectedConcern === "all" ? "text-emerald-700" : "text-gray-900"}
              `}>
                Ver Todos
              </p>
              <p className="text-xs text-gray-500 font-light mt-1">
                Todos los tratamientos
              </p>
            </div>
          </div>
          
          {/* Badge indicador */}
          {selectedConcern === "all" && (
            <motion.div
              layoutId="selected-indicator"
              className="absolute top-2 right-2 w-2 h-2 bg-emerald-600 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.button>

        {/* Opciones de preocupaciones */}
        {concerns.map(([concern, data]) => (
          <motion.button
            key={concern}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onConcernChange(concern)}
            className={`
              group relative p-4 rounded-2xl border-2 transition-all duration-300
              ${selectedConcern === concern 
                ? "border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-500/20" 
                : "border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md"
              }
            `}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <div className={`
                text-3xl transition-transform duration-300
                ${selectedConcern === concern ? "scale-110" : "group-hover:scale-110"}
              `}>
                {data.icon}
              </div>
              <div>
                <p className={`
                  text-sm font-medium transition-colors
                  ${selectedConcern === concern ? "text-emerald-700" : "text-gray-900"}
                `}>
                  {concern}
                </p>
                <p className="text-xs text-gray-500 font-light mt-1">
                  {data.description}
                </p>
              </div>
            </div>
            
            {/* Badge indicador */}
            {selectedConcern === concern && (
              <motion.div
                layoutId="selected-indicator"
                className="absolute top-2 right-2 w-2 h-2 bg-emerald-600 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Contador de resultados */}
      {selectedConcern !== "all" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-6"
        >
          <p className="text-sm text-gray-600 font-light">
            Mostrando {CONCERN_MAP[selectedConcern as keyof typeof CONCERN_MAP].treatments.length} tratamiento(s) recomendado(s) para{" "}
            <span className="font-medium text-emerald-600">{selectedConcern}</span>
          </p>
        </motion.div>
      )}
    </div>
  )
}
