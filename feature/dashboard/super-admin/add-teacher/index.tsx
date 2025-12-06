"use client"
import React, { useState } from 'react';
import AddTeacherTable from './AddTeacherTable';
import TeacherModal from '@/ui/modal/TeacherModal';
import HeaderTitle from '@/shared/HeaderTitle';

const AddTeacher = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-full h-full'>
            <div className='flex items-center justify-between mb-6'>
                <HeaderTitle title="Teacher List" />
                <button type="submit" className=" bg-[#1A5FA4] h-[40px]  px-6 w-full md:max-w-[200px] rounded-md text-white" onClick={() => setOpen(true)}>
                    + Add Teacher
                </button>
            </div>
            <div>
                <AddTeacherTable setIsOpen={setOpen} />
            </div>
            <TeacherModal isOpen={open} setIsOpen={setOpen} />
        </div>
    );
};

export default AddTeacher;