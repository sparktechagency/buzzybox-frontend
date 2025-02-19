import { Dispatch, SetStateAction } from 'react';
import NavItems from './NavItems';
import { Avatar, Button, Drawer, Dropdown } from 'antd';
import Link from 'next/link';
import { UserIcon } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';
const MobileDrawer = ({ open, setOpen, items }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; items: any[] }) => {
      const onClose = () => {
            setOpen(!open);
      };

      return (
            <Drawer placement="left" onClose={onClose} open={open}>
                  <div className="flex flex-col items-center gap-8">
                        <NavItems items={items} onClose={onClose} />
                        <div className=" items-center flex space-x-6">
                              <Link href="/sign-in">
                                    <Button iconPosition="start" icon={<UserIcon />} type="primary">
                                          Sign In
                                    </Button>
                              </Link>
                        </div>
                        <Dropdown
                              placement="bottom"
                              className="cursor-pointer "
                              trigger={['click']}
                              dropdownRender={() => <ProfileDropdown />}
                        >
                              <div className="flex items-center gap-2">
                                    <Avatar size={45} src={`https://picsum.photos/40`} style={{ border: '2px solid #FFC301' }} />
                                    <h1 className="font-semibold text-lg">Sazzad</h1>
                              </div>
                        </Dropdown>
                  </div>
            </Drawer>
      );
};

export default MobileDrawer;
