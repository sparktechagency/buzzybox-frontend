'use client';

import { useSendInviteMutation } from '@/redux/features/website/invite/inviteApi';
import { Button, Form, Input, Modal, Tooltip } from 'antd';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiCopy } from 'react-icons/fi';

interface InviteModalProps {
      open: boolean;
      setOpen: (open: boolean) => void;
}

const InviteModal = ({ open, setOpen }: InviteModalProps) => {
      const url = typeof window !== 'undefined' ? window.location.href : '';
      const [copied, setCopied] = useState(false);

      const [sendInvite] = useSendInviteMutation();

      //   handle invite link copy
      const handleCopy = async () => {
            try {
                  if (navigator.clipboard && navigator.clipboard.writeText) {
                        await navigator.clipboard.writeText(url);
                  } else {
                        // Fallback for older browsers
                        const textArea = document.createElement('textarea');
                        textArea.value = url;
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                  }

                  setCopied(true);

                  setTimeout(() => setCopied(false), 2000);
            } catch (error) {
                  toast.error('Failed to copy URL');
                  console.error('Clipboard error:', error);
            }
      };

      //   handle send invite link by email
      const handleSendEmail = async (values: { email: string; message: string }) => {
            try {
                  const response = await sendInvite({ payload: { ...values, message: values.message || '', link: url } }).unwrap();

                  if (response.success) {
                        toast.success('Email sent successfully!');
                  }
            } catch (error: any) {
                  toast.error('Failed to send email.');
                  console.error('Failed to send email:', error);
            }
      };

      return (
            <Modal title="Invite Others" centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
                  <div className="flex items-center gap-3 w-full max-w-md">
                        <Input value={url} readOnly className="text-gray-600" />
                        <Tooltip title="Copy to clipboard">
                              <Button onClick={handleCopy} icon={<FiCopy />} type="primary">
                                    {copied ? 'Copied!' : 'Copy'}
                              </Button>
                        </Tooltip>
                  </div>
                  <h3 className="font-medium py-4">Send by email</h3>
                  <Form layout="vertical" onFinish={handleSendEmail}>
                        <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}>
                              <Input placeholder="example@email.com" />
                        </Form.Item>

                        <Form.Item name="message">
                              <Input.TextArea rows={3} placeholder="Write a message" />
                        </Form.Item>

                        <Button type="primary" htmlType="submit" block>
                              Send Email
                        </Button>
                  </Form>
            </Modal>
      );
};

export default InviteModal;
