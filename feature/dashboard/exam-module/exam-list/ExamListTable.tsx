"use client";
import React from "react";
import { modalType } from "@/type";
import { examListData } from "@/constants/dashboard/exam-module";
import TableMain from "@/shared/TableMain";

const ExamListTable = ({ setIsOpen }: modalType) => {

    const columns = [
        {
            title: "SL",
            dataIndex: "key",
            key: "key",
            render: (val: string) => val ?? "-",
        },
        {
            title: "Exam Title",
            dataIndex: "examTitle",
            key: "examTitle",
        },
        {
            title: "Exam Type",
            dataIndex: "examType",
            key: "examType",
        },
        {
            title: "Exam Details",
            dataIndex: "examDetails",
            key: "examDetails",
        },
        {
            title: "Subject Exam",
            dataIndex: "subjectExam",
            key: "subjectExam",
        },
        {
            title: "Batch Name",
            dataIndex: "batchName",
            key: "batchName",
        },
        {
            title: "Is Active",
            dataIndex: "isActive",
            key: "isActive",
            render: (val: string) => (
                <span className={val?.toLowerCase() === "active" ? "text-green-400" : "text-red-400"}>
                    {val}
                </span>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-[#FF4D4D] cursor-pointer"
                >
                    Edit
                </button>
            ),
        },
    ];

    return (
        <div className="custom-table w-full">
            <TableMain
                columns={columns}
                dataSource={examListData}
                pagination={{ pageSize: 10 }}
                rowClassName="custom-table"
            />
        </div>
    );
};

export default ExamListTable;
