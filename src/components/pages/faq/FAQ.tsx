'use client';

import { Button, Skeleton } from 'antd';
import FaqItem from './FaqItem';
import { useGetFaqsQuery } from '@/redux/features/website/faq/faqApi';
import { useState } from 'react';

interface FAQItem {
      question: string;
      answer: string;
}
//       {
//             question: 'Can I create a card for free?',
//             answer: "Yes! You can customize your card for free and only pay when you're ready to send.",
//       },
//       {
//             question: 'Can I upload my own background or images?',
//             answer: 'Yes, you can upload and use your own custom backgrounds and images to personalize your card.',
//       },
//       {
//             question: 'Can multiple people sign the card?',
//             answer: 'Yes, multiple people can collaborate and sign the card together.',
//       },
//       {
//             question: 'How does the group gift collection work?',
//             answer: 'Our group gift collection feature allows multiple people to contribute to a single gift easily and securely.',
//       },
//       {
//             question: 'How much does it cost to send a card?',
//             answer: 'Pricing varies based on the type of card and features you choose. Basic cards start at a competitive rate.',
//       },
//       {
//             question: 'How do I add a background or images?',
//             answer: 'You can add a background or images by uploading them to your Thankyoupot account.',
//       },
// ];

const FAQ = () => {
      const [limit, setLimit] = useState(5);

      const { data, isLoading } = useGetFaqsQuery({ limit });
      const faqData = data?.data?.data;
      const total = data?.data?.meta?.total;

      return (
            <div className="w-full max-w-4xl mx-auto px-4 py-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
                  <p className=" text-sm md:text-base text-center text-paragraph mb-12">Everything you need to know about Thankyoupot!</p>

                  <div className="space-y-4">
                        {isLoading
                              ? Array.from({ length: 5 }).map((_, idx) => (
                                      <Skeleton.Button key={idx} block active shape="default" size="large" />
                                ))
                              : faqData?.map((faq: FAQItem, index: number) => <FaqItem key={index} faq={faq} index={index} />)}
                  </div>

                  <div className="text-center mt-8">
                        {total > 5 && limit <= 5 && (
                              <Button onClick={() => setLimit(total)} type="primary">
                                    View All
                              </Button>
                        )}
                  </div>
            </div>
      );
};

export default FAQ;
