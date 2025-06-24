
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CohortTestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const testimonials = [
    {
      result: "90K followers in 6 months",
      quote: "I was posting random motivational quotes and wondering why nobody cared. Kent helped me realize my story about building a business while raising three kids WAS my content goldmine. I went from 2,000 to 90,000 followers in 6 months, but more importantly, I'm not guessing what to post anymore.",
      author: "Sarah, Business Coach"
    },
    {
      result: "Turned failure into authority",
      quote: "I thought my bankruptcy story was something to hide. Turns out it was exactly what struggling entrepreneurs needed to hear. Kent helped me reframe my biggest failure as my biggest asset. Now I have people messaging me saying 'I need to work with you.'",
      author: "David, Course Creator"
    },
    {
      result: "10x engagement immediately",
      quote: "The first post we created using Kent's formula got 10 times my usual engagement. But the best part? I finally understood WHY it worked. No more throwing content at the wall and hoping something sticks.",
      author: "Lisa, Online Coach"
    }
  ];

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Here's What Actually Happens When You Get Clarity
          </h2>
        </motion.div>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <div className="mb-4">
                <span className="bg-chemist-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonial.result}
                </span>
              </div>
              
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="font-semibold text-gray-900">
                — {testimonial.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CohortTestimonialsSection;
