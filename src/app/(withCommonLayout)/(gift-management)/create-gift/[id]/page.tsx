'use client';
import Preview from '@/components/pages/create-gift/single-gift/Preview';
import Sidebar from '@/components/pages/create-gift/single-gift/Sidebar';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

const CreateGiftPage = () => {
      //   useGSAP(() => {
      //         gsap.from(boardRef.current, {
      //               x: 100,
      //               opacity: 0,
      //               duration: 0.5,
      //               ease: 'power2.inOut',
      //               yoyo: true,
      //         });
      //   }, [boardFormat]);
      return (
            <div className="container min-h-[calc(100vh-96px)]  ">
                  <div className="flex h-full justify-center gap-6 py-20">
                        <div className="w-[35%]">
                              <Sidebar />
                        </div>
                        <div className="w-[65%] relative">
                              <Preview />
                        </div>
                  </div>
            </div>
      );
};

export default CreateGiftPage;
