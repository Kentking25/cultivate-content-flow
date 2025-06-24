
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const CohortFAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "I hate being on camera. Will this still work?",
      answer: "Absolutely. While video content performs well, we'll teach you techniques to feel confident on camera, plus plenty of non-video content strategies that still convert."
    },
    {
      question: "I don't have many followers. Is that okay?",
      answer: "Perfect! It's better to build the right foundation from the start than to try to fix bad habits later. Small, engaged audiences often convert better than large, disengaged ones."
    },
    {
      question: "How much time does this really take?",
      answer: "Weekly 90-minute calls plus implementation time. Most people spend 2-3 hours per week on content creation once they have their system down."
    },
    {
      question: "What if I can't make all the live calls?",
      answer: "All calls are recorded and you'll have lifetime access. Plus, the private community keeps you connected between calls."
    },
    {
      question: "I've tried other programs. How is this different?",
      answer: "This isn't generic advice or templates. We create your personalized content formula based on your unique story, industry, and audience. Plus, small group coaching means real attention."
    },
    {
      question: "My industry is boring. Can this still work?",
      answer: "The 'boring' industries often have the biggest opportunities because everyone else is playing it safe. We'll help you find interesting angles in your expertise that others miss."
    }
  ];

  return (
    <section className="bg-gray-50 py-20" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Questions I Get All the Time
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default CohortFAQSection;
