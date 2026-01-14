import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimateOnScroll } from '../../../hooks/useInView.jsx';

const faqData = [
  {
    id: 1,
    category: 'tratamientos',
    question: '¿Los tratamientos son dolorosos?',
    answer: 'La mayoría de nuestros tratamientos son mínimamente invasivos y se realizan con anestesia tópica o local según sea necesario. Trabajamos para que tu experiencia sea lo más cómoda posible. Cada persona tiene diferente umbral de dolor, pero nuestros pacientes reportan molestias muy leves y manejables.'
  },
  {
    id: 2,
    category: 'tratamientos',
    question: '¿Cuánto duran los efectos de los tratamientos?',
    answer: 'La duración varía según el tipo de tratamiento. Por ejemplo, el ácido hialurónico dura entre 12-18 meses, mientras que tratamientos como limpiezas faciales requieren mantenimiento mensual. En tu consulta personalizada te explicaremos en detalle la duración específica de cada procedimiento.'
  },
  {
    id: 3,
    category: 'recuperacion',
    question: '¿Cuánto tiempo de recuperación necesito?',
    answer: 'La mayoría de nuestros tratamientos no quirúrgicos permiten retomar actividades normales de inmediato o al día siguiente. Algunos procedimientos pueden presentar leve enrojecimiento o inflamación que desaparece en 24-48 horas. Te daremos indicaciones específicas para cada caso.'
  },
  {
    id: 4,
    category: 'recuperacion',
    question: '¿Qué cuidados debo tener después del tratamiento?',
    answer: 'Los cuidados varían según el procedimiento, pero generalmente incluyen: evitar exposición solar directa, no maquillarse las primeras horas, hidratar bien la piel, y seguir las indicaciones médicas específicas. Te entregamos un protocolo escrito de cuidados post-tratamiento.'
  },
  {
    id: 5,
    category: 'costos',
    question: '¿Cuál es el costo de los tratamientos?',
    answer: 'Cada tratamiento tiene un costo diferente según la complejidad, productos utilizados y zona a tratar. En tu primera consulta evaluamos tu caso particular y te brindamos un presupuesto personalizado. Contamos con opciones de financiación para que puedas acceder al tratamiento que necesitás.'
  },
  {
    id: 6,
    category: 'costos',
    question: '¿Aceptan obras sociales o prepagas?',
    answer: 'Los tratamientos estéticos generalmente no están cubiertos por obras sociales ni prepagas al ser procedimientos electivos. Sin embargo, ofrecemos facilidades de pago y planes de financiación para que puedas realizar tu tratamiento con comodidad.'
  },
  {
    id: 7,
    category: 'consulta',
    question: '¿Cómo es la primera consulta?',
    answer: 'La primera consulta dura aproximadamente 30-45 minutos. Evaluamos tu caso, discutimos tus objetivos, revisamos tu historia clínica, y te recomendamos el mejor plan de tratamiento. Es un espacio para resolver todas tus dudas sin compromiso. Podés agendar tu consulta por WhatsApp o completando el formulario de contacto.'
  },
  {
    id: 8,
    category: 'consulta',
    question: '¿Necesito estudios previos?',
    answer: 'Para la mayoría de los tratamientos estéticos no invasivos no se requieren estudios previos. Sin embargo, según tu historia clínica y el procedimiento elegido, podríamos solicitar análisis de sangre u otros estudios para garantizar tu seguridad. Esto lo evaluamos en la consulta inicial.'
  }
];

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'tratamientos', label: 'Sobre Tratamientos' },
  { id: 'recuperacion', label: 'Recuperación' },
  { id: 'costos', label: 'Costos y Pagos' },
  { id: 'consulta', label: 'Primera Consulta' }
];

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const filteredFaqs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-primary italic leading-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-brand-primary/70 text-lg">
            Respondemos tus dudas más comunes de forma rápida y clara
          </p>
          <div className="mt-4 w-20 h-0.5 bg-brand-primary/40 mx-auto" />
        </div>

        {/* FILTROS POR CATEGORÍA */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenFaq(null); // Cerrar todas las FAQs al cambiar categoría
              }}
              className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-brand-primary border-brand-primary text-brand-white shadow-lg'
                  : 'bg-white/60 border-brand-primary/20 text-brand-primary/70 hover:border-brand-primary/50 hover:text-brand-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* LISTA DE PREGUNTAS */}
        <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AnimateOnScroll key={faq.id} animation="fade-up" delay={index * 80}>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-brand-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-brand-primary/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-brand-primary flex-1">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      openFaq === faq.id 
                        ? 'bg-brand-primary text-brand-white rotate-180' 
                        : 'bg-brand-primary/10 text-brand-primary'
                    }`}>
                      {openFaq === faq.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  {openFaq === faq.id && (
                      <div className="overflow-hidden">
                        <div className="px-6 pb-5 text-brand-primary/70 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
        </div>

        {/* CTA FINAL */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="mt-16 text-center bg-brand-primary/5 p-8 rounded-2xl border border-brand-primary/10">
            <h3 className="text-2xl font-serif text-brand-primary mb-4">
              ¿No encontraste lo que buscabas?
            </h3>
            <p className="text-brand-primary/70 mb-6">
              Estamos aquí para resolver todas tus dudas en una consulta personalizada
            </p>
            <a 
              href="/contacto"
              className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-brand-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:scale-105"
            >
              Agendar Consulta
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FAQs;
