'use client';
import { useGetSingleGiftCardQuery } from '@/redux/features/website/gift-card/giftCardApi';
import { useGetSinglePaymentQuery, useWithdrawFundsMutation } from '@/redux/features/website/payment/paymentApi';
import { TCard, TGift } from '@/types';
import { useGSAP } from '@gsap/react';
import { Button, Skeleton } from 'antd';
import gsap from 'gsap';
import Image from 'next/image';
import toast from 'react-hot-toast';

// Sub Components
const MessageCard = ({ card }: { card: TCard }) => {
      return (
            <div className="grid-card-item relative bg-primary p-3 rounded-lg flex flex-col items-center">
                  <div className="w-full max-h-[500px] overflow-hidden bg-white rounded-lg mb-4 flex items-center justify-center">
                        {card?.image ? (
                              <div className="relative">
                                    <Image
                                          width={500}
                                          height={800}
                                          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${card?.image}`}
                                          alt="Card image"
                                          className="w-full h-full object-cover"
                                    />
                              </div>
                        ) : null}
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 w-full py-2 flex-1 mt-1">
                        <p className="text-sm italic text-gray-500 text-center grid items-center flex-1">{card?.message}</p>
                        <p className="text-sm text-gray-600">- {card?.senderName}</p>
                  </div>
            </div>
      );
};

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
                              className="w-full h-[460px] flex-center rounded-lg"
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

const BackgroundOverlay = ({ bgImage }: { bgImage: string }) => (
      <div
            className="absolute bg-[#00000031] bg-blend-multiply opacity-80 inset-0 bg-center bg-cover bg-no-repeat rounded-lg"
            style={{
                  backgroundImage: `url('${process.env.NEXT_PUBLIC_SERVER_URL}${bgImage}')`,
            }}
      />
);

const PreviewGiftPage = ({ params }: { params: { id: string } }) => {
      const { id } = params;

      const { data, isLoading } = useGetSingleGiftCardQuery({ id });
      const gift = data?.data;
      const { data: paymentData } = useGetSinglePaymentQuery({ id: gift?._id });
      const payment = paymentData?.data;

      const [withdraw] = useWithdrawFundsMutation();

      // handle withdraw
      const handleWithdraw = async () => {
            try {
                  toast.loading('Pending...', { id: 'withdraw' });
                  const res = await withdraw({ payload: { giftCardId: gift?._id } }).unwrap();
                  if (res.success) {
                        toast.success('Claimed successfully', { id: 'withdraw' });
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to withdraw', { id: 'withdraw' });
                  console.log(error);
            }
      };

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
            <div className="min-h-screen relative">
                  <BackgroundOverlay bgImage={gift?.image} />

                  <div className="relative p-2 md:p-6">
                        <div className="grid grid-cols-4 gap-5 mt-5">
                              <CoverCard gift={gift} isLoading={isLoading} />
                              {gift?.pages?.map((item: TCard, index: number) => (
                                    <MessageCard key={index} card={item} />
                              ))}
                        </div>
                        <div className="flex flex-col items-center gap-4 mt-16">
                              <h1 className="text-2xl font-medium">
                                    You have <span className="font-semibold">${payment?.totalContribution}</span> gift amount
                              </h1>
                              <Button onClick={handleWithdraw} type="primary" disabled={payment?.hasWithdrawn}>
                                    {payment?.hasWithdrawn ? 'Already Claimed' : 'Withdraw Now'}
                              </Button>
                        </div>
                  </div>
            </div>
      );
};

export default PreviewGiftPage;
