import PageHeader from '@/components/shared/PageHeader';
import Image from 'next/image';
import Image1 from '@/assets/images/how-it-work/11.png';
import Image2 from '@/assets/images/how-it-work/22.png';
import Image3 from '@/assets/images/how-it-work/33.png';

const HowItWorkPage = () => {
      const howItWorkData = [
            {
                  id: 1,
                  title: 'Design',
                  description: `Start by selecting from our wide array of stunning templates designed for every occasion—be it a birthday, farewell, congratulations, or any other special moment. Once you’ve chosen your perfect template, it’s time to make it yours!`,

                  reverse: true,
                  bgColor: 'white',
                  image: Image1,
            },
            {
                  id: 2,
                  title: 'Collaborate',
                  description: `Next, it’s time to make this celebration even bigger by inviting others to contribute. BuzzyBox makes it incredibly easy to gather messages from friends, family, or coworkers, adding a group touch to the celebration.`,
                  reverse: false,
                  bgColor: '#FEF9EB',
                  image: Image2,
            },
            {
                  id: 3,
                  title: 'Deliver',
                  description: `Once everyone has added their contributions and the group gift has been set up (if you choose), it’s time to send the card and gift! Whether you want to surprise the recipient right away or schedule it for a future date, BuzzyBox makes the delivery process effortless.`,
                  reverse: true,
                  bgColor: 'white',
                  image: Image3,
            },
      ];
      return (
            <div>
                  <PageHeader title="How It Work" />

                  <section className="py-20">
                        <div className="container mx-auto space-y-16">
                              {howItWorkData.map((section) => (
                                    <div key={section.id} className={`flex gap-10 items-center`}>
                                          <div className={`w-full ${section.reverse ? 'md:order-last' : ''}`}>
                                                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                                                <p className="text-gray-600 mt-4 whitespace-pre-line">{section.description}</p>
                                          </div>
                                          <div className={`w-[384px] flex ${section.reverse ? '' : 'justify-end'}`}>
                                                <Image
                                                      src={section.image}
                                                      width={500}
                                                      height={550}
                                                      alt={section.title}
                                                      className="w-full rounded-lg"
                                                />
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </section>
            </div>
      );
};

export default HowItWorkPage;
