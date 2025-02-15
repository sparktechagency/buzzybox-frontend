'use client';
import { Avatar, Button, Input, Select } from 'antd';
import { FaGifts } from 'react-icons/fa';
import { FcAddImage, FcEditImage, FcRules } from 'react-icons/fc';

const Sidebar = () => {
      return (
            <div className="p-5 space-y-6">
                  <div className="flex items-center gap-2 border border-primary rounded-lg p-2 cursor-pointer hover:bg-gray-50">
                        <Avatar size={40} src="https://i.pravatar.cc/150" />
                        <span className="text-base">Invite Others</span>
                  </div>

                  <div className="space-y-4">
                        <h3 className="text-lg font-medium">Edit Design</h3>
                        <div className="space-y-3 bg-primary/5 p-3 rounded-lg border-primary border">
                              <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                                    <FcRules size={30} />
                                    <span>Edit Message</span>
                              </button>
                              <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                                    <FcEditImage size={30} />
                                    <span>Change Background</span>
                              </button>
                              <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                                    <FcAddImage size={30} />
                                    <span>Change Image</span>
                              </button>
                        </div>
                  </div>

                  <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="flex items-center gap-2">
                              Add gift Card
                              <FaGifts className="text-red-500" size={30} />
                        </span>
                  </div>

                  <div className="space-y-4">
                        <h3 className="text-lg font-medium">Select Currency</h3>
                        <Select
                              className="w-full"
                              placeholder="Select currency"
                              options={[
                                    { value: 'usd', label: 'USD' },
                                    { value: 'eur', label: 'EUR' },
                                    { value: 'gbp', label: 'GBP' },
                              ]}
                        />
                  </div>

                  <div className="space-y-4">
                        <h3 className="text-lg font-medium">Enter Amount</h3>
                        <Input prefix="$" placeholder="0.00" className="h-12" />
                  </div>

                  <Button type="primary" className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 border-none">
                        Next
                  </Button>
            </div>
      );
};

export default Sidebar;
