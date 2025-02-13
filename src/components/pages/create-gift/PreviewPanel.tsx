'use client';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import BgImage from '@/assets/images/preview-panel/594261572678155e84eaf710709ccc9c.png';

const PreviewPanel = () => {
      const [currentPage, setCurrentPage] = useState(0);
      const bookRef = useRef(null);
      const pageRefs = [useRef(null), useRef(null), useRef(null)];

      const pages = [
            {
                  front: {
                        title: 'My Special Book',
                        content: 'Click to Open ',
                        bgImage: BgImage.src,
                  },
                  back: {
                        title: 'Page 1',
                        content: 'This is the first page',
                        bg: 'bg-white',
                  },
            },
            {
                  front: {
                        title: 'Page 2',
                        content: 'Welcome to the second page',
                        bg: 'bg-white',
                  },
                  back: {
                        title: 'Page 3',
                        content: "Here's the third page",
                        bg: 'bg-white',
                  },
            },
            {
                  front: {
                        title: 'Page 4',
                        content: 'Almost at the end',
                        bg: 'bg-white',
                  },
                  back: {
                        title: 'The End',
                        content: 'Thanks for reading! ',
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
                  ease: 'power2.inOut',
                  onComplete: () => {
                        setCurrentPage(currentPage > pageIndex ? pageIndex : pageIndex + 1);
                  },
            });
      };

      console.log(currentPage, pages.length);

      return (
            <div className="flex justify-center h-full items-center bg-gray-100">
                  <div className="relative w-[300px] h-[400px] book-container">
                        <div
                              ref={bookRef}
                              className="relative w-full h-full"
                              style={{
                                    transformStyle: 'preserve-3d',
                                    left: currentPage == 0 ? '0px' : '150px',
                                    transition: 'left 0.5s ease-in-out',
                              }}
                        >
                              {pages.map((page, index) => (
                                    <div
                                          key={index}
                                          ref={pageRefs[index]}
                                          className={`page ${index === currentPage ? 'z-30' : index === currentPage + 1 ? 'z-20' : 'z-10'}`}
                                    >
                                          <div
                                                style={{
                                                      backgroundImage: `url(${page.front.bgImage})`,
                                                }}
                                                className={`page-front rounded-lg custom-shadow ${page.front.bg} 
                  ${index === 0 ? 'p-8' : 'p-6'} flex flex-col items-center justify-center`}
                                          >
                                                <div className="text-center">
                                                      <h2 className="text-2xl font-bold mb-4">{page.front.title}</h2>
                                                      <div className="space-y-4">
                                                            <p className="text-lg">{page.front.content}</p>
                                                            {index === 0 && (
                                                                  <div className="mt-8">
                                                                        <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto flex items-center justify-center mb-4">
                                                                              <span className="text-4xl">⭐</span>
                                                                        </div>
                                                                  </div>
                                                            )}
                                                      </div>
                                                </div>
                                                <div className="book-shadow"></div>
                                          </div>

                                          <div
                                                className={`page-back rounded-lg shadow-lg ${page.back.bg} p-6 
                  flex flex-col items-center justify-center`}
                                          >
                                                <div className="text-center">
                                                      <h2 className="text-2xl font-bold mb-4">{page.back.title}</h2>
                                                      <p className="text-lg">{page.back.content}</p>
                                                </div>
                                                <div className="book-shadow"></div>
                                          </div>
                                    </div>
                              ))}
                        </div>

                        <div className="absolute bottom-[-60px] left-0 right-0 flex justify-center space-x-4">
                              <button
                                    onClick={() => turnPage(currentPage - 1)}
                                    disabled={currentPage <= 0}
                                    className={`w-[120px] h-[40px] rounded-lg flex items-center justify-center gap-2 ${
                                          currentPage <= 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#FFB800] hover:bg-[#ffa600] text-black'
                                    } transition-colors`}
                              >
                                    <ChevronLeftIcon className="w-5 h-5" />
                              </button>
                              <button
                                    onClick={() => turnPage(currentPage)}
                                    disabled={currentPage >= pages.length}
                                    className={`w-[120px] h-[40px] rounded-lg flex items-center justify-center gap-2 ${
                                          currentPage >= pages.length
                                                ? 'bg-gray-300 cursor-not-allowed'
                                                : 'bg-[#FFB800] hover:bg-[#ffa600] text-black'
                                    } transition-colors`}
                              >
                                    <ChevronRightIcon className="w-5 h-5" />
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default PreviewPanel;
