import { useState, useEffect, memo, useMemo } from 'react';
import { Instagram } from 'lucide-react';

const InstagramStories = memo(() => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // URL DE BEHOLD
  const BEHOLD_URL = 'https://feeds.behold.so/3aelUvw7MKYcdnHLSKnI';

  useEffect(() => {
    // Verificar si ya tenemos datos en cache (sessionStorage)
    const cachedData = sessionStorage.getItem('instagram-feed');
    const cacheTime = sessionStorage.getItem('instagram-feed-time');
    const now = Date.now();
    
    // Si el cache tiene menos de 5 minutos, usarlo
    if (cachedData && cacheTime && (now - parseInt(cacheTime)) < 300000) {
      setProfile(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    const fetchInstagram = async () => {
      try {
        const response = await fetch(BEHOLD_URL);
        const data = await response.json();
        
        // Guardar en cache
        sessionStorage.setItem('instagram-feed', JSON.stringify(data));
        sessionStorage.setItem('instagram-feed-time', now.toString());
        
        setProfile(data);
        setLoading(false);
      } catch (error) {
        console.error("Error conectando con Instagram:", error);
        setLoading(false);
      }
    };

    fetchInstagram();
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto my-12 px-4 md:px-0 py-20 bg-gradient-to-b from-brand-white to-brand-bg">
      <div className="bg-white rounded-2xl shadow-sm border border-emerald-50 overflow-hidden">
        
        {/* --- CABECERA (Híbrida: Diseño Tuyo + Datos Reales) --- */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-gray-100 bg-[#F0F2EE]/30">
          
          {/* Foto de Perfil (Viene de la API o usa fallback) */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 shadow-sm">
              <img 
                src={profile?.profilePictureUrl || "/images/perfil-doctor.jpg"} 
                alt="Dr. Guillermo Martini" 
                className="w-full h-full rounded-full object-cover border-2 border-white"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Info del Perfil */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
              <h2 className="text-xl md:text-2xl font-serif text-emerald-950 font-medium">
                {profile?.username || "dr.guillermomartini"}
              </h2>
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

            <div className="flex items-center justify-center md:justify-start gap-6 text-sm md:text-base">
              {/* Usamos los datos reales si cargaron, sino unos por defecto */}
              <span><strong className="text-emerald-950 font-bold">{profile ? profile.posts?.length : '92'}</strong> publicaciones</span>
              <span><strong className="text-emerald-950 font-bold">{profile?.followersCount || '2140'}</strong> seguidores</span>
              <span><strong className="text-emerald-950 font-bold">330</strong> seguidos</span>
            </div>

            <div className="text-sm text-gray-700 space-y-1 leading-relaxed">
              <p className="font-bold text-emerald-950 text-base">Dr. Martini / Médico Estético & AntiAge</p>
              <p className="text-gray-500">Salud/belleza</p>
              <p className="flex items-center justify-center md:justify-start gap-1.5">💉 Medicina Estética & Antiage</p>
              <p className="flex items-center justify-center md:justify-start gap-1.5">📍 Córdoba</p>
              <p className="font-medium">Consultas y turnos por WhatsApp</p>
              <p className="text-xs text-blue-900/70">Leopoldo lugones 188, Córdoba, Argentina 5000</p>
            </div>
          </div>
        </div>

        {/* --- GRILLA DE FOTOS (100% Automática desde Behold) --- */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-0.5 md:gap-1 bg-white">
          {loading ? (
            // SKELETON (Cargando...)
            [...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 animate-pulse" />
            ))
          ) : (
            // FOTOS REALES (Tomamos las primeras 6)
            profile?.posts?.slice(0, 6).map((post) => (
              <a 
                key={post.id} 
                href={post.permalink} 
                target="_blank" 
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden bg-gray-50 block cursor-pointer"
              >
                {post.mediaType === 'VIDEO' ? (
                  // Si es video, intentamos mostrarlo (muted loop) o su miniatura si falla
                  <video 
                    src={post.mediaUrl} 
                    poster={post.thumbnailUrl} 
                    className="w-full h-full object-cover" 
                    muted 
                    playsInline
                    loop
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => e.currentTarget.pause()}
                  />
                ) : (
                  // Imagen o Album
                  <img 
                    src={post.mediaUrl} 
                    alt="Instagram Post" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                
                {/* Icono Overlay al pasar el mouse */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                </div>
                
                {/* Indicador de tipo de contenido (opcional, como en la app real) */}
                {post.mediaType === 'CAROUSEL_ALBUM' && (
                  <div className="absolute top-2 right-2 text-white drop-shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </a>
            ))
          )}
        </div>
        
      </div>
    </section>
  );
});

InstagramStories.displayName = 'InstagramStories';

export default InstagramStories;
