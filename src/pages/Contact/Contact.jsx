import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FloatingContact from '../../components/common/FloatingContact';

function Contact() {
  // Información del consultorio
  const contactInfo = {
    whatsapp: '5493518596064',
    phone: '+54 9 3518 59-6064',
    email: 'dr.guillermomartini@gmail.com',
    address: 'Leopoldo Lugones 168, Córdoba Capital',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.732286548658!2d-64.18988488488288!3d-31.417253881398346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28b6c5d5555%3A0x5555555555555555!2sLeopoldo%20Lugones%20168%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar',
    instagram: 'https://www.instagram.com/dr.guillermomartini/',
    facebook: 'https://facebook.com/drmartini.estetica',
    schedule: [
      { day: 'Lunes, Martes, Miércoles, Viernes', hours: '10:00 - 19:00' },
      { day: 'Jueves', hours: 'Cerrado' },
      { day: 'Sábados y Domingos', hours: 'Cerrado' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <FloatingContact />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-primary mb-6"
          >
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-primary/80 max-w-2xl mx-auto"
          >
            Estamos aquí para atender tus consultas y ayudarte a alcanzar tus objetivos estéticos
          </motion.p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16"
          >
            {/* WhatsApp */}
            <motion.a
              href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hola, me gustaría consultar sobre sus tratamientos')}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-brand-primary/10"
            >
              <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-brand-primary mb-2">WhatsApp</h3>
              <p className="text-brand-primary/70 mb-2">Chatea con nosotros</p>
              <p className="text-brand-primary font-medium">{contactInfo.phone}</p>
            </motion.a>

            {/* Email */}
            <motion.a
              href={`mailto:${contactInfo.email}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-brand-primary/10"
            >
              <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-brand-primary mb-2">Email</h3>
              <p className="text-brand-primary/70 mb-2">Escríbenos</p>
              <p className="text-brand-primary font-medium break-all">{contactInfo.email}</p>
            </motion.a>

            {/* Ubicación */}
            <motion.div
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-brand-primary/10"
            >
              <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-brand-primary mb-2">Dirección</h3>
              <p className="text-brand-primary/70 mb-2">Visítanos en</p>
              <p className="text-brand-primary font-medium">{contactInfo.address}</p>
            </motion.div>

            {/* Horarios */}
            <motion.div
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-brand-primary/10 lg:col-span-2"
            >
              <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-brand-primary mb-4">Horarios de Atención</h3>
              <div className="space-y-2">
                {contactInfo.schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-brand-primary/70">{item.day}</span>
                    <span className="text-brand-primary font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-brand-primary/10"
            >
              <h3 className="font-serif text-2xl text-brand-primary mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="w-7 h-7 text-white" />
                </a>
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Facebook className="w-7 h-7 text-white" />
                </a>
              </div>
              <p className="text-brand-primary/70 mt-4 text-sm">
                Descubre nuestros casos de éxito y mantente al día con nuestras novedades
              </p>
            </motion.div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-brand-primary/10"
          >
            <div className="p-6 border-b border-brand-primary/10">
              <h2 className="font-serif text-3xl text-brand-primary">Encuéntranos</h2>
              <p className="text-brand-primary/70 mt-2">Ubicación del consultorio</p>
            </div>
            <div className="w-full h-[500px]">
              <iframe
                src={contactInfo.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;