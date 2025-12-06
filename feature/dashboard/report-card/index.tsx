
import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import StudentFilterForm from './StudentFilterForm';

const ReportCard = () => {

    return (
        <div className=' w-full h-full'>
            <HeaderTitle title="Filter Student List" />

            <div className=" h-[78vh] ">
                <div className='flex-center w-full h-full '>
                    <StudentFilterForm />
                </div>
            </div>
        </div>
    );
};

export default ReportCard;