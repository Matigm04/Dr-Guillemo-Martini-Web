import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Clock, Calendar, ArrowRight } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FloatingContact from '../../components/common/FloatingContact';

function Contact() {
  const contactInfo = {
    whatsapp: '5493518596064',
    email: 'dr.guillermomartini@gmail.com',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.646968393666!2d-64.18747442347206!3d-31.42390149662054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2817651624d%3A0xe5467471900388c3!2sAv.%20Poeta%20Lugones%20188%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1704845000000!5m2!1ses-419!2sar'
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <FloatingContact />

      <main className="pt-32 pb-20 px-4 md:px-8">
        
        {/* --------------------------------------------------------- */}
        {/* 1. HERO: EL CONTACTO PRINCIPAL (Foco Absoluto en WhatsApp) */}
        {/* --------------------------------------------------------- */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-brand-primary italic"
          >
            Agendá tu consulta
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-primary/70 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Gestionamos todos los turnos de manera centralizada para brindarte la mejor atención, 
            ya sea en nuestra sede principal o en nuestras visitas al interior.
          </motion.p>
          
          {/* EL BOTÓN GIGANTE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-brand-primary text-brand-white px-10 py-5 rounded-full font-medium text-xl shadow-xl shadow-brand-primary/20 hover:bg-brand-primary/90 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-8 h-8 text-brand-white/80 group-hover:text-brand-white transition-colors" />
              <span>Enviar Mensaje a Secretaría</span>
              <ArrowRight className="w-5 h-5 opacity-50 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-brand-primary/60 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              Respuesta habitual en menos de 1 hora
            </p>
          </motion.div>
        </div>

        {/* --------------------------------------------------------- */}
        {/* 2. ESTRUCTURA DE SEDES (Grid Asimétrico)                  */}
        {/* --------------------------------------------------------- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* A. TARJETA SEDE PRINCIPAL (Ocupa 2 columnas) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-primary/10 flex flex-col"
          >
            {/* Encabezado de la Tarjeta */}
            <div className="p-8 pb-4 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-wide mb-3">
                  SEDE PRINCIPAL
                </span>
                <h2 className="text-3xl font-serif text-brand-primary">Córdoba Capital</h2>
                <p className="text-brand-primary/60 mt-1 flex items-center gap-2">
                  <MapPin size={16} className="text-brand-primary"/> Leopoldo Lugones 188
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm font-bold text-brand-primary flex items-center gap-2">
                  <Clock size={16} />
                  Horarios
                </p>
                <p className="text-sm text-brand-primary/60">Lun, Mar, Mié, Vie</p>
                <p className="text-sm text-brand-primary font-medium">10:00 - 19:00</p>
              </div>
            </div>

            {/* El Mapa Integrado (Grande) */}
            <div className="flex-1 min-h-[300px] sm:min-h-[400px] w-full bg-gray-100 relative">
              <iframe 
                src={contactInfo.googleMapsUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Sede Principal Córdoba"
              />
            </div>
          </motion.div>

          {/* B. COLUMNA DERECHA: SEDES ROTATIVAS (Apiladas) */}
          <div className="flex flex-col gap-6">
            
            {/* Tarjeta Río Tercero */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-brand-white/60 backdrop-blur-sm p-8 rounded-3xl border border-brand-primary/10 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary mb-4 shadow-sm">
                <Calendar size={20} />
              </div>
              <h3 className="text-xl font-serif text-brand-primary mb-1">Río Tercero</h3>
              <p className="text-sm text-brand-primary/60 mb-4">Consultorio Externo</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-brand-primary/70 bg-white p-3 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span>Fechas rotativas mensuales</span>
                </div>
                <p className="text-xs text-brand-primary/60 pl-1">
                  *Consultar próxima visita por WhatsApp
                </p>
              </div>
            </motion.div>

            {/* Tarjeta Villa Mercedes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-brand-white/60 backdrop-blur-sm p-8 rounded-3xl border border-brand-primary/10 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary mb-4 shadow-sm">
                <Calendar size={20} />
              </div>
              <h3 className="text-xl font-serif text-brand-primary mb-1">Villa Mercedes</h3>
              <p className="text-sm text-brand-primary/60 mb-4">Consultorio Externo</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-brand-primary/70 bg-white p-3 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span>Fechas rotativas mensuales</span>
                </div>
                <p className="text-xs text-brand-primary/60 pl-1">
                  *Consultar próxima visita por WhatsApp
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 3. FOOTER INFO EXTRA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-16 text-center pt-8 border-t border-brand-primary/10"
        >
          <p className="text-brand-primary/60 text-sm">
            También podés escribirnos por mail a{' '}
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="font-semibold hover:text-brand-primary underline transition-colors"
            >
              {contactInfo.email}
            </a>
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;