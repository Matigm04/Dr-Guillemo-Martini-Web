import { useState } from "react";
import { Clock } from "lucide-react";
import { AnimateOnScroll } from "../../hooks/useInView.jsx";

export function ServiceCard({ treatment, onClick, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimateOnScroll animation="fade-up" delay={index * 100}>
      <div
        className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02]"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* Image Container with Before/After Effect */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {/* Before Image */}
        <div className="absolute inset-0">
          <img
            src={treatment.imageBefore}
            alt={`${treatment.title} - Antes`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        
        {/* After Image with Fade Effect */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <img
            src={treatment.imageAfter}
            alt={`${treatment.title} - Después`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Before/After Label */}
        <div className="absolute top-4 left-4 z-10">
          <div
            className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 transition-opacity duration-300"
            style={{ opacity: isHovered ? 0 : 1 }}
          >
            Antes
          </div>
          <div
            className="px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-sm text-xs font-medium text-white absolute top-0 left-0 transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            Después
          </div>
        </div>

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-light text-gray-900 mb-1 tracking-tight group-hover:text-emerald-700 transition-colors">
              {treatment.title}
            </h3>
            <p className="text-sm text-emerald-600 font-medium">{treatment.category}</p>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Clock className="w-4 h-4 mr-2" />
          <span className="font-light">{treatment.duration}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {treatment.tags?.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-light"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    </AnimateOnScroll>
  );
}
