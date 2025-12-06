import React from 'react';
import { UserOutlined, CreditCardOutlined } from '@ant-design/icons';
import AdmitCardForm from './AdmitCardForm';
export default function AdmitCard() {
    return (
        <div className="">
            {/* Select Student Section */}
                <div className="flex items-center gap-2 mb-6">
                    <UserOutlined className="text-lg" />
                    <h2 className="text-lg font-medium">Select Student</h2>
                </div>
            <div className=" pb-10 pt-5 ">
                <div className=' w-full h-full '>
                    <AdmitCardForm />
                </div>
            </div> 

            {/* Admit Card Section */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <CreditCardOutlined className="text-lg" />
                    <h2 className="text-lg font-medium">Admit Card</h2>
                </div>

                <div className="flex items-center justify-center h-64 text-[#F1F1F1]">
                    <p>Sorry no subject is available</p>
                </div>
            </div>
        </div>
    );
}