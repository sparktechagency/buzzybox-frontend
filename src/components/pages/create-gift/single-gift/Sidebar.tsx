'use client';
import { Avatar, Button, Checkbox, InputNumber, Select } from 'antd';
import { DollarSign } from 'lucide-react';
import { FaGifts } from 'react-icons/fa';
import { FcAddImage, FcEditImage, FcRules } from 'react-icons/fc';
import { useState } from 'react';

const Sidebar = () => {
      const [isGiftCardEnabled, setIsGiftCardEnabled] = useState(true);

      return (
            <div className="p-5 space-y-6">
                  <div className="flex items-center gap-2 border border-primary rounded-lg p-2 cursor-pointer hover:text-primary duration-100">
                        <Avatar
                              style={{
                                    border: '2px solid #FFC301',
                              }}
                              size={40}
                              src="https://i.pravatar.cc/150"
                        />
                        <span className="text-base font-medium">Invite Others</span>
                  </div>

                  <div className="space-y-4">
                        <h3 className="text-lg font-medium">Edit Design</h3>
                        <div className="space-y-3 bg-primary/5 p-3 rounded-lg border-primary border">
                              <button className="w-full flex items-center gap-3 p-3 hover:text-primary duration-100 rounded-lg">
                                    <FcRules size={30} />
                                    <span>Edit Message</span>
                              </button>
                              <button className="w-full flex items-center gap-3 p-3 hover:text-primary duration-100 rounded-lg">
                                    <FcEditImage size={30} />
                                    <span>Change Background</span>
                              </button>
                              <button className="w-full flex items-center gap-3 p-3 hover:text-primary duration-100 rounded-lg">
                                    <FcAddImage size={30} />
                                    <span>Change Image</span>
                              </button>
                        </div>
                  </div>

                  <div className="flex items-center gap-2">
                        <Checkbox onChange={(e) => setIsGiftCardEnabled(e.target.checked)} checked={isGiftCardEnabled} />
                        <span className="flex items-center gap-2">
                              Add gift Card
                              <FaGifts className="text-red-500" size={30} />
                        </span>
                  </div>

                  {isGiftCardEnabled && (
                        <div className="space-y-6">
                              <div className="space-y-4">
                                    <h3 className="gift-card-item text-lg font-medium">Select Currency</h3>
                                    <div className="gift-card-item">
                                          <Select
                                                style={{ width: '100%', height: '50px' }}
                                                className="w-full "
                                                placeholder="Select currency"
                                                options={[
                                                      { value: 'usd', label: 'USD' },
                                                      { value: 'eur', label: 'EUR' },
                                                      { value: 'gbp', label: 'GBP' },
                                                ]}
                                          />
                                    </div>
                              </div>

                              <div className="space-y-4">
                                    <h3 className="text-lg font-medium gift-card-item">Enter Amount</h3>
                                    <InputNumber
                                          className=""
                                          style={{ width: '100%', height: '50px' }}
                                          prefix={<DollarSign className="border rounded-full p-1 mx-5" size={25} />}
                                          placeholder="0.00"
                                    />
                              </div>
                        </div>
                  )}

                  <Button type="primary" className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 border-none">
                        Next
                  </Button>
            </div>
      );
};

export default Sidebar;
