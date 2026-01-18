/**
 * @typedef {Object} Testimonio
 * @property {string} texto
 * @property {string} nombre
 * @property {number} rating
 */

/**
 * @typedef {Object} Service
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {string} imageBefore
 * @property {string} imageAfter
 * @property {string[]} features
 * @property {string} duration
 * @property {string} cta
 * @property {string} category
 * @property {string[]} tags - Added for compatibility with existing filters if needed
 * @property {Testimonio[]} [testimonios]
 */

/**
 * Listado oficial de servicios del Dr. Martini
 * @type {Service[]}
 */
export const serviciosOficiales = [
    {
      title: "Consulta Estética",
      subtitle: "Tu primer paso hacia la transformación",
      description:
        "Un encuentro personalizado para evaluar tu piel, escuchar tus objetivos y diseñar un plan de tratamiento adaptado a tus necesidades. Incluye diagnóstico facial, recomendaciones de procedimientos y orientación sobre cuidados domiciliarios para potenciar y mantener los resultados.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Diagnóstico Facial", "Plan Personalizado", "Orientación Profesional"],
      duration: "30 min",
      cta: "Te espero para planificar tu tratamiento juntos",
      category: "Consulta",
      tags: ["Consulta"],
      testimonios: [
        { nombre: "Ana G.", texto: "Me sentí muy escuchada, el plan fue perfecto.", rating: 5 }
      ]
    },
    {
      title: "Recuperación Capilar",
      subtitle: "Hair XL, Dutasteride, Minoxidil o PRP",
      description: "Tratamiento de microinyecciones en el cuero cabelludo con principios activos para estimular el crecimiento del cabello. Nutre y estimula el folículo piloso, favoreciendo el crecimiento, fortaleciendo el cabello y mejorar su densidad y brillo. Ideal en casos de debilitamiento y caída estacional.",
      imageBefore: "/images/public/Servicios/Recuperacion_Capilar/Recuperacion_Capilar_Antes.jpg",
      imageAfter: "/images/public/Servicios/Recuperacion_Capilar/Recuperacion_Capilar_Ahora.jpg",
      features: ["Hair XL", "Dutasteride", "Minoxidil", "PRP"],
      duration: "45 min",
      cta: "Resultados visibles a los 90 días",
      category: "Rejuvenecimiento",
      tags: ["Capilar", "Hair"],
      testimonios: []
    },
    {
      title: "Toxina Botulínica (Botox)",
      subtitle: "Cara o Cuello",
      description: "Tratamiento que relaja los músculos responsables de las arrugas dinámicas, suaviza líneas de expresión en frente, entrecejo, patas de gallo y otras áreas del rostro. Ayuda a prevenir la formación de nuevas arrugas, mejora la armonía facial y brinda un aspecto descansado y natural.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Frente", "Entrecejo", "Patas de Gallo", "Cuello"],
      duration: "30 min",
      cta: "Unos toquecitos que te devuelven frescura y ganas de mirarte en el espejo 😍",
      category: "Botox",
      tags: ["Botox", "Facial"],
      testimonios: []
    },
    {
      title: "Labios",
      subtitle: "Ácido Hialurónico de Alta Calidad",
      description: "Procedimiento que define el contorno, mejora la simetría y realza el volumen de los labios con ácido hialurónico de alta calidad. Aporta hidratación profunda, suaviza líneas finas y armoniza la proporción con el resto del rostro. Puede adaptarse para lograr un resultado sutil y natural o un efecto más voluminoso según la preferencia del paciente.",
      imageBefore: "/images/public/Servicios/Labios/Labios_Antes.jpg",
      imageAfter: "/images/public/Servicios/Labios/Labios_Despues.jpg",
      features: ["Definición de Contorno", "Hidratación Profunda", "Resultados Naturales"],
      duration: "45 min",
      cta: "Labios listos para lucir",
      category: "Rellenos",
      tags: ["Labios", "Rellenos"],
      testimonios: []
    },
    {
      title: "Rinomodelación",
      subtitle: "Sin Cirugía, Sin Cicatrices",
      description: "Procedimiento no quirúrgico que corrige imperfecciones nasales, mejora el perfil y realza la armonía facial con ácido hialurónico de alta calidad. Permite levantar la punta, suavizar gibas y definir el contorno nasal sin cirugía, cicatrices ni recuperación prolongada. Los resultados son inmediatos y adaptables a cada rostro.",
      imageBefore: "/images/public/Servicios/Rinomodelado/RInoModelado_Antes.jpg",
      imageAfter: "/images/public/Servicios/Rinomodelado/RinoModelado_Despues.jpg",
      beforePosition: "center 35%",
      afterPosition: "-50% 41%",
      features: ["Sin Cirugía", "Resultados Inmediatos", "Perfil Armonioso"],
      duration: "45 min",
      cta: "Un perfil armónico en minutos 👃✨",
      category: "Rellenos",
      tags: ["Rino", "Nariz"],
      testimonios: []
    },
    {
      title: "Rinolips",
      subtitle: "Nariz y Labios en Una Sesión",
      description: "Procedimiento combinado que integra rinomodelación y relleno de labios en una sola sesión, logrando armonía y equilibrio facial con ácido hialurónico de alta calidad. Corrige imperfecciones nasales, perfila labios y realza la expresión, aportando volumen, definición e hidratación. El resultado puede ser sutil o más marcado según la preferencia del paciente.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Rinomodelación", "Relleno de Labios", "Todo en Uno"],
      duration: "45 min",
      cta: "Armonía total en un solo paso 💎👄👃",
      category: "Rellenos",
      tags: ["Rino", "Labios"],
      testimonios: []
    },
    {
      title: "Masculinización (MAN)",
      subtitle: "Línea Neauvia® para Hombres",
      description: "Línea MAN diseñada específicamente para las necesidades anatómicas masculinas: mayor proyección, estructura y definición, respetando la armonía facial propia de cada hombre. Este tratamiento busca reforzar y esculpir el contorno mandibular, pómulos y mentón para proyectar una imagen más firme, segura y atractiva. Se realiza con rellenos de alta densidad y cohesividad.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Contorno Mandibular", "Mayor Proyección", "Efecto Lifting"],
      duration: "1 hora",
      cta: "Imagen más fuerte, segura y armónica",
      category: "Armonización",
      tags: ["Hombres", "Masculinización"],
      testimonios: []
    },
    {
      title: "Terapia Facial Francesa NCTF",
      subtitle: "Pack 3 Sesiones - Mesoterapia",
      description: "Microinyecciones de ácido hialurónico combinado con más de 50 vitaminas, minerales, aminoácidos y antioxidantes que actúan directamente en la dermis. Nutre e hidrata intensamente la piel, mejora la textura y devuelve la luminosidad natural del rostro. Efecto glow inmediato, estimula la regeneración celular y aporta firmeza y suavidad.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Efecto Glow", "50+ Nutrientes", "Regeneración Celular"],
      duration: "45 min",
      cta: "Si querés que tu piel se vea fresca, luminosa y descansada 😉",
      category: "Rejuvenecimiento",
      tags: ["Piel", "Mesoterapia"],
      testimonios: []
    },
    {
      title: "Bioestimulador Hydroxy Fill",
      subtitle: "Hidroxiapatita de Calcio",
      description: "La hidroxiapatita de calcio es un bioestimulador de colágeno que no solo mejora la apariencia inmediata, sino que activa los procesos naturales de regeneración de tu piel. Se aplica en zonas estratégicas para redefinir contornos, mejorar la flacidez y recuperar firmeza de forma progresiva y duradera. Rellena y da soporte inmediato mientras estimula la producción de colágeno tipo I y III.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Rejuvenecimiento Progresivo", "Estimula Colágeno", "Resultados Duraderos"],
      duration: "1 hora",
      cta: "Tu piel empieza a trabajar para vos… y cada semana te vas a gustar un poquito más",
      category: "Bioestimuladores",
      tags: ["Colágeno", "Bioestimuladores"],
      testimonios: []
    },
    {
      title: "Bioestimulador Aesplla",
      subtitle: "Estimulación de Colágeno Tipo I",
      description: "Bioestimulador de colágeno inyectable que actúa de forma progresiva, mejorando la firmeza, textura y calidad de la piel desde el interior. Estimula la producción natural de colágeno tipo I, ayudando a redefinir contornos faciales, tratar la flacidez y restaurar volumen de forma duradera y sutil. Ideal para quienes buscan una mejora sostenida sin efectos artificiales. Duración de efecto hasta 21 meses.",
      imageBefore: "/images/public/Servicios/Bioestimulador_Aespella/Bioestimulador_Aespella_Antes.jpg",
      imageAfter: "/images/public/Servicios/Bioestimulador_Aespella/Bioestimulador_Aespella_Despues.jpg",
      features: ["Cara", "Cuello", "Abdomen", "Glúteos"],
      duration: "45 min",
      cta: "No rellena, regenera. Lo mejor es dejar que tu piel haga el trabajo 🕊️",
      category: "Bioestimuladores",
      tags: ["Colágeno", "Corporal", "Facial"],
      testimonios: []
    },
    {
      title: "Surco Nasogeniano",
      subtitle: "Efecto Lifting Natural",
      description: "Tratamiento de armonización facial que utiliza ácido hialurónico para restaurar el soporte y volumen del tercio medio del rostro. Al reponer estructuras clave como pómulos y zona malar, se logra un efecto lifting natural que suaviza el surco nasogeniano. Mejora la proyección, eleva los tejidos y devuelve frescura sin alterar la expresión.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Efecto Lifting", "Volumen Facial", "Resultado Natural"],
      duration: "30 min",
      cta: "Efecto lifting natural ✨",
      category: "Rellenos",
      tags: ["Facial", "Rellenos"],
      testimonios: []
    },
    {
      title: "Plasma Rico en Plaquetas Facial (Escencial)",
      subtitle: "Estimulación Natural de Colágeno",
      description: "Reactivá la juventud natural de tu piel. Plasma rico en plaquetas para estimular colágeno y mejorar textura facial. Efecto luminoso, mayor firmeza y piel más suave. Ideal para quienes buscan resultados naturales y progresivos. Mejora visible desde las primeras semanas.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Estimula Colágeno", "Textura Mejorada", "Efecto Luminoso"],
      duration: "30 min",
      cta: "Reactivá la juventud natural de tu piel",
      category: "Rejuvenecimiento",
      tags: ["PRP", "Piel"],
      testimonios: []
    },
    {
      title: "Plasma Rico en Plaquetas Vitalis (Premium)",
      subtitle: "Regeneración Integral",
      description: "Salud, vitalidad y belleza en un protocolo completo. PRP facial + tratamiento en cuello, escote y manos. Regeneración simultánea de varias zonas clave para un resultado armónico. Estimula colágeno, mejora textura, tono y firmeza. Tratamiento para quienes priorizan salud y estética global.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Facial", "Cuello", "Escote", "Manos"],
      duration: "45 min",
      cta: "Salud, vitalidad y belleza en un protocolo completo 💎",
      category: "Premium",
      tags: ["PRP", "Premium"],
      testimonios: []
    },
    {
      title: "Reducción de Papada y/o Mejillas",
      subtitle: "Pack 3 Sesiones - Perfil Perfecto",
      description: "Procedimiento mínimamente invasivo que utiliza microinyecciones liporreductoras para disolver acúmulos de grasa localizada en papada y/o mejillas. Ayuda a definir el contorno mandibular, estilizar el rostro y mejorar el perfil sin necesidad de cirugía. Los resultados se aprecian de manera progresiva, con cambios visibles en pocas sesiones. Tratamiento ambulatorio, con anestesia local y rápida recuperación.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Sin Cirugía", "Resultados Progresivos", "Anestesia Local"],
      duration: "45 min",
      cta: "Ideal para quienes buscan un rostro más firme y armonioso",
      category: "Corporal",
      tags: ["Corporal", "Lipo"],
      testimonios: []
    },
    {
      title: "Peeling + Mesoterapia NCTF",
      subtitle: "Renovación Profunda",
      description: "Un tratamiento en dos pasos que renueva tu piel desde la superficie hasta las capas más profundas. Peeling médico elimina células muertas y mejora la textura, seguido de mesoterapia NCTF 135HA con microinyecciones de ácido hialurónico, vitaminas, minerales y antioxidantes que nutren e hidratan la dermis en profundidad. Piel más uniforme, luminosa y revitalizada desde la primera sesión.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Peeling Médico", "NCTF 135HA", "Luminosidad Inmediata"],
      duration: "45 min",
      cta: "Ideal si querés preparar tu piel para un evento y lucir fresca, radiante y saludable ✨",
      category: "Rejuvenecimiento",
      tags: ["Piel", "Peeling", "Mesoterapia"],
      testimonios: []
    },
    {
      title: "Peeling Médico",
      subtitle: "Renovación Cutánea",
      description: "Se utilizan ácidos en concentraciones médicas para exfoliar de forma controlada las capas superficiales de la piel. Estimula la regeneración celular, mejora la textura, atenúa manchas, suaviza arrugas finas y aporta luminosidad. Ideal para revitalizar el rostro y preparar la piel para otros procedimientos.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Exfoliación Controlada", "Atenúa Manchas", "Mayor Luminosidad"],
      duration: "30 min",
      cta: "Post tratamiento: Protector solar regularmente",
      category: "Rejuvenecimiento",
      tags: ["Piel", "Peeling"],
      testimonios: []
    },
    {
      title: "Cuello de Nefertiti",
      subtitle: "Botox para Contorno Mandibular",
      description: "Técnica avanzada que utiliza toxina botulínica para relajar los músculos depresores del cuello y el tercio inferior del rostro. Produce un efecto de elevación y definición del contorno mandibular, estiliza el cuello y aporta un aspecto más juvenil y armónico. Ideal para quienes buscan un rejuvenecimiento sutil sin cirugía, con resultados naturales y progresivos.",
      imageBefore: "/images/public/Servicios/Cuello_Nefertiti/Cuello_Nefertiti_Antes.jpg",
      imageAfter: "/images/public/Servicios/Cuello_Nefertiti/Cuello_Nefertiti_Despues.jpg",
      features: ["Efecto Lifting", "Sin Cirugía", "Definición Mandibular"],
      duration: "30 min",
      cta: "Un lifting para que tu cuello luzca como reina egipcia 👑",
      category: "Botox",
      tags: ["Botox", "Cuello"],
      testimonios: []
    },
    {
      title: "Botox Completo",
      subtitle: "Cara + Cuello",
      description: "Tratamiento integral que combina aplicación de toxina botulínica en rostro y cuello. Relaja los músculos depresores del cuello y el tercio inferior del rostro, produciendo un efecto de elevación y definición del contorno mandibular. Estiliza el cuello y aporta un aspecto más juvenil y armónico. Rejuvenecimiento completo con resultados naturales.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Rostro Completo", "Cuello", "Resultado Natural"],
      duration: "45 min",
      cta: "Rejuvenecimiento integral sin cirugía",
      category: "Botox",
      tags: ["Botox", "Facial"],
      testimonios: []
    },
    {
      title: "Botox para Bruxismo",
      subtitle: "Alivio de Tensión Mandibular",
      description: "Toxina botulínica para relajar el músculo masetero y músculo temporal que provocan tensión mandibular. Este tratamiento alivia síntomas de dolor, desgaste dental y cefaleas asociadas al bruxismo. Además de mejorar el confort diario, puede estilizar el contorno facial al afinar la zona mandibular. Los resultados son progresivos y se mantienen durante varios meses.",
      imageBefore: "/images/public/before-facial-masculinization-treatment-male-face.png",
      imageAfter: "/images/public/after-facial-masculinization-treatment-defined-jaw.png",
      features: ["Alivia Dolor", "Previene Desgaste", "Estiliza Rostro"],
      duration: "30 min",
      cta: "Definitivamente mejora tu calidad de vida y sueño 😴",
      category: "Botox",
      tags: ["Salud", "Botox"],
      testimonios: []
    },
    {
      title: "Botox Relax",
      subtitle: "Migrañas y Tensión Muscular",
      description: "Tratamiento que mejora la calidad de vida. Se aplica toxina botulínica en la musculatura de cabeza, cuello y sobre los hombros para relajar la tensión y el dolor muscular en pacientes con dolores migrañosos o musculares crónicos. El efecto logrado disminuye la necesidad de consumir analgésicos o acudir a guardias.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Reduce Migrañas", "Alivia Tensión", "Menos Analgésicos"],
      duration: "45 min",
      cta: "Tratamiento que mejora la calidad de vida",
      category: "Botox",
      tags: ["Salud", "Botox"],
      testimonios: []
    },
    {
      title: "Toxina Botulínica - Hiperhidrosis",
      subtitle: "Control de Sudoración Excesiva",
      description: "Tratamiento que reduce la sudoración excesiva en axilas al bloquear temporalmente la actividad de las glándulas sudoríparas. Mejora el confort diario, la seguridad personal y la calidad de vida, evitando la humedad y el malestar asociados. Los resultados suelen durar entre 6 y 9 meses.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Reduce Sudoración", "6-9 Meses", "Mayor Confort"],
      duration: "45 min",
      cta: "Adiós a las manchas de transpiración 🙌",
      category: "Botox",
      tags: ["Salud", "Corporal"],
      testimonios: []
    },
    {
      title: "Armonización de Mentón",
      subtitle: "Ácido Hialurónico",
      description: "Tratamiento con ácido hialurónico diseñado para dar mayor proyección, definición y simetría al mentón, equilibrando las proporciones faciales y mejorando el perfil. Puede suavizar retracciones, alargar sutilmente el rostro o armonizar la relación con la nariz y la mandíbula, ofreciendo un resultado natural y personalizado.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Mayor Proyección", "Equilibrio Facial", "Perfil Mejorado"],
      duration: "30 min",
      cta: "El mentón es un rasgo importante que denota belleza y armoniza las proporciones",
      category: "Armonización",
      tags: ["Mentón", "Armonización"],
      testimonios: []
    },
    {
      title: "Contorno Mandibular",
      subtitle: "Redefinición y Estructura",
      description: "Procedimiento que redefine y estructura la línea mandibular utilizando ácido hialurónico u otros materiales de relleno. Aporta proyección, corrige asimetrías y mejora la transición entre el rostro y el cuello, logrando un perfil más firme y equilibrado. Ideal para realzar rasgos, masculinizar o feminizar sutilmente según las necesidades del paciente. Rejuvenecedor.",
      imageBefore: "/images/public/Servicios/Contorno_Mandibular/Contorno_Mandibular_Antes.jpg",
      imageAfter: "/images/public/Servicios/Contorno_Mandibular/Contorno_Mandibular_Despues.jpg",
      features: ["Proyección", "Corrige Asimetrías", "Perfil Definido"],
      duration: "45 min",
      cta: "Ideal para realzar rasgos según tus necesidades",
      category: "Armonización",
      tags: ["Mandíbula", "Armonización"],
      testimonios: []
    },
    {
      title: "Relleno de Fosa Temporal",
      subtitle: "Sien - Rejuvenecimiento Superior",
      description: "Tratamiento que repone volumen en la zona lateral de la frente conocida como 'sien'. Con el tiempo se produce un hundimiento que genera aspecto cadavérico e interrumpe la armonía del rostro. El uso de ácido hialurónico con bioestimuladores permite recuperar la convexidad natural del tercio superior, elevar la cola de la ceja y suavizar transiciones. Aporta juventud y equilibrio general.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Restaura Volumen", "Eleva Cejas", "Armonía Facial"],
      duration: "45 min",
      cta: "Notarán que te ves más joven sin saber qué te hiciste ✨",
      category: "Rellenos",
      tags: ["Facial", "Rellenos"],
      testimonios: []
    },
    {
      title: "Armonización Facial Essential",
      subtitle: "Botox + 1 Jeringa de Ácido Hialurónico",
      description: "Protocolo integral que combina toxina botulínica para relajar líneas de expresión con una jeringa de ácido hialurónico, aplicados según las necesidades del rostro. Incluye toxina en zonas estratégicas y 1 jeringa de ácido hialurónico para dar soporte, volumen y definición a puntos seleccionados. Ideal para quienes buscan frescura, equilibrio y naturalidad sin perder su identidad. Permite tratar zonas estratégicas como labios, pómulos, mandíbula o mentón, logrando una armonización progresiva, sutil y personalizada.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Botox + Ácido Hialurónico", "Tratamiento Combinado", "Resultados Naturales"],
      duration: "1 hora",
      cta: "Una sesión, un cambio sutil, y una versión tuya que te va a encantar. ✨",
      category: "Armonización",
      tags: ["Armonización", "Botox"],
      testimonios: []
    },
    {
      title: "Armonización Facial Advanced",
      subtitle: "Botox + Bioestimulador + Ácido Hialurónico",
      description: "Ideal para quienes buscan prevención del envejecimiento, redefinición sutil y luminosidad duradera. Incluye toxina botulínica para suavizar expresiones y prevenir nuevas arrugas, 1 bioestimulador de colágeno para mejorar textura, firmeza y luminosidad a largo plazo, y 1 jeringa de ácido hialurónico (rino o labios). Protocolo combinado que une el efecto relajante de la toxina con la acción regeneradora del bioestimulador, permitiendo atenuar arrugas dinámicas, mejorar la firmeza de la piel y redefinir contornos faciales con resultados naturales y progresivos.",
      imageBefore: "/images/public/before-collagen-biostimulator-treatment-aging-face.png",
      imageAfter: "/images/public/after-collagen-biostimulator-treatment-rejuvenated.png",
      features: ["3 Tecnologías Combinadas", "Firmeza Progresiva", "Prevención Activa"],
      duration: "1 hora",
      cta: "Frescura hoy, firmeza mañana. 💉",
      category: "Armonización",
      tags: ["Armonización", "Avanzado"],
      testimonios: []
    },
    {
      title: "Armonización Facial Black (Premium)",
      subtitle: "Experiencia Estética Integral Premium",
      description: "💎 Invertí en tu mejor versión. No es solo estética, es presencia, seguridad y elegancia en un solo tratamiento. En una sesión, logramos un rejuvenecimiento integral que resalta lo mejor de tus rasgos, corrige asimetrías y proyecta una imagen más fresca y armoniosa, sin perder tu esencia. Incluye: toxina botulínica, 2 jeringas de ácido hialurónico de alta gama para restaurar volúmenes y redefinir contornos, y 1 bioestimulador de colágeno que mejora la calidad, firmeza y luminosidad de la piel de forma progresiva. Resultados visibles desde el primer día y mejoras que continúan durante meses. Diseño facial exclusivo, adaptado a tu anatomía y estilo personal. Materiales de máxima calidad, técnica avanzada y atención personalizada. Un solo procedimiento que integra lo que habitualmente requeriría múltiples sesiones. Para este procedimiento se seleccionan insumos de línea premium y se ofrece una experiencia estética única en la cual serás acompañado paso a paso.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Línea Premium", "Diseño Exclusivo", "Experiencia Única"],
      duration: "1:30 horas",
      cta: "No es magia, es ciencia, aplicada en el lugar preciso. 💫",
      category: "Premium",
      tags: ["Premium", "Exclusivo"],
      testimonios: [
        { nombre: "Julieta R.", texto: "Valió cada centavo, me cambiaron la vida.", rating: 5 }
      ]
    },
    {
      title: "Hydro Deluxe",
      subtitle: "Hidratación Profunda",
      description: "Tratamiento de hidratación profunda y redensificación de la piel con ácido hialurónico enriquecido con hidroxiapatita de calcio y aminoácidos. Mejora la elasticidad, hidratación y luminosidad de la piel, y estimula la producción de colágeno. Ideal para rostro, cuello, escote y manos.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Hidratación Profunda", "Elasticidad", "Luminosidad"],
      duration: "45 min",
      cta: "Piel hidratada y radiante",
      category: "Rejuvenecimiento",
      tags: ["Piel", "Hidratación"],
      testimonios: []
    },
    {
      title: "Radiesse",
      subtitle: "Bioestimulador de Colágeno",
      description: "Relleno dérmico y bioestimulador compuesto por microesferas de hidroxiapatita de calcio. Rellena las arrugas y pliegues al instante y estimula la producción natural de colágeno, logrando un efecto lifting y mejorando la calidad de la piel a largo plazo.",
      imageBefore: "/images/public/before-collagen-biostimulator-treatment-aging-face.png",
      imageAfter: "/images/public/after-collagen-biostimulator-treatment-rejuvenated.png",
      features: ["Efecto Lifting", "Estimula Colágeno", "Resultados Duraderos"],
      duration: "45 min",
      cta: "Recupera firmeza y juventud",
      category: "Bioestimuladores",
      tags: ["Bioestimuladores", "Radiesse"],
      testimonios: []
    },
    {
      title: "HarmonyCa",
      subtitle: "Híbrido: Lifting + Bioestimulación",
      description: "Tratamiento híbrido de doble efecto que combina ácido hialurónico para un efecto lifting inmediato e hidroxiapatita de calcio para una bioestimulación de colágeno sostenida. Mejora la arquitectura de la piel, define el contorno facial y aporta firmeza y luminosidad.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Lifting Inmediato", "Bioestimulación", "Doble Efecto"],
      duration: "1 hora",
      cta: "La revolución del rejuvenecimiento facial",
      category: "Armonización",
      tags: ["HarmonyCa", "Lifting"],
      testimonios: []
    },
    {
      title: "Sculptra",
      subtitle: "Ácido Poli-L-Láctico",
      description: "Bioestimulador de colágeno a base de ácido poli-L-láctico que actúa en las capas profundas de la piel para revitalizar la producción de colágeno. Restaura la estructura de la piel y renueva su firmeza natural de forma gradual y duradera.",
      imageBefore: "/images/public/before-facial-harmonization-treatment-unbalanced-f.png",
      imageAfter: "/images/public/after-facial-harmonization-treatment-balanced-prop.png",
      features: ["Colágeno Natural", "Firmeza Gradual", "Larga Duración"],
      duration: "45 min",
      cta: "Reconstruye tu juventud desde adentro",
      category: "Bioestimuladores",
      tags: ["Sculptra", "Colágeno"],
      testimonios: []
    }
  ];