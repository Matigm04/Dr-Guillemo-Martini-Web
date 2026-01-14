import { X } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import FooterCTA from '../Home/components/FooterCTA';
import FloatingContact from '../../components/common/FloatingContact';
import WhyChooseUs from '../../components/ui/WhyChooseUs';
import Footer from '../../components/layout/Footer';
import guillePhoto from '../../assets/guille.JPEG';
import { AnimateOnScroll } from '../../hooks/useInView.jsx';

function About() {
  const [selectedCard, setSelectedCard] = useState(null);

  const behindScenes = [
    {
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1000',
      title: 'Nuestro Consultorio',
      description: 'Un espacio diseñado para tu comodidad y tranquilidad',
      fullStory: 'Cada detalle del consultorio fue pensado para que te sientas cómodo desde el momento en que cruzás la puerta. Desde la iluminación cálida hasta la música suave de fondo, buscamos crear un ambiente que te ayude a relajarte. Sabemos que visitar un médico puede generar nervios, por eso diseñamos un espacio acogedor donde podés sentirte como en casa. Las salas de consulta están equipadas con tecnología de última generación, pero sin perder ese toque humano que nos caracteriza.'
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000',
      title: 'Tecnología de Vanguardia',
      description: 'Equipamiento de última generación para resultados óptimos',
      fullStory: 'Invertimos constantemente en tecnología porque creemos que merecés lo mejor. Nuestros equipos de última generación nos permiten realizar tratamientos más precisos, menos invasivos y con tiempos de recuperación más cortos. Cada aparato es seleccionado cuidadosamente, evaluando no solo su eficacia sino también la comodidad del paciente durante el procedimiento. Porque la excelencia médica va de la mano con tu bienestar.'
    },
    {
      image: 'https://images.unsplash.com/photo-1631217872683-c47a48cc75e2?q=80&w=1000',
      title: 'Atención Personalizada',
      description: 'Cada consulta es un espacio para escucharte y asesorarte',
      fullStory: 'No hay dos pacientes iguales, y eso es algo que celebramos. Cada consulta comienza con una conversación genuina: queremos conocer tus expectativas, tus preocupaciones y tu historia. Nos tomamos el tiempo necesario para explicarte cada procedimiento en detalle, responder todas tus preguntas y diseñar juntos un plan de tratamiento que se ajuste a tus necesidades y objetivos. Tu voz es lo más importante en este proceso.'
    },
    {
      image: guillePhoto,
      title: 'Equipo Profesional',
      description: 'Formación continua para ofrecerte lo mejor',
      fullStory: 'La medicina estética está en constante evolución, y nosotros evolucionamos con ella. Participamos regularmente en congresos internacionales, cursos de actualización y capacitaciones con expertos de todo el mundo. Esta formación continua no es solo un requisito profesional, es un compromiso con vos. Porque merecés recibir tratamientos basados en las técnicas más avanzadas y seguras disponibles en el mundo de la medicina estética.'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <FloatingContact />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-brand-primary italic mb-6">
                Conocé al Dr. Guillermo Martini
              </h1>
              <p className="text-lg md:text-xl text-brand-primary/80 max-w-3xl mx-auto leading-relaxed">
                Medicina estética con enfoque humano, resultados naturales y compromiso con tu bienestar
              </p>
            </div>
          </AnimateOnScroll>

          {/* Historia del Doctor */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={guillePhoto}
                  alt="Dr. Guillermo Martini"
                  className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-primary text-brand-white p-8 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm uppercase tracking-wider">Años de Experiencia</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-4xl text-brand-primary italic">
                Tu piel, nuestro lienzo
              </h2>
              <div className="w-20 h-1 bg-brand-primary" />
              <p className="text-brand-primary/80 text-lg leading-relaxed">
                Me especialicé en medicina estética porque creo que la belleza es una forma de expresión personal. 
                Mi filosofía es simple: <strong className="text-brand-primary">realzar lo que ya sos</strong>, sin cambiar tu esencia.
              </p>
              <p className="text-brand-primary/80 text-lg leading-relaxed">
                Cada paciente que entra por la puerta del consultorio llega con una historia única, con sueños y 
                expectativas. Mi compromiso es escuchar, entender y diseñar tratamientos personalizados que respeten 
                tu individualidad.
              </p>
              <p className="text-brand-primary/80 text-lg leading-relaxed">
                Con más de 15 años de experiencia y formación continua en las últimas técnicas, mi objetivo es que 
                recuperes tu confianza y te sientas bien en tu propia piel.
              </p>

              {/* Certificaciones */}
              <div className="pt-6 border-t border-brand-primary/20">
                <h3 className="text-sm uppercase tracking-wider text-brand-primary/60 font-bold mb-4">Formación</h3>
                <ul className="space-y-2 text-brand-primary/80">
                  <li>• Médico especialista en Medicina Estética</li>
                  <li>• Certificación en Armonización Facial</li>
                  <li>• Formación continua en técnicas internacionales</li>
                  <li>• Miembro de la Sociedad Argentina de Medicina Estética</li>
                </ul>
              </div>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Nueva sección ¿Por Qué Elegirnos? */}
      <WhyChooseUs />

      {/* Detrás de Escena */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-brand-primary italic mb-4">
                Detrás de Escena
            </h2>
            <p className="text-brand-primary/70 text-lg">
              Conocé la dinámica diaria de nuestro consultorio
            </p>
          </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {behindScenes.map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 150}>
                <div
                  onClick={() => setSelectedCard(item)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="relative h-80">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-brand-white">
                      <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                      <p className="text-sm text-brand-white/90">{item.description}</p>
                    </div>
                    {/* Indicador de click */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-brand-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-brand-white text-xl">+</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Historia Completa - Simplificado */}
      {selectedCard && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            {/* Overlay */}
            <div
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Contenido del modal */}
            <div className="relative bg-brand-white w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl animate-fade-in">
              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-brand-primary/10 hover:bg-brand-primary/20 transition-colors"
              >
                <X className="w-6 h-6 text-brand-primary" />
              </button>

              {/* Imagen */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/40 to-transparent" />
                <h2 className="absolute bottom-8 left-8 font-serif text-4xl text-brand-white italic">
                  {selectedCard.title}
                </h2>
              </div>

              {/* Contenido */}
              <div className="p-8 md:p-12">
                <p className="text-brand-primary/60 text-sm uppercase tracking-wider mb-4">
                  Nuestra Historia
                </p>
                <p className="text-brand-primary/80 text-lg leading-relaxed">
                  {selectedCard.fullStory}
                </p>
              </div>
            </div>
          </div>
        )}

      <Footer />
    </div>
  );
}

export default About;
