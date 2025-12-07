import Header from '@/shared/Header';
import Sidebar from '@/shared/Sidebar';
import { ConfigProvider } from 'antd';
import HeaderDrawerWrapper from '@/ui/HeaderDrawerWrapper';
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-12 text-[#ABABAB] bg-black">

            {/* Desktop Sidebar */}
            <div className="hidden md:block col-span-2 h-screen bg-[#1C1C1E] overflow-x-hidden">
                <Sidebar />
            </div>

            <div className="col-span-12 md:col-span-10 p-4 h-[100vh]">
                <div className="h-[78px] flex items-center justify-between md:justify-end pr-5 bg-[#1C1C1E] rounded-md ps-2">
                    <HeaderDrawerWrapper />
                    <Header />
                </div>
                {/* Content */}
                <div className="pt-4 h-[calc(100vh-95px)]">
                    <div className="h-full overflow-y-auto rounded-md bg-[#1C1C1E] p-5">
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#ffffff1a',
                                    colorIcon: 'white',
                                    colorBgBase: '#333335',
                                    colorText: 'white',
                                    colorTextPlaceholder: '#9CA3AF',
                                },
                            }}
                        >

                            {children}
                        </ConfigProvider>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default layout;