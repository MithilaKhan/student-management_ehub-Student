
import React from 'react';
import { modalType } from '@/type';
import TableMain from '@/shared/TableMain';
import batchListData from '@/constants/dashboard/batch-list-data';
const BatchListTable = ({ setIsOpen }: modalType) => {

  const columns = [
    {
      title: 'SL',
      dataIndex: 'id',
      key: 'id',
      render: (val: number) => val ?? '-',
    },
    {
      title: 'Batch Name',
      dataIndex: 'batchName',
      key: 'batchName',
    },
    {
      title: 'Batch Details',
      dataIndex: 'batchDetails',
      key: 'batchDetails',
      render: (val: string) => (val && val.trim() ? val : '--------------'),
    },
    {
      title: 'Batch Msg',
      dataIndex: 'batchMsg',
      key: 'batchMsg',
      render: (val: string) => (val && val.trim() ? val : '-'),
    },
    {
      title: 'Subject Name',
      dataIndex: 'subjectName',
      key: 'subjectName',
    },
    {
      title: 'Reg. Start Date',
      dataIndex: 'regStartDate',
      key: 'regStartDate',
      render: (val: string) => val ?? '-',
    },
    {
      title: 'Reg. End Date',
      dataIndex: 'regEndDate',
      key: 'regEndDate',
      render: (val: string) => val ?? '-',
    },
    {
      title: 'In Active',
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
        dataSource={batchListData}
        className="w-full custom-table"
      />
    </div>
  );
};

export default BatchListTable;