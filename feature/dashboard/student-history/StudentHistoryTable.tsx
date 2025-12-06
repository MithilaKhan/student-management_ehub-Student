"use client";
import React from 'react';
import TableMain from '@/shared/TableMain';
import studentHistoryData from '@/constants/dashboard/student-history-data';

const StudentHistoryTable = () => {
  const columns = [
    {
      title: 'SL',
      dataIndex: 'id',
      key: 'id',
      width: 60,
      render: (val: number) => val ?? '-',
    },
    {
      title: 'Student Name',
      dataIndex: 'studentName',
      key: 'studentName',
    },
    {
      title: 'Batch Name',
      dataIndex: 'batchName',
      key: 'batchName',
    },
    {
      title: 'Batch Start',
      dataIndex: 'batchStart',
      key: 'batchStart',
    },
    {
      title: 'Batch End',
      dataIndex: 'batchEnd',
      key: 'batchEnd',
    },
    {
      title: 'Enrolment Date',
      dataIndex: 'enrolmentDate',
      key: 'enrolmentDate',
    },
    {
      title: 'Is Active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (val: string) => (
        <span className="text-green-400">{val}</span>
      ),
    },
    {
      title: 'Disenrolment Date',
      dataIndex: 'disenrolmentDate',
      key: 'disenrolmentDate',
    },
  ];

  return (
    <div>
      <TableMain
        columns={columns}
        dataSource={studentHistoryData}
        pagination={{ pageSize: 6}}
        className="w-full custom-table"
      />
    </div>
  );
};

export default StudentHistoryTable;