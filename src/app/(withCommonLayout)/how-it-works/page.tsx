import PageHeader from '@/components/shared/PageHeader';
import Image from 'next/image';
import { getHowItWorksData } from '@/services/howItWorks';

type THowItWorks = {
      _id: string;
      title: string;
      description: string;
      howItWorksImage: string;
};

const HowItWorkPage = async () => {
      const { data: howItWorkData } = await getHowItWorksData();

      return (
            <div>
                  <PageHeader title="How It Work" />

                  <section className="py-20">
                        <div className="container mx-auto space-y-16">
                              {howItWorkData.map((section: THowItWorks, index: number) => (
                                    <div key={section._id} className={`flex flex-col md:flex-row gap-10 items-center`}>
                                          <div className={`w-full ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                                                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                                                <p className="text-gray-600 mt-4 text-sm md:text-base whitespace-pre-line">
                                                      {section.description}
                                                </p>
                                          </div>
                                          <div className={`w-full md:w-[384px]  flex ${index % 2 === 0 ? '' : 'justify-end'}`}>
                                                <Image
                                                      src={`${process.env.NEXT_PUBLIC_SERVER_URL}${section.howItWorksImage}`}
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
