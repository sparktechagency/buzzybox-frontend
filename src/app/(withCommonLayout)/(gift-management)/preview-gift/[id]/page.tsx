'use client';
import { useGetSingleGiftCardQuery } from '@/redux/features/website/gift-card/giftCardApi';
import { TCard } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

// Sub Components
const MessageCard = ({ card }: { card: TCard }) => {
      console.log(card?.image);

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
                  <p className="text-xs italic text-gray-500 text-center mt-2">{card?.message}</p>
                  <div className="flex gap-2 w-full mt-1 justify-end text-end">
                        <p className="text-gray-600 text-end">{card?.senderName}</p>
                  </div>
            </div>
      );
};

// const HeaderSection = ({ recipientName }: { recipientName: string }) => (
//       <div className="flex items-center gap-3 mb-4">
//             <div className="bg-primary w-fit p-1 rounded-full">
//                   <Image className="w-[48px]" width={500} height={500} src={Cake} alt="cake" />
//             </div>
//             <h1 className="text-xl font-bold text-white">{recipientName || 'Recipient Name'}</h1>
//       </div>
// );

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

      const { data } = useGetSingleGiftCardQuery({ id });
      const gift = data?.data;
      console.log(gift);

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
                        {/* <HeaderSection recipientName={gift?.coverPage?.recipientName as string} /> */}

                        <div className="grid grid-cols-4 gap-5 mt-5">
                              {gift?.pages?.map((item: TCard, index: number) => (
                                    <MessageCard key={index} card={item} />
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default PreviewGiftPage;
