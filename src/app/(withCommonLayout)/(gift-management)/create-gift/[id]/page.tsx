'use client';
import Preview from '@/components/pages/create-gift/single-gift/Preview';
import Sidebar from '@/components/pages/create-gift/single-gift/Sidebar';
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { useParams } from 'next/navigation';
import { useGetSingleGiftCardQuery } from '@/redux/features/website/gift-card/giftCardApi';

const CreateGiftPage = () => {
      const params = useParams();
      const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

      const { data } = useGetSingleGiftCardQuery({ id });
      const giftCard = data?.data;

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
                              <Sidebar id={giftCard?._id} uniqueId={giftCard?.uniqueId} />
                        </div>
                        <Drawer
                              title="Configuration"
                              placement="left"
                              onClose={() => setIsDrawerOpen(false)}
                              open={isDrawerOpen}
                              width="100%"
                              className="md:hidden"
                        >
                              <Sidebar id={giftCard?._id} uniqueId={giftCard?.uniqueId} />
                        </Drawer>
                        <div className="md:w-[65%] w-full max-w-[792px] min-h-[734px] relative">
                              <Preview id={id} />
                        </div>
                  </div>
            </div>
      );
};

export default CreateGiftPage;
