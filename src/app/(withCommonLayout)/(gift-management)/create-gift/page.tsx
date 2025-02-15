'use client';
import GridPreviewPanel from '@/components/pages/create-gift/GridPreviewPanel';
import { useAppSelector } from '@/redux/hooks';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
const ConfigurationPanel = dynamic(() => import('@/components/pages/create-gift/ConfigurationPanel'), { ssr: false });
const CardPreviewPanel = dynamic(() => import('@/components/pages/create-gift/CardPreviewPanel'), { ssr: false });

const CreateGiftPage = () => {
      const { boardFormat } = useAppSelector((state) => state.giftCardManagement);
      const boardRef = useRef(null);

      useGSAP(() => {
            gsap.from(boardRef.current, {
                  x: 100,
                  opacity: 0,
                  duration: 0.5,
                  ease: 'power2.inOut',
                  yoyo: true,
            });
      }, [boardFormat]);
      return (
            <div className="container min-h-[calc(100vh-96px)]  ">
                  <div className="flex h-full justify-center gap-6 py-20">
                        <div className="w-[35%]">
                              <ConfigurationPanel />
                        </div>
                        <div ref={boardRef} className="w-[65%] relative">
                              {boardFormat === 'card' ? <CardPreviewPanel /> : <GridPreviewPanel />}
                        </div>
                  </div>
            </div>
      );
};

export default CreateGiftPage;
