'use client';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import BgImg1 from '@/assets/images/preview-panel/594261572678155e84eaf710709ccc9c.png';
import PeopleSketch from '@/assets/images/preview-panel/people-sketch.svg';
import GiftSketch from '@/assets/images/preview-panel/gift-sketch.png';
// import BgImg2 from '@/assets/images/preview-panel/1.jpg';
// import BgImg3 from '@/assets/images/preview-panel/2.jpg';

import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';

const PreviewPanel = () => {
      const { title, recipientName, senderName } = useAppSelector((state) => state.giftCardManagement);
      const [currentPage, setCurrentPage] = useState(0);
      const bookRef = useRef(null);
      const pageRefs = [useRef(null), useRef(null), useRef(null)];

      const pages = [
            {
                  front: {
                        recipientName: recipientName || 'Recipient Name',
                        title: title || 'Buzzybox Title',
                        senderName: senderName || 'Sender Name',
                        bgImage: BgImg1.src,
                  },
                  back: {
                        title: (
                              <div>
                                    <Image className="size-20 mx-auto" src={PeopleSketch} alt="People Sketch" width={100} height={100} />
                              </div>
                        ),
                        content: (
                              <div>
                                    <p className="text-xs italic">This is some example message text.</p>
                              </div>
                        ),
                        bgImage: '',
                        bg: 'bg-white',
                  },
            },

            {
                  front: {
                        title: (
                              <div>
                                    <Image className="size-20 mx-auto" src={PeopleSketch} alt="People Sketch" width={100} height={100} />
                              </div>
                        ),
                        content: (
                              <div>
                                    <p className="text-xs italic">This is some example message text.</p>
                              </div>
                        ),
                        bg: 'bg-white',
                        bgImage: '',
                  },
                  back: {
                        title: (
                              <div>
                                    <Image className="size-32 mx-auto" src={GiftSketch.src} alt="People Sketch" width={400} height={400} />
                              </div>
                        ),
                        content: `
                        Created with
                        Buzzybox
                        `,
                        bg: 'bg-white',
                  },
            },
      ];

      const turnPage = (pageIndex: number) => {
            if (pageIndex < 0 || pageIndex >= pages.length) return;

            const page = pageRefs[pageIndex].current;
            if (!page) return;

            gsap.to(page, {
                  rotateY: currentPage > pageIndex ? 0 : -180,
                  duration: 0.1,
                  ease: 'expo.inOut',
                  onComplete: () => {
                        setCurrentPage(currentPage > pageIndex ? pageIndex : pageIndex + 1);
                  },
            });
      };

      console.log(currentPage, pages.length);

      return (
            <div className="flex justify-center h-full items-center ">
                  <div
                        className="absolute inset-0 bg-cover bg-center z-0 rounded"
                        style={{
                              backgroundImage: `url('https://s3-alpha-sig.figma.com/img/6abd/3727/594261572678155e84eaf710709ccc9c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A7hcJEzO384wfjvJDyhh0sHUIyNukejgyxcwd-y4GKJsyjp2cZ6aZo5eqlH6ZvR7TLaYpPWn2N31ZBN11rSDS0109yQYHgjj-9-M2pcg6oJFfJkNUH5j5ZKZ0IkLqo4uentanMRTgOf7FvsV9HllzbUf3jMgDj1CNdt~ReQ2lmOGYCDAeY5wQCddOpJficFOMGOmpRbGlFQB5kpt0Q--pZMd1nH6Vf7ajl7qJd-SIzo6~mdMFPJaDODLjSQZSANU1bLpEAOjl1v3PcHi19vvBJDLvtRVoByhUr5GZSKWhMJtiJUwhGRummRzhrG22yCD~IwNInk7wwqp66~m0wrdPg__')`,
                              filter: 'blur(8px)',
                        }}
                  ></div>
                  <div className="">
                        <div className="relative w-[340px] h-[460px] book-container">
                              <div
                                    ref={bookRef}
                                    className="relative w-full h-full"
                                    style={{
                                          transformStyle: 'preserve-3d',
                                          left:
                                                currentPage === 0
                                                      ? '0px'
                                                      : currentPage === 1
                                                      ? '170px'
                                                      : currentPage === pages.length - 1
                                                      ? '0px'
                                                      : '340px',
                                          transition: 'left 0.8s ease-in-out',
                                    }}
                              >
                                    {pages.map((page, index) => (
                                          <div
                                                key={index}
                                                ref={pageRefs[index]}
                                                className={`page ${
                                                      index === currentPage ? 'z-30' : index === currentPage + 1 ? 'z-20' : 'z-10'
                                                }`}
                                          >
                                                <div
                                                      style={{
                                                            backgroundImage: `url(${page.front.bgImage})`,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center',
                                                            backgroundRepeat: 'no-repeat  ',
                                                      }}
                                                      className={`page-front w-full shadow-sm  overflow-hidden rounded-lg  ms-0.5 ${
                                                            page.front.bg
                                                      } 
                  ${index === 0 ? 'p-8' : 'p-6'} flex flex-col items-center justify-center`}
                                                >
                                                      <div className="text-center space-y-4">
                                                            <h1 className="text-gray-600">{page.front.recipientName}</h1>
                                                            <h2 className="text-2xl font-semibold mb-4">{page.front.title}</h2>
                                                            <p className="text-gray-500">{page.front.content}</p>
                                                            <p className="text-gray-500">{page.front.senderName ? 'From' : ''}</p>
                                                            <p className="text-gray-600">{page.front.senderName}</p>
                                                      </div>
                                                      <div className="book-shadow rounded-lg"></div>
                                                </div>

                                                <div
                                                      style={{
                                                            backgroundImage: `url(${page.back.bgImage})`,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center',
                                                            backgroundRepeat: 'no-repeat  ',
                                                      }}
                                                      className={`page-back  rounded-lg shadow-sm ${page.back.bg} p-6 
                  flex flex-col items-center justify-center`}
                                                >
                                                      <div className="text-center">
                                                            <h2 className="text-xl font-semibold text-gray-600 mb-4">{page.back.title}</h2>

                                                            <p className="text-gray-600">{page.back.content}</p>
                                                      </div>
                                                      <div className="book-shadow rounded-lg"></div>
                                                </div>
                                          </div>
                                    ))}
                              </div>

                              <div className="absolute bg-primary bottom-[-60px] left-0 right-0 rounded-full">
                                    <div className="flex justify-between p-2  relative">
                                          <button
                                                onClick={() => turnPage(currentPage - 1)}
                                                disabled={currentPage <= 0}
                                                className={` ${currentPage <= 0 ? 'text-gray-500' : ''} transition-colors`}
                                          >
                                                <ChevronLeftIcon className="w-5 h-5" />
                                          </button>
                                          <p className="font-medium"> Cover Page</p>
                                          <button
                                                onClick={() => turnPage(currentPage)}
                                                disabled={currentPage >= pages.length}
                                                className={` ${currentPage >= pages.length ? 'text-gray-500' : ''} transition-colors`}
                                          >
                                                <ChevronRightIcon className="w-5 h-5" />
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default PreviewPanel;
