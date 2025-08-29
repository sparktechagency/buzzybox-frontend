'use client';

import { Carousel } from 'antd';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { useGetAllReviewsQuery } from '@/redux/features/website/reviews/reviewApi';

const TestimonialSlider = () => {
      const { data } = useGetAllReviewsQuery(undefined);
      const reviewsData = data?.data;

      const carouselRef = useRef<any>();
      const [activeIndex, setActiveIndex] = useState(0);

      return (
            <div className="relative bg-primary/10 py-20 my-10">
                  <div className="container mx-auto px-6">
                        {/* Section Title */}
                        <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-start">
                              <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900">What Users Say About Our Service</h2>
                                    <p className="text-paragraph mt-2 text-sm md:text-base md:max-w-xl">
                                          See why thousands love Thankyoupot! Real stories from happy users who made their moments special
                                          with our digital cards and group gifts. Whether it’s a heartfelt farewell, a joyful birthday, or a
                                          team celebration, Thankyoupot makes every occasion memorable and effortless!
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
                                          {reviewsData?.map((item: any) => (
                                                <div
                                                      key={item?._id}
                                                      className="flex items-center gap-8 bg-white py-10 border border-primary md:p-6 p-2 rounded-xl "
                                                >
                                                      <div className="h-full">
                                                            <p className="text-gray-700 text-sm md:text-base italic">{item?.message}</p>
                                                            <div className="flex justify-between items-center">
                                                                  <div className="flex items-center gap-2 mt-3">
                                                                        <div className="flex-shrink-0">
                                                                              <Image
                                                                                    src={`${process.env.NEXT_PUBLIC_SERVER_URL}${item?.userImage}`}
                                                                                    width={50}
                                                                                    height={50}
                                                                                    alt={item?.username}
                                                                                    className="rounded-full size-[50px] object-cover border-2 border-yellow-500"
                                                                              />
                                                                        </div>
                                                                        <div className="grid items-center">
                                                                              <strong className="text-sm md:text-base text-gray-900">
                                                                                    {item?.username}
                                                                              </strong>
                                                                              <span className="text-sm  text-gray-500">
                                                                                    {item?.occupation}
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
