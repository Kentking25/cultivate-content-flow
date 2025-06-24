
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BrandCatalystTestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const testimonials = [
    {
      badge: "3x price increase + waiting list",
      content: "I was competing on price in a crowded market. Kent helped me find my unique angle - the consultant who actually understands working parent struggles because I lived it. Within 90 days, I had a waiting list and raised my prices 3x. The daily Voxer support was like having a business partner who actually knew what they were talking about.",
      author: "Jennifer, Marketing Consultant"
    },
    {
      badge: "Became THE go-to expert",
      content: "I had great content but nobody knew who I was. Kent helped me realize I was trying to appeal to everyone and reaching no one. We completely rebuilt my messaging around my military background. Now I'm the go-to leadership coach for veterans transitioning to civilian careers. The transformation was incredible.",
      author: "Michael, Leadership Coach"
    },
    {
      badge: "Launches now have waitlists",
      content: "I was making decent money but felt like I was working way too hard for it. Kent helped me position myself as THE expert in my niche instead of just another course creator. My launches went from stressful to waitlists. Having someone available daily to bounce ideas off made all the difference.",
      author: "Lisa, Course Creator"
    }
  ];

  return (
    <section className="bg-chemist-black text-white py-20" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Happens When You Stop Playing Small
          </h2>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-2xl p-8 md:p-12 relative">
                <div className="absolute top-6 left-6">
                  <div className="bg-chemist-orange text-white px-4 py-2 rounded-full text-sm font-bold">
                    {testimonial.badge}
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-lg md:text-xl text-gray-300 mb-6 italic leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="text-chemist-orange font-semibold">
                    — {testimonial.author}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCatalystTestimonialsSection;
