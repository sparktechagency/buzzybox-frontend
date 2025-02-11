'use client';
import ani from '@/assets/images/occasion-slider/ani.png';
import brithday from '@/assets/images/occasion-slider/brithday.png';
import cele from '@/assets/images/occasion-slider/cele.png';
import congra from '@/assets/images/occasion-slider/congra.png';
import farewell from '@/assets/images/occasion-slider/farewell.png';
import like from '@/assets/images/occasion-slider/like.png';

import { useRef } from 'react';
import React from 'react';
import { Carousel } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const OccasionSlider = () => {
      const occasions = [
            {
                  id: 1,
                  title: 'Anniversary',
                  image: ani,
            },
            {
                  id: 2,
                  title: 'Birthday',
                  image: brithday,
            },
            {
                  id: 3,
                  title: 'Celebration',
                  image: cele,
            },
            {
                  id: 4,
                  title: 'Congratulations',
                  image: congra,
            },
            {
                  id: 5,
                  title: 'Farewell',
                  image: farewell,
            },
            {
                  id: 6,
                  title: 'Like',
                  image: like,
            },
      ];
      const carouselRef = useRef<any>();

      const next = () => carouselRef.current?.next();
      const previous = () => carouselRef.current?.prev();
      return (
            <div className="bg-primary/5 py-20">
                  <div className=" container">
                        <div className="mb-6 space-y-4 text-center">
                              <h1 className="text-4xl font-semibold">Create the perfect card for any occasion</h1>
                              <p className="text-paragraph">
                                    Celebrate every moment with a personalized digital card—easy to create, fun to share!
                              </p>
                        </div>
                        <div className="relative">
                              <Carousel
                                    responsive={[
                                          {
                                                breakpoint: 768,
                                                settings: {
                                                      slidesToShow: 1,
                                                      slidesToScroll: 1,
                                                },
                                          },
                                    ]}
                                    ref={carouselRef}
                                    dots={false}
                                    slidesToShow={6}
                                    slidesToScroll={1}
                                    autoplay
                                    className="md:mx-12"
                              >
                                    {occasions.map((occasion) => (
                                          <div key={occasion.id} className="p-4">
                                                <div className="relative text-center  rounded-xl  overflow-hidden p-6 bg-white border border-primary">
                                                      <Image
                                                            className="size-[60px] m-auto"
                                                            src={occasion.image.src}
                                                            width={200}
                                                            height={200}
                                                            alt={occasion.title}
                                                      />
                                                      <h1 className="text-lg mt-3 font-medium">{occasion.title}</h1>
                                                </div>
                                          </div>
                                    ))}
                              </Carousel>

                              {/* Navigation Buttons */}
                              <button
                                    onClick={previous}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full shadow-lg flex items-center justify-center  transition-colors"
                              >
                                    <ChevronLeft className="w-6 h-6" />
                              </button>
                              <button
                                    onClick={next}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full shadow-lg flex items-center justify-center  transition-colors"
                              >
                                    <ChevronRight className="w-6 h-6" />
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default OccasionSlider;
