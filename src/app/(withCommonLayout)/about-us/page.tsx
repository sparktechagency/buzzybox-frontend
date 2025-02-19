'use client';

import PageHeader from '@/components/shared/PageHeader';
import Img1 from '@/assets/images/about/1.png';
import Img2 from '@/assets/images/about/2.png';
import Img3 from '@/assets/images/about/3.png';
import Image from 'next/image';

const AboutUsPage = () => {
      const aboutData = [
            {
                  id: 1,
                  title: 'About Us',
                  description: `At BuzzyBox, we believe that every occasion deserves to be special. Whether it’s a birthday, farewell, wedding, or just a simple "thank you," we’re here to help you create unforgettable memories.
          
          BuzzyBox is a digital platform designed to make sending personalized greeting cards and group gifts effortless, fun, and meaningful. With our easy-to-use tools, you can create beautiful digital cards, invite friends and family to contribute, and even add a group gift collection—all in one place.`,
                  image: Img1,
                  reverse: false,
                  bgColor: 'white',
            },
            {
                  id: 2,
                  title: 'Our Mission',
                  description: `We believe that expressing appreciation, celebrating milestones, and sending heartfelt messages should be fun, seamless, and accessible to everyone—anytime, anywhere. Whether it’s a birthday, farewell, or just a simple thank-you, our platform helps you connect with loved ones, teammates, and friends in a truly special way.
          
          By offering customizable eCards, group message collaboration, and seamless gift collection, we aim to bring people together and make every moment unforgettable—all while reducing waste and making digital greetings the new norm.`,
                  image: Img2,
                  reverse: true,
                  bgColor: '#FEF9EB',
            },
            {
                  id: 3,
                  title: 'Our Vision',
                  description: `We envision a future where people worldwide can celebrate effortlessly through interactive, digital-first experiences. As the world moves toward sustainability, we aim to replace traditional paper cards with beautifully designed digital alternatives, reducing environmental waste while enhancing convenience.
          
          Our platform is built to make gifting smarter, allowing surprises to feel even more meaningful without the hassle of logistics.`,
                  image: Img3,
                  reverse: false,
                  bgColor: 'white',
            },
      ];

      return (
            <div>
                  <PageHeader title="About Us" />
                  <section className="py-20">
                        <div className="container mx-auto space-y-16">
                              {aboutData.map((section) => (
                                    <div key={section.id} className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}>
                                          <div className={`${section.reverse ? 'md:order-last' : ''}`}>
                                                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                                                <p className="text-gray-600 mt-4 text-sm md:text-base whitespace-pre-line">
                                                      {section.description}
                                                </p>
                                          </div>
                                          <div className={`flex ${section.reverse ? '' : 'justify-end'}`}>
                                                <Image
                                                      src={section.image}
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
