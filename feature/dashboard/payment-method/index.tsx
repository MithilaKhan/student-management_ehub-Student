"use client";
import HeaderTitle from '@/shared/HeaderTitle';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const PaymentMethod = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const paymentMethods = [
        { id: 'mobile', name: 'Mobile Banking', image: 'https://cdn-icons-png.flaticon.com/512/9118/9118813.png' },
        { id: 'bank', name: 'Banking', image: 'https://cdn-icons-png.flaticon.com/512/8700/8700875.png' },
    ];
    const paymentMethodsOptions = [
        { id: 'bkash', name: 'Bkash', image: 'https://play-lh.googleusercontent.com/1CRcUfmtwvWxT2g-xJF8s9_btha42TLi6Lo-qVkVomXBb_citzakZX9BbeY51iholWs' },
        { id: 'nagad', name: 'Nagad', image: 'https://play-lh.googleusercontent.com/9ps_d6nGKQzfbsJfMaFR0RkdwzEdbZV53ReYCS09Eo5MV-GtVylFD-7IHcVktlnz9Mo' },
        { id: 'rocket', name: 'Rocket', image: 'https://play-lh.googleusercontent.com/sDY6YSDobbm_rX-aozinIX5tVYBSea1nAyXYI4TJlije2_AF5_5aG3iAS7nlrgo0lk8' },
        { id: 'islamic', name: 'Islamic Bank', image: 'https://images.seeklogo.com/logo-png/28/1/islami-bank-bangladesh-ltd-logo-png_seeklogo-288455.png' },
        { id: 'dbbl', name: 'DBBL', image: 'https://api.karentpay.com//storage/images/dbbl.png' },
        { id: 'citybank', name: 'City Bank', image: 'https://fci.nl/sites/default/files/2023-04/The%20City%20Bank%20Bangladesh%20Website.png' },
    ];

    const handleImageClick = (id: string) => {
        setSelectedImage(id);
        console.log(`Selected: ${id}`);
    };
    return (
        <div className="">
            <div className="max-w-2xl">
                <HeaderTitle title={"Choose Payment Method"} className='text-[#1A5FA4]' />

                <div className="max-w-sm flex items-center justify-between  gap-6 pt-7">
                    {paymentMethods.map((method) => (
                        <div
                            key={method.id}
                            onClick={() => handleImageClick(method.id)}
                            className={`cursor-pointer flex flex-col items-center  transition-all duration-200 transform hover:scale-105 ${selectedImage === method.id ? 'ring-2 ring-blue-400' : ''
                                }`}
                        >
                            <div className="bg-transparent rounded-lg overflow-hidden  flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <img
                                    src={method.image}
                                    alt={method.name}
                                    className="h-20 w-20 object-fill"
                                />
                            </div>
                            <p className="text-gray-300 text-center mt-3 text-xl">{method.name}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
                    {paymentMethodsOptions.map((method) => (
                        <div
                            key={method.id}
                            onClick={() => handleImageClick(method.id)}
                            className={`cursor-pointer transition-all duration-200 transform hover:scale-105 ${selectedImage === method.id ? 'p-1 border-2 border-blue-400 rounded-xl' : ''
                                }`}
                        >
                            <div className="bg-gray-800 rounded-lg overflow-hidden h-40 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <img
                                    src={method.image}
                                    alt={method.name}
                                    className="w-full h-full object-fill"
                                />
                            </div>
                            {/* <p className="text-gray-300 text-center mt-3 text-sm">{method.name}</p>  */}
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div className="pt-10 flex justify-end">
                        <Link href={"/payment-method/merchant-info"} className=" bg-[#198754] h-[45px]  px-8 py-2.5 rounded-md text-white">
                            Continue
                        </Link >
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentMethod;