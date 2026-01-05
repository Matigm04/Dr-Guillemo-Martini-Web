"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, HeartPulse, Quote } from "lucide-react"

export default function QuienSoyPage() {
  const basePath = process.env.NODE_ENV === 'production' ? '/Dr-Guillermo-Martini-Web' : '';

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              {/* Text Content - Left */}
              <motion.div 
                className="lg:w-1/2 z-10 order-2 lg:order-1 text-center lg:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
                  Dr. Guillermo <span className="font-serif italic text-emerald-600 block mt-2">Martini</span>
                </h1>
                <p className="text-xl text-gray-600 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Médico especialista dedicado a la armonización facial y el bienestar integral.
                </p>
              </motion.div>
              
              {/* Image - Right with decorative elements */}
              <motion.div 
                className="lg:w-1/2 relative order-1 lg:order-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
              >
                <div className="relative w-full max-w-md mx-auto lg:ml-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={`${basePath}/guille.JPEG`}
                    alt="Dr. Guillermo Martini"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-100 rounded-full -z-10"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-emerald-100 rounded-full -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Historia Section */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-10 tracking-tight">
                De la Medicina Crítica a la <span className="font-serif italic text-emerald-600">Estética</span>
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                <p>
                  Mi trayectoria comenzó en el exigente mundo de la Terapia Intensiva, donde aprendí el valor incalculable de la precisión, la responsabilidad y el cuidado extremo por la vida humana.
                </p>
                <p>
                  Esta experiencia forjó los cimientos de mi práctica actual: la <strong className="font-medium text-emerald-700">Seguridad Médica</strong> no es negociable. Trasladé el rigor científico y los estándares de la medicina crítica al arte de la medicina estética.
                </p>
                <p>
                  Hoy, combino esa base sólida con mi pasión por la armonía y la belleza, ofreciendo tratamientos que no solo buscan resultados estéticos excepcionales, sino que priorizan ante todo la salud y el bienestar de mis pacientes.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Grid de Formación */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-16 tracking-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Formación <span className="font-serif italic text-emerald-600">Académica</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">Médico Cirujano</h3>
                    <p className="text-gray-600 font-light">
                      Universidad Nacional de Córdoba (UNC)
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <HeartPulse className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">Especialista en Terapia Intensiva</h3>
                    <p className="text-gray-600 font-light">
                      Postgrado Universitario
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">Diplomatura en Medicina Estética</h3>
                    <p className="text-gray-600 font-light">
                      Universidad Católica de Córdoba (UCC)
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bloque de Filosofía */}
        <section className="py-24 lg:py-32 bg-emerald-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
          </div>

          <motion.div 
            className="container mx-auto px-4 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="w-16 h-16 text-emerald-400 mx-auto mb-8 opacity-80" />
              <blockquote className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-serif italic leading-tight mb-8 px-4">
                "Regenerar y revelar la mejor versión sin alterar la esencia"
              </blockquote>
              <div className="h-px w-24 bg-emerald-400/50 mx-auto mb-4"></div>
              <cite className="text-emerald-200 not-italic tracking-widest uppercase text-sm">
                Dr. Guillermo Martini
              </cite>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
