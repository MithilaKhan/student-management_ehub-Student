"use client";
import { FaRegFileAlt } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import Link from 'next/link';
import type { MenuProps } from 'antd';
import { TiUserOutline } from 'react-icons/ti';
import { LuCalendarDays } from 'react-icons/lu';
import { MdPayment } from 'react-icons/md';

const  menuItems: MenuProps['items'] = [
        {
            key: '/course',
            icon: <FaRegFileAlt size={18} />,
            label: <Link href="/course">Course</Link>,
        },
        {
            key: '/class-routine',
            icon: <LuCalendarDays size={18} />,
            label: <Link href="/class-routine">Class Routine</Link>,
        },
        {
            key: '/payment-method',
            icon: <MdPayment size={18} />,
            label: <Link href="/payment-method">Payment Method</Link>,
        },
          {
            key: 'settings',
            icon: <TiUserOutline size={18} />,
            label: 'Settings',
            children: [
                {
                    key: '/settings/about-us',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/settings/about-us">About Us</Link>
                        </span>
                    ),
                },              
                {
                    key: '/settings/privacy-policy',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/settings/privacy-policy">Privacy Policy</Link>
                        </span>
                    ),
                },              
                {
                    key: '/settings/terms',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/settings/terms">Terms and Conditions</Link>
                        </span>
                    ),
                },              
            ],
        },
]

export { menuItems };