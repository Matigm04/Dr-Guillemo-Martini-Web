import { AnimateOnScroll } from '../../../hooks/useInView.jsx';

const TreatmentCard = ({ title, text, image, reverse, index = 0 }) => {
  return (
    <AnimateOnScroll animation="fade-up" delay={index * 100}>
      <div 
        className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10`}
      >
        {/* Texto */}
        <div className="flex-1 space-y-4">
          <h3 className="text-3xl font-serif text-green-900">{title}</h3>
          <p className="text-gray-700 leading-relaxed">{text}</p>
        </div>

        {/* Foto Tratamiento */}
        <div className="flex-1 w-full h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default TreatmentCard;
