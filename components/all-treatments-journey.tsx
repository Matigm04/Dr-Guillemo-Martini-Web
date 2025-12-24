"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TreatmentCard } from "./treatment-card"
import { TreatmentModal } from "./treatment-modal"
import { ConcernFilter } from "./concern-filter"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Sparkles, Syringe, Droplet, FlaskConical, Star, Activity, Target, Gem, ClipboardList } from "lucide-react"
import type { Treatment } from "@/data/treatments"
import { servicesData } from "@/data/services-data"
import { treatmentMatchesConcern } from "@/data/concern-map"

// Convertir servicios al formato Treatment
function convertServiceToTreatment(service: any): Treatment {
  return {
    id: service.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, ''),
    nombre: service.title,
    categoria: service.category,
    duracion: service.duration,
    etiquetas: service.features,
    problema: `Este tratamiento aborda necesidades específicas de ${service.category.toLowerCase()}.`,
    solucion: service.description + (service.cta ? ` ${service.cta}` : ''),
    imageBefore: service.imageBefore || "/before-facial-harmonization-treatment-unbalanced-f.png",
    imageAfter: service.imageAfter || "/after-facial-harmonization-treatment-balanced-prop.png",
    testimonios: service.testimonios || [
      {
        nombre: "Paciente Satisfecho",
        texto: "Excelente tratamiento, resultados increíbles y atención profesional.",
        rating: 5
      }
    ]
  }
}

export function AllTreatmentsJourney() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedConcern, setSelectedConcern] = useState("all")

  const categories = [
    { id: "all", name: "Todos", Icon: Sparkles },
    { id: "Botox", name: "Botox", Icon: Syringe },
    { id: "Rellenos", name: "Rellenos", Icon: Droplet },
    { id: "Bioestimuladores", name: "Bioestimuladores", Icon: FlaskConical },
    { id: "Armonización", name: "Armonización", Icon: Star },
    { id: "Rejuvenecimiento", name: "Rejuvenecimiento", Icon: Activity },
    { id: "Corporal", name: "Corporal", Icon: Target },
    { id: "Premium", name: "Premium", Icon: Gem },
    { id: "Consulta", name: "Consulta", Icon: ClipboardList }
  ]

  // Filtrar servicios
  const filteredServices = servicesData.filter((service) => {
    // Filtro por categoría técnica
    if (selectedCategory !== "all" && service.category !== selectedCategory) {
      return false
    }
    
    // Filtro por preocupación estética
    if (selectedConcern !== "all" && !treatmentMatchesConcern(service.title, selectedConcern)) {
      return false
    }
    
    // Filtro por búsqueda de texto
    if (!searchQuery.trim()) return true
    
    const query = searchQuery.toLowerCase()
    const searchableText = [
      service.title,
      service.subtitle,
      service.description,
      ...service.features
    ].join(' ').toLowerCase()
    
    return searchableText.includes(query)
  })

  const handleTreatmentClick = (service: any) => {
    const treatment = convertServiceToTreatment(service)
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Nuestros <span className="font-serif italic text-emerald-600">Tratamientos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Descubre la transformación que cada tratamiento puede ofrecerte. 
            Pasa el cursor sobre las imágenes para ver resultados reales.
          </p>
        </motion.div>

        {/* Concern Filter - Nuevo componente */}
        <ConcernFilter 
          selectedConcern={selectedConcern} 
          onConcernChange={(concern) => {
            setSelectedConcern(concern)
            // Al seleccionar una preocupación, resetear la categoría técnica
            if (concern !== "all") {
              setSelectedCategory("all")
            }
          }} 
        />

        {/* Buscador y Categorías Técnicas */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar tratamiento... (ej: botox, labios, armonización)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-gray-200 focus:border-emerald-500 transition-colors font-light"
            />
          </div>

          {/* Categorías Técnicas - Solo visible cuando no hay preocupación seleccionada */}
          {selectedConcern === "all" && (
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const IconComponent = category.Icon
                return (
                  <Badge
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105 flex items-center gap-2 font-light ${
                      selectedCategory === category.id 
                        ? "bg-emerald-600 text-white hover:bg-emerald-700" 
                        : "hover:bg-emerald-50 border-gray-200"
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                  </Badge>
                )
              })}
            </div>
          )}

          {searchQuery && (
            <p className="text-center mt-4 text-sm text-gray-500 font-light">
              {filteredServices.length === 0 
                ? "No se encontraron tratamientos con ese término" 
                : `${filteredServices.length} tratamiento${filteredServices.length !== 1 ? 's' : ''} encontrado${filteredServices.length !== 1 ? 's' : ''}`
              }
            </p>
          )}
        </div>

        {/* Treatments Grid con AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedConcern}-${selectedCategory}-${searchQuery}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {filteredServices.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500 font-light">No se encontraron tratamientos</p>
                <button 
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                    setSelectedConcern("all")
                  }}
                  className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-light"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              filteredServices.map((service, index) => {
                const treatment = convertServiceToTreatment(service)
                return (
                  <motion.div
                    key={treatment.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <TreatmentCard
                      treatment={treatment}
                      onClick={() => handleTreatmentClick(service)}
                    />
                  </motion.div>
                )
              })
            )}
          </motion.div>
        </AnimatePresence>

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
