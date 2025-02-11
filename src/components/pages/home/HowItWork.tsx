import { Button } from 'antd';
import Image from 'next/image';
import Image1 from '@/assets/images/how-it-work/1.png';
import Image2 from '@/assets/images/how-it-work/2.png';
import Image3 from '@/assets/images/how-it-work/3.png';

const steps = [
      {
            number: '01',
            title: 'Design',
            description: 'Pick a stunning digital card and make it personal.',
            image: Image1,
      },
      {
            number: '02',
            title: 'Collaborate',
            description: 'Share the link so others can add their messages and media.',
            image: Image2,
      },
      {
            number: '03',
            title: 'Deliver',
            description: 'Send it to your recipient for a memorable eCard!',
            image: Image3,
      },
];

const HowItWorks = () => {
      return (
            <section className=" py-16">
                  <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold ">How Buzzybox Works</h2>
                        <p className="text-paragraph mt-4">Buzzybox makes sending greeting cards & gifts effortless!</p>

                        {/* Steps Section */}
                        <div className="flex justify-center items-center mt-12 relative">
                              <div className="hidden md:block absolute w-[900px] top-8 border-dashed border-t-2 border-primary left-1/2 transform -translate-x-1/2"></div>

                              {/* Steps */}
                              <div className="flex flex-col md:flex-row md:space-x-12">
                                    {steps.map((step, index) => (
                                          <div key={index} className="flex flex-col items-center">
                                                <div className="ho bg-primary relative z-0 text-black w-14 h-14 hidden md:flex items-center justify-center text-lg font-bold rounded-full">
                                                      {step.number}
                                                </div>
                                                <div className="bg-white text-black rounded-lg p-6 mt-4 w-full h-[388px] flex flex-col justify-center items-center shadow-lg">
                                                      <Image
                                                            width={500}
                                                            height={500}
                                                            src={step.image}
                                                            alt={step.title}
                                                            className="mx-auto size-[160px]"
                                                      />
                                                      <h3 className="font-semibold text-lg mt-2">{step.title}</h3>
                                                      <p className="text-gray-500 text-sm mt-1">{step.description}</p>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>

                        {/* Button */}
                        <div className="mt-10">
                              <Button type="primary">Get Started</Button>
                        </div>
                  </div>
            </section>
      );
};

export default HowItWorks;
