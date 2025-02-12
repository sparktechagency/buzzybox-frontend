'use client';
import React from 'react';
import { Facebook, Twitter, Instagram, PhoneIcon, MailIcon } from 'lucide-react';
import Logo from '@/assets/images/footer-logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
      { Icon: Facebook, href: '#' },
      { Icon: Twitter, href: '#' },
      { Icon: Instagram, href: '#' },
];

const quickLinks = [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about-us' },
      { label: 'How buzzybox work', href: '/how-it-works' },
      { label: 'Create Buzzybox', href: '/create-buzzybox' },
];

const quickLinksTwo = [
      { label: 'Privacy Policy', href: '/privacy-policy' },

      { label: 'Terms & Condition', href: '/terms-and-conditions' },
      { label: 'Faq', href: '/faq' },
];

const Footer = () => {
      return (
            <footer className="bg-[#1E1E1E] text-white">
                  <div className="container px-4 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                              <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                          <Link href={'/'}>
                                                <Image
                                                      className="w-auto h-full object-contain"
                                                      alt="Logo"
                                                      src={Logo}
                                                      width={131}
                                                      height={70}
                                                />
                                          </Link>
                                    </div>
                                    <p className="text-gray-300">
                                          Personalized digital cards and group gifts made easy—join thousands who love Buzzybox!
                                    </p>
                                    <div className="space-y-4">
                                          <div className="flex items-center gap-2">
                                                <span className="bg-primary text-black p-1 rounded-full">
                                                      <PhoneIcon />
                                                </span>
                                                <span>+1 (555) 123-4567</span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <span className="bg-primary text-black p-1 rounded-full">
                                                      <MailIcon />
                                                </span>
                                                <span>Support@buzzybox.com</span>
                                          </div>
                                    </div>
                              </div>

                              <div>
                                    <h3 className="font-medium text-lg mb-4">Quick Links</h3>
                                    <ul className="space-y-2">
                                          {quickLinks.map((link) => (
                                                <li key={link.label}>
                                                      <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                                                            {link.label}
                                                      </Link>
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              <div>
                                    <h3 className="font-medium text-lg mb-4">Quick Links</h3>
                                    <ul className="space-y-2">
                                          {quickLinksTwo.map((link) => (
                                                <li key={link.label}>
                                                      <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                                                            {link.label}
                                                      </Link>
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              <div>
                                    <h3 className="font-medium text-lg mb-4">Follow Us</h3>
                                    <p className="text-gray-300 mb-4">
                                          Follow us for the latest updates, tips, and inspiration from the WorkNest community.
                                    </p>
                                    <div className="flex gap-4">
                                          {socialLinks.map(({ Icon, href }, index) => (
                                                <a
                                                      key={index}
                                                      href={href}
                                                      className="w-8 h-8 flex items-center justify-center rounded hover:text-yellow-400 transition-colors"
                                                >
                                                      <Icon className="w-5 h-5" />
                                                </a>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className=" py-8 border-t-2 border-white/10 text-center">
                        <p className="text-gray-300">
                              Copyright &copy;<span className="text-white">Buzzybox {new Date().getFullYear()}</span> . All Right Reserved.
                        </p>
                  </div>
            </footer>
      );
};

export default Footer;
