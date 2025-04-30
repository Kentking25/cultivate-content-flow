
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  bgColor?: string;
}

const ScrollSection = ({ id, className, children, bgColor = 'bg-white' }: ScrollSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      className={`section ${bgColor} ${className}`}
      ref={ref}
    >
      <motion.div
        className="container-content"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ScrollSection;
