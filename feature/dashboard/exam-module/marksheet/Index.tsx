import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import MarksheetForm from './MarksheetForm';

const Marksheet = () => {
    return (
               <div className=' w-full h-full'>
                <HeaderTitle title="Marksheet" />       

            <div className=" h-[70vh]  w-full">
                <div className='flex-center w-full h-full '>
                    <MarksheetForm />
                </div>
            </div> 
            
        </div>
    );
};

export default Marksheet;