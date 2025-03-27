// PreviewPanel.tsx
import Image from 'next/image';
import Img1 from '@/assets/images/preview-panel/camera.png';
import Img2 from '@/assets/images/preview-panel/gift-sketch.png';
import Img3 from '@/assets/images/preview-panel/gfit-sketch2.png';
import Img4 from '@/assets/images/preview-panel/couple.png';
import { useAppSelector } from '@/redux/hooks';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useGetCategoriesQuery } from '@/redux/features/website/category/categoryApi';
type CardProps = {
      description: string;
      imageUrl?: string;
};
const GridPreviewPanel = () => {
      const { recipientName, occasionType } = useAppSelector((state) => state.giftCardManagement);

      const { data: categoryData } = useGetCategoriesQuery(undefined);
      const category = categoryData?.data?.find((item: any) => item?._id === occasionType || item?.name === occasionType);

      const data = [
            {
                  description:
                        'Create a birthday card with a personalized message and a beautiful design. You can add photos, videos, and GIFs to make it more special.',
                  imageUrl: Img3.src,
            },
            {
                  description:
                        'Make a wedding card with a romantic message and a lovely design. You can add photos, videos, and GIFs to make it more personal.',
                  imageUrl: Img4.src,
            },
            {
                  description:
                        'Design a farewell card with a heartfelt message and a beautiful design. You can add photos, videos, and GIFs to make it more special.',
                  imageUrl: Img1.src,
            },
            {
                  description:
                        'Create an anniversary card with a romantic message and a lovely design. You can add photos, videos, and GIFs to make it more personal.',
                  imageUrl: Img2.src,
            },
      ];

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
      const Card: React.FC<CardProps> = ({ description, imageUrl }) => {
            return (
                  <div className="grid-card-item bg-primary p-3 rounded-lg flex flex-col items-center">
                        <div className="w-full h-[150px] bg-white rounded-lg mb-4 flex items-center justify-center">
                              {imageUrl ? (
                                    <Image
                                          width={500}
                                          height={500}
                                          src={imageUrl}
                                          alt="card image"
                                          className="w-[80%] h-full object-cover rounded-lg"
                                    />
                              ) : (
                                    <div className="text-center text-gray-400">No Image</div>
                              )}
                        </div>

                        <p className="text-xs italic text-gray-500 text-center mt-2">{description}</p>
                  </div>
            );
      };
      return (
            <div className="min-h-full">
                  <div
                        className="absolute  bg-[#00000031] bg-blend-multiply opacity-80 inset-0 bg-center bg-cover bg-no-repeat rounded-lg"
                        style={{
                              backgroundImage: `url('${process.env.NEXT_PUBLIC_SERVER_URL}${category?.occasionImage}')`,
                        }}
                  />
                  <div className="relative p-2 md:p-6">
                        <div className="flex items-center gap-3 mb-4">
                              <div className="bg-primary w-fit p-1 rounded-full">
                                    <Image
                                          className="w-[48px]"
                                          width={500}
                                          height={500}
                                          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${category?.categoryImage}`}
                                          alt="cake"
                                    />
                              </div>
                              <h1 className="text-xl font-bold text-white">{recipientName ? recipientName : 'Recipient Name'}</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                              {data.map((item, index) => (
                                    <Card key={index} description={item.description} imageUrl={item.imageUrl} />
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default GridPreviewPanel;
