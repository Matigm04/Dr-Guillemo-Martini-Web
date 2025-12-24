"use client"

import { Shield, Sparkles, Heart } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Seguridad Médica",
      subtitle: "Insumos ANMAT",
      description: "Trabajamos exclusivamente con productos aprobados por ANMAT, garantizando la máxima seguridad y calidad en cada procedimiento.",
      color: "emerald"
    },
    {
      icon: Sparkles,
      title: "Resultados Naturales",
      subtitle: "Estética Equilibrada",
      description: "Nuestro enfoque busca realzar tu belleza natural sin exageraciones, respetando tu armonía facial única.",
      color: "emerald"
    },
    {
      icon: Heart,
      title: "Atención Humana",
      subtitle: "Servicio Concierge",
      description: "Acompañamiento personalizado en cada etapa del proceso, con un trato cercano y profesional que prioriza tu bienestar.",
      color: "emerald"
    }
  ]

  return (
    <section id="por-que-elegirnos" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Por qué <span className="font-serif italic text-emerald-600">elegirnos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            La excelencia en medicina estética se construye sobre pilares fundamentales
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-emerald-200"
              >
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400/10 rounded-full blur-xl group-hover:bg-emerald-400/20 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-600 uppercase tracking-wider">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/5 group-hover:via-emerald-400/10 group-hover:to-emerald-400/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
