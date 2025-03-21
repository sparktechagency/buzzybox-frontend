import { Button, message } from 'antd';

const DeleteAccount = () => {
      const handleDeleteAccount = () => {
            message.loading('Account deleted!');
      };
      return (
            <div>
                  <div className="w-full space-y-3  md:max-w-lg p-4 bg-white shadow-md rounded-lg border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900">Close your account</h3>
                        <p className=" text-gray-600 mt-1">Once you delete your account, there’s no going back. Please be certain!</p>
                        <Button className="my-3" type="primary" onClick={handleDeleteAccount}>
                              Delete Account
                        </Button>
                  </div>
            </div>
      );
};

export default DeleteAccount;
