'use client';
import Preview from '@/components/pages/create-gift/single-gift/Preview';
import Sidebar from '@/components/pages/create-gift/single-gift/Sidebar';
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { useParams } from 'next/navigation';
import { useGetSingleGiftCardQuery } from '@/redux/features/website/gift-card/giftCardApi';
import { CalendarDays, Gift, MessageSquareMore } from 'lucide-react';
import { useGetSinglePaymentQuery } from '@/redux/features/website/payment/paymentApi';

const CreateGiftPage = () => {
      const params = useParams();
      const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

      const { data } = useGetSingleGiftCardQuery({ id });
      const gift = data?.data;
      const { data: paymentData } = useGetSinglePaymentQuery({ id: gift?._id });
      const payment = paymentData?.data;

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
                  <div className="flex h-full justify-center gap-6 pb-20 pt-6">
                        <div className="w-[35%] hidden md:block">
                              <Sidebar gift={gift} />
                        </div>
                        <Drawer
                              title="Configuration"
                              placement="left"
                              onClose={() => setIsDrawerOpen(false)}
                              open={isDrawerOpen}
                              width="100%"
                              className="md:hidden"
                        >
                              <Sidebar gift={gift} />
                        </Drawer>
                        <div className="md:w-[65%] w-full max-w-[792px] flex flex-col">
                              <div className="flex items-center justify-center gap-8 py-4 text-gray-600">
                                    <h3 className="flex items-center gap-2">
                                          <MessageSquareMore size={20} />
                                          <span className="font-semibold">{gift?.pages?.length || 0}</span>
                                    </h3>
                                    <h3 className="flex items-center gap-2">
                                          <Gift size={20} />
                                          <span className="font-semibold">x{payment?.contributors?.length || 0}</span>
                                    </h3>
                                    <h3 className="flex items-center gap-2">
                                          <CalendarDays size={20} />
                                          Scheduled for
                                          <span className="font-semibold">
                                                {new Date(gift?.receiverInfo?.emailScheduleDate || new Date()).toDateString()}
                                          </span>
                                    </h3>
                              </div>
                              {/* card preview */}
                              <div className="min-h-[734px] flex-1">
                                    <Preview id={id} />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CreateGiftPage;
