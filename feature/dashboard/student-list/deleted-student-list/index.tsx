
import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import StudentFilterForm from './StudentFilterForm';

const DeletedStudentList = () => {

    return (
        <div className=' w-full h-full'>
            <HeaderTitle title="Filter Student List" />

            <div className=" h-[60vh] ">
                <div className='flex-center w-full h-full '>
                    <StudentFilterForm />
                </div>
            </div>
        </div>
    );
};

export default DeletedStudentList;