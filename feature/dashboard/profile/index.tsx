import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Edit Profile',
        children: <EditProfile />,
    },

    {
        key: '3',
        label: 'Change Password',
        children: <ChangePassword />,
    },
];

const Profile: React.FC = () => (
    <div className=" p-6">
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        itemColor: "#ABABAB"
                    },
                },
                token: {
                    colorPrimary: '#1A5FA4',
                },
            }}>
            <Tabs defaultActiveKey="1" items={items} />
        </ConfigProvider>
    </div>
);

export default Profile;