
import React from 'react';
import { Input } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { LuWallet, LuX } from "react-icons/lu";
import HeaderTitle from '@/shared/HeaderTitle';
import Link from 'next/link';

const MerchantInfo = () => {

    const saveList = [
        { id: 1, label: 'E-hub', number: '01807786848' },
        { id: 2, label: 'E-hub', number: '01807786848' },
        { id: 3, label: 'E-hub', number: '01807786848' },
        { id: 4, label: 'E-hub', number: '01807786848' },
    ]


    return (
        <div>
            <div className="">
                <div className='md:max-w-1/2 pb-10'>
                    <Input
                        placeholder="Search"
                        className=" w-full h-[50px]"
                        style={{ height: 50 }}
                        prefix={<FiSearch size={20} />}
                    />
                </div>

                <HeaderTitle title="Saved Payment" className='text-[#1A5FA4] pb-4' />
                <div className="md:max-w-1/2 space-y-3">
                    {
                        saveList.map((payment) => (
                            <Link href={"/payment-method/payment"}
                                key={payment.id}
                                className="flex items-center justify-between p-4  rounded-lg hover:bg-[#232325] transition-colors "

                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#0A0B0D]  p-4 rounded-full flex items-center justify-center">
                                        <LuWallet className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <p className="text-white font-medium">{payment.label}</p>
                                        <p className="text-gray-400 text-sm">{payment.number}</p>
                                    </div>
                                </div>
                                <button
                                    // onClick={() => handleRemovePayment(payment.id)} 
                                    className="text-red-500 transition-colors font-medium text-sm flex items-center gap-1"
                                >
                                    <LuX className="w-4 h-4" />
                                    Remove
                                </button>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MerchantInfo;