import { useEffect } from 'react';
import { Instagram, MapPin } from 'lucide-react';
import profilePic from '../../assets/guille.JPEG';

const InstagramStories = () => {
  useEffect(() => {
    // Cargar el script de Elfsight cuando el componente se monte
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.setAttribute('data-use-service-core', '');
    document.body.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto my-12 px-4 md:px-0 py-20 bg-gradient-to-b from-brand-white to-brand-bg">
      <div className="bg-white rounded-2xl shadow-sm border border-emerald-50 overflow-hidden">
        
        {/* --------------------------------------------------------- */}
        {/* 1. CABECERA PERSONALIZADA (Datos Reales del Perfil)       */}
        {/* --------------------------------------------------------- */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-gray-100 bg-[#F0F2EE]/30">
          
          {/* Foto de Perfil */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 shadow-sm">
              <img 
                src={profilePic}
                alt="Dr. Guillermo Martini" 
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>
          </div>

          {/* Información del Perfil (Idéntica a la imagen) */}
          <div className="flex-1 text-center md:text-left space-y-4">
            
            {/* Fila Superior: Nombre de Usuario + Botones */}
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
              <h2 className="text-xl md:text-2xl font-serif text-emerald-950 font-medium">dr.guillermomartini</h2>
              <div className="flex gap-2">
                <a 
                  href="https://www.instagram.com/dr.guillermomartini/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-1.5 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
                >
                  <Instagram size={16} /> Seguir
                </a>
                <a 
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-1.5 bg-gray-100 text-gray-800 text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Mensaje
                </a>
              </div>
            </div>

            {/* Estadísticas (Datos Reales) */}
            <div className="flex items-center justify-center md:justify-start gap-6 text-sm md:text-base">
              <span><strong className="text-emerald-950 font-bold">92</strong> publicaciones</span>
              <span><strong className="text-emerald-950 font-bold">2140</strong> seguidores</span>
              <span><strong className="text-emerald-950 font-bold">330</strong> seguidos</span>
            </div>

            {/* Biografía (Exacta) */}
            <div className="text-sm text-gray-700 space-y-1 leading-relaxed">
              <p className="font-bold text-emerald-950 text-base">Dr. Martini / Médico Estético & AntiAge</p>
              <p className="text-gray-500">Salud/belleza</p>
              <p className="flex items-center justify-center md:justify-start gap-1.5">
                <span>💉 Medicina Estética & Antiage</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-1.5">
                <span>📍 Córdoba</span>
              </p>
              <p className="font-medium">Consultas y turnos por WhatsApp</p>
              <p className="text-xs text-blue-900/70">Leopoldo lugones 188, Córdoba, Argentina 5000</p>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------- */}
        {/* 2. EL WIDGET DE ELFSIGHT (Solo Fotos)                     */}
        {/* --------------------------------------------------------- */}
        <div className="min-h-[300px] bg-white relative z-0">
          <div 
            className="elfsight-app-0091be0e-1e24-4763-9cb2-673a423e25ca" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
};

export default InstagramStories;
