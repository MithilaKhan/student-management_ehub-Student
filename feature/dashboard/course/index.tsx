
import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import StudentFilterForm from './StudentFilterForm';

const Course = () => {

    return (
        <div className=' w-full h-full'>
            <HeaderTitle title="Assign Section and Course" />

            <div className=" h-[78vh] "> 
                <div className='flex-center w-full h-full '>
               
                    <StudentFilterForm />
                </div>
            </div>
        </div>
    );
};

export default Course;