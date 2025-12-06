import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import ProfilePDFForm from './StudentForm';

const StudentForm = () => {
    return (
          <div className=' w-full h-full'>
                <HeaderTitle title="Download Profile PDF" />

            <div className=" h-[80vh] ">
                <div className='flex-center w-full h-full '>
                    <ProfilePDFForm />
                </div>
            </div> 
        </div>
    );
};

export default StudentForm;