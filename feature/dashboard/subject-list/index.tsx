"use client";
import React, { useState } from 'react';
import { Input } from 'antd';
import HeaderTitle from '@/shared/HeaderTitle';
import SubjectListTable from './SubjectListTable';
import { FiSearch } from 'react-icons/fi';
import SubjectListModal from '@/ui/modal/SubjectListModal';
// import { SubjectListType } from '@/type';

const SubjectList = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="">
                <div className="flex md:flex-row flex-col md:items-center md:justify-between md:space-y-0 space-y-4 mb-6">
                    <HeaderTitle title="Subject List" />

                    <div className="flex md:flex-row flex-col md:items-center justify-end gap-x-3 md:space-y-0 space-y-4 w-full">
                        <Input
                            placeholder="Search"
                            className="md:max-w-[280px] w-full"
                            style={{ height: 40 }}
                            prefix={<FiSearch size={20} />}
                        />

                        <button
                            type="submit"
                            className="bg-[#1A5FA4] h-[40px]  w-full md:max-w-[200px] rounded-md text-white"
                            onClick={() => setIsOpen(true)}
                        >
                            + Add Subject
                        </button>
                    </div>
                </div>
                <SubjectListTable isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <SubjectListModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default SubjectList;