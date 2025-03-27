'use client';

import { useRef } from 'react';
import React from 'react';
import { Carousel } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useGetCategoriesQuery } from '@/redux/features/website/category/categoryApi';

const OccasionSlider = () => {
      const { data } = useGetCategoriesQuery(undefined);
      const categoriesData = data?.data;

      const carouselRef = useRef<any>();

      const next = () => carouselRef.current?.next();
      const previous = () => carouselRef.current?.prev();
      return (
            <div className="bg-primary/5 py-20">
                  <div className=" container">
                        <div className="mb-6 space-y-4 text-center">
                              <h1 className="text-3xl md:text-4xl font-semibold">Create the perfect card for any occasion</h1>
                              <p className="text-sm md:text-normal text-paragraph">
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
                                    {categoriesData?.map((item: any) => (
                                          <div key={item?._id} className="p-4">
                                                <div className="relative text-center  rounded-xl  overflow-hidden p-6 bg-white border border-primary">
                                                      <Image
                                                            className="size-[60px] m-auto"
                                                            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${item?.categoryImage}`}
                                                            width={200}
                                                            height={200}
                                                            alt={item?.name}
                                                      />
                                                      <h1 className="text-lg mt-3 font-medium">{item?.name}</h1>
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
