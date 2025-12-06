import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import FilterForm from './FilterForm';
import { Input } from 'antd';
import { FiSearch } from 'react-icons/fi';
import StudentHistoryTable from './StudentHistoryTable';
const StudentHistory = () => {
    return (
        <div>
            <HeaderTitle title="Student Details" />
            <div className='flex-center w-full h-full pb-10 md:pt-0 pt-3 '>
                <FilterForm />
            </div>

            <div className="flex md:flex-row flex-col md:items-center justify-between md:space-y-0 space-y-4 mb-6">
                <HeaderTitle title="Student History" />
                <Input placeholder="Search" className=" md:max-w-[320px] w-full" style={{ height: 40 }} prefix={<FiSearch size={20} />} />
            </div>
            <StudentHistoryTable />
        </div>
    );
};

export default StudentHistory;