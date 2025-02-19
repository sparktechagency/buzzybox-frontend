'use client';
import SubmitMessageForm from '@/components/form/MessageSubmissionForm';
import Modal from '@/components/shared/Modal';
import { useAppSelector } from '@/redux/hooks';
import { TCard } from '@/types';
import { Button, Carousel, Tooltip } from 'antd';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { PiDotsThreeCircleThin } from 'react-icons/pi';
import { TbMessageCircle } from 'react-icons/tb';
import ImageBg from '@/assets/images/create-gift/birthday.jpg';

// Card Components
const CoverCard = ({ recipientName, senderName, title }: { recipientName: string; senderName: string; title: string }) => (
      <div>
            <div className="flex-center p-1">
                  <div
                        style={{
                              backgroundImage: `url('${ImageBg.src}')`,
                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                        }}
                        className="w-[340px] h-[460px] flex-center rounded-lg"
                  >
                        <div className="text-center space-y-4">
                              <h1 className="text-gray-600">{recipientName || 'Recipient'}</h1>
                              <h2 className="text-2xl font-semibold">{title || 'Happy Birthday'}</h2>
                              <p className="text-gray-500">From</p>
                              <p className="text-gray-600">{senderName || 'Sender Name'}</p>
                        </div>
                  </div>
            </div>
      </div>
);

const MessageCard = ({ card, index }: { card: TCard; index: number }) => (
      <div className="p-1">
            <div className="flex-center">
                  <div className="w-[340px] relative h-[460px] flex-center rounded-lg bg-white border border-dashed border-primary">
                        <div className="text-center space-y-1">
                              {card.image ? (
                                    <div className="relative w-[192px] h-[168px]">
                                          <Image
                                                width={500}
                                                height={500}
                                                src={card.image}
                                                alt={`Card image ${index + 1}`}
                                                className="w-full h-full object-contain"
                                          />
                                    </div>
                              ) : null}
                              <h1 className="text-gray-600">{card.message}</h1>
                              <div className="flex absolute bottom-4 right-4 justify-end text-end items-center gap-2">
                                    <p className="text-gray-600 text-end">{card.senderName}</p>
                                    <p>
                                          <Tooltip title="Delete Card">
                                                <PiDotsThreeCircleThin className="cursor-pointer text-red-500 text-2xl" />
                                          </Tooltip>
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
);

const SubmitCard = ({ onClick }: { onClick: () => void }) => (
      <div className="p-1">
            <div className="flex-center">
                  <div className="border border-dashed border-primary w-[340px] h-[460px] flex-center rounded-lg bg-white">
                        <div className="text-center space-y-4">
                              <Button onClick={onClick} type="primary" icon={<TbMessageCircle size={18} />}>
                                    Submit Your Message
                              </Button>
                        </div>
                  </div>
            </div>
      </div>
);

const CarouselNavigation = ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => (
      <div className="absolute w-[340px] mx-auto bg-primary bottom-[-60px] left-0 right-0 rounded-full">
            <div className="flex justify-between p-2 relative">
                  <button onClick={onPrev}>
                        <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <p className="font-medium">Cover Page</p>
                  <button onClick={onNext}>
                        <ChevronRightIcon className="w-5 h-5" />
                  </button>
            </div>
      </div>
);

const CardPreview = () => {
      const { recipientName, senderName, title } = useAppSelector((state) => state.giftCardManagement);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [createdCard, setCreatedCard] = useState([]);
      const carouselRef = useRef<any>(null);

      const handleNext = () => carouselRef.current.next();
      const handlePrev = () => carouselRef.current.prev();

      return (
            <div className="relative flex items-center justify-center h-full w-full">
                  {/* Background */}
                  <div
                        className="absolute  bg-[#0000005b] bg-blend-multiply opacity-60 inset-0 bg-center bg-cover bg-no-repeat rounded-lg"
                        style={{
                              backgroundImage: `url('${ImageBg.src}')`,
                        }}
                  />

                  {/* Main Content */}
                  <div className="relative z-10 w-full flex justify-center">
                        <Carousel
                              style={{ backgroundColor: 'red' }}
                              slidesToShow={2}
                              infinite={false}
                              slidesToScroll={1}
                              ref={carouselRef}
                              dots={false}
                              className="max-w-[700px]"
                        >
                              <CoverCard
                                    recipientName={recipientName as string}
                                    senderName={senderName as string}
                                    title={title as string}
                              />
                              {createdCard.map((card: TCard, index) => (
                                    <MessageCard key={`created-${index}`} card={card} index={index} />
                              ))}
                              <SubmitCard onClick={() => setIsModalOpen(true)} />
                        </Carousel>

                        <CarouselNavigation onPrev={handlePrev} onNext={handleNext} />
                  </div>

                  {/* Modal */}
                  <Modal
                        title="Submit Your Message"
                        visible={isModalOpen}
                        onCancel={() => setIsModalOpen(false)}
                        onOk={() => setIsModalOpen(false)}
                        width={700}
                  >
                        <SubmitMessageForm setCreatedCard={setCreatedCard} setIsModalOpen={setIsModalOpen} />
                  </Modal>
            </div>
      );
};

export default CardPreview;
