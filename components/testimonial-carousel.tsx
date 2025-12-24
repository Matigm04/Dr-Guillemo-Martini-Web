"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Treatment } from "@/data/treatments"

interface TestimonialCarouselProps {
  testimonios: Treatment["testimonios"]
}

export function TestimonialCarousel({ testimonios }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonios.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length)
  }

  const currentTestimonio = testimonios[currentIndex]

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-50 rounded-2xl p-6"
        >
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(currentTestimonio.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-gray-700 leading-relaxed mb-4 font-light italic">
            "{currentTestimonio.texto}"
          </p>

          {/* Author */}
          <p className="text-sm font-medium text-gray-900">
            {currentTestimonio.nombre}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {testimonios.length > 1 && (
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-emerald-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  )
}
