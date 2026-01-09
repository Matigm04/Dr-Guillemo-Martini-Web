import { motion } from 'framer-motion';

const TreatmentCard = ({ title, text, image, reverse }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Se anima solo la primera vez que se ve
      className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10`}
    >
      {/* Texto */}
      <div className="flex-1 space-y-4">
        <h3 className="text-3xl font-serif text-green-900">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>

      {/* Foto Tratamiento */}
      <div className="flex-1 w-full h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
    </motion.div>
  );
};

export default TreatmentCard;
