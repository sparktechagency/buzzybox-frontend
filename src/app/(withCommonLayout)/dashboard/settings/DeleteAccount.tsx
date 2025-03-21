import { logOut } from '@/redux/features/auth/authSlice';
import { useDeleteUserProfileMutation } from '@/redux/features/user/userApi';
import { useAppDispatch } from '@/redux/hooks';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const DeleteAccount = () => {
      const [deleteAccount] = useDeleteUserProfileMutation();
      const dispatch = useAppDispatch();
      const router = useRouter();

      const handleDeleteAccount = async () => {
            toast.loading('Deleting...', { id: 'deleteAccountToastId' });
            try {
                  const res = await deleteAccount(undefined).unwrap();
                  if (res.success) {
                        toast.success(res.message || 'Account deleted successfully', { id: 'deleteAccountToastId' });
                        // logout the user and redirect to sign-up page
                        dispatch(logOut());
                        router.push('/sign-up');
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to delete account', { id: 'deleteAccountToastId' });
                  console.log(error?.data?.message);
            }
      };

      return (
            <div>
                  <div className="w-full space-y-3  md:max-w-lg p-4 bg-white shadow-md rounded-lg border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900">Close your account</h3>
                        <p className=" text-gray-600 mt-1">Once you delete your account, there&apos;s no going back. Please be certain!</p>
                        <Button className="my-3" type="primary" onClick={handleDeleteAccount}>
                              Delete Account
                        </Button>
                  </div>
            </div>
      );
};

export default DeleteAccount;
