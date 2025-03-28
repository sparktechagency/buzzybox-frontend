'use client';
import { Menu, Modal, Skeleton, Upload } from 'antd';
import Image from 'next/image';
import { CameraIcon, GiftIcon, LogOut, Settings2, UserIcon } from 'lucide-react';
import { UploadChangeParam } from 'antd/es/upload';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { logOut } from '@/redux/features/auth/authSlice';
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from '@/redux/features/user/userApi';
import toast from 'react-hot-toast';

const ProfileSidebar = () => {
      const pathname = usePathname();
      const router = useRouter();
      const dispatch = useAppDispatch();
      const activeKey = pathname.split('/').pop();

      // fetch profile data
      const { data, isLoading } = useGetUserProfileQuery(undefined);
      const profile = data?.data;

      const [updateProfile] = useUpdateUserProfileMutation();

      // photo update handler
      const handleFileChange = async ({ file }: UploadChangeParam<any>) => {
            toast.loading('Updating...', { id: 'ProfileUpdateToast' });

            const formData = new FormData();
            formData.append('image', file.originFileObj);

            try {
                  const res = await updateProfile({ payload: formData }).unwrap();
                  if (res.success) {
                        toast.success('Photo Updated successfully', { id: 'ProfileUpdateToast' });
                  }
            } catch (errorInfo: any) {
                  toast.error(errorInfo?.data?.message || 'Failed to update', { id: 'ProfileUpdateToast' });
                  console.log('Validation Failed:', errorInfo);
            }
      };

      const sidebarItems = [
            {
                  key: 'profile',
                  icon: <UserIcon size={20} />,
                  label: 'My Profile',
                  href: '/dashboard/profile',
                  selected: true,
            },

            {
                  key: 'gift-history',
                  icon: <GiftIcon size={20} />,
                  label: 'Buzzybox History',
                  href: '/dashboard/gift-history',
            },
            {
                  key: 'settings',
                  icon: <Settings2 size={20} />,
                  label: 'Settings',
                  href: '/dashboard/settings',
            },
            {
                  key: 'logout',
                  icon: <LogOut size={20} />,
                  label: 'Logout',
                  href: '/logout',
            },
      ];

      const handleLogout = () => {
            Modal.confirm({
                  title: 'Logout',
                  centered: true,
                  content: 'Are you sure you want to logout?',
                  okText: 'Yes',
                  cancelText: 'No',
                  okButtonProps: {
                        style: {
                              backgroundColor: '#FFC301',
                              color: '#fff',
                        },
                  },
                  cancelButtonProps: {
                        style: {
                              backgroundColor: '#fff',
                              color: '#FFC301',
                              border: '1px solid #FFC301',
                        },
                  },

                  onOk() {
                        dispatch(logOut());
                        router.push('/sign-in');
                  },
            });
      };

      return (
            <div className="">
                  {isLoading ? (
                        <Skeleton />
                  ) : (
                        <div className="flex flex-col items-center my-2 mt-2">
                              <div className="relative size-[86px] rounded-full border-2 border-primary p-1">
                                    {profile && (
                                          <Image
                                                width={500}
                                                height={500}
                                                src={
                                                      profile?.profile?.includes('http')
                                                            ? profile?.profile
                                                            : `${process.env.NEXT_PUBLIC_SERVER_URL}${profile?.profile}`
                                                }
                                                alt="Profile"
                                                className="w-full h-full  object-cover rounded-full"
                                          />
                                    )}
                                    <div className="absolute right-0 bottom-0 cursor-pointer bg-white w-8 h-8 rounded-lg text-center flex items-center justify-center">
                                          <Upload showUploadList={false} onChange={handleFileChange}>
                                                <div className="bg-primary p-2 rounded-full text-white">
                                                      <CameraIcon size={18} />
                                                </div>
                                          </Upload>
                                    </div>
                              </div>
                              <div className="grid justify-items-center mt-2">
                                    <h3 className="text-lg font-bold mb-1">{profile?.name}</h3>
                                    <p className="text-sm text-gray-600">{profile?.email}</p>
                              </div>
                        </div>
                  )}

                  <Menu
                        style={{
                              border: 'none',
                        }}
                        mode="vertical"
                        defaultSelectedKeys={['profile']}
                        selectedKeys={[activeKey] as any}
                        className="w-full"
                  >
                        {sidebarItems.map((item) => {
                              if (item.key === 'logout') {
                                    return (
                                          <Menu.Item
                                                onClick={() => {
                                                      handleLogout();
                                                }}
                                                key={item.key || ''}
                                                icon={item.icon}
                                          >
                                                <span>{item.label}</span>
                                          </Menu.Item>
                                    );
                              }
                              return (
                                    <Menu.Item key={item.key || ''} icon={item.icon}>
                                          <Link href={item.href}>{item.label}</Link>
                                    </Menu.Item>
                              );
                        })}
                  </Menu>
            </div>
      );
};

export default ProfileSidebar;
