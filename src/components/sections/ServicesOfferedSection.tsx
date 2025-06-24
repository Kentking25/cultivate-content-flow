
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Users, TrendingUp, CheckCircle, Clock, MessageCircle } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  subtitle,
  description,
  features,
  programDetails,
  icon: Icon,
  delay,
  buttonText = "Learn More",
  linkTo = "/contact"
}: {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  programDetails: { duration: string; format: string };
  icon: any;
  delay: number;
  buttonText?: string;
  linkTo?: string;
}) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-chemist-orange rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-lg text-chemist-orange font-medium mb-3">{subtitle}</p>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Key Features */}
      <div className="mb-6 flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-chemist-orange">⚡</span>
          <h4 className="text-lg font-bold text-gray-900">Key Features</h4>
        </div>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details */}
      <div className="border-t border-gray-200 pt-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-chemist-orange" />
          <h4 className="text-lg font-bold text-gray-900">Program Details</h4>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <div>
            <div className="text-sm text-gray-600 mb-1">Duration</div>
            <div className="font-semibold text-gray-900">{programDetails.duration}</div>
          </div>
          
          <div>
            <div className="text-sm text-gray-600 mb-1">Format</div>
            <div className="font-semibold text-gray-900">{programDetails.format}</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-auto">
        <a
          href={linkTo}
          className="btn-primary text-lg px-6 py-3 inline-block mb-3 w-full"
        >
          {buttonText} →
        </a>
        
        <div className="text-sm text-gray-600">
          See full program details • Investment discussed during application
        </div>
      </div>
    </motion.div>
  );
};

const ServicesOfferedSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const contentAssessmentFeatures = [
    "Comprehensive content audit and analysis",
    "Identify what's blocking your content growth",
    "Personalized recommendations and action plan",
    "One-on-one strategy session with Kent",
    "Written report with specific next steps"
  ];

  const cohortFeatures = [
    "Small group coaching (max 10 people)",
    "Weekly 90-minute group calls",
    "Personal content formula creation",
    "Lifetime community access",
    "90-day implementation roadmap",
    "Peer support and accountability"
  ];

  const catalystFeatures = [
    "12 personal strategy sessions",
    "Daily Voxer access (M-F)",
    "Complete brand overhaul",
    "6 months implementation support",
    "Custom content framework"
  ];

  return (
    <section id="programs" className="section bg-gray-50" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Go Deeper?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the program that matches your needs and timeline.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ServiceCard
            title="Content Assessment"
            subtitle="Find what's blocking you"
            description="Get clear on exactly what's preventing your content from converting with a comprehensive audit."
            features={contentAssessmentFeatures}
            programDetails={{
              duration: "2-3 Mins",
              format: "1:1 assessment + report"
            }}
            icon={Search}
            delay={0}
            buttonText="Get Assessment"
            linkTo="/contact"
          />
          
          <ServiceCard
            title="Content Chemistry Cohort"
            subtitle="Transform with a supportive group"
            description="7-week intensive program with weekly calls, personalized formulas, and lifetime community access."
            features={cohortFeatures}
            programDetails={{
              duration: "7 weeks + lifetime access",
              format: "Small group coaching"
            }}
            icon={Users}
            delay={0.2}
            buttonText="Learn More"
            linkTo="/services/content-cohort"
          />
          
          <ServiceCard
            title="The Brand Catalyst"
            subtitle="Personalized 1:1 transformation"
            description="90 days of intensive 1:1 work with daily support to completely transform your content and brand."
            features={catalystFeatures}
            programDetails={{
              duration: "90 days + 6 months support",
              format: "1:1 personalized"
            }}
            icon={TrendingUp}
            delay={0.4}
            buttonText="Learn More"
            linkTo="/services/brand-catalyst"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesOfferedSection;
