import { useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export function ServiceCard({ treatment, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
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
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={treatment.imageAfter}
            alt={`${treatment.title} - Después`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Before/After Label */}
        <div className="absolute top-4 left-4 z-10">
          <motion.div
            className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700"
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Antes
          </motion.div>
          <motion.div
            className="px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-sm text-xs font-medium text-white absolute top-0 left-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Después
          </motion.div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
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
          {treatment.tags?.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-light"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
