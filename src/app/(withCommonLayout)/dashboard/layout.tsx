'use client';
import React, { useState } from 'react';
import { Layout, theme, ConfigProvider } from 'antd';

import { AiOutlineLeftSquare, AiOutlineRightSquare } from 'react-icons/ai';
import ProfileSidebar from './ProfileSidebar';

const { Header, Content, Sider } = Layout;
const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const {
            token: { colorBgContainer },
      } = theme.useToken();
      const [collapsed, setCollapsed] = useState(false);

      return (
            <div>
                  <Layout className="container my-20">
                        <ConfigProvider
                              theme={{
                                    components: {
                                          Menu: {
                                                itemSelectedBg: '#FFC301',
                                                itemSelectedColor: '#FFFFFF',
                                          },
                                    },
                              }}
                        >
                              <Sider
                                    width={282}
                                    theme="light"
                                    // breakpoint="lg"
                                    collapsedWidth="0"
                                    // collapsible
                                    className="custom-shadow p-2"
                                    collapsed={collapsed}
                                    onCollapse={(isCollapsed) => setCollapsed(isCollapsed)}
                              >
                                    <ProfileSidebar />
                              </Sider>
                        </ConfigProvider>
                        <Layout className="">
                              <Header
                                    style={{
                                          background: colorBgContainer,
                                          padding: 20,
                                    }}
                              >
                                    <button onClick={() => setCollapsed(!collapsed)}>
                                          {collapsed ? <AiOutlineRightSquare size={30} /> : <AiOutlineLeftSquare size={30} />}
                                    </button>
                              </Header>
                              <Content>
                                    <div className="w-full p-6 overflow-x-scroll hide-scrollbar">{children}</div>
                              </Content>
                        </Layout>
                  </Layout>
            </div>
      );
};

export default ProfileLayout;
