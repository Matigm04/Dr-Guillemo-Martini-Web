"use client"

import { motion } from "framer-motion"
import { X, Clock, AlertCircle, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Treatment } from "@/data/treatments"
import { BeforeAfterSlider } from "./before-after-slider"
import { TestimonialCarousel } from "./testimonial-carousel"
import { ConciergeForm } from "./concierge-form"

interface TreatmentModalProps {
  treatment: Treatment | null
  isOpen: boolean
  onClose: () => void
}

export function TreatmentModal({ treatment, isOpen, onClose }: TreatmentModalProps) {
  if (!treatment) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-7xl h-full max-h-[95vh] overflow-y-auto p-0 rounded-3xl shadow-2xl flex flex-col pb-24">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[100] p-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-200"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-0 w-full">
            {/* Left Side - Image Slider */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 p-6 pt-16 lg:pt-12 lg:p-12 flex items-center justify-center max-h-[35vh] lg:max-h-none lg:aspect-auto lg:min-h-[85vh] w-full shadow-inner">
              <div className="w-full h-full flex items-center justify-center">
                <BeforeAfterSlider
                  imageBefore={treatment.imageBefore}
                  imageAfter={treatment.imageAfter}
                  alt={treatment.nombre}
                />
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="p-6 lg:p-12 bg-white pb-24 w-full">
              {/* Header */}
              <div className="mb-8">
                <DialogHeader>
                  <DialogTitle className="text-2xl lg:text-4xl font-light text-gray-900 tracking-tight mb-2 leading-tight">
                    {treatment.nombre}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-emerald-600 font-medium mb-4">{treatment.categoria}</p>

                {/* Duration & Tags */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                    <span className="font-light">{treatment.duracion}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {treatment.etiquetas.map((etiqueta, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium"
                    >
                      {etiqueta}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 bg-red-50 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-medium text-gray-900 mt-1">El Problema</h3>
                </div>
                <p className="text-gray-600 leading-relaxed lg:leading-relaxed font-light text-sm lg:text-base">
                  {treatment.problema}
                </p>
              </motion.div>

              {/* Solution Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 bg-emerald-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-medium text-gray-900 mt-1">Nuestra Solución</h3>
                </div>
                <p className="text-gray-600 leading-relaxed lg:leading-relaxed font-light text-sm lg:text-base">
                  {treatment.solucion}
                </p>
              </motion.div>

              {/* Testimonials Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <h3 className="text-lg lg:text-xl font-medium text-gray-900 mb-4">
                  Experiencias Reales
                </h3>
                <TestimonialCarousel testimonios={treatment.testimonios} />
              </motion.div>

              {/* Concierge Form - Asistente de Pre-Consulta */}
              <ConciergeForm initialTreatment={treatment.nombre} />
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
