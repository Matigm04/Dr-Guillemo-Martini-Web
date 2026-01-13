import { memo } from 'react';
import { motion } from 'framer-motion';

const SectionHeader = memo(({
  title,
  subtitle,
  description,
  titleSize = 'text-4xl sm:text-5xl md:text-6xl',
  children
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className={`${titleSize} font-serif text-brand-primary italic leading-tight mb-6`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-brand-primary/70 max-w-3xl mx-auto font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-base md:text-lg text-brand-primary/60 max-w-2xl mx-auto font-sans leading-relaxed mt-4">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
});

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
