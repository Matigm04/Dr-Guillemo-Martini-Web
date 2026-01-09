export const galleryCases = [
  {
    id: 1,
    category: 'facial',
    title: "Rejuvenecimiento Periocular",
    description: "Tratamiento no invasivo para reducir líneas de expresión y ojeras, devolviendo una mirada descansada.",
    // Usamos imágenes de stock con ligeros filtros para simular el cambio por ahora
    beforeImg: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800&auto=format&fit=crop&gr=true", 
    afterImg: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800&auto=format&fit=crop",
    testimonial: "Siempre me veía cansada aunque durmiera bien. Después del tratamiento no solo mi piel mejoró, mi confianza también. Me siento renovada.",
    patientName: "María L.",
    patientAge: 42,
    emotionalReason: "Recuperar mi mirada descansada y juvenil",
    tags: ['botox', 'rejuvenecimiento']
  },
  {
    id: 2,
    category: 'corporal',
    title: "Reducción de Adiposidad Localizada",
    description: "Protocolo combinado de aparatología para definir el contorno corporal en zona abdominal.",
    beforeImg: "https://images.unsplash.com/photo-1571019611458-9a3291182423?q=80&w=800&auto=format&fit=crop&gr=true",
    afterImg: "https://images.unsplash.com/photo-1571019611458-9a3291182423?q=80&w=800&auto=format&fit=crop",
    testimonial: "Después de mi embarazo no lograba recuperar mi figura. Este tratamiento me ayudó a sentirme cómoda con mi cuerpo nuevamente.",
    patientName: "Carolina R.",
    patientAge: 35,
    emotionalReason: "Recuperar mi cuerpo después de ser mamá",
    tags: ['corporal', 'aparatologia']
  },
  {
    id: 3,
    category: 'facial',
    title: "Armonización de Perfil",
    description: "Rinomodelación sutil y proyección de mentón para un perfil más equilibrado y estético.",
    beforeImg: "https://images.unsplash.com/photo-1609533464104-5f635d597091?q=80&w=800&auto=format&fit=crop&gr=true",
    afterImg: "https://images.unsplash.com/photo-1609533464104-5f635d597091?q=80&w=800&auto=format&fit=crop",
    testimonial: "Siempre evitaba las fotos de perfil. Ahora me encanta verme desde todos los ángulos. El Dr. Martini respetó mi esencia.",
    patientName: "Lucía M.",
    patientAge: 28,
    emotionalReason: "Sentirme segura en las fotos",
    tags: ['armonizacion', 'rellenos', 'facial']
  },
  {
    id: 4,
    category: 'piel',
    title: "Tratamiento de Cicatrices de Acné",
    description: "Mejora notable en la textura de la piel mediante inducción de colágeno.",
    beforeImg: "https://images.unsplash.com/photo-1588447359193-38817d97043b?q=80&w=800&auto=format&fit=crop&gr=true",
    afterImg: "https://images.unsplash.com/photo-1588447359193-38817d97043b?q=80&w=800&auto=format&fit=crop",
    testimonial: "Las marcas del acné me limitaban socialmente. Este tratamiento no solo mejoró mi piel, cambió mi vida.",
    patientName: "Andrés P.",
    patientAge: 24,
    emotionalReason: "Superar el trauma del acné adolescente",
    tags: ['piel', 'bioestimuladores']
  },
  // Agrega más casos aquí...
];

// Lista de categorías para los filtros
// Se exporta también la lista extendida con iconos para la UI nueva
import { Sparkles, Syringe, Droplet, FlaskConical, Star, Activity, User, Crown, ClipboardList } from 'lucide-react';

export const categories = [
  { id: 'todos', label: 'Todos', icon: Sparkles },
  { id: 'facial', label: 'Facial', icon: User },
  { id: 'corporal', label: 'Corporal', icon: Activity },
  { id: 'piel', label: 'Piel', icon: Crown }, // Usando Crown como placeholder para piel/calidad
];

export const advancedFilters = [
  { id: 'todos', label: 'Todos', icon: Sparkles },
  { id: 'botox', label: 'Botox', icon: Syringe },
  { id: 'rellenos', label: 'Rellenos', icon: Droplet },
  { id: 'bioestimuladores', label: 'Bioestimuladores', icon: FlaskConical },
  { id: 'armonizacion', label: 'Armonización', icon: Star },
  { id: 'rejuvenecimiento', label: 'Rejuvenecimiento', icon: Activity },
  { id: 'corporal', label: 'Corporal', icon: User }, // Repetido intencionalmente si se quiere en la lista única
  { id: 'premium', label: 'Premium', icon: Crown },
  { id: 'consulta', label: 'Consulta', icon: ClipboardList },
];
