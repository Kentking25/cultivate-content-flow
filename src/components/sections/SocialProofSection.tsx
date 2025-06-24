
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const SocialProofSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const testimonials = [
    {
      text: "Kent's content strategy completely transformed my business. I went from posting randomly to having a clear, systematic approach that actually converts.",
      author: "Sarah Martinez",
      role: "Business Coach",
      rating: 5,
    },
    {
      text: "The Content Chemistry Method gave me the exact framework I needed. No more guessing what to post - I have a proven system that works.",
      author: "Mike Chen",
      role: "Course Creator",
      rating: 5,
    },
    {
      text: "Working with Kent was a game-changer. My engagement increased by 300% and I finally built the personal brand I always wanted.",
      author: "Lisa Thompson",
      role: "Consultant",
      rating: 5,
    },
  ];

  const companyLogos = [
    // First row - original logos
    {
      name: "Microsoft",
      src: "/lovable-uploads/7f60bb71-e3a3-47fa-b30b-e332f26a7576.png",
      size: "w-32 h-12"
    },
    {
      name: "inBeat",
      src: "/lovable-uploads/c1b6341e-39ef-426b-bea7-d871c648ee36.png",
      size: "w-24 h-16"
    },
    {
      name: "Trap Karaoke",
      src: "/lovable-uploads/3cc7af20-7d24-459b-a96b-651476a30dc8.png",
      size: "w-32 h-12"
    },
    {
      name: "Printify",
      src: "/lovable-uploads/827e4c22-1303-47e3-a708-c977115cfa44.png",
      size: "w-32 h-12"
    },
    // Second row - new logos
    {
      name: "Dr. Squatch",
      src: "/lovable-uploads/063b345e-65ea-4dd4-8b73-048c5a3736e6.png",
      size: "w-36 h-20"
    },
    {
      name: "MagFast",
      src: "/lovable-uploads/ed456777-73d3-4d8c-a5bf-78456162e053.png",
      size: "w-32 h-12"
    },
    {
      name: "Blaze",
      src: "/lovable-uploads/78ef4f86-64c9-4290-bba5-7da74dd57f77.png",
      size: "w-36 h-20"
    },
    {
      name: "ClickUp",
      src: "/lovable-uploads/8553773e-555d-40bb-b15e-b6ecc43c4b7c.png",
      size: "w-32 h-12"
    },
    // Third row - remaining logos
    {
      name: "Zeffy",
      src: "/lovable-uploads/ffc94f8f-1147-4b7a-bf12-4c381c731718.png",
      size: "w-36 h-20"
    },
    {
      name: "Natulang",
      src: "/lovable-uploads/45963ba7-b49d-4e3b-92c6-1c5b6060c07b.png",
      size: "w-32 h-12"
    },
    {
      name: "iTrust Capital",
      src: "/lovable-uploads/85bce84f-e11f-4fc1-a123-0b4c657faf8e.png",
      size: "w-32 h-12"
    },
    {
      name: "Crown Mag",
      src: "/lovable-uploads/d70434ef-d6a7-4ebb-99d0-fff1cb1eeb3d.png",
      size: "w-36 h-20"
    }
  ];

  return (
    <section id="social-proof" className="section bg-gray-50" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What People Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how the Content Chemistry Method has transformed businesses just like yours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full flex flex-col"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-chemist-orange text-chemist-orange" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-chemist-orange mb-4" />
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-100 pt-6">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-chemist-orange">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="py-16 border-t border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
              Trusted by Industry Leaders
            </h3>
            
            {/* First Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-8">
              {companyLogos.slice(0, 4).map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-24 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className={`${logo.size} object-contain filter grayscale hover:grayscale-0 transition-all duration-300`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-8">
              {companyLogos.slice(4, 8).map((logo, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-24 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className={`${logo.size} object-contain filter grayscale hover:grayscale-0 transition-all duration-300`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {companyLogos.slice(8, 12).map((logo, index) => (
                <motion.div
                  key={index + 8}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-24 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className={`${logo.size} object-contain filter grayscale hover:grayscale-0 transition-all duration-300`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
