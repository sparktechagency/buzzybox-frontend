'use client';

import { Table, Dropdown, Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const data = [
      {
            key: '1',
            date: 'Jan 1, 2024',
            recipient: 'Jack Watson',
            giftVoucher: '$10',
            message: 1,
            price: '$5',
            status: 'Sent',
      },
      {
            key: '2',
            date: 'Jan 1, 2024',
            recipient: 'Jack Watson',
            giftVoucher: '$10',
            message: 1,
            price: '$5',
            status: 'Not Sent',
      },
      {
            key: '3',
            date: 'Jan 1, 2024',
            recipient: 'Jack Watson',
            giftVoucher: '$10',
            message: 1,
            price: '$5',
            status: 'Sent',
      },
      {
            key: '4',
            date: 'Jan 1, 2024',
            recipient: 'Jack Watson',
            giftVoucher: '$10',
            message: 1,
            price: '$5',
            status: 'Not Sent',
      },
      {
            key: '5',
            date: 'Jan 1, 2024',
            recipient: 'Jack Watson',
            giftVoucher: '$10',
            message: 1,
            price: '$5',
            status: 'Sent',
      },
];

const columns = [
      {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
      },
      {
            title: 'Recipient',
            dataIndex: 'recipient',
            key: 'recipient',
      },
      {
            title: 'Gift Voucher',
            dataIndex: 'giftVoucher',
            key: 'giftVoucher',
      },
      {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
      },
      {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
      },
      {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => <span className={status === 'Sent' ? 'text-green-500' : 'text-red-500'}>{status}</span>,
      },
      {
            title: '',
            key: 'action',
            render: () => (
                  <Dropdown
                        overlay={
                              <Menu>
                                    <Menu.Item key="1">Resend</Menu.Item>
                                    <Menu.Item key="2">View Details</Menu.Item>
                              </Menu>
                        }
                        trigger={['click']}
                  >
                        <MoreOutlined className="cursor-pointer text-gray-600 text-lg" />
                  </Dropdown>
            ),
      },
];

export default function GiftTable() {
      return (
            <div className="">
                  <Table
                        style={{
                              border: 'none',
                        }}
                        className="[&_.ant-table-cell]:!border-0 [&_.ant-table]:!border-0 [&_.ant-table-container]:!border-0 [&_.ant-table-thead>tr>th]:!border-0 [&_.ant-table-tbody>tr>td]:!border-0 border rounded-lg shadow-sm"
                        bordered={false}
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                  />
            </div>
      );
}
