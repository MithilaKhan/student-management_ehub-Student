import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import AllStudentForm from './AllStudentForm';

const AllStudent = () => {
    return (
        <div className=' w-full h-full'>
            <HeaderTitle title="Filter Student List" />

            <div className=" h-[70vh] md:mt-0 mt-6 ">
                <div className='flex-center w-full h-full '>
                    <AllStudentForm />
                </div>
            </div>

        </div>
    );
};

export default AllStudent;