"use client";
import React, { useState } from 'react';
import TableMain from '@/shared/TableMain';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaBan, FaCheck } from 'react-icons/fa';
import { modalType } from '@/type';
import studentListData from '@/constants/dashboard/all-student-list-data';

const StudentListTable = ({ setIsOpen }: modalType) => {
    const [blockedUsers, setBlockedUsers] = useState<number[]>([]);

    const handleBlockToggle = (id: number) => {
        setBlockedUsers(prev =>
            prev.includes(id)
                ? prev.filter(userId => userId !== id)
                : [...prev, id]
        );
    };

    const columns = [
        {
            title: 'SL',
            dataIndex: 'id',
            key: 'id',
            width: 60,
        },
        {
            title: 'Student Id',
            dataIndex: 'studentId',
            key: 'studentId',
        },
        {
            title: 'Student Name',
            dataIndex: 'studentName',
            key: 'studentName',
        },
        {
            title: 'Email Address',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Passport No.',
            dataIndex: 'passportNo',
            key: 'passportNo',
        },
        {
            title: 'Mobile No.',
            dataIndex: 'mobileNo',
            key: 'mobileNo',
        },
        {
            title: 'Guardian Name',
            dataIndex: 'guardianName',
            key: 'guardianName',
        },
        {
            title: 'Guardian Contact',
            dataIndex: 'guardianContact',
            key: 'guardianContact',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <div className="flex items-center gap-3">
                    <button onClick={() => setIsOpen(true)} className="text-[#FBBF24]">
                        <AiOutlineEdit size={16} />
                    </button>
                    <button
                        onClick={() => handleBlockToggle(record.id)}
                        className={`text-sm px-2 py-1 rounded flex items-center gap-1 ${blockedUsers.includes(record.id)
                            ? 'text-red-500 hover:text-red-400'
                            : ' text-green-500 hover:text-green-400'
                            }`}
                    >
                        {blockedUsers.includes(record.id) ? (
                            <>
                                <FaBan size={14} />
                                <span>Block</span>
                            </>
                        ) : (
                            <>
                                <FaCheck size={14} />
                                <span>Unblock</span>
                            </>
                        )}
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <TableMain
                columns={columns}
                dataSource={studentListData}
                pagination={{ pageSize: 9 }}
                className="w-full custom-table"
            />
        </div>
    );
};

export default StudentListTable;