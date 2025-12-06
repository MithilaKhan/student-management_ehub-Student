
import React from 'react';
import { modalType } from '@/type';
import TableMain from '@/shared/TableMain';
import sectionListData from '@/constants/dashboard/section-list-data';
const SectionListTable = ({ setIsOpen}:modalType) => { 

    const columns = [
    {
      title: 'SL',
      dataIndex: 'id',
      key: 'id',
      render: (val: number) => val ?? '-',
    },
    {
      title: 'Section Name',
      dataIndex: 'sectionName',
      key: 'sectionName',
    },
    {
      title: 'Subject',
      dataIndex: 'subjectName',
      key: 'subjectName',
    },
    {
      title: 'Batch Name',
      dataIndex: 'batchName',
      key: 'batchName',
    },
    {
      title: 'Seats Empty',
      dataIndex: 'seatsEmpty',
      key: 'seatsEmpty',
      render: (val: number) => val ?? '-',
    },
    {
      title: 'Seats Filled',
      dataIndex: 'seatsFilled',
      key: 'seatsFilled',
      render: (val: number) => val ?? '-',
    },
    {
      title: 'Total Seats',
      dataIndex: 'totalSeats',
      key: 'totalSeats',
      render: (val: number) => val ?? '-',
    },
    {
      title: 'Is Active',
      dataIndex: 'status',
      key: 'status',
      render: (val: string) => (
        <span className={val?.toLowerCase() === 'active' ? 'text-green-400' : 'text-red-400'}>
          {val ?? '-'}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <div className="flex gap-2" onClick={() => setIsOpen(true)}>
          <button className="text-sm text-[#FF4D4D] cursor-pointer">Edit</button>
        </div>
      ),
    },
  ];

    return (
        <div>      
                <TableMain
                columns={columns}
                dataSource={sectionListData}
                className="w-full custom-table"
            />
        </div>
    );
};

export default SectionListTable;