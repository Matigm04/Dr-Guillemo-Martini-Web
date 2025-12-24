"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { treatmentsData } from "@/data/treatments"
import { TreatmentCard } from "./treatment-card"
import { TreatmentModal } from "./treatment-modal"
import type { Treatment } from "@/data/treatments"

export function TreatmentJourney() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleTreatmentClick = (treatment: Treatment) => {
    setSelectedTreatment(treatment)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedTreatment(null), 300)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Nuestros <span className="font-serif italic text-emerald-600">Tratamientos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Descubre la transformación que cada tratamiento puede ofrecerte. 
            Pasa el cursor sobre las imágenes para ver resultados reales.
          </p>
        </motion.div>

        {/* Treatments Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {treatmentsData.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TreatmentCard
                treatment={treatment}
                onClick={() => handleTreatmentClick(treatment)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500 font-light">
            Haz clic en cualquier tratamiento para conocer más detalles
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full mx-auto mt-8"></div>
        </motion.div>
      </div>

      {/* Treatment Modal */}
      <TreatmentModal
        treatment={selectedTreatment}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}
