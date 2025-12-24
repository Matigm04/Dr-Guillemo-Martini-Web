// Mapeo de preocupaciones estéticas con tratamientos recomendados
export const CONCERN_MAP = {
  "Mirada Cansada": {
    icon: "👁️",
    description: "Ojeras, patas de gallo, párpados caídos",
    treatments: [
      "Toxina Botulínica (Botox)",
      "Armonización Ojeras",
      "Botox Área Superior",
      "Ácido Hialurónico"
    ]
  },
  "Perfil Mandibular": {
    icon: "🦴",
    description: "Definición de mandíbula y mentón",
    treatments: [
      "Armonización Mandibular",
      "Armonización de Mentón",
      "Marcación Mandibular",
      "Mentoplastia",
      "Ácido Hialurónico"
    ]
  },
  "Calidad de Piel": {
    icon: "✨",
    description: "Textura, luminosidad y firmeza",
    treatments: [
      "Bioestimulador Aessthella",
      "Bioestimulador Radiesse",
      "Skinbooster Facial",
      "Skinbooster Cuello y Escote",
      "Plasma Rico en Plaquetas (PRP) - Facial",
      "Premium Cellular Reset",
      "Peeling Facial"
    ]
  },
  "Arrugas y Líneas": {
    icon: "📏",
    description: "Líneas de expresión y arrugas profundas",
    treatments: [
      "Toxina Botulínica (Botox)",
      "Botox Área Superior",
      "Botox Área Inferior",
      "Botox Tercio Medio",
      "Surco Nasogeniano",
      "Ácido Hialurónico"
    ]
  },
  "Labios y Boca": {
    icon: "💋",
    description: "Volumen, definición y rejuvenecimiento labial",
    treatments: [
      "Armonización Labial",
      "Ácido Hialurónico",
      "Surco Nasogeniano",
      "Skinbooster Facial"
    ]
  },
  "Armonía Facial": {
    icon: "⚖️",
    description: "Proporciones y equilibrio del rostro",
    treatments: [
      "Armonización Facial",
      "Rinomodelación",
      "Bichectomía",
      "Armonización Mandibular",
      "Armonización de Mentón",
      "Ácido Hialurónico"
    ]
  },
  "Envejecimiento": {
    icon: "⏰",
    description: "Rejuvenecimiento integral y prevención",
    treatments: [
      "Premium Black",
      "Premium Hydro Deluxe",
      "Bioestimulador Aessthella",
      "Bioestimulador Radiesse",
      "Plasma Rico en Plaquetas (PRP) - Facial",
      "Toxina Botulínica (Botox)",
      "Skinbooster"
    ]
  },
  "Volumen Facial": {
    icon: "🎈",
    description: "Recuperar volumen perdido en rostro",
    treatments: [
      "Ácido Hialurónico",
      "Bioestimulador Radiesse",
      "Armonización Facial",
      "Plasma Rico en Plaquetas (PRP) - Facial"
    ]
  },
  "Sudoración": {
    icon: "💧",
    description: "Hiperhidrosis en axilas, manos o pies",
    treatments: [
      "Botox Hiperhidrosis"
    ]
  },
  "Cabello": {
    icon: "💇",
    description: "Caída, debilitamiento o pérdida de densidad",
    treatments: [
      "Recuperación Capilar",
      "Plasma Rico en Plaquetas (PRP) - Corporal"
    ]
  },
  "Primera Vez": {
    icon: "🆕",
    description: "Asesoramiento y plan personalizado",
    treatments: [
      "Consulta Estética"
    ]
  }
}

// Obtener todas las preocupaciones disponibles
export const CONCERNS = Object.keys(CONCERN_MAP)

// Función helper para obtener tratamientos por preocupación
export function getTreatmentsByConcern(concern: string): string[] {
  return CONCERN_MAP[concern as keyof typeof CONCERN_MAP]?.treatments || []
}

// Función helper para verificar si un tratamiento pertenece a una preocupación
export function treatmentMatchesConcern(treatmentTitle: string, concern: string): boolean {
  const concernData = CONCERN_MAP[concern as keyof typeof CONCERN_MAP]
  if (!concernData) return true // Si no hay preocupación seleccionada, mostrar todo
  
  return concernData.treatments.some(treatment => 
    treatmentTitle.toLowerCase().includes(treatment.toLowerCase()) ||
    treatment.toLowerCase().includes(treatmentTitle.toLowerCase())
  )
}
