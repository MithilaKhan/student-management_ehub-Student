import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import FullMonthReportForm from './FullMonthReportForm';

const FullMonthReport = () => {
    return (
           <div>
            <HeaderTitle title="Filter Student Full Month Attendance " /> 

            <div className=' h-[78vh]'> 
            <div className='flex-center w-full h-full pt-6'>
                <FullMonthReportForm />
            </div>
            </div>
        </div>
    );
};

export default FullMonthReport;