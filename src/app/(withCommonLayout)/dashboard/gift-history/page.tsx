'use client';

import { Table, Dropdown, Menu, Skeleton } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useGetMyGiftCardsQuery } from '@/redux/features/website/gift-card/giftCardApi';
import { TGift } from '@/types';
import Link from 'next/link';

const columns = [
      {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt: string) => new Date(createdAt).toLocaleDateString(),
      },
      {
            title: 'Recipient',
            dataIndex: 'recipientName',
            key: 'recipientName',
      },
      {
            title: 'Gift Voucher',
            dataIndex: 'title',
            key: 'title',
      },
      {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
            render: (message: number) => message, // Assuming message is always 1 as per your previous data
      },
      {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price: number) => `$${price}`,
      },
      {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => <span className={status === 'active' ? 'text-green-500' : 'text-red-500'}>{status}</span>,
      },
      {
            title: '',
            key: 'action',
            render: (item: any) => {
                  return (
                        <Dropdown
                              overlay={
                                    <Menu>
                                          <Menu.Item key="1">
                                                <Link href={`/create-gift/${item?.uniqueId}`}>View Details</Link>
                                          </Menu.Item>
                                    </Menu>
                              }
                              trigger={['click']}
                        >
                              <MoreOutlined className="cursor-pointer text-gray-600 text-lg" />
                        </Dropdown>
                  );
            },
      },
];

export default function GiftTable() {
      const { data, isLoading } = useGetMyGiftCardsQuery(undefined);
      const giftCards = data?.data;

      // format giftCards data
      const formatedData = giftCards?.map((giftCard: TGift) => ({
            ...giftCard,
            key: giftCard._id,
            createdAt: giftCard.createdAt,
            recipientName: giftCard.coverPage.recipientName,
            title: giftCard.coverPage.title,
            message: giftCard.pages.length,
            price: giftCard.price,
            status: giftCard.status,
      }));

      return (
            <div className="">
                  {isLoading ? (
                        <Skeleton />
                  ) : (
                        <Table
                              style={{
                                    border: 'none',
                              }}
                              scroll={{ x: 1000 }}
                              className="[&_.ant-table-cell]:!border-0 [&_.ant-table]:!border-0 [&_.ant-table-container]:!border-0 [&_.ant-table-thead>tr>th]:!border-0 [&_.ant-table-tbody>tr>td]:!border-0 border rounded-lg shadow-sm"
                              bordered={false}
                              columns={columns}
                              dataSource={formatedData}
                              pagination={false}
                        />
                  )}
            </div>
      );
}
