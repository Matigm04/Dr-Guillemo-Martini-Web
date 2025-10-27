"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Search,
  Sparkles,
  Syringe,
  Droplet,
  FlaskConical,
  Star,
  Activity,
  Target,
  Gem,
  ClipboardList
} from "lucide-react"
import Image from "next/image"

export function Services() {
  const services = [
    {
      title: "Consulta Estética",
      subtitle: "Tu primer paso hacia la transformación",
      description:
        "Un encuentro personalizado para evaluar tu piel, escuchar tus objetivos y diseñar un plan de tratamiento adaptado a tus necesidades. Incluye diagnóstico facial, recomendaciones de procedimientos y orientación sobre cuidados domiciliarios para potenciar y mantener los resultados.",
      image: "/placeholder.svg",
      features: ["Diagnóstico Facial", "Plan Personalizado", "Orientación Profesional"],
      duration: "30 min",
      cta: "Te espero para planificar tu tratamiento juntos",
      category: "Consulta"
    },
    {
      title: "Recuperación Capilar",
      subtitle: "Hair XL, Dutasteride, Minoxidil o PRP",
      description: "Tratamiento de microinyecciones en el cuero cabelludo con principios activos para estimular el crecimiento del cabello. Nutre y estimula el folículo piloso, favoreciendo el crecimiento, fortaleciendo el cabello y mejorando su densidad y brillo. Ideal en casos de debilitamiento y caída estacional.",
      image: "/placeholder.svg",
      features: ["Hair XL", "Dutasteride", "Minoxidil", "PRP"],
      duration: "45 min",
      cta: "Resultados visibles a los 90 días",
      category: "Rejuvenecimiento"
    },
    {
      title: "Toxina Botulínica (Botox)",
      subtitle: "Cara o Cuello",
      description: "Tratamiento que relaja los músculos responsables de las arrugas dinámicas, suaviza líneas de expresión en frente, entrecejo, patas de gallo y otras áreas del rostro. Ayuda a prevenir la formación de nuevas arrugas, mejora la armonía facial y brinda un aspecto descansado y natural.",
      image: "/placeholder.svg",
      features: ["Frente", "Entrecejo", "Patas de Gallo", "Cuello"],
      duration: "30 min",
      cta: "Unos toquecitos que te devuelven frescura y ganas de mirarte en el espejo 😍",
      category: "Botox"
    },
    {
      title: "Labios",
      subtitle: "Ácido Hialurónico de Alta Calidad",
      description: "Procedimiento que define el contorno, mejora la simetría y realza el volumen de los labios con ácido hialurónico de alta calidad. Aporta hidratación profunda, suaviza líneas finas y armoniza la proporción con el resto del rostro. Puede adaptarse para lograr un resultado sutil y natural o un efecto más voluminoso según la preferencia del paciente.",
      image: "/placeholder.svg",
      features: ["Definición de Contorno", "Hidratación Profunda", "Resultados Naturales"],
      duration: "45 min",
      cta: "Labios listos para lucir",
      category: "Rellenos"
    },
    {
      title: "Rinomodelación",
      subtitle: "Sin Cirugía, Sin Cicatrices",
      description: "Procedimiento no quirúrgico que corrige imperfecciones nasales, mejora el perfil y realza la armonía facial con ácido hialurónico de alta calidad. Permite levantar la punta, suavizar gibas y definir el contorno nasal sin cirugía, cicatrices ni recuperación prolongada. Los resultados son inmediatos y adaptables a cada rostro.",
      image: "/placeholder.svg",
      features: ["Sin Cirugía", "Resultados Inmediatos", "Perfil Armonioso"],
      duration: "45 min",
      cta: "Un perfil armónico en minutos 👃✨",
      category: "Rellenos"
    },
    {
      title: "Rinolips",
      subtitle: "Nariz y Labios en Una Sesión",
      description: "Procedimiento combinado que integra rinomodelación y relleno de labios en una sola sesión, logrando armonía y equilibrio facial con ácido hialurónico de alta calidad. Corrige imperfecciones nasales, perfila labios y realza la expresión, aportando volumen, definición e hidratación. El resultado puede ser sutil o más marcado según la preferencia del paciente.",
      image: "/placeholder.svg",
      features: ["Rinomodelación", "Relleno de Labios", "Todo en Uno"],
      duration: "45 min",
      cta: "Armonía total en un solo paso 💎👄👃",
      category: "Rellenos"
    },
    {
      title: "Masculinización (MAN)",
      subtitle: "Línea Neauvia® para Hombres",
      description: "Línea MAN diseñada específicamente para las necesidades anatómicas masculinas: mayor proyección, estructura y definición, respetando la armonía facial propia de cada hombre. Este tratamiento busca reforzar y esculpir el contorno mandibular, pómulos y mentón para proyectar una imagen más firme, segura y atractiva. Se realiza con rellenos de alta densidad y cohesividad.",
      image: "/placeholder.svg",
      features: ["Contorno Mandibular", "Mayor Proyección", "Efecto Lifting"],
      duration: "1 hora",
      cta: "Imagen más fuerte, segura y armónica",
      category: "Armonización"
    },
    {
      title: "Terapia Facial Francesa NCTF",
      subtitle: "Pack 3 Sesiones - Mesoterapia",
      description: "Microinyecciones de ácido hialurónico combinado con más de 50 vitaminas, minerales, aminoácidos y antioxidantes que actúan directamente en la dermis. Nutre e hidrata intensamente la piel, mejora la textura y devuelve la luminosidad natural del rostro. Efecto glow inmediato, estimula la regeneración celular y aporta firmeza y suavidad.",
      image: "/placeholder.svg",
      features: ["Efecto Glow", "50+ Nutrientes", "Regeneración Celular"],
      duration: "45 min",
      cta: "Si querés que tu piel se vea fresca, luminosa y descansada 😉",
      category: "Rejuvenecimiento"
    },
    {
      title: "Bioestimulador Hydroxy Fill",
      subtitle: "Hidroxiapatita de Calcio",
      description: "La hidroxiapatita de calcio es un bioestimulador de colágeno que no solo mejora la apariencia inmediata, sino que activa los procesos naturales de regeneración de tu piel. Se aplica en zonas estratégicas para redefinir contornos, mejorar la flacidez y recuperar firmeza de forma progresiva y duradera. Rellena y da soporte inmediato mientras estimula la producción de colágeno tipo I y III.",
      image: "/placeholder.svg",
      features: ["Rejuvenecimiento Progresivo", "Estimula Colágeno", "Resultados Duraderos"],
      duration: "1 hora",
      cta: "Tu piel empieza a trabajar para vos… y cada semana te vas a gustar un poquito más",
      category: "Bioestimuladores"
    },
    {
      title: "Bioestimulador Aesplla",
      subtitle: "Estimulación de Colágeno Tipo I",
      description: "Bioestimulador de colágeno inyectable que actúa de forma progresiva, mejorando la firmeza, textura y calidad de la piel desde el interior. Estimula la producción natural de colágeno tipo I, ayudando a redefinir contornos faciales, tratar la flacidez y restaurar volumen de forma duradera y sutil. Ideal para quienes buscan una mejora sostenida sin efectos artificiales. Duración de efecto hasta 21 meses.",
      image: "/placeholder.svg",
      features: ["Cara", "Cuello", "Abdomen", "Glúteos"],
      duration: "45 min",
      cta: "No rellena, regenera. Lo mejor es dejar que tu piel haga el trabajo 🕊️",
      category: "Bioestimuladores"
    },
    {
      title: "Surco Nasogeniano",
      subtitle: "Efecto Lifting Natural",
      description: "Tratamiento de armonización facial que utiliza ácido hialurónico para restaurar el soporte y volumen del tercio medio del rostro. Al reponer estructuras clave como pómulos y zona malar, se logra un efecto lifting natural que suaviza el surco nasogeniano. Mejora la proyección, eleva los tejidos y devuelve frescura sin alterar la expresión.",
      image: "/placeholder.svg",
      features: ["Efecto Lifting", "Volumen Facial", "Resultado Natural"],
      duration: "30 min",
      cta: "Efecto lifting natural ✨",
      category: "Rellenos"
    },
    {
      title: "Plasma Rico en Plaquetas Facial (Escencial)",
      subtitle: "Estimulación Natural de Colágeno",
      description: "Reactivá la juventud natural de tu piel. Plasma rico en plaquetas para estimular colágeno y mejorar textura facial. Efecto luminoso, mayor firmeza y piel más suave. Ideal para quienes buscan resultados naturales y progresivos. Mejora visible desde las primeras semanas.",
      image: "/placeholder.svg",
      features: ["Estimula Colágeno", "Textura Mejorada", "Efecto Luminoso"],
      duration: "30 min",
      cta: "Reactivá la juventud natural de tu piel",
      category: "Rejuvenecimiento"
    },
    {
      title: "Plasma Rico en Plaquetas Vitalis (Premium)",
      subtitle: "Regeneración Integral",
      description: "Salud, vitalidad y belleza en un protocolo completo. PRP facial + tratamiento en cuello, escote y manos. Regeneración simultánea de varias zonas clave para un resultado armónico. Estimula colágeno, mejora textura, tono y firmeza. Tratamiento para quienes priorizan salud y estética global.",
      image: "/placeholder.svg",
      features: ["Facial", "Cuello", "Escote", "Manos"],
      duration: "45 min",
      cta: "Salud, vitalidad y belleza en un protocolo completo 💎",
      category: "Premium"
    },
    {
      title: "Reducción de Papada y/o Mejillas",
      subtitle: "Pack 3 Sesiones - Perfil Perfecto",
      description: "Procedimiento mínimamente invasivo que utiliza microinyecciones liporreductoras para disolver acúmulos de grasa localizada en papada y/o mejillas. Ayuda a definir el contorno mandibular, estilizar el rostro y mejorar el perfil sin necesidad de cirugía. Los resultados se aprecian de manera progresiva, con cambios visibles en pocas sesiones. Tratamiento ambulatorio, con anestesia local y rápida recuperación.",
      image: "/placeholder.svg",
      features: ["Sin Cirugía", "Resultados Progresivos", "Anestesia Local"],
      duration: "45 min",
      cta: "Ideal para quienes buscan un rostro más firme y armonioso",
      category: "Corporal"
    },
    {
      title: "Peeling + Mesoterapia NCTF",
      subtitle: "Renovación Profunda",
      description: "Un tratamiento en dos pasos que renueva tu piel desde la superficie hasta las capas más profundas. Peeling médico elimina células muertas y mejora la textura, seguido de mesoterapia NCTF 135HA con microinyecciones de ácido hialurónico, vitaminas, minerales y antioxidantes que nutren e hidratan la dermis en profundidad. Piel más uniforme, luminosa y revitalizada desde la primera sesión.",
      image: "/placeholder.svg",
      features: ["Peeling Médico", "NCTF 135HA", "Luminosidad Inmediata"],
      duration: "45 min",
      cta: "Ideal si querés preparar tu piel para un evento y lucir fresca, radiante y saludable ✨",
      category: "Rejuvenecimiento"
    },
    {
      title: "Peeling Médico",
      subtitle: "Renovación Cutánea",
      description: "Se utilizan ácidos en concentraciones médicas para exfoliar de forma controlada las capas superficiales de la piel. Estimula la regeneración celular, mejora la textura, atenúa manchas, suaviza arrugas finas y aporta luminosidad. Ideal para revitalizar el rostro y preparar la piel para otros procedimientos.",
      image: "/placeholder.svg",
      features: ["Exfoliación Controlada", "Atenúa Manchas", "Mayor Luminosidad"],
      duration: "30 min",
      cta: "Post tratamiento: Protector solar regularmente",
      category: "Rejuvenecimiento"
    },
    {
      title: "Cuello de Nefertiti",
      subtitle: "Botox para Contorno Mandibular",
      description: "Técnica avanzada que utiliza toxina botulínica para relajar los músculos depresores del cuello y el tercio inferior del rostro. Produce un efecto de elevación y definición del contorno mandibular, estiliza el cuello y aporta un aspecto más juvenil y armónico. Ideal para quienes buscan un rejuvenecimiento sutil sin cirugía, con resultados naturales y progresivos.",
      image: "/placeholder.svg",
      features: ["Efecto Lifting", "Sin Cirugía", "Definición Mandibular"],
      duration: "30 min",
      cta: "Un lifting para que tu cuello luzca como reina egipcia 👑",
      category: "Botox"
    },
    {
      title: "Botox Completo",
      subtitle: "Cara + Cuello",
      description: "Tratamiento integral que combina aplicación de toxina botulínica en rostro y cuello. Relaja los músculos depresores del cuello y el tercio inferior del rostro, produciendo un efecto de elevación y definición del contorno mandibular. Estiliza el cuello y aporta un aspecto más juvenil y armónico. Rejuvenecimiento completo con resultados naturales.",
      image: "/placeholder.svg",
      features: ["Rostro Completo", "Cuello", "Resultado Natural"],
      duration: "45 min",
      cta: "Rejuvenecimiento integral sin cirugía",
      category: "Botox"
    },
    {
      title: "Botox para Bruxismo",
      subtitle: "Alivio de Tensión Mandibular",
      description: "Toxina botulínica para relajar el músculo masetero y músculo temporal que provocan tensión mandibular. Este tratamiento alivia síntomas de dolor, desgaste dental y cefaleas asociadas al bruxismo. Además de mejorar el confort diario, puede estilizar el contorno facial al afinar la zona mandibular. Los resultados son progresivos y se mantienen durante varios meses.",
      image: "/placeholder.svg",
      features: ["Alivia Dolor", "Previene Desgaste", "Estiliza Rostro"],
      duration: "30 min",
      cta: "Definitivamente mejora tu calidad de vida y sueño 😴",
      category: "Botox"
    },
    {
      title: "Botox Relax",
      subtitle: "Migrañas y Tensión Muscular",
      description: "Tratamiento que mejora la calidad de vida. Se aplica toxina botulínica en la musculatura de cabeza, cuello y sobre los hombros para relajar la tensión y el dolor muscular en pacientes con dolores migrañosos o musculares crónicos. El efecto logrado disminuye la necesidad de consumir analgésicos o acudir a guardias.",
      image: "/placeholder.svg",
      features: ["Reduce Migrañas", "Alivia Tensión", "Menos Analgésicos"],
      duration: "45 min",
      cta: "Tratamiento que mejora la calidad de vida",
      category: "Botox"
    },
    {
      title: "Toxina Botulínica - Hiperhidrosis",
      subtitle: "Control de Sudoración Excesiva",
      description: "Tratamiento que reduce la sudoración excesiva en axilas al bloquear temporalmente la actividad de las glándulas sudoríparas. Mejora el confort diario, la seguridad personal y la calidad de vida, evitando la humedad y el malestar asociados. Los resultados suelen durar entre 6 y 9 meses.",
      image: "/placeholder.svg",
      features: ["Reduce Sudoración", "6-9 Meses", "Mayor Confort"],
      duration: "45 min",
      cta: "Adiós a las manchas de transpiración 🙌",
      category: "Botox"
    },
    {
      title: "Armonización de Mentón",
      subtitle: "Ácido Hialurónico",
      description: "Tratamiento con ácido hialurónico diseñado para dar mayor proyección, definición y simetría al mentón, equilibrando las proporciones faciales y mejorando el perfil. Puede suavizar retracciones, alargar sutilmente el rostro o armonizar la relación con la nariz y la mandíbula, ofreciendo un resultado natural y personalizado.",
      image: "/placeholder.svg",
      features: ["Mayor Proyección", "Equilibrio Facial", "Perfil Mejorado"],
      duration: "30 min",
      cta: "El mentón es un rasgo importante que denota belleza y armoniza las proporciones",
      category: "Armonización"
    },
    {
      title: "Contorno Mandibular",
      subtitle: "Redefinición y Estructura",
      description: "Procedimiento que redefine y estructura la línea mandibular utilizando ácido hialurónico u otros materiales de relleno. Aporta proyección, corrige asimetrías y mejora la transición entre el rostro y el cuello, logrando un perfil más firme y equilibrado. Ideal para realzar rasgos, masculinizar o feminizar sutilmente según las necesidades del paciente. Rejuvenecedor.",
      image: "/placeholder.svg",
      features: ["Proyección", "Corrige Asimetrías", "Perfil Definido"],
      duration: "45 min",
      cta: "Ideal para realzar rasgos según tus necesidades",
      category: "Armonización"
    },
    {
      title: "Relleno de Fosa Temporal",
      subtitle: "Sien - Rejuvenecimiento Superior",
      description: "Tratamiento que repone volumen en la zona lateral de la frente conocida como 'sien'. Con el tiempo se produce un hundimiento que genera aspecto cadavérico e interrumpe la armonía del rostro. El uso de ácido hialurónico con bioestimuladores permite recuperar la convexidad natural del tercio superior, elevar la cola de la ceja y suavizar transiciones. Aporta juventud y equilibrio general.",
      image: "/placeholder.svg",
      features: ["Restaura Volumen", "Eleva Cejas", "Armonía Facial"],
      duration: "45 min",
      cta: "Notarán que te ves más joven sin saber qué te hiciste ✨",
      category: "Rellenos"
    },
    {
      title: "Armonización Facial Essential",
      subtitle: "Botox + 1 Jeringa de Ácido Hialurónico",
      description: "Protocolo integral que combina toxina botulínica para relajar líneas de expresión con una jeringa de ácido hialurónico, aplicados según las necesidades del rostro. Incluye toxina en zonas estratégicas y 1 jeringa de ácido hialurónico para dar soporte, volumen y definición a puntos seleccionados. Ideal para quienes buscan frescura, equilibrio y naturalidad sin perder su identidad. Permite tratar zonas estratégicas como labios, pómulos, mandíbula o mentón, logrando una armonización progresiva, sutil y personalizada.",
      image: "/placeholder.svg",
      features: ["Botox + Ácido Hialurónico", "Tratamiento Combinado", "Resultados Naturales"],
      duration: "1 hora",
      cta: "Una sesión, un cambio sutil, y una versión tuya que te va a encantar. ✨",
      category: "Armonización"
    },
    {
      title: "Armonización Facial Advanced",
      subtitle: "Botox + Bioestimulador + Ácido Hialurónico",
      description: "Ideal para quienes buscan prevención del envejecimiento, redefinición sutil y luminosidad duradera. Incluye toxina botulínica para suavizar expresiones y prevenir nuevas arrugas, 1 bioestimulador de colágeno para mejorar textura, firmeza y luminosidad a largo plazo, y 1 jeringa de ácido hialurónico (rino o labios). Protocolo combinado que une el efecto relajante de la toxina con la acción regeneradora del bioestimulador, permitiendo atenuar arrugas dinámicas, mejorar la firmeza de la piel y redefinir contornos faciales con resultados naturales y progresivos.",
      image: "/placeholder.svg",
      features: ["3 Tecnologías Combinadas", "Firmeza Progresiva", "Prevención Activa"],
      duration: "1 hora",
      cta: "Frescura hoy, firmeza mañana. 💉",
      category: "Armonización"
    },
    {
      title: "Armonización Facial Black (Premium)",
      subtitle: "Experiencia Estética Integral Premium",
      description: "💎 Invertí en tu mejor versión. No es solo estética, es presencia, seguridad y elegancia en un solo tratamiento. En una sesión, logramos un rejuvenecimiento integral que resalta lo mejor de tus rasgos, corrige asimetrías y proyecta una imagen más fresca y armoniosa, sin perder tu esencia. Incluye: toxina botulínica, 2 jeringas de ácido hialurónico de alta gama para restaurar volúmenes y redefinir contornos, y 1 bioestimulador de colágeno que mejora la calidad, firmeza y luminosidad de la piel de forma progresiva. Resultados visibles desde el primer día y mejoras que continúan durante meses. Diseño facial exclusivo, adaptado a tu anatomía y estilo personal. Materiales de máxima calidad, técnica avanzada y atención personalizada. Un solo procedimiento que integra lo que habitualmente requeriría múltiples sesiones. Para este procedimiento se seleccionan insumos de línea premium y se ofrece una experiencia estética única en la cual serás acompañado paso a paso.",
      image: "/placeholder.svg",
      features: ["Línea Premium", "Diseño Exclusivo", "Experiencia Única"],
      duration: "1:30 horas",
      cta: "No es magia, es ciencia, aplicada en el lugar preciso. 💫",
      category: "Premium"
    },
    {
      title: "Hydro Deluxe",
      subtitle: "Hidratación Profunda con Tecnología Suiza",
      description: "Una fórmula única: ácido hialurónico ultrapuro para máxima hidratación y elasticidad, glicina y prolina (aminoácidos esenciales para regenerar colágeno), e hidroxiapatita de calcio para firmeza y estructura duradera. Tecnología suiza con resultados inmediatos y de larga duración. Beneficios visibles: piel más luminosa, firme y rejuvenecida, hidratación intensa que se siente al tacto, mejora progresiva en textura y calidad cutánea. No es solo hidratación, es un tratamiento que eleva la calidad de tu piel a otro nivel.",
      image: "/placeholder.svg",
      features: ["Tecnología Suiza", "Hidratación Profunda", "Efecto Inmediato"],
      duration: "45 min",
      cta: "Recomendación: Repetir sesión a los 30 días para optimizar resultados. 💧",
      category: "Bioestimuladores"
    },
    {
      title: "Mesoterapia Fosfatidilcolina",
      subtitle: "Pack x3 Sesiones - 2 Zonas",
      description: "Tratamiento liporreductor localizado con fosfatidilcolina, ideal para abdomen, flancos, muslos o brazos. Tres sesiones para resultados visibles, actuando sobre el metabolismo de grasas y mejorando el contorno corporal. Cantidad de sesiones: 3. Zonas incluidas: 2 por sesión.",
      image: "/placeholder.svg",
      features: ["Pack 3 Sesiones", "2 Zonas por Sesión", "Reducción Localizada"],
      duration: "1 hora",
      cta: "Moldea tu silueta con tecnología científicamente comprobada 🎯",
      category: "Corporal"
    },
    {
      title: "Control de Tratamiento",
      subtitle: "Revisión y Seguimiento Personalizado",
      description: "Cita de revisión de tratamiento realizado. Evaluación profesional del progreso de tu tratamiento, ajustes si son necesarios y resolución de dudas. Seguimiento personalizado para optimizar tus resultados.",
      image: "/placeholder.svg",
      features: ["Evaluación Profesional", "Seguimiento Personalizado", "Optimización"],
      duration: "30 min",
      cta: "Tu evolución es nuestra prioridad 📋",
      category: "Consulta"
    },
    {
      title: "Cellular Reset",
      subtitle: "Programa Único de Transformación Celular",
      description: "Un programa único en Córdoba diseñado para quienes buscan algo más que un tratamiento estético: una verdadera transformación celular. En 3 sesiones exclusivas, cada 15 días, combinamos biotecnología francesa (NCTF 135HA), plasma autólogo y el poder de Vitamina C endovenosa, potenciados con un suplemento domiciliario premium. ✨ Piel más firme, luminosa y revitalizada. ✨ Energía renovada y bienestar global. ✨ Resultados que trascienden la superficie. 👉Cupos limitados. Este no es un tratamiento, es un programa único diseñado para quienes buscan renovar sus células, recuperar energía y reflejarlo en la piel. Combina lo mejor de la biotecnología (NCTF + PRP + Vitamina C) con un suplemento domiciliario premium para que los resultados trasciendan la camilla. Es un ritual by Dr. Guillermo Martini.",
      image: "/placeholder.svg",
      features: ["3 Sesiones Exclusivas", "Biotecnología Francesa", "Suplemento Premium"],
      duration: "2 horas",
      cta: "Cupos limitados. Renovación celular integral. 🌟",
      category: "Premium"
    },
  ]

  // Categorías disponibles con íconos profesionales
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

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  // Función de filtrado inteligente con categorías
  const filteredServices = services.filter((service) => {
    // Filtrar por categoría
    if (selectedCategory !== "all" && service.category !== selectedCategory) {
      return false
    }
    
    // Filtrar por búsqueda
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

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Nuestros Tratamientos</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Ofrecemos una amplia gama de tratamientos especializados en medicina estética, utilizando las técnicas más
            avanzadas y productos de la más alta calidad.
          </p>
        </div>

        {/* Buscador */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar tratamiento... (ej: botox, labios, rejuvenecimiento, arrugas, armonización)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg rounded-full border-2 focus:border-primary transition-colors"
            />
          </div>

          {/* Categorías */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const IconComponent = category.Icon
              return (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105 flex items-center gap-2 ${
                    selectedCategory === category.id 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-primary/10"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </Badge>
              )
            })}
          </div>

          {searchQuery && (
            <p className="text-center mt-4 text-sm text-muted-foreground">
              {filteredServices.length === 0 
                ? "No se encontraron tratamientos con ese término" 
                : `${filteredServices.length} tratamiento${filteredServices.length !== 1 ? 's' : ''} encontrado${filteredServices.length !== 1 ? 's' : ''}`
              }
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">No se encontraron tratamientos</p>
              <Button 
                variant="outline" 
                onClick={() => setSearchQuery("")}
                className="mt-4"
              >
                Limpiar búsqueda
              </Button>
            </div>
          ) : (
            filteredServices.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-sm text-white/90">{service.subtitle}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </div>
              </div>
              
              <CardContent className="flex-1 flex flex-col p-4">
                <Button
                  variant="ghost"
                  onClick={() => toggleExpand(index)}
                  className="w-full justify-between hover:bg-secondary/10 mb-2"
                >
                  <span className="font-medium">— Más info</span>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>
                
                {expandedIndex === index && (
                  <div className="space-y-4 mt-4 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {service.cta && (
                      <p className="text-primary font-medium text-sm italic border-l-2 border-primary pl-3">
                        {service.cta}
                      </p>
                    )}
                    
                    <Button className="w-full bg-secondary hover:bg-secondary/90">
                      Agendar Consulta
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
