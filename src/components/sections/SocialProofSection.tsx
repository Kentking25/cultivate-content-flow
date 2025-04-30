
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    quote: "Kent's strategies transformed how we approach content. Our engagement tripled in just 60 days.",
    author: "Sarah Johnson",
    position: "Marketing Director, Printify",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The Content Chemist formula turned our bland social strategy into our #1 customer acquisition channel.",
    author: "Michael Chen",
    position: "Founder, Natulang",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Working with Kent was the best investment we made. His team's creative process is truly one-of-a-kind.",
    author: "Ashley Rodriguez",
    position: "CMO, Dr Squatch",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const brands = [
  { name: "Microsoft", logo: "/lovable-uploads/cf30c19d-eb47-438c-a733-1160acf625c0.png" },
  { name: "Printify", logo: "/lovable-uploads/d4da68f5-b274-4296-8abd-765b80c8a91f.png" },
  { name: "CRWN Magazine", logo: "/lovable-uploads/c87e7451-9958-4a59-b548-9c1a481cafb5.png" },
  { name: "Skillz", logo: "/lovable-uploads/3144905c-f635-48a4-b66b-82f69e445231.png" },
  { name: "Trap Karaoke", logo: "/lovable-uploads/11e52c89-f33d-4f93-bf03-713db7edb4d7.png" },
  { name: "Zeffy", logo: "/lovable-uploads/2eb8b4f6-d9ce-4ca6-8ae3-7d9505b1eb91.png" },
];

const SocialProofSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="social-proof" className="section bg-chemist-white relative" ref={ref}>
      <div className="container-content text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title mb-3">Trusted By Industry Leaders</h2>
          <p className="section-subtitle mx-auto">
            Join the brands and thought leaders who have transformed their content strategies with The Content Chemist
          </p>
          
          {/* Brand logos */}
          <div className="py-12">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="h-16 md:h-20 flex items-center"
                >
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="max-h-full max-w-[150px] md:max-w-[180px] object-contain client-logo"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-10 text-chemist-black">What Clients Are Saying</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-chemist-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-chemist-gray mb-4">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-bold text-chemist-black">{testimonial.author}</p>
                      <p className="text-sm text-chemist-gray">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
