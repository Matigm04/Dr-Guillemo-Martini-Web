import { useState } from 'react';
import { Search } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { ServiceCard } from '../../components/ui/ServiceCard';
import { ServiceModal } from '../../components/ui/ServiceModal';
import { serviciosOficiales } from '../../data/services';
import { categories, advancedFilters } from '../../data/galleryCases';

const Gallery = () => {
  const [categoryFilter, setCategoryFilter] = useState('todos'); // Filtro por zona del cuerpo
  const [advancedFilter, setAdvancedFilter] = useState('todos'); // Filtro por tipo de tratamiento
  const [selectedCase, setSelectedCase] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCases = serviciosOficiales.filter(item => {
    // Filtro por categoría (zona del cuerpo) - Usamos tags "Facial", "Corporal", "Piel"
    const matchesCategory = categoryFilter === 'todos' || 
                           (item.tags && item.tags.map(t => t.toLowerCase()).includes(categoryFilter));
    
    // Filtro por tratamiento avanzado (category del item)
    const matchesAdvanced = advancedFilter === 'todos' || 
                           item.category.toLowerCase() === advancedFilter.toLowerCase();
    
    // Filtro por búsqueda de texto
    const matchesSearch = searchTerm === '' || 
                         item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    
    return matchesCategory && matchesAdvanced && matchesSearch;
  });

  return (
    <div className="bg-brand-bg min-h-screen flex flex-col">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 flex-grow w-full">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-primary text-center mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-center text-brand-primary/70 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Descubre nuestros tratamientos de medicina estética personalizados para realzar tu belleza natural
        </p>

        {/* Barra de búsqueda */}
        <div className="max-w-2xl mx-auto mb-8 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-primary/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar tratamiento... (ej: botox, labios, armonización)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white/60 backdrop-blur-sm border border-brand-primary/20 focus:border-brand-primary focus:outline-none text-brand-primary placeholder:text-brand-primary/40"
            />
          </div>
        </div>
        
        {/* SISTEMA DE FILTROS MEJORADO - DOS FILAS */}
        <div className="mb-12 space-y-4">
          {/* Primera fila: Filtros por tipo de tratamiento técnico */}
          <div className="flex flex-wrap justify-center gap-3">
            {advancedFilters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setAdvancedFilter(filter.id)}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                    advancedFilter === filter.id
                      ? 'bg-brand-primary text-brand-white shadow-lg scale-105'
                      : 'bg-white/60 text-brand-primary/70 border border-brand-primary/20 hover:border-brand-primary/50 hover:scale-105'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 transition-transform duration-300 ${
                    advancedFilter === filter.id ? 'rotate-12' : 'group-hover:rotate-12'
                  }`} />
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>

          {/* Segunda fila: Filtros por zona del cuerpo */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                    categoryFilter === cat.id
                      ? 'bg-brand-primary/90 text-brand-white shadow-lg scale-105'
                      : 'bg-white/70 text-brand-primary/70 border border-brand-primary/20 hover:border-brand-primary/50 hover:scale-105'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 transition-transform duration-300 ${
                    categoryFilter === cat.id ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Indicador de filtros activos */}
          {(categoryFilter !== 'todos' || advancedFilter !== 'todos') && (
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setCategoryFilter('todos');
                  setAdvancedFilter('todos');
                }}
                className="text-xs text-brand-primary/60 hover:text-brand-primary underline transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>

        {/* GRID DE SERVICIOS con diseño tipo tarjeta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCases.map((caseItem, index) => (
            <ServiceCard 
              key={caseItem.id || index} 
              treatment={caseItem} 
              onClick={() => setSelectedCase(caseItem)}
              index={index}
            />
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-primary/60 text-lg">
              No se encontraron servicios con esos criterios de búsqueda
            </p>
          </div>
        )}
      </div>

      {/* MODAL DE DETALLES */}
      <ServiceModal 
        treatment={selectedCase} 
        isOpen={!!selectedCase} 
        onClose={() => setSelectedCase(null)} 
      />

      <Footer />
    </div>
  );
};

export default Gallery;
