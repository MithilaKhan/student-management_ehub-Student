import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import UnpaidStudentFilterForm from './UnpaidStudentFilterForm';

const UnpaidStudent = () => {
    return (
        <div className=' w-full h-full'>
            <HeaderTitle title="Filter Un-Paid List" />

            <div className=" h-[70vh] md:mt-0 mt-6 ">
                <div className='flex-center w-full h-full '>
                    <UnpaidStudentFilterForm />
                </div>
            </div>

        </div>
    );
};

export default UnpaidStudent;