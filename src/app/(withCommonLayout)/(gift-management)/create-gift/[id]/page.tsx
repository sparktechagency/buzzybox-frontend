'use client';
import Preview from '@/components/pages/create-gift/single-gift/Preview';
import Sidebar from '@/components/pages/create-gift/single-gift/Sidebar';
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';

const CreateGiftPage = () => {
      const [isDrawerOpen, setIsDrawerOpen] = useState(false);
      return (
            <div className="container relative min-h-[calc(100vh-96px)]">
                  <div className="md:hidden absolute top-[2%] left-4 z-50">
                        <Button
                              type="primary"
                              icon={<MenuOutlined />}
                              onClick={() => setIsDrawerOpen(true)}
                              className="flex items-center"
                        ></Button>
                  </div>
                  <div className="flex h-full justify-center gap-6 py-20">
                        <div className="w-[35%] hidden md:block ">
                              <Sidebar />
                        </div>
                        <Drawer
                              title="Configuration"
                              placement="left"
                              onClose={() => setIsDrawerOpen(false)}
                              open={isDrawerOpen}
                              width="100%"
                              className="md:hidden"
                        >
                              <Sidebar />
                        </Drawer>
                        <div className="md:w-[65%] w-full max-w-[792px] min-h-[734px] relative">
                              <Preview />
                        </div>
                  </div>
            </div>
      );
};

export default CreateGiftPage;
