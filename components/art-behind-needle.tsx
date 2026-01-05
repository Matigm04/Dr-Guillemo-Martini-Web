"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const basePath = process.env.NODE_ENV === 'production' ? '/Dr-Guillermo-Martini-Web' : ''

export function ArtBehindNeedle() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Imágenes macro para el grid
  const macroImages = [
    {
      src: `${basePath}/macro-hands-precision.jpg`,
      alt: "Manos del Dr. Martini con precisión quirúrgica",
      position: "col-span-2"
    },
    {
      src: `${basePath}/macro-vial-premium.jpg`,
      alt: "Vial de producto premium",
      position: "col-span-1"
    },
    {
      src: `${basePath}/macro-injection-detail.jpg`,
      alt: "Detalle de técnica de inyección",
      position: "col-span-1"
    },
    {
      src: `${basePath}/macro-facial-analysis.jpg`,
      alt: "Análisis facial detallado",
      position: "col-span-2"
    }
  ]

  return (
    <section id="el-arte" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 tracking-tight">
            El <span className="font-serif italic text-emerald-600">Arte</span> detrás de la Aguja
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Donde la precisión científica se encuentra con la sutileza artística
          </p>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-12 max-w-7xl mx-auto" ref={ref}>
          {/* Left Side - Video Cinemagraph with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:min-h-[700px]"
          >
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster={`${basePath}/doctor-analyzing-poster.jpg`}
            >
              <source src={`${basePath}/cinemagraph-doctor-analyzing.mp4`} type="video/mp4" />
              {/* Fallback image if video doesn't load */}
              <Image
                src={`${basePath}/doctor-analyzing-fallback.jpg`}
                alt="Dr. Guillermo Martini analizando rostro"
                fill
                className="object-cover"
              />
            </video>

            {/* Dark Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Text Content over Video */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                {/* Quote */}
                <blockquote className="text-white">
                  <p className="text-2xl lg:text-3xl font-light leading-relaxed mb-4 italic">
                    "La precisión de la <span className="text-emerald-400 font-serif">ciencia</span>, 
                    la sutileza del <span className="text-emerald-400 font-serif">arte</span>"
                  </p>
                </blockquote>

                {/* Description */}
                <div className="space-y-4 text-gray-200 font-light leading-relaxed">
                  <p className="text-base lg:text-lg">
                    Cada procedimiento es una obra de precisión milimétrica. No se trata solo de técnica, 
                    sino de comprender la arquitectura única de cada rostro.
                  </p>
                  <p className="text-base lg:text-lg">
                    La medicina estética de autor requiere análisis profundo, manos expertas y una visión 
                    artística que respete la belleza natural de cada paciente.
                  </p>
                </div>

                {/* Signature Element */}
                <div className="border-t border-gray-400/30 pt-6">
                  <p className="text-emerald-400 font-medium text-sm tracking-wider uppercase">
                    Dr. Guillermo Martini
                  </p>
                  <p className="text-gray-400 text-sm font-light">
                    Medicina Estética de Autor
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Macro Images Grid */}
          <div className="grid grid-cols-2 gap-4 auto-rows-[minmax(150px,auto)]">
            {macroImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.1),
                  ease: "easeOut"
                }}
                className={`relative ${image.position} rounded-2xl overflow-hidden shadow-lg group`}
              >
                <div className="relative h-full min-h-[200px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Caption on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm font-light">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
