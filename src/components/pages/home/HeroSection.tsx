'use client';
import HeroBg from '@/assets/images/hero-section/hero-bg.png';
import HeroImg from '@/assets/images/hero-section/hero.png';
import { Avatar, Button } from 'antd';
import { GiftIcon, LucideCirclePlay } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import DemoVideoModal from './DemoVideoModal';
const HeroSection = () => {
      const [open, setOpen] = useState(false);

      return (
            <div
                  style={{
                        backgroundImage: `url(${HeroBg.src})`,
                        backgroundPosition: 'center',
                  }}
                  className="md:h-[calc(100vh-96px)] bg-no-repeat bg-cover py-10"
            >
                  <div className="container h-full  justify-center items-center  grid grid-cols-1 md:grid-cols-2  ">
                        <div className="space-y-8 order-2 md:order-2 text-center md:text-start">
                              <h1 className="text-3xl md:text-6xl space-y-4 font-bold">
                                    <span className="block"> Effortless Digital</span>
                                    <span className="block"> Cards & Group Gifts.</span>
                                    <span className="text-primary block"> Spread Joy Instantly!</span>
                              </h1>

                              <p className="text-paragraph">
                                    Create and share personalized digital cards with messages, GIFs, and group gifts—effortless, fun, and
                                    perfect for any occasion!
                              </p>
                              <div className="flex  flex-col md:flex-row justify-start items-center gap-4">
                                    <Button href="/create-gift" type="primary" icon={<GiftIcon size={20} />}>
                                          Create a Buzzybox
                                    </Button>
                                    <Button
                                          onClick={() => setOpen(true)}
                                          style={{
                                                border: '1px solid #FFC301',
                                                color: '#FFC301',
                                          }}
                                          type="default"
                                          icon={<LucideCirclePlay size={20} />}
                                    >
                                          View Demo
                                    </Button>
                                    <DemoVideoModal open={open} setOpen={setOpen} />
                              </div>
                              <div className="flex items-center gap-8">
                                    <Avatar.Group>
                                          <Avatar size={50} src="https://randomuser.me/api/portraits/women/11.jpg" />
                                          <Avatar size={50} src="https://randomuser.me/api/portraits/women/12.jpg" />
                                          <Avatar size={50} src="https://randomuser.me/api/portraits/women/14.jpg" />
                                    </Avatar.Group>
                                    <div>
                                          <div className="flex items-center gap-1">
                                                {[1, 2, 3, 4, 5].map((item, index) => (
                                                      <MdOutlineStarPurple500 size={18} color="#FFC301" key={index} />
                                                ))}
                                          </div>
                                          <p className="text-paragraph">
                                                Over <strong className="text-black">2K+ </strong>Active User&apos;s
                                          </p>
                                    </div>
                              </div>
                        </div>
                        <div className="order-1 md:order-2 my-5 md:my-0">
                              <Image
                                    className="w-auto md:h-[647.63px] m-auto object-contain"
                                    alt="Hero Image"
                                    src={HeroImg.src}
                                    width={500}
                                    height={500}
                              />
                        </div>
                  </div>
            </div>
      );
};

export default HeroSection;
