import { useChangePasswordMutation } from '@/redux/features/auth/authApi';
import { Form, Input, Button } from 'antd';
import toast from 'react-hot-toast';

const ChangePassword = () => {
      const [form] = Form.useForm();
      const [changePassword] = useChangePasswordMutation();

      // change password handler
      const onFinish = async (values: any) => {
            toast.loading('Saving...', { id: 'changePasswordToast' });
            try {
                  const res = await changePassword({ payload: values }).unwrap();
                  console.log(res);
                  if (res.success) {
                        toast.success(res.message || 'Password updated successful', { id: 'changePasswordToast' });
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to update password', { id: 'changePasswordToast' });
                  console.log(error?.data);
            }
      };

      return (
            <Form
                  className="w-full md:max-w-lg"
                  requiredMark={false}
                  layout="vertical"
                  form={form}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
            >
                  <Form.Item
                        label="Old Password"
                        name="currentPassword"
                        rules={[{ required: true, message: 'Please input your old password!' }]}
                  >
                        <Input.Password />
                  </Form.Item>

                  <Form.Item
                        label="New Password"
                        name="newPassword"
                        rules={[{ required: true, message: 'Please input your new password!' }]}
                  >
                        <Input.Password />
                  </Form.Item>

                  <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        rules={[
                              { required: true, message: 'Please confirm your password!' },
                              ({ getFieldValue }) => ({
                                    validator(_, value) {
                                          if (!value || getFieldValue('newPassword') === value) {
                                                return Promise.resolve();
                                          }
                                          return Promise.reject(new Error('Passwords do not match!'));
                                    },
                              }),
                        ]}
                  >
                        <Input.Password />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                              Submit
                        </Button>
                  </Form.Item>
            </Form>
      );
};

export default ChangePassword;
