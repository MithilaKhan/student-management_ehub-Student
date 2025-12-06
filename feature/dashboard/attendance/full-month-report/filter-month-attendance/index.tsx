"use client";
import React from "react";
import TableMain from "@/shared/TableMain";
import { useSearchParams } from "next/navigation";
import { monthlyData } from "@/constants/dashboard/attendance-data";

const FilterMonthAttendance = () => {
  const search = useSearchParams();
  const subject = search?.get("subject") ?? "IAL Accounting A2";
  const batch = search?.get("batch") ?? "IAL - A2 Accounting May 2026 B#1";
  const section = search?.get("section") ?? "Batch 01";

  const columns = [
    {
      title: "SL",
      dataIndex: "id",
      key: "id",
      width: 60,
    },
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
      width: 150,
    },
    // Generate columns for days 1-31
    ...Array(31).fill(null).map((_, index) => ({
      title: (index + 1).toString(),
      dataIndex: ['attendance', index],
      key: `day${index + 1}`,
      width: 40,
      render: (text: string) => <span className="text-center block">{text}</span>,
    })),
    {
      title: "Total Attendance",
      dataIndex: "totalAttendance",
      key: "totalAttendance",
      width: 80,
    },
    {
      title: "Total Classes",
      dataIndex: "totalClasses",
      key: "totalClasses",
      width: 80,
    },
    {
      title: "Father Number",
      dataIndex: "fatherNumber",
      key: "fatherNumber",
      width: 120,
    },
    {
      title: "Mother Number",
      dataIndex: "motherNumber",
      key: "motherNumber",
      width: 120,
    },
  ];

  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center justify-between md:space-y-0 space-y-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-white text-lg">Student History</span>
        </div>
        <div className="md:text-right text-left text-sm text-gray-400">
          <div>Subject: {subject}</div>
          <div>Batch: {batch}</div>
          <div>Section: {section}</div>
          <div>Month-Year: September-2025</div>
        </div>
      </div>

      <TableMain
        columns={columns}
        dataSource={monthlyData}
        pagination={false}
        scroll={{ x: 'max-content' }}
        className="w-full custom-table month-attendance-table"
      />

    </div>
  );
};

export default FilterMonthAttendance;