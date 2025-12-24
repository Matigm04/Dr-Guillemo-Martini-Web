"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const basePath = process.env.NODE_ENV === 'production' ? '/Dr-Guillermo-Martini-Web' : '';
  
  const handleWhatsAppClick = () => {
    const phoneNumber = '5491123456789'; // Reemplazar con el número real del Dr. Martini
    const message = encodeURIComponent('Hola, me gustaría coordinar una evaluación con el Dr. Guillermo Martini.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={`${basePath}/elegant-aesthetic-clinic-treatment-room-with-moder.png`}
          alt="Medicina Estética de Autor" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight">
            Medicina Estética
            <span className="block font-serif italic text-emerald-400 mt-2">de Autor</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Donde la seguridad médica se encuentra con la búsqueda de resultados naturales.
            <span className="block mt-2">Tu mejor versión, con respaldo profesional.</span>
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg font-medium rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
              onClick={handleWhatsAppClick}
            >
              Coordinar Evaluación
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Elegant Divider */}
          <div className="flex items-center justify-center gap-4 opacity-70">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-white"></div>
            <div className="text-xs tracking-widest uppercase text-gray-300">Dr. Guillermo Martini</div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-white"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
