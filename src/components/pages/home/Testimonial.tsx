'use client';

import { Carousel } from 'antd';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { RiDoubleQuotesR } from 'react-icons/ri';

const testimonials = [
      {
            id: 1,
            name: 'Catrina Yoder',
            role: 'Happy Client',
            text: 'Absolutely loved the experience! Creating a birthday card with GIFs and videos was so easy, and my friend was thrilled!',
            image: 'https://picsum.photos/50',
      },
      {
            id: 2,
            name: 'John Doe',
            role: 'Verified User',
            text: 'Buzzybox made our farewell party even more special. The ability to collaborate on a card was amazing!',
            image: 'https://picsum.photos/50',
      },
      {
            id: 3,
            name: 'Emily Smith',
            role: 'Loyal Customer',
            text: 'Creating and sending group greeting cards has never been this easy. Highly recommended!',
            image: 'https://picsum.photos/50',
      },
];

const TestimonialSlider = () => {
      const carouselRef = useRef<any>();
      const [activeIndex, setActiveIndex] = useState(0);

      return (
            <div className="relative bg-primary/10 py-20 my-10">
                  <div className="container mx-auto px-6">
                        {/* Section Title */}
                        <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-start">
                              <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900">What Users Say About Our Service</h2>
                                    <p className="text-paragraph mt-2 max-w-xl">
                                          See why thousands love Buzzybox! Real stories from happy users who made their moments special with
                                          our digital cards and group gifts. Whether it’s a heartfelt farewell, a joyful birthday, or a team
                                          celebration, Buzzybox makes every occasion memorable and effortless!
                                    </p>
                              </div>

                              {/* Carousel with Custom Dots */}
                              <div className="relative">
                                    <Carousel
                                          ref={carouselRef}
                                          autoplay
                                          afterChange={(current) => setActiveIndex(current)} // Track active slide
                                          appendDots={(dots) => <div className="flex justify-center mt-6">{dots}</div>}
                                          customPaging={(i) => (
                                                <div
                                                      className={`w-3 h-3 mx-1 mt-6 rounded-full cursor-pointer transition-all ${
                                                            activeIndex === i ? 'bg-primary scale-125' : 'bg-gray-300'
                                                      }`}
                                                ></div>
                                          )}
                                          className="max-w-3xl mx-auto"
                                    >
                                          {testimonials.map((testimonial) => (
                                                <div
                                                      key={testimonial.id}
                                                      className="flex items-center gap-8 bg-white py-10 border border-primary p-6 rounded-xl "
                                                >
                                                      <div className="h-full">
                                                            <p className="text-gray-700 italic">{testimonial.text}</p>
                                                            <div className="flex justify-between items-center">
                                                                  <div className="flex items-center gap-2">
                                                                        <div className="flex-shrink-0">
                                                                              <Image
                                                                                    src={testimonial.image}
                                                                                    width={50}
                                                                                    height={50}
                                                                                    alt={testimonial.name}
                                                                                    className="rounded-full size-[50px] object-cover border-2 border-yellow-500"
                                                                              />
                                                                        </div>
                                                                        <div className="mt-3 flex items-center gap-2">
                                                                              <strong className="text-gray-900">{testimonial.name}</strong>
                                                                              <span className="text-sm text-gray-500">
                                                                                    {testimonial.role}
                                                                              </span>
                                                                        </div>
                                                                  </div>
                                                                  <div>
                                                                        <RiDoubleQuotesR className="text-primary text-5xl" />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                    </Carousel>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default TestimonialSlider;
