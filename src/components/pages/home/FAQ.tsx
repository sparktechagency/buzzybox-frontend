'use client';
import { Button } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
      question: string;
      answer: string;
}

const faqData: FAQItem[] = [
      {
            question: 'Can I create a card for free?',
            answer: "Yes! You can customize your card for free and only pay when you're ready to send.",
      },
      {
            question: 'Can I upload my own background or images?',
            answer: 'Yes, you can upload and use your own custom backgrounds and images to personalize your card.',
      },
      {
            question: 'Can multiple people sign the card?',
            answer: 'Yes, multiple people can collaborate and sign the card together.',
      },
      {
            question: 'How does the group gift collection work?',
            answer: 'Our group gift collection feature allows multiple people to contribute to a single gift easily and securely.',
      },
      {
            question: 'How much does it cost to send a card?',
            answer: 'Pricing varies based on the type of card and features you choose. Basic cards start at a competitive rate.',
      },
      {
            question: 'How do I add a background or images?',
            answer: 'You can add a background or images by uploading them to your Buzzybox account.',
      },
];

const FAQ = () => {
      const [activeIndex, setActiveIndex] = useState<number | null>(null);

      return (
            <div className="w-full max-w-4xl mx-auto px-4 py-16">
                  <h2 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
                  <p className="text-center text-paragraph mb-12">Everything you need to know about Buzzybox!</p>

                  <div className="space-y-4">
                        {faqData.map((faq, index) => (
                              <div key={index} className="border-b border-gray-200  overflow-hidden">
                                    <motion.button
                                          className="w-full px-6 py-4 flex gap-2 bg-white hover:bg-gray-50"
                                          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                          initial={false}
                                    >
                                          <motion.span
                                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className=" text-primary"
                                          >
                                                {activeIndex === index ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
                                          </motion.span>
                                          <span className="font-medium text-left">{faq.question}</span>
                                    </motion.button>

                                    <AnimatePresence>
                                          {activeIndex === index && (
                                                <motion.div
                                                      initial={{ height: 0, opacity: 0 }}
                                                      animate={{ height: 'auto', opacity: 1 }}
                                                      exit={{ height: 0, opacity: 0 }}
                                                      transition={{ duration: 0.3 }}
                                                      className="overflow-hidden"
                                                >
                                                      <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            className="px-6 mx-5 flex gap-3 py-4 "
                                                      >
                                                            <span className="h-6 w-0.5 min-w-0.5 bg-primary block"></span>
                                                            <p className="text-gray-600">{faq.answer}</p>
                                                      </motion.div>
                                                </motion.div>
                                          )}
                                    </AnimatePresence>
                              </div>
                        ))}
                  </div>

                  <div className="text-center mt-8">
                        <Button type="primary">View All</Button>
                  </div>
            </div>
      );
};

export default FAQ;
