import PageHeader from '@/components/shared/PageHeader';
import { getAboutData } from '@/services/about';
import Image from 'next/image';

type TSection = {
      id: number;
      title: string;
      description: string;
      aboutImage: string;
};
const AboutUsPage = async () => {
      // const aboutDat = [
      //       {
      //             id: 1,
      //             title: 'About Us',
      //             description: `At BuzzyBox, we believe that every occasion deserves to be special. Whether it’s a birthday, farewell, wedding, or just a simple "thank you," we’re here to help you create unforgettable memories.

      //             BuzzyBox is a digital platform designed to make sending personalized greeting cards and group gifts effortless, fun, and meaningful. With our easy-to-use tools, you can create beautiful digital cards, invite friends and family to contribute, and even add a group gift collection—all in one place.`,
      //             image: Img1,
      //       },
      //       {
      //             id: 2,
      //             title: 'Our Mission',
      //             description: `We believe that expressing appreciation, celebrating milestones, and sending heartfelt messages should be fun, seamless, and accessible to everyone—anytime, anywhere. Whether it’s a birthday, farewell, or just a simple thank-you, our platform helps you connect with loved ones, teammates, and friends in a truly special way.

      //             By offering customizable eCards, group message collaboration, and seamless gift collection, we aim to bring people together and make every moment unforgettable—all while reducing waste and making digital greetings the new norm.`,
      //             image: Img2,
      //       },
      //       {
      //             id: 3,
      //             title: 'Our Vision',
      //             description: `We envision a future where people worldwide can celebrate effortlessly through interactive, digital-first experiences. As the world moves toward sustainability, we aim to replace traditional paper cards with beautifully designed digital alternatives, reducing environmental waste while enhancing convenience.

      //             Our platform is built to make gifting smarter, allowing surprises to feel even more meaningful without the hassle of logistics.`,
      //             image: Img3,
      //       },
      // ];

      const { data: aboutData } = await getAboutData();

      return (
            <div>
                  <PageHeader title="About Us" />
                  <section className="py-20">
                        <div className="container mx-auto space-y-16">
                              {aboutData?.map((section: TSection, index: number) => (
                                    <div key={section.id} className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}>
                                          <div className={`${index % 2 === 0 ? 'md:order-last' : ''}`}>
                                                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                                                <p className="text-gray-600 mt-4 text-sm md:text-base whitespace-pre-line">
                                                      {section.description}
                                                </p>
                                          </div>
                                          <div className={`flex ${index % 2 === 0 ? '' : 'justify-end'}`}>
                                                <Image
                                                      src={`${process.env.NEXT_PUBLIC_SERVER_URL}${section.aboutImage}`}
                                                      width={500}
                                                      height={550}
                                                      alt={section.title}
                                                      className="w-[588px] h-full rounded-lg"
                                                />
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </section>
            </div>
      );
};

export default AboutUsPage;
