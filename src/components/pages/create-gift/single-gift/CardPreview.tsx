'use client';
import SubmitMessageForm from '@/components/form/MessageSubmissionForm';
import Modal from '@/components/shared/Modal';
import { useRemovePageMutation } from '@/redux/features/website/gift-card/giftCardApi';
import { TCard, TGift } from '@/types';
import { Button, Carousel, Skeleton, Tooltip } from 'antd';
import { ChevronLeftIcon, ChevronRightIcon, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { TbMessageCircle } from 'react-icons/tb';

// Card Components
const CoverCard = ({ gift, isLoading }: { gift: TGift; isLoading: boolean }) => {
      return (
            <div>
                  <div className="flex-center p-1">
                        <div
                              style={{
                                    backgroundColor: 'white',
                                    backgroundImage: `url('${process.env.NEXT_PUBLIC_SERVER_URL}${gift?.image}')`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                              }}
                              className="w-[340px] h-[460px] flex-center rounded-lg"
                        >
                              {isLoading ? (
                                    <Skeleton />
                              ) : (
                                    <div className="text-center space-y-4">
                                          <h1 className="text-gray-600">{gift?.coverPage?.recipientName || 'Recipient'}</h1>
                                          <h2 className="text-2xl font-semibold">{gift?.coverPage?.title || 'Happy Birthday'}</h2>
                                          <p className="text-gray-500">From</p>
                                          <p className="text-gray-600">{gift?.coverPage?.senderName || 'Sender Name'}</p>
                                    </div>
                              )}
                        </div>
                  </div>
            </div>
      );
};

const MessageCard = ({ card, index, gift }: { card: TCard; index: number; gift: TGift }) => {
      const [removePage] = useRemovePageMutation();

      const handleDelete = async () => {
            toast.loading('Deleting...', { id: 'deleteCardToast' });
            try {
                  const res = await removePage({ id: gift?._id, payload: { pageId: card?._id } }).unwrap();
                  if (res.success) {
                        toast.success(res.message || 'Card deleted successfully', { id: 'deleteCardToast' });
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to delete card', { id: 'deleteCardToast' });
                  console.log(error?.data);
            }
      };

      return (
            <div className="p-1">
                  <div className="flex-center">
                        <div className="w-[340px] relative h-[460px] flex-center rounded-lg bg-white border border-dashed border-primary">
                              <div className="text-center space-y-1">
                                    {card?.image ? (
                                          <div className="relative w-[192px] h-[168px]">
                                                <Image
                                                      width={500}
                                                      height={500}
                                                      src={`${process.env.NEXT_PUBLIC_SERVER_URL}${card?.image}`}
                                                      alt={`Card image ${index + 1}`}
                                                      className="w-full h-full object-contain"
                                                />
                                          </div>
                                    ) : null}
                                    <h1 className="text-gray-600">{card?.message}</h1>
                                    <div className="flex absolute bottom-4 right-4 justify-end text-end items-center gap-2">
                                          <p className="text-gray-600 text-end">{card?.senderName}</p>
                                          <p>
                                                <Tooltip title="Delete Card">
                                                      <Trash2 onClick={handleDelete} className="cursor-pointer text-red-500 size-5" />
                                                </Tooltip>
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

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

const CardPreview = ({ gift, isLoading }: { gift: TGift; isLoading: boolean; category: any }) => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const carouselRef = useRef<any>(null);

      const handleNext = () => carouselRef.current.next();
      const handlePrev = () => carouselRef.current.prev();

      return (
            <div className="relative flex items-center justify-center h-full w-full overflow-hidden">
                  {/* Background */}
                  <div
                        className="absolute  bg-[#0000005b] bg-blend-multiply opacity-60 inset-0 bg-center bg-cover bg-no-repeat rounded-lg"
                        style={{
                              backgroundImage: `url('${process.env.NEXT_PUBLIC_SERVER_URL}${gift?.image}')`,
                        }}
                  />

                  {/* Main Content */}
                  <div className="relative z-10 w-full flex justify-center">
                        <Carousel
                              style={{ backgroundColor: 'red' }}
                              slidesToShow={2}
                              responsive={[
                                    {
                                          breakpoint: 768,
                                          settings: {
                                                slidesToShow: 1,
                                                infinite: true,
                                                slidesToScroll: 1,
                                                dots: false,
                                          },
                                    },
                                    {
                                          breakpoint: 1024,
                                          settings: {
                                                slidesToShow: 2,
                                                infinite: false,
                                                slidesToScroll: 1,
                                                dots: false,
                                          },
                                    },
                              ]}
                              infinite={false}
                              slidesToScroll={1}
                              ref={carouselRef}
                              dots={false}
                              className="max-w-[700px]"
                        >
                              <CoverCard gift={gift} isLoading={isLoading} />
                              {gift?.pages?.map((card: TCard, index) => (
                                    <MessageCard key={`created-${index}`} card={card} index={index} gift={gift} />
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
                        <SubmitMessageForm setIsModalOpen={setIsModalOpen} id={gift?._id} />
                  </Modal>
            </div>
      );
};

export default CardPreview;
