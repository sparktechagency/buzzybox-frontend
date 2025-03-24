'use client';
import Cake from '@/assets/images/preview-panel/cake.png';
import SubmitMessageForm from '@/components/form/MessageSubmissionForm';
import { TCard, TGift } from '@/types';
import { Button, Tooltip } from 'antd';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useState } from 'react';
import { PiDotsThreeCircleThin } from 'react-icons/pi';
import { TbMessageCircle } from 'react-icons/tb';
import Modal from '@/components/shared/Modal';

// Sub Components
const MessageCard = ({ message, image, senderName }: { message: string; image?: string; senderName: string }) => (
      <div className="grid-card-item relative bg-primary p-3 rounded-lg flex flex-col items-center">
            <div className="w-full h-[200px] bg-white rounded-lg mb-4 flex items-center justify-center">
                  {image ? (
                        <div className="relative w-[150px]">
                              <Image width={500} height={500} src={image} alt="Card image" className="w-full h-full object-contain" />
                        </div>
                  ) : null}
            </div>
            <p className="text-xs italic text-gray-500 text-center mt-2">{message}</p>
            <div className="flex gap-2 w-full mt-1 justify-end text-end">
                  <p className="text-gray-600 text-end">{senderName}</p>
                  <p>
                        <Tooltip title="Delete Card">
                              <PiDotsThreeCircleThin className="cursor-pointer text-red-500 text-2xl" />
                        </Tooltip>
                  </p>
            </div>
      </div>
);

const SubmitButton = ({ onClick }: { onClick: () => void }) => (
      <div className="p-1">
            <Button onClick={onClick} type="primary" icon={<TbMessageCircle size={18} />}>
                  Submit Your Message
            </Button>
      </div>
);

const HeaderSection = ({ recipientName }: { recipientName: string }) => (
      <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary w-fit p-1 rounded-full">
                  <Image className="w-[48px]" width={500} height={500} src={Cake} alt="cake" />
            </div>
            <h1 className="text-xl font-bold text-white">{recipientName || 'Recipient Name'}</h1>
      </div>
);

const BackgroundOverlay = ({ bgImage }: { bgImage: string }) => (
      <div
            className="absolute bg-[#00000031] bg-blend-multiply opacity-80 inset-0 bg-center bg-cover bg-no-repeat rounded-lg"
            style={{
                  backgroundImage: `url('${process.env.NEXT_PUBLIC_SERVER_URL}${bgImage}')`,
            }}
      />
);

const GridPreview = ({ gift }: { gift: TGift; isLoading?: boolean; category: any }) => {
      const [isModalOpen, setIsModalOpen] = useState(false);

      // Animation
      useGSAP(() => {
            gsap.from('.grid-card-item', {
                  duration: 1,
                  ease: 'power2.inOut',
                  y: 50,
                  opacity: 0,
                  stagger: {
                        amount: 0.2,
                        from: 'start',
                  },
            });
      }, []);

      return (
            <div className="min-h-full">
                  <BackgroundOverlay bgImage={gift?.image} />

                  <div className="relative p-2 md:p-6">
                        <HeaderSection recipientName={gift?.coverPage?.recipientName as string} />
                        <SubmitButton onClick={() => setIsModalOpen(true)} />

                        <div className="grid grid-cols-2 gap-5 mt-5">
                              {gift?.pages?.map((item: TCard, index) => (
                                    <MessageCard key={index} message={item?.message} image={item?.image} senderName={item?.senderName} />
                              ))}
                        </div>
                  </div>

                  <Modal
                        title="Submit Your Message"
                        visible={isModalOpen}
                        onCancel={() => setIsModalOpen(false)}
                        onOk={() => setIsModalOpen(false)}
                        width={700}
                  >
                        <SubmitMessageForm setIsModalOpen={setIsModalOpen} id={gift?._id} />
                  </Modal>
            </div>
      );
};

export default GridPreview;
