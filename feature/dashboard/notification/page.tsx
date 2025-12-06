import { allNotificationData } from '@/constants/dashboard/notification-data';
import moment from 'moment';
const Notification = () => {
    return (
        <div className="mt-5">
            <div className=" ">
                <div className="flex items-center justify-between my-4">
                    <div>
                        <h1 className="text-2xl font-semibold text-primary">Notification</h1>
                    </div>
                </div>
                <div>
                    {allNotificationData?.map((item: any, index: number) => {
                        return (
                            <div key={index} className="w-full mx-auto p-4 my-4 bg-[#333335]  min-h-20  shadow-md">
                                <div className=" text-sm">
                                    <div className="flex items-center gap-5">
                                        <p className="font-semibold text-[#aca9a9]">{item?.title}</p>
                                        <div className="flex justify-between items-center gap-5 text-[#bdbaba]">
                                            <span className="text-xs ">{moment(item?.createdAt).format('DD-MM-YYYY')}</span>
                                            <span className="text-xs ">{moment(item?.createdAt).format('hh:mm A')}</span>
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <p className="text-sm text-[#bebcbc]">{item?.text}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Notification;