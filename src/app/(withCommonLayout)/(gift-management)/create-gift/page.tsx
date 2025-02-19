'use client';
import GridPreviewPanel from '@/components/pages/create-gift/GridPreviewPanel';
import { useAppSelector } from '@/redux/hooks';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
const ConfigurationPanel = dynamic(() => import('@/components/pages/create-gift/ConfigurationPanel'), { ssr: false });
const CardPreviewPanel = dynamic(() => import('@/components/pages/create-gift/CardPreviewPanel'), { ssr: false });

const CreateGiftPage = () => {
      const { boardFormat } = useAppSelector((state) => state.giftCardManagement);
      const boardRef = useRef(null);
      const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            <div className="container relative min-h-[calc(100vh-96px)]">
                  {/* Mobile Menu Button */}
                  <div className="md:hidden absolute top-[2%] left-4 z-50">
                        <Button
                              type="primary"
                              icon={<MenuOutlined />}
                              onClick={() => setIsDrawerOpen(true)}
                              className="flex items-center"
                        ></Button>
                  </div>

                  <div className="flex flex-col md:flex-row h-full justify-center gap-6 py-20">
                        <div className="hidden md:block w-full md:w-[35%]">
                              <ConfigurationPanel />
                        </div>

                        <Drawer
                              title="Configuration"
                              placement="left"
                              onClose={() => setIsDrawerOpen(false)}
                              open={isDrawerOpen}
                              width="100%"
                              className="md:hidden"
                        >
                              <ConfigurationPanel />
                        </Drawer>

                        <div ref={boardRef} className="w-full md:w-[65%] relative">
                              {boardFormat === 'card' ? <CardPreviewPanel /> : <GridPreviewPanel />}
                        </div>
                  </div>
            </div>
      );
};

export default CreateGiftPage;
