import React from 'react'
import { FaRegBell } from 'react-icons/fa6';
import { Badge } from 'antd';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='flex items-center gap-x-7 justify-end'>
            <Link href="/notification" className='h-fit pt-2'>
                <Badge count={1} >
                    <FaRegBell color="#7a777a" size={24} />
                </Badge>
            </Link>

            <Link href="/profile" className='flex  items-center gap-x-3'>
                <img
                    style={{
                        clipPath: "circle()",
                        width: 48,
                        height: 48,
                    }}
                    // src={profile?.data?.profile?.startsWith("https") ? profile?.data?.profile : `${imageUrl}${profile?.data?.profile}`} 
                    src="https://i.pinimg.com/736x/7b/05/51/7b0551406cd7936252123558aacc9191.jpg"
                    alt="person-male--v2"
                    className='clip'
                />
                <div className=' flex flex-col gap-y-0.5'>
                    <p className=' text-[16px] font-medium'> John Smith</p>
                    <p className=' text-[14px] font-medium'>250-12-0041</p>
                </div>

            </Link>
        </div>
    )
}

export default Header