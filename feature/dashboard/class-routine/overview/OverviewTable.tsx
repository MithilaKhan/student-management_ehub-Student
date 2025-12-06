
import React from 'react';
import { modalType } from '@/type';
import TableMain from '@/shared/TableMain';
import { overviewData } from '@/constants/dashboard/class-routine-data';
const OverviewTable = ({ setIsOpen}:modalType) => { 

const columns = [
  {
    title: 'SL',
    dataIndex: 'id',
    key: 'id',
    responsive: ['sm'] as any,
    render: (val: number) => val ?? '-',
  },
  {
    title: 'Batch Name',
    dataIndex: 'batchName',
    key: 'batchName',
    render: (val: string) => val ?? '-',
  },
  {
    title: 'Subject Name',
    dataIndex: 'subjectName',
    key: 'subjectName',
    render: (val: string) => val ?? '-',
  },
  {
    title: 'Is Active',
    dataIndex: 'status',
    key: 'status',
    render: (val: string) => (
      <span className="text-green-400 cursor-default">View</span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, record: any) => (
      <div className="flex gap-2">
        <button
          onClick={() => setIsOpen(true)}
          className="text-sm text-[#FF4D4D] cursor-pointer"
        >
          Edit
        </button>
      </div>
    ),
  },
];

    return (
        <div>      
                <TableMain
                columns={columns}
                dataSource={overviewData}
                className="w-full custom-table"
            />
        </div>
    );
};

export default OverviewTable;