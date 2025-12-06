import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import StudentWaitingForm from './StudentWaitingForm';

const StudentWaitingList = () => { 

    return (
        <div className=' w-full h-full'>
                <HeaderTitle title="Filter Student Waiting List" />       

            <div className=" h-[70vh] ">
                <div className='flex-center w-full h-full '>
                    <StudentWaitingForm />
                </div>
            </div> 
            
        </div>
    );
};

export default StudentWaitingList;