'use client';

import { useState } from 'react';
import { Select, Input, Button } from 'antd';
import Image from 'next/image';
import GiftImage from '@/assets/images/configure-panel/gift.png';
import BookImage from '@/assets/images/configure-panel/book.png';

const ConfigurationPanel = () => {
      const [selectedFormat, setSelectedFormat] = useState('greetings');

      return (
            <div>
                  <div className="w-full bg-primary/5 p-6 rounded-xl  mx-auto">
                        <h2 className="text-2xl font-bold text-title">Create Your Buzzybox?</h2>

                        <p className="text-gray-700 mt-3 font-medium">Select board format</p>
                        <div className="flex space-x-3 mt-2">
                              <div
                                    onClick={() => setSelectedFormat('greetings')}
                                    className={`flex flex-col items-center justify-center p-4 w-1/2 border rounded-lg cursor-pointer transition ${
                                          selectedFormat === 'greetings' ? 'border-red-500 bg-yellow-100' : 'border-gray-300 bg-[#B8D8FD]'
                                    }`}
                              >
                                    <Image width={500} height={500} src={GiftImage.src} alt="Greetings Card" className="w-8 h-8" />
                                    <p className="mt-2 font-medium">Greetings Card</p>
                              </div>

                              <div
                                    onClick={() => setSelectedFormat('memory')}
                                    className={`flex flex-col items-center justify-center p-4 w-1/2 border rounded-lg cursor-pointer transition ${
                                          selectedFormat === 'memory' ? 'border-red-500 bg-yellow-100' : 'border-gray-300 bg-[#B8D8FD]'
                                    }`}
                              >
                                    <Image width={500} height={500} src={BookImage.src} alt="Memory Book" className="w-8 h-8" />
                                    <p className="mt-2 font-medium">Memory Book</p>
                              </div>
                        </div>

                        <p className="text-gray-700 mt-5 font-medium">Select Occasion</p>
                        <Select
                              placeholder="Select an occasion"
                              className="w-full mt-2"
                              options={[
                                    { value: 'birthday', label: 'Birthday' },
                                    { value: 'farewell', label: 'Farewell' },
                                    { value: 'wedding', label: 'Wedding' },
                              ]}
                        />

                        <p className="text-gray-700 mt-5 font-medium">Recipient Name</p>
                        <Input placeholder="Who is this card for?" className="mt-2" />

                        <p className="text-gray-700 mt-5 font-medium">Buzzybox Title</p>
                        <Input placeholder="e.g. Happy Birthday Jenny" className="mt-2" />

                        <p className="text-gray-700 mt-5 font-medium">Sender Name</p>
                        <Input placeholder="e.g. Adam John" className="mt-2" />
                  </div>
                  <div>
                        <Button type="primary" className="w-full mt-5">
                              Next
                        </Button>
                  </div>
            </div>
      );
};

export default ConfigurationPanel;
