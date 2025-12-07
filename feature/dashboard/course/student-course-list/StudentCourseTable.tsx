"use client";
import React from "react";
import TableMain from "@/shared/TableMain";

const StudentCourseTable = () => {
  const dataSource = Array.from({ length: 10 }).map((_, i) => ({
    key: i + 1,
    studentName: "Md. Azizul Haque",
    email: "azizul@gmail.com",
    passport: "1484720980",
    batch: "Standard-4 Boys 2025",
    subject: "Standard 4",
    section: "Batch 1",
  }));

  const columns = [
    {
      title: "SL",
      dataIndex: "key",
      key: "key",
      width: 60,
    },
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Passport Number",
      dataIndex: "passport",
      key: "passport",
    },
    {
      title: "Batch",
      dataIndex: "batch",
      key: "batch",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Section",
      dataIndex: "section",
      key: "section",
    },
    {
      title: "Download Form",
      key: "download",
      render: () => (
        <a
          href="#"
          className="text-[#42A7C3] underline hover:text-[#68c4df]"
        >
          Download Form 
          {/* dsf */}
        </a>
      ),
    },
  ];

  return (
    <div className="pt-5">
      <TableMain
        columns={columns}
        dataSource={dataSource}
        rowKey="key"
        pagination={{ pageSize: 10 }}
        className="w-full custom-table"
      />
    </div>
  );
};

export default StudentCourseTable;
