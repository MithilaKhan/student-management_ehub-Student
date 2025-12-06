"use client";
import React, { useState } from 'react';
import TableMain from '@/shared/TableMain';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import smsStudentData from '@/constants/dashboard/sma-list-data';

const FilteredStudentTableForSms = () => {
  const [selectedStudentMobiles, setSelectedStudentMobiles] = useState<number[]>([]);
  const [selectedFatherMobiles, setSelectedFatherMobiles] = useState<number[]>([]);
  const [selectedGuardianMobiles, setSelectedGuardianMobiles] = useState<number[]>([]);

  const handleCheckAllStudent = (e: CheckboxChangeEvent) => {
    setSelectedStudentMobiles(e.target.checked ? smsStudentData.map(item => item.id) : []);
  };

  const handleCheckAllFather = (e: CheckboxChangeEvent) => {
    setSelectedFatherMobiles(e.target.checked ? smsStudentData.map(item => item.id) : []);
  };

  const handleCheckAllGuardian = (e: CheckboxChangeEvent) => {
    setSelectedGuardianMobiles(e.target.checked ? smsStudentData.map(item => item.id) : []);
  };

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
      title: 'Passport No.',
      dataIndex: 'passportNo',
      key: 'passportNo',
    },
    {
      title: 'Section',
      dataIndex: 'section',
      key: 'section',
    },
    {
      title: 'Enrolment',
      dataIndex: 'enrolment',
      key: 'enrolment',
    },
    {
      title: (
        <div className="text-center">
          <div>Student Mobile</div>
          <Checkbox onChange={handleCheckAllStudent}>Select All</Checkbox>
        </div>
      ),
      dataIndex: 'guardianMobile',
      key: 'guardianMobile',
      render: (text: string, record: any) => (
        <div className="flex items-center justify-between px-4">
          <span>{text}</span>
          <Checkbox
            checked={selectedStudentMobiles.includes(record.id)}
            onChange={() => {
              setSelectedStudentMobiles(prev =>
                prev.includes(record.id)
                  ? prev.filter(id => id !== record.id)
                  : [...prev, record.id]
              );
            }}
          />
        </div>
      ),
    },
    {
      title: (
        <div className="text-center">
          <div>Father's Mobile</div>
          <Checkbox onChange={handleCheckAllFather}>Select All</Checkbox>
        </div>
      ),
      dataIndex: 'fatherMobile',
      key: 'fatherMobile',
      render: (text: string, record: any) => (
        <div className="flex items-center justify-between px-4">
          <span>{text}</span>
          <Checkbox
            checked={selectedFatherMobiles.includes(record.id)}
            onChange={() => {
              setSelectedFatherMobiles(prev =>
                prev.includes(record.id)
                  ? prev.filter(id => id !== record.id)
                  : [...prev, record.id]
              );
            }}
          />
        </div>
      ),
    },
    {
      title: (
        <div className="text-center">
          <div>Guardian Mobile</div>
          <Checkbox onChange={handleCheckAllGuardian}>Select All</Checkbox>
        </div>
      ),
      dataIndex: 'motherMobile',
      key: 'motherMobile',
      render: (text: string, record: any) => (
        <div className="flex items-center justify-between px-4">
          <span>{text}</span>
          <Checkbox
            checked={selectedGuardianMobiles.includes(record.id)}
            onChange={() => {
              setSelectedGuardianMobiles(prev =>
                prev.includes(record.id)
                  ? prev.filter(id => id !== record.id)
                  : [...prev, record.id]
              );
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <TableMain
        columns={columns}
        dataSource={smsStudentData}
        pagination={{
          pageSize: 8,
          total: smsStudentData.length,
          showSizeChanger: false,
          showQuickJumper: false,
        }}
        className="w-full custom-table"
      />
    </div>
  );
};

export default FilteredStudentTableForSms;