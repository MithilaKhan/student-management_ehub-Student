import React from 'react';
import StudentRegistrationForm from './StudentRegistrationForm';

const StudentRegistration = () => {
    return (
        <div>
            <div className=' bg-[#1A5FA4] w-full py-5 text-white text-center text-[20px] font-normal '>
                <p>e.hub Student Registration Form</p>
            </div>
            <p className=' text-center text-[#FFC400] pt-4'> <span className='text-[#FF3333]'> **</span>Please provide all the information correctly. A verification link will be sent to your email address.</p>

            <div className=" pt-12 ">
                <div className='flex-center w-full h-full '>
                    <StudentRegistrationForm />
                </div>
            </div>

        </div>
    );
};

export default StudentRegistration;