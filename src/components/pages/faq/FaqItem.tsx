'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
      question: string;
      answer: string;
}

const FaqItem = ({ faq, index }: { faq: FAQItem; index: number }) => {
      const [activeIndex, setActiveIndex] = useState<number | null>(null);

      return (
            <div className="border-b border-gray-200  overflow-hidden">
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
                                          <p className="text-sm md:text-base text-gray-600">{faq.answer}</p>
                                    </motion.div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </div>
      );
};

export default FaqItem;
