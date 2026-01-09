import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"

export function TestimonialCarousel({ testimonios }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!testimonios || testimonios.length === 0) return null;

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
      
      {testimonios.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
             {testimonios.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-emerald-600' : 'bg-gray-300'}`}
                />
             ))}
        </div>
      )}
    </div>
  )
}
