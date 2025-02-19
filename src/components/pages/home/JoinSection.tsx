import Image from 'next/image';
import logo1 from '@/assets/images/join-section/partner-3-300x75-1.png.png';
import logo2 from '@/assets/images/join-section/partner-6-300x75-1.png.png';
import logo3 from '@/assets/images/join-section/partner-7-300x73-1.png.png';
import logo4 from '@/assets/images/join-section/partner-8-300x71-1.png.png';

const logos = [
      { src: logo1, alt: 'Logo 1' },
      { src: logo2, alt: 'Logo 2' },
      { src: logo3, alt: 'Logo 3' },
      { src: logo4, alt: 'Logo 4' },
];

const JoinSection = () => {
      return (
            <div className="py-16 space-y-5 container bg-white text-center">
                  <h2 className="text-3xl md:text-4xl font-semibold text-title">Join Over 21k+ Happy Users</h2>
                  <p className=" text-sm md:text-lg text-paragraph mt-2">
                        Trusted by thousands of teams & businesses worldwide—seamless digital cards for every occasion
                  </p>

                  <div className="mt-8 flex   justify-center  space-x-1">
                        {logos.map((logo, index) => (
                              <div key={index} className="w-[200px]">
                                    <Image src={logo.src} alt={logo.alt} width={100} height={100} />
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default JoinSection;
