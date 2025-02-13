import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import React, { ReactNode } from 'react';
import NextTopLoader from 'nextjs-toploader';

const Provider = ({ children }: { children: ReactNode }) => {
      return (
            <div>
                  <ConfigProvider
                        theme={{
                              token: {
                                    colorPrimary: '#FFC301',
                                    colorTextLightSolid: '#000000',
                                    fontFamily: '',
                                    fontSize: 16,
                              },
                              components: {
                                    Button: {
                                          controlHeight: 42,
                                          fontWeight: 500,
                                          fontSize: 16,
                                          paddingInline: 24,
                                          borderRadius: 10,
                                    },
                                    Input: {
                                          controlHeight: 42,

                                          fontSize: 16,
                                          paddingInline: 24,
                                    },
                                    Select: {
                                          controlHeight: 42,
                                    },
                                    Typography: {
                                          colorTextDescription: 'white',
                                    },
                                    Form: {
                                          marginLG: 15,
                                          labelColor: '#00180F',
                                    },
                                    Table: {
                                          headerBg: '#FEF9EB',
                                          colorText: '#7A7A7A',
                                    },
                              },
                        }}
                  >
                        <AntdRegistry>
                              <NextTopLoader color="#FFC301" showSpinner={false} />

                              {children}
                        </AntdRegistry>
                  </ConfigProvider>
            </div>
      );
};

export default Provider;
