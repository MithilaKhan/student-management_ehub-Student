import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import ReportRangeForm from './ReportRangeForm';

const ReportForSMS = () => {
    return (
       <div className=' w-full h-full'>
            <HeaderTitle title="SMS Date-Range Filter" />

            <div className=" h-[70vh] ">
                <div className='flex-center w-full h-full '>
                    <ReportRangeForm />
                </div>
            </div>

        </div>
    );
};

export default ReportForSMS;