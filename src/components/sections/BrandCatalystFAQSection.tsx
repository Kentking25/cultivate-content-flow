
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BrandCatalystFAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "How is this different from your group program?",
      answer: "The Brand Catalyst is completely 1:1. You get 12 personal strategy sessions with me, daily Voxer access for real-time support, and a custom content system built specifically for your business. The group program is great for learning fundamentals, but this is for people who need personalized, intensive attention to completely transform their brand positioning."
    },
    {
      question: "What does unlimited Voxer access actually mean?",
      answer: "You can send me voice messages throughout your day Monday-Friday, and I'll respond within 2-4 hours (sometimes faster if I'm online). Think of it like having a business partner available to help with decisions, review content before you post, or strategize about opportunities that come up. It's the game-changer that makes this program so effective."
    },
    {
      question: "I'm already successful. Why do I need this?",
      answer: "This isn't about fixing what's broken - it's about amplifying what's working and positioning you as THE go-to expert in your space. Many successful entrepreneurs are still invisible despite their expertise. We'll transform you from best-kept secret to industry authority, which means better clients, higher prices, and more opportunities coming to you."
    },
    {
      question: "Can you guarantee specific results?",
      answer: "I can't guarantee specific numbers because results depend on your commitment to implementation. What I can guarantee is that you'll have a complete brand transformation strategy, custom content system, and 90 days of intensive support. Every client who fully implements sees significant improvements in their positioning and opportunities."
    },
    {
      question: "What if I need more than 90 days?",
      answer: "Most clients see major shifts within the 90 days, but transformation is ongoing. You'll have lifetime access to all our session recordings, plus I offer ongoing quarterly reviews for graduates. Many clients continue with periodic strategy sessions as their business evolves."
    },
    {
      question: "Is this just Instagram strategy?",
      answer: "Not at all. While we'll optimize your social media presence, this is about complete brand positioning across all platforms - LinkedIn, speaking opportunities, podcast appearances, content strategy, and becoming known in your industry. It's about becoming THE person people think of when they need your expertise."
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
            Questions About Working Together
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
                className="bg-white rounded-xl border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-chemist-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Limited Spots Alert */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-chemist-orange rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Extremely Limited Spots
          </h3>
          <p className="text-xl text-white mb-8">
            I only take 5-6 Brand Catalyst clients at a time because of the unlimited Voxer support.
          </p>
          
          <div className="bg-white bg-opacity-20 rounded-xl p-6 max-w-md mx-auto">
            <div className="text-white mb-2 font-semibold">Current Availability:</div>
            <div className="text-3xl font-bold text-white mb-2">2 spots remaining</div>
            <div className="text-white text-sm">Next Start Date: Within 1-2 weeks</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCatalystFAQSection;
