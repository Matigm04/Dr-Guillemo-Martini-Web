// Datos de ejemplo de tratamientos
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

export const treatmentsData: Treatment[] = [
  {
    id: "botox-facial",
    nombre: "Toxina Botulínica",
    categoria: "Rejuvenecimiento",
    duracion: "30 min",
    etiquetas: ["Frente", "Entrecejo", "Patas de Gallo"],
    problema: "Con el paso del tiempo, las líneas de expresión se vuelven más marcadas, dando un aspecto cansado o envejecido. Las arrugas dinámicas en frente, entrecejo y patas de gallo son las más visibles y pueden afectar la confianza y la percepción de juventud.",
    solucion: "La toxina botulínica relaja selectivamente los músculos responsables de las arrugas dinámicas. El tratamiento es preciso, mínimamente invasivo y con resultados naturales. Previene la formación de nuevas arrugas mientras suaviza las existentes, brindando un rostro descansado y armónico sin perder expresividad.",
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
    categoria: "Volumen Facial",
    duracion: "45 min",
    etiquetas: ["Definición", "Hidratación", "Volumen"],
    problema: "Los labios pierden volumen y definición con la edad, las líneas periorales se hacen más visibles y la hidratación natural disminuye. Esto puede afectar la armonía facial y la confianza al sonreír.",
    solucion: "Utilizamos ácido hialurónico de última generación para restaurar volumen, definir contornos y proporcionar hidratación profunda. El procedimiento es personalizado según tus preferencias, logrando desde un resultado sutil y natural hasta un efecto más voluminoso, siempre respetando las proporciones faciales.",
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
    categoria: "Armonización Facial",
    duracion: "45 min",
    etiquetas: ["Sin Cirugía", "Perfil Armonioso", "Resultados Inmediatos"],
    problema: "Las imperfecciones nasales como gibas, asimetrías o falta de proyección en la punta pueden afectar la armonía facial y la confianza personal. La cirugía tradicional implica tiempos de recuperación prolongados y riesgos quirúrgicos.",
    solucion: "La rinomodelación con ácido hialurónico permite corregir imperfecciones, levantar la punta nasal y definir el contorno sin cirugía, sin cicatrices y sin tiempo de recuperación. Los resultados son inmediatos, reversibles y completamente personalizables para lograr el perfil que deseas.",
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
    id: "bioestimulador-hydroxy",
    nombre: "Bioestimulador Hydroxy Fill",
    categoria: "Bioestimuladores",
    duracion: "1 hora",
    etiquetas: ["Colágeno", "Rejuvenecimiento", "Duradero"],
    problema: "Con el paso del tiempo, la producción natural de colágeno disminuye, resultando en pérdida de firmeza, flacidez y aparición de arrugas. Los tratamientos superficiales solo ofrecen resultados temporales sin abordar la causa raíz.",
    solucion: "La hidroxiapatita de calcio es un bioestimulador que activa la producción natural de colágeno tipo I y III. Proporciona relleno y soporte inmediato mientras estimula la regeneración celular de forma progresiva. Los resultados mejoran con el tiempo y son duraderos, logrando una piel más firme, tersa y rejuvenecida desde el interior.",
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
    id: "nctf-terapia-francesa",
    nombre: "Terapia Facial Francesa NCTF",
    categoria: "Nutrición Cutánea",
    duracion: "45 min",
    etiquetas: ["Efecto Glow", "50+ Nutrientes", "Hidratación"],
    problema: "El estrés, la contaminación y el paso del tiempo dejan la piel deshidratada, opaca y con textura irregular. La falta de nutrientes esenciales acelera el envejecimiento y reduce la luminosidad natural del rostro.",
    solucion: "La mesoterapia NCTF combina ácido hialurónico con más de 50 vitaminas, minerales, aminoácidos y antioxidantes que nutren e hidratan intensamente desde la dermis. El resultado es un efecto glow inmediato, piel luminosa, hidratada y regenerada con textura mejorada y firmeza visible.",
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
    id: "masculinizacion-man",
    nombre: "Masculinización MAN",
    categoria: "Armonización Masculina",
    duracion: "1 hora",
    etiquetas: ["Mandíbula", "Proyección", "Definición"],
    problema: "Muchos hombres buscan un rostro más definido, masculino y proyectado. La falta de estructura en mandíbula, mentón o pómulos puede restar presencia y seguridad en la imagen personal.",
    solucion: "La línea MAN de Neauvia® está diseñada específicamente para la anatomía masculina, utilizando rellenos de alta densidad que proporcionan mayor proyección, estructura y definición. Reforzamos el contorno mandibular, pómulos y mentón para lograr un rostro más firme, seguro y atractivo, siempre respetando la armonía facial masculina.",
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
  }
]
