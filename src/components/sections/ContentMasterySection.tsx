
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContentMasterySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const assessmentFeatures = [
    "2-minute assessment",
    "Personalized content gap analysis", 
    "Custom roadmap based on your results",
    "Instant insights delivered",
    "No email required to start"
  ];

  return (
    <section className="section bg-white" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three Ways to Master Your<br />
            <span className="text-chemist-orange">Content & Build Authority</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Whether you're just starting or ready to scale, we have the perfect path to transform your content strategy and grow your business.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-chemist-orange font-medium mb-8">
            <span className="text-lg">⚡</span>
            <span className="italic">Like a cheat-code for your content</span>
          </div>
        </motion.div>

        {/* Start Here Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Start Here</h3>
          <p className="text-lg text-gray-600 mb-8">
            Not sure which path is right? Begin with our free assessment.
          </p>
        </motion.div>

        {/* Assessment Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-200 relative"
        >
          <div className="absolute -top-3 right-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            FREE
          </div>
          
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-chemist-orange bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-6 w-6 text-chemist-orange" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Content Chemistry Assessment</h4>
              <p className="text-gray-600 mb-6">
                Get personalized insights about your content strategy in just 2 minutes. Perfect for understanding where you are and what you need.
              </p>
            </div>
          </div>
          
          <Link
            to="/contact"
            className="btn-primary inline-block mb-6"
          >
            Take Free Assessment →
          </Link>
          
          <div className="space-y-3">
            {assessmentFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentMasterySection;
