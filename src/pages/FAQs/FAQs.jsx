import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FloatingContact from '../../components/common/FloatingContact';
import OptimizedImage from '../../components/common/OptimizedImage';

// DATOS: Asociamos cada pregunta con su "Placa" específica
const FAQS = [
  {
    id: 1,
    question: "¿Qué es el Skin Booster y qué beneficios tiene?",
    answer: "Es un tratamiento de hidratación profunda que mejora la calidad de la piel desde adentro. A diferencia de las cremas, penetra en capas profundas devolviendo luminosidad y suavidad. No cambia tus facciones, solo perfecciona tu piel.",
    image: "/images/faq-skinbooster.jpg", // Usa la imagen_b43f73.jpg
    category: "Tratamientos"
  },
  {
    id: 2,
    question: "¿Qué significa el efecto 'Glass Skin'?",
    answer: "Es el resultado de una piel sana, hidratada y uniforme que refleja la luz naturalmente. Se logra combinando tratamientos de hidratación, peelings y cuidados domiciliarios específicos.",
    image: "/images/faq-glass-skin.jpg", // Usa la imagen_b43f72.jpg
    category: "Tendencias"
  },
  {
    id: 3,
    question: "¿Cómo sé si un tratamiento es para mí?",
    answer: "Cada rostro es único. Por eso realizamos un diagnóstico facial completo antes de cualquier procedimiento para diseñar un plan a tu medida, respetando tu anatomía y objetivos.",
    image: "/images/faq-consulta.jpg", // Usa la imagen_b43f70.png
    category: "Consultas"
  },
  {
    id: 4,
    question: "¿Cuánto tiempo de recuperación necesito?",
    answer: "La mayoría de nuestros tratamientos son ambulatorios y te permiten volver a tu rutina de inmediato. En casos de rellenos o Botox, puede haber una leve inflamación que desaparece en 24-48hs.",
    image: "/images/faq-general.jpg", // Una imagen genérica o repetida si no hay placa
    category: "General"
  },
];

export default function FAQs() {
  const [activeId, setActiveId] = useState(1); // La primera pregunta abierta por defecto

  // Encontrar la data activa para mostrar su imagen
  const activeContent = FAQS.find(q => q.id === activeId) || FAQS[0];

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main className="min-h-screen bg-[#F0F2EE] pt-32 pb-20 px-4 md:px-8">
        
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER */}
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-4">
              Dudas Frecuentes
            </h1>
            <p className="text-gray-600">
              Seleccioná una pregunta para ver la explicación detallada y su guía visual.
            </p>
          </div>

          {/* --- LAYOUT DIVIDIDO (GRID) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* COLUMNA IZQUIERDA: LISTA DE PREGUNTAS (Ocupa 7 columnas) */}
            <div className="lg:col-span-7 space-y-4">
              {FAQS.map((faq) => (
                <div 
                  key={faq.id}
                  className={`group rounded-3xl transition-all duration-300 border overflow-hidden ${
                    activeId === faq.id 
                      ? 'bg-white border-emerald-200 shadow-lg' 
                      : 'bg-white/50 border-transparent hover:bg-white hover:border-emerald-100'
                  }`}
                >
                  <button
                    onClick={() => setActiveId(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                         activeId === faq.id ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-500'
                      }`}>
                        0{faq.id}
                      </span>
                      <span className={`text-lg md:text-xl font-serif ${
                        activeId === faq.id ? 'text-emerald-950' : 'text-gray-600'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <span className={`transition-transform duration-300 ${
                      activeId === faq.id ? 'rotate-180 text-emerald-600' : 'text-gray-400'
                    }`}>
                       {activeId === faq.id ? <Minus /> : <Plus />}
                    </span>
                  </button>

                  {/* RESPUESTA DESPLEGABLE */}
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                      activeId === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                        
                        {/* SOLO EN MÓVIL: Mostramos la imagen dentro del acordeón */}
                        <div className="lg:hidden w-full aspect-[4/5] relative rounded-2xl overflow-hidden mb-6 mt-2">
                          <OptimizedImage 
                            src={faq.image} 
                            alt={faq.question}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* El Texto de la Respuesta */}
                        <p>{faq.answer}</p>

                        {/* CTA Pequeño dentro de la respuesta */}
                        <a href="https://wa.me/549351596064" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-emerald-700 font-medium mt-4 hover:underline text-sm">
                          Quiero consultar por esto <ArrowRight size={14}/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* COLUMNA DERECHA: LA PLACA VISUAL (Sticky/Fija) (Ocupa 5 columnas) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-32">
              <div className="relative w-full aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-emerald-900">
                 {/* Transición suave entre imágenes */}
                 <div className="absolute inset-0 transition-opacity duration-500">
                   <OptimizedImage 
                     key={activeContent.image} // La 'key' fuerza a React a re-renderizar con animación si cambia
                     src={activeContent.image}
                     alt="Guía Visual"
                     className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-700"
                     priority={true} // Carga prioritaria para que no parpadee
                   />
                 </div>

                 {/* Decoración: Badge flotante */}
                 <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg">
                    <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                      GUÍA RÁPIDA
                    </p>
                    <p className="text-emerald-950 font-medium leading-tight">
                      {activeContent.question}
                    </p>
                 </div>
              </div>
            </div>

          </div>

        </div>
      </main>
      
      <Footer />
      <FloatingContact />
    </div>
  );
}
