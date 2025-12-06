import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import ExcelOutputReportForm from './ExcelOutputReportForm';

const ExcelOutputReport = () => {
    return (
        <div>
            <HeaderTitle title=" Student Attendance Report Excel " /> 

            <div className='h-[75vh]'> 
            <div className='flex-center w-full h-full '>
                <ExcelOutputReportForm />
            </div>
            </div>
        </div>
    );
};

export default ExcelOutputReport;