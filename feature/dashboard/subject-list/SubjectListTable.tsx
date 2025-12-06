
import React from 'react';
import subjectListData from '@/constants/dashboard/subject-list-data';
import { modalType } from '@/type';
import TableMain from '@/shared/TableMain';
const SubjectListTable = ({ setIsOpen}:modalType) => { 

    const columns = [
        {
            title: 'SL',
            dataIndex: 'id',
            key: 'id',
            responsive: ['sm'] as any,
            render: (val: number) => val ?? '-',
        },
        {
            title: 'Subject Name',
            dataIndex: 'subjectName',
            key: 'subjectName',
        },
        {
            title: 'Subject Details',
            dataIndex: 'subjectDetails',
            key: 'subjectDetails',
            render: (val: string) => (val && val.trim() ? val : '--------------'),
            responsive: ['md'] as any,
        },
        {
            title: 'In Active',
            dataIndex: 'status',
            key: 'status',
            responsive: ['sm'] as any,
            render: (val: string) => (
                <span className={val?.toLowerCase() === 'active' ? 'text-green-400' : 'text-red-400'}>
                    {val ?? '-'}
                </span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            // _: any, record: SubjectListType
            render: () => (
                <div className="flex gap-2" onClick={()=>{setIsOpen(true)}}>
                    <button className="text-sm text-[#FF4D4D] cursor-pointer">Edit</button>
                </div>
            ),
        },
    ];

    return (
        <div>      
                <TableMain
                columns={columns}
                dataSource={subjectListData}
                className="w-full custom-table"
            />
        </div>
    );
};

export default SubjectListTable;