
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';

const ComparisonTableSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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
            Which Path Is Right for You?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare our offerings to find your perfect fit
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 overflow-x-auto">
            {/* Header */}
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200 min-w-full">
              <div className="p-4 md:p-6 font-bold text-gray-900 text-sm md:text-base min-w-[120px]">Features</div>
              <div className="p-4 md:p-6 text-center border-l border-gray-200 min-w-[120px]">
                <div className="font-bold text-gray-900 text-sm md:text-base">Free Assessment</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">Quick Start</div>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-gray-200 min-w-[120px]">
                <div className="font-bold text-gray-900 text-sm md:text-base">Cohort</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">Group Program</div>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-gray-200 min-w-[120px]">
                <div className="font-bold text-gray-900 text-sm md:text-base">Brand Catalyst</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">1:1 Coaching</div>
              </div>
            </div>

            {/* Rows */}
            {[
              {
                feature: "Personal Content Formula",
                assessment: true,
                cohort: true,
                catalyst: true
              },
              {
                feature: "Group Support & Accountability",
                assessment: false,
                cohort: true,
                catalyst: false
              },
              {
                feature: "1:1 Personalized Attention",
                assessment: false,
                cohort: "Limited",
                catalyst: true
              },
              {
                feature: "Daily Support Access",
                assessment: false,
                cohort: false,
                catalyst: true
              },
              {
                feature: "Lifetime Community Access",
                assessment: false,
                cohort: true,
                catalyst: true
              },
              {
                feature: "Implementation Timeline",
                assessment: "Instant",
                cohort: "7 weeks",
                catalyst: "90 days"
              },
              {
                feature: "Best For",
                assessment: "Getting Started",
                cohort: "Group Learning",
                catalyst: "Fast Results"
              }
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-4 border-b border-gray-100 last:border-b-0 min-w-full">
                <div className="p-4 md:p-6 font-medium text-gray-900 text-sm md:text-base min-w-[120px]">{row.feature}</div>
                <div className="p-4 md:p-6 text-center border-l border-gray-100 min-w-[120px]">
                  {typeof row.assessment === 'boolean' ? (
                    row.assessment ? (
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-4 w-4 md:h-5 md:w-5 text-gray-400 mx-auto" />
                    )
                  ) : (
                    <span className="text-gray-700 text-xs md:text-sm break-words">{row.assessment}</span>
                  )}
                </div>
                <div className="p-4 md:p-6 text-center border-l border-gray-100 min-w-[120px]">
                  {typeof row.cohort === 'boolean' ? (
                    row.cohort ? (
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-4 w-4 md:h-5 md:w-5 text-gray-400 mx-auto" />
                    )
                  ) : (
                    <span className="text-gray-700 text-xs md:text-sm break-words">{row.cohort}</span>
                  )}
                </div>
                <div className="p-4 md:p-6 text-center border-l border-gray-100 min-w-[120px]">
                  {typeof row.catalyst === 'boolean' ? (
                    row.catalyst ? (
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-4 w-4 md:h-5 md:w-5 text-gray-400 mx-auto" />
                    )
                  ) : (
                    <span className="text-gray-700 text-xs md:text-sm break-words">{row.catalyst}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Still not sure? Start with the free assessment for personalized recommendations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
