'use client';
import { useAppSelector } from '@/redux/hooks';
import { Button, Carousel } from 'antd';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useRef } from 'react';
import { TbMessageCircle } from 'react-icons/tb';

const CardPreview = () => {
      const { recipientName, senderName, title } = useAppSelector((state) => state.giftCardManagement);
      const carouselRef = useRef<any>(null);

      const handleNext = () => {
            carouselRef.current.next();
      };

      const handlePrev = () => {
            carouselRef.current.prev();
      };

      return (
            <div className="relative flex items-center justify-center h-full w-full">
                  <div
                        className="absolute inset-0 bg-center bg-cover bg-no-repeat rounded-lg"
                        style={{
                              backgroundImage: `url('https://s3-alpha-sig.figma.com/img/6abd/3727/594261572678155e84eaf710709ccc9c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A7hcJEzO384wfjvJDyhh0sHUIyNukejgyxcwd-y4GKJsyjp2cZ6aZo5eqlH6ZvR7TLaYpPWn2N31ZBN11rSDS0109yQYHgjj-9-M2pcg6oJFfJkNUH5j5ZKZ0IkLqo4uentanMRTgOf7FvsV9HllzbUf3jMgDj1CNdt~ReQ2lmOGYCDAeY5wQCddOpJficFOMGOmpRbGlFQB5kpt0Q--pZMd1nH6Vf7ajl7qJd-SIzo6~mdMFPJaDODLjSQZSANU1bLpEAOjl1v3PcHi19vvBJDLvtRVoByhUr5GZSKWhMJtiJUwhGRummRzhrG22yCD~IwNInk7wwqp66~m0wrdPg__')`,
                              filter: 'blur(3px)',
                        }}
                  />

                  <div className="relative z-10 w-full flex justify-center">
                        <Carousel
                              style={{ backgroundColor: 'red' }}
                              slidesToShow={2}
                              infinite={false}
                              slidesToScroll={1}
                              ref={carouselRef}
                              dots={false}
                              className="max-w-[700px] "
                        >
                              {[1, 2, 3].map((_, index) => (
                                    <div key={index}>
                                          {index == 0 ? (
                                                <div key={index} className="flex-center">
                                                      <div
                                                            style={{
                                                                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/6abd/3727/594261572678155e84eaf710709ccc9c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A7hcJEzO384wfjvJDyhh0sHUIyNukejgyxcwd-y4GKJsyjp2cZ6aZo5eqlH6ZvR7TLaYpPWn2N31ZBN11rSDS0109yQYHgjj-9-M2pcg6oJFfJkNUH5j5ZKZ0IkLqo4uentanMRTgOf7FvsV9HllzbUf3jMgDj1CNdt~ReQ2lmOGYCDAeY5wQCddOpJficFOMGOmpRbGlFQB5kpt0Q--pZMd1nH6Vf7ajl7qJd-SIzo6~mdMFPJaDODLjSQZSANU1bLpEAOjl1v3PcHi19vvBJDLvtRVoByhUr5GZSKWhMJtiJUwhGRummRzhrG22yCD~IwNInk7wwqp66~m0wrdPg__')`,
                                                                  backgroundPosition: 'center',
                                                                  backgroundSize: 'cover',
                                                            }}
                                                            className=" w-[340px] h-[460px] flex-center  rounded-lg  "
                                                      >
                                                            <div className="text-center space-y-4">
                                                                  <h1 className="text-gray-600">{recipientName || 'Recipient'}</h1>
                                                                  <h2 className="text-2xl font-semibold">{title || 'Happy Birthday'}</h2>
                                                                  <p className="text-gray-500">From</p>
                                                                  <p className="text-gray-600">{senderName || 'Sender Name'}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          ) : (
                                                <div key={index} className="flex-center ">
                                                      <div className="border border-dashed  border-primary   w-[340px] h-[460px] flex-center  rounded-lg bg-white">
                                                            <div className="text-center space-y-4">
                                                                  <Button type="primary" icon={<TbMessageCircle size={18} />}>
                                                                        Submit Your Message
                                                                  </Button>
                                                            </div>
                                                      </div>
                                                </div>
                                          )}
                                    </div>
                              ))}
                        </Carousel>

                        <div className="absolute w-[340px] mx-auto bg-primary bottom-[-60px] left-0 right-0 rounded-full">
                              <div className="flex justify-between p-2  relative">
                                    <button onClick={handlePrev}>
                                          <ChevronLeftIcon className="w-5 h-5" />
                                    </button>
                                    <p className="font-medium"> Cover Page</p>
                                    <button onClick={handleNext}>
                                          <ChevronRightIcon className="w-5 h-5" />
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CardPreview;
