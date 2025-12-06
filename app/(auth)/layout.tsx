import React from 'react';
import { Poppins } from 'next/font/google';
import { ConfigProvider } from 'antd';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className="w-full flex items-center justify-center relative text-[#f5f4f4] bg-[#0A0B0D]"
            style={{ height: "100vh" }}
        >
            <div
                className={`${poppins.className} shadow-xl bg-[#3b3b3d] bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-100/40 p-7 rounded-md w-[570px] relative z-10 text-[#f5f4f4]`}
            >
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#ffffff1a',
                        },
                    }} >
                    {children}
                </ConfigProvider>
            </div>
        </div>
    );
};

export default Layout;
