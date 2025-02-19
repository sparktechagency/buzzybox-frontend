'use client';

import CustomTab from '@/components/shared/CustomTab';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';

const Settings = () => {
      return (
            <div className=" p-3 md:p-5 custom-shadow w-fit min-w-[500px]">
                  <CustomTab
                        tabs={[
                              { key: 'change-password', label: 'Change Password', content: <ChangePassword /> },
                              { key: 'account', label: 'Account', content: <DeleteAccount /> },
                        ]}
                        defaultActiveKey="change-password"
                  />
            </div>
      );
};

export default Settings;
