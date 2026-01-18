import { useState, useRef } from "react"
import { motion } from "framer-motion"

export function BeforeAfterSlider({ 
  imageBefore, 
  imageAfter, 
  alt,
  beforePosition = "center center",
  afterPosition = "center center"
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = (clientX) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    const bounded = Math.max(0, Math.min(100, percentage))
    setSliderPosition(bounded)
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX)
    }
  }

  const handleTouchMove = (e) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  const handleStart = () => {
    setIsDragging(true)
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 select-none cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
    >
      {/* After Image (Base) */}
      <div className="absolute inset-0">
        <img
          src={imageAfter}
          alt={`${alt} - Después`}
          className="object-cover w-full h-full"
          style={{ objectPosition: afterPosition }}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={imageBefore}
          alt={`${alt} - Antes`}
          className="object-cover w-full h-full"
          style={{ objectPosition: beforePosition }}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex gap-1">
            <div className="w-0.5 h-6 bg-gray-400 rounded-full"></div>
            <div className="w-0.5 h-6 bg-gray-400 rounded-full"></div>
          </div>
        </motion.div>
      </div>
      
       {/* Labels */}
       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-widest px-4 py-2 rounded-full text-gray-800 pointer-events-none z-10">
          ANTES
        </div>
        <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-[10px] font-bold tracking-widest px-4 py-2 rounded-full text-white pointer-events-none z-10">
          DESPUÉS
        </div>
    </div>
  )
}
