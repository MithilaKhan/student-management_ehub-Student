"use client";
import React from "react";
import TableMain from "@/shared/TableMain";
import { marksheetData } from "@/constants/dashboard/exam-module";

const StudentListTable = () => {
    const columns = [
        {
            title: "SL",
            dataIndex: "key",
            key: "key",
            render: (val: string) => val ?? "-",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Contact",
            dataIndex: "contact",
            key: "contact",
        },
        {
            title: "Father Name",
            dataIndex: "fatherName",
            key: "fatherName",
        },
        {
            title: "Mother Name",
            dataIndex: "motherName",
            key: "motherName",
        },
    ];

  return (
        <div className="custom-table w-full">
            <TableMain
                columns={columns}
                dataSource={marksheetData}
                pagination={{ pageSize: 8 }}
                rowClassName="custom-table"
            />
        </div>
    );
};

export default StudentListTable;
