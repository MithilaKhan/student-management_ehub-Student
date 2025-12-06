import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import MarksEntryForm from './MarksEntryForm';

const MarksEntry = () => {
    return (
        <div className=' w-full h-full'>
                <HeaderTitle title="Marks Entry" />       

            <div className=" h-[70vh] ">
                <div className='flex-center w-full h-full '>
                    <MarksEntryForm />
                </div>
            </div> 
            
        </div>
    );
};

export default MarksEntry;