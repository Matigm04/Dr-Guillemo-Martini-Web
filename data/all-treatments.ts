// Datos completos de todos los servicios/tratamientos
export interface Treatment {
  id: string
  nombre: string
  categoria: string
  duracion: string
  etiquetas: string[]
  problema: string
  solucion: string
  imageBefore: string
  imageAfter: string
  testimonios: {
    nombre: string
    texto: string
    rating: number
  }[]
}

export const allTreatmentsData: Treatment[] = [
  {
    id: "consulta-estetica",
    nombre: "Consulta Estética",
    categoria: "Consulta",
    duracion: "30 min",
    etiquetas: ["Diagnóstico Facial", "Plan Personalizado", "Orientación Profesional"],
    problema: "Antes de iniciar cualquier tratamiento estético, es fundamental entender las necesidades específicas de tu piel y rostro. Cada persona tiene características únicas que requieren un enfoque personalizado y profesional.",
    solucion: "Un encuentro personalizado para evaluar tu piel, escuchar tus objetivos y diseñar un plan de tratamiento adaptado a tus necesidades. Incluye diagnóstico facial completo, recomendaciones de procedimientos específicos y orientación sobre cuidados domiciliarios para potenciar y mantener los resultados a largo plazo.",
    imageBefore: "/before-facial-harmonization-treatment-unbalanced-f.png",
    imageAfter: "/after-facial-harmonization-treatment-balanced-prop.png",
    testimonios: [
      {
        nombre: "Cecilia Morales",
        texto: "La consulta fue muy detallada. El Dr. Martini se tomó el tiempo para explicarme todo y diseñar un plan perfecto para mí.",
        rating: 5
      },
      {
        nombre: "Roberto Sánchez",
        texto: "Excelente atención, me sentí muy cómodo y las recomendaciones fueron precisas y profesionales.",
        rating: 5
      }
    ]
  },
  {
    id: "recuperacion-capilar",
    nombre: "Recuperación Capilar",
    categoria: "Rejuvenecimiento",
    duracion: "45 min",
    etiquetas: ["Hair XL", "Dutasteride", "Minoxidil", "PRP"],
    problema: "La caída del cabello y el debilitamiento capilar afectan la autoestima y la confianza personal. Factores como el estrés, la genética y el paso del tiempo pueden acelerar la pérdida capilar y disminuir la densidad del cuero cabelludo.",
    solucion: "Tratamiento de microinyecciones en el cuero cabelludo con principios activos avanzados para estimular el crecimiento del cabello. Nutre y estimula el folículo piloso, favoreciendo el crecimiento, fortaleciendo el cabello y mejorando su densidad y brillo. Ideal en casos de debilitamiento y caída estacional. Resultados visibles a los 90 días.",
    imageBefore: "/before-collagen-biostimulator-treatment-aging-face.png",
    imageAfter: "/after-collagen-biostimulator-treatment-rejuvenated.png",
    testimonios: [
      {
        nombre: "Diego Fernández",
        texto: "Después de 3 meses noto mucha más densidad en mi cabello. Estoy muy satisfecho con los resultados.",
        rating: 5
      }
    ]
  },
  {
    id: "botox-facial",
    nombre: "Toxina Botulínica (Botox)",
    categoria: "Botox",
    duracion: "30 min",
    etiquetas: ["Frente", "Entrecejo", "Patas de Gallo", "Cuello"],
    problema: "Con el paso del tiempo, las líneas de expresión se vuelven más marcadas, dando un aspecto cansado o envejecido. Las arrugas dinámicas en frente, entrecejo y patas de gallo son las más visibles y pueden afectar la confianza y la percepción de juventud.",
    solucion: "La toxina botulínica relaja selectivamente los músculos responsables de las arrugas dinámicas. El tratamiento es preciso, mínimamente invasivo y con resultados naturales. Previene la formación de nuevas arrugas mientras suaviza las existentes, brindando un rostro descansado y armónico sin perder expresividad. Unos toquecitos que te devuelven frescura y ganas de mirarte en el espejo.",
    imageBefore: "/before-facial-harmonization-treatment-unbalanced-f.png",
    imageAfter: "/after-facial-harmonization-treatment-balanced-prop.png",
    testimonios: [
      {
        nombre: "María González",
        texto: "Me encantó el resultado. Mi rostro se ve más descansado y natural, sin exageraciones. El Dr. Martini es muy profesional y atento.",
        rating: 5
      },
      {
        nombre: "Carolina Ruiz",
        texto: "Excelente atención y resultados increíbles. Las líneas de mi frente desaparecieron completamente y me veo mucho más fresca.",
        rating: 5
      }
    ]
  },
  {
    id: "labios-hialuronico",
    nombre: "Relleno de Labios",
    categoria: "Rellenos",
    duracion: "45 min",
    etiquetas: ["Definición de Contorno", "Hidratación Profunda", "Resultados Naturales"],
    problema: "Los labios pierden volumen y definición con la edad, las líneas periorales se hacen más visibles y la hidratación natural disminuye. Esto puede afectar la armonía facial y la confianza al sonreír.",
    solucion: "Procedimiento que define el contorno, mejora la simetría y realza el volumen de los labios con ácido hialurónico de alta calidad. Aporta hidratación profunda, suaviza líneas finas y armoniza la proporción con el resto del rostro. Puede adaptarse para lograr un resultado sutil y natural o un efecto más voluminoso según tu preferencia. Labios listos para lucir.",
    imageBefore: "/before-facial-harmonization-treatment-unbalanced-f.png",
    imageAfter: "/after-facial-harmonization-treatment-balanced-prop.png",
    testimonios: [
      {
        nombre: "Lucía Fernández",
        texto: "Quedé fascinada con el resultado. Mis labios se ven naturales, definidos y con el volumen perfecto. ¡Me siento hermosa!",
        rating: 5
      },
      {
        nombre: "Valentina Torres",
        texto: "El Dr. Martini entendió perfectamente lo que quería. Mis labios tienen más volumen pero siguen viéndose naturales.",
        rating: 5
      }
    ]
  },
  {
    id: "rinomodelacion",
    nombre: "Rinomodelación",
    categoria: "Rellenos",
    duracion: "45 min",
    etiquetas: ["Sin Cirugía", "Resultados Inmediatos", "Perfil Armonioso"],
    problema: "Las imperfecciones nasales como gibas, asimetrías o falta de proyección en la punta pueden afectar la armonía facial y la confianza personal. La cirugía tradicional implica tiempos de recuperación prolongados y riesgos quirúrgicos.",
    solucion: "Procedimiento no quirúrgico que corrige imperfecciones nasales, mejora el perfil y realza la armonía facial con ácido hialurónico de alta calidad. Permite levantar la punta, suavizar gibas y definir el contorno nasal sin cirugía, cicatrices ni recuperación prolongada. Los resultados son inmediatos y adaptables a cada rostro. Un perfil armónico en minutos.",
    imageBefore: "/before-facial-harmonization-treatment-unbalanced-f.png",
    imageAfter: "/after-facial-harmonization-treatment-balanced-prop.png",
    testimonios: [
      {
        nombre: "Sofía Mendoza",
        texto: "No puedo creer el cambio tan hermoso en mi perfil. Sin cirugía, sin dolor y con resultados inmediatos. ¡Increíble!",
        rating: 5
      },
      {
        nombre: "Ana Martínez",
        texto: "Siempre quise mejorar mi nariz pero tenía miedo a la cirugía. Este tratamiento fue la solución perfecta.",
        rating: 5
      }
    ]
  },
  {
    id: "rinolips",
    nombre: "Rinolips",
    categoria: "Rellenos",
    duracion: "45 min",
    etiquetas: ["Rinomodelación", "Relleno de Labios", "Todo en Uno"],
    problema: "A veces, para lograr la armonía facial completa, es necesario trabajar tanto en la nariz como en los labios. Hacer dos procedimientos separados puede ser costoso y requerir más tiempo.",
    solucion: "Procedimiento combinado que integra rinomodelación y relleno de labios en una sola sesión, logrando armonía y equilibrio facial con ácido hialurónico de alta calidad. Corrige imperfecciones nasales, perfila labios y realza la expresión, aportando volumen, definición e hidratación. El resultado puede ser sutil o más marcado según tu preferencia. Armonía total en un solo paso.",
    imageBefore: "/before-facial-harmonization-treatment-unbalanced-f.png",
    imageAfter: "/after-facial-harmonization-treatment-balanced-prop.png",
    testimonios: [
      {
        nombre: "Daniela Pérez",
        texto: "Hacer ambos tratamientos en una sesión fue perfecto. Los resultados son espectaculares y muy naturales.",
        rating: 5
      }
    ]
  },
  {
    id: "masculinizacion-man",
    nombre: "Masculinización MAN",
    categoria: "Armonización",
    duracion: "1 hora",
    etiquetas: ["Contorno Mandibular", "Mayor Proyección", "Efecto Lifting"],
    problema: "Muchos hombres buscan un rostro más definido, masculino y proyectado. La falta de estructura en mandíbula, mentón o pómulos puede restar presencia y seguridad en la imagen personal.",
    solucion: "Línea MAN de Neauvia® diseñada específicamente para las necesidades anatómicas masculinas: mayor proyección, estructura y definición, respetando la armonía facial propia de cada hombre. Este tratamiento busca reforzar y esculpir el contorno mandibular, pómulos y mentón para proyectar una imagen más firme, segura y atractiva. Se realiza con rellenos de alta densidad y cohesividad.",
    imageBefore: "/before-facial-masculinization-treatment-male-face.png",
    imageAfter: "/after-facial-masculinization-treatment-defined-jaw.png",
    testimonios: [
      {
        nombre: "Carlos Mendoza",
        texto: "El cambio en mi mandíbula es increíble. Me veo más masculino y seguro. Excelente trabajo del Dr. Martini.",
        rating: 5
      },
      {
        nombre: "Martín López",
        texto: "Buscaba un rostro más definido sin perder naturalidad. El resultado superó mis expectativas.",
        rating: 5
      }
    ]
  },
  {
    id: "nctf-terapia-francesa",
    nombre: "Terapia Facial Francesa NCTF",
    categoria: "Rejuvenecimiento",
    duracion: "45 min",
    etiquetas: ["Efecto Glow", "50+ Nutrientes", "Regeneración Celular"],
    problema: "El estrés, la contaminación y el paso del tiempo dejan la piel deshidratada, opaca y con textura irregular. La falta de nutrientes esenciales acelera el envejecimiento y reduce la luminosidad natural del rostro.",
    solucion: "Microinyecciones de ácido hialurónico combinado con más de 50 vitaminas, minerales, aminoácidos y antioxidantes que actúan directamente en la dermis. Nutre e hidrata intensamente la piel, mejora la textura y devuelve la luminosidad natural del rostro. Efecto glow inmediato, estimula la regeneración celular y aporta firmeza y suavidad. Pack de 3 sesiones.",
    imageBefore: "/before-collagen-biostimulator-treatment-aging-face.png",
    imageAfter: "/after-collagen-biostimulator-treatment-rejuvenated.png",
    testimonios: [
      {
        nombre: "Isabel Romero",
        texto: "Mi piel se ve radiante y luminosa. El efecto glow es real y duradero. ¡Me encanta!",
        rating: 5
      },
      {
        nombre: "Laura Díaz",
        texto: "Después del tratamiento mi piel se siente increíblemente hidratada y fresca. Todos notan el cambio.",
        rating: 5
      }
    ]
  },
  {
    id: "bioestimulador-hydroxy",
    nombre: "Bioestimulador Hydroxy Fill",
    categoria: "Bioestimuladores",
    duracion: "1 hora",
    etiquetas: ["Rejuvenecimiento Progresivo", "Estimula Colágeno", "Resultados Duraderos"],
    problema: "Con el paso del tiempo, la producción natural de colágeno disminuye, resultando en pérdida de firmeza, flacidez y aparición de arrugas. Los tratamientos superficiales solo ofrecen resultados temporales sin abordar la causa raíz.",
    solucion: "La hidroxiapatita de calcio es un bioestimulador de colágeno que no solo mejora la apariencia inmediata, sino que activa los procesos naturales de regeneración de tu piel. Se aplica en zonas estratégicas para redefinir contornos, mejorar la flacidez y recuperar firmeza de forma progresiva y duradera. Rellena y da soporte inmediato mientras estimula la producción de colágeno tipo I y III. Tu piel empieza a trabajar para vos.",
    imageBefore: "/before-collagen-biostimulator-treatment-aging-face.png",
    imageAfter: "/after-collagen-biostimulator-treatment-rejuvenated.png",
    testimonios: [
      {
        nombre: "Patricia Gómez",
        texto: "Cada semana noto mejoras en mi piel. Es increíble cómo mi rostro se ve más firme y rejuvenecido de forma natural.",
        rating: 5
      },
      {
        nombre: "Gabriela Castro",
        texto: "El mejor tratamiento que me he hecho. Mi piel trabajó para mí y los resultados son espectaculares y duraderos.",
        rating: 5
      }
    ]
  },
  {
    id: "bioestimulador-aesplla",
    nombre: "Bioestimulador Aesplla",
    categoria: "Bioestimuladores",
    duracion: "45 min",
    etiquetas: ["Cara", "Cuello", "Abdomen", "Glúteos"],
    problema: "La pérdida de colágeno afecta no solo el rostro, sino también otras áreas del cuerpo como cuello, abdomen y glúteos. Se necesita una solución integral que trate múltiples zonas con resultados duraderos.",
    solucion: "Bioestimulador de colágeno inyectable que actúa de forma progresiva, mejorando la firmeza, textura y calidad de la piel desde el interior. Estimula la producción natural de colágeno tipo I, ayudando a redefinir contornos faciales, tratar la flacidez y restaurar volumen de forma duradera y sutil. Ideal para quienes buscan una mejora sostenida sin efectos artificiales. Duración de efecto hasta 21 meses. No rellena, regenera.",
    imageBefore: "/before-collagen-biostimulator-treatment-aging-face.png",
    imageAfter: "/after-collagen-biostimulator-treatment-rejuvenated.png",
    testimonios: [
      {
        nombre: "Fernanda Ríos",
        texto: "Los resultados fueron mejorando mes a mes. Mi piel luce más firme y juvenil naturalmente.",
        rating: 5
      }
    ]
  }
]
