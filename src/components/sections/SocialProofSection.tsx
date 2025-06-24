
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
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Trusted by Industry Leaders
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 w-full max-w-[200px] h-24 flex items-center justify-center">
                <span className="text-gray-600 font-semibold">Featured On</span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 w-full max-w-[200px] h-24 flex items-center justify-center">
                <span className="text-gray-600 font-semibold">Podcast Guest</span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 w-full max-w-[200px] h-24 flex items-center justify-center">
                <span className="text-gray-600 font-semibold">Industry Expert</span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 w-full max-w-[200px] h-24 flex items-center justify-center">
                <span className="text-gray-600 font-semibold">Thought Leader</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
