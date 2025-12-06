import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import ExcelOutputMarksheetForm from './ExcelOutputMarksheetForm';

const ExcelOutputMarksheets = () => {
    return (
        <div className=' w-full h-full'>
                <HeaderTitle title="Excel Output Marksheet" />       

            <div className=" pt-10 ">
                <div className=' w-full h-full '>
                    <ExcelOutputMarksheetForm />
                </div>
            </div> 
            
        </div>
    );
};

export default ExcelOutputMarksheets;