import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import SmsWeeklyDailyForm from './SmsWeeklyDailyForm';

const SmsWeeklyDaily = () => {
    return (
        <div>
            <HeaderTitle title=" Student Weekly/Daily Attendance SMS " />
            <div className='flex-center w-full h-full pt-12'>
                <SmsWeeklyDailyForm />
            </div>
        </div>
    );
};

export default SmsWeeklyDaily;