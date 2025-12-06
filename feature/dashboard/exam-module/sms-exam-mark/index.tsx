import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import SMSExamMarkForm from './SMSExamMarkForm';

const SmsExamMark = () => {
    return (
        <div className=' w-full h-full'>
                <HeaderTitle title="SMS Marks Entry" />       

            <div className=" pt-10 ">
                <div className=' w-full h-full '>
                    <SMSExamMarkForm />
                </div>
            </div> 
            
        </div>
    );
};

export default SmsExamMark;