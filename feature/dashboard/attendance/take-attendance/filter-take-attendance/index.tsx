"use client";
import React, { useMemo, useState } from "react";
import TableMain from "@/shared/TableMain";
import { Checkbox } from "antd";
import { FiEdit } from "react-icons/fi";
import { useSearchParams } from "next/navigation";

const sampleData = [
  { id: 1, studentName: "Adiyat Rahman" },
  { id: 2, studentName: "Adiyat Rahman" },
  { id: 3, studentName: "Shafana mahmud" },
  { id: 4, studentName: "Shafana mahmud" },
  { id: 5, studentName: "Shafana mahmud" },
  { id: 6, studentName: "Shafana mahmud" },
  { id: 7, studentName: "Shafana mahmud" },
  { id: 8, studentName: "Shafana mahmud" },
];

const ordinal = (d: number) => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const formatNiceDate = (date: Date) => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day}${ordinal(day)} ${month}, ${year}`;
};

const FilterTakeAttendance = () => {
  const search = useSearchParams();
  const subject = search?.get("subject") ?? "IAL Accounting A2";
  const batch = search?.get("batch") ?? "IAL - A2 Accounting May 2026 B#1";
  const section = search?.get("section") ?? "Batch 01";
  const dateParam = search?.get("date");
  const displayDate = dateParam ? new Date(dateParam) : new Date("2025-01-25");

  const [attendanceMap, setAttendanceMap] = useState<Record<number, string>>({});

  const presentCount = useMemo(
    () =>
      Object.values(attendanceMap).filter((v) => v === "present").length,
    [attendanceMap]
  );

  const handleRowSelect = (id: number, type: string) => {
    setAttendanceMap((prev) => {
      // toggle same value -> unset
      if (prev[id] === type) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: type };
    });
  };

  const handleSelectAll = (type: string, checked: boolean) => {
    if (!checked) {
      // remove type selections
      setAttendanceMap((prev) => {
        const copy = { ...prev };
        Object.keys(copy).forEach((k) => {
          if (copy[Number(k)] === type) delete copy[Number(k)];
        });
        return copy;
      });
      return;
    }
    // set all to type (exclusive)
    const newMap: Record<number, string> = {};
    sampleData.forEach((d) => {
      newMap[d.id] = type;
    });
    setAttendanceMap(newMap);
  };

  const handleReset = () => setAttendanceMap({});

  const columns = [
    {
      title: "SL",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: (v: number) => v ?? "-",
    },
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Attendance",
      children: [
        {
          title: (
            <div className="text-center flex-center gap-1">
              <div className="text-sm">Present</div>
              <div className="mt-1">
                <Checkbox
                  onChange={(e) => handleSelectAll("present", e.target.checked)}
                  checked={
                    sampleData.length > 0 &&
                    Object.values(attendanceMap).filter((v) => v === "present")
                      .length === sampleData.length
                  }
                >
                </Checkbox>
              </div>
            </div>
          ),
          dataIndex: "present",
          key: "present",
          render: (_: any, record: any) => (
            <div className="flex items-center justify-between px-4">
              <span className="text-green-400 text-sm">Present</span>
              <Checkbox
                checked={attendanceMap[record.id] === "present"}
                onChange={() => handleRowSelect(record.id, "present")}
              />
            </div>
          ),
        },
        {
          title: (
            <div className="text-center flex-center gap-1 ">
              <div className="text-sm">Absent</div>
              <div className="mt-1">
                <Checkbox
                  onChange={(e) => handleSelectAll("absent", e.target.checked)}
                  checked={
                    sampleData.length > 0 &&
                    Object.values(attendanceMap).filter((v) => v === "absent")
                      .length === sampleData.length
                  }
                >
                </Checkbox>
              </div>
            </div>
          ),
          dataIndex: "absent",
          key: "absent",
          render: (_: any, record: any) => (
            <div className="flex items-center justify-between px-4">
              <span className="text-red-500 text-sm">Absent</span>
              <Checkbox
                checked={attendanceMap[record.id] === "absent"}
                onChange={() => handleRowSelect(record.id, "absent")}
              />
            </div>
          ),
        },
        {
          title: (
            <div className="text-center flex-center gap-1">
              <div className="text-sm">Late</div>
              <div className="mt-1">
                <Checkbox
                  onChange={(e) => handleSelectAll("late", e.target.checked)}
                  checked={
                    sampleData.length > 0 &&
                    Object.values(attendanceMap).filter((v) => v === "late")
                      .length === sampleData.length
                  }
                >
                </Checkbox>
              </div>
            </div>
          ),
          dataIndex: "late",
          key: "late",
          render: (_: any, record: any) => (
            <div className="flex items-center justify-between px-4">
              <span className="text-yellow-400 text-sm">Late</span>
              <Checkbox
                checked={attendanceMap[record.id] === "late"}
                onChange={() => handleRowSelect(record.id, "late")}
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div>
      {/* header */}
      <div className="flex md:flex-row flex-col items-start justify-between md:space-y-0 space-y-4 ">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-[#1e293b]">
            <FiEdit className="text-white" />
          </div>
          <h3 className="text-white text-lg font-medium">
            Filtered Student List For Attendance
          </h3>
        </div>

        <div className="">
          <div className="text-[#1E88E5] font-semibold md:text-2xl text-xl">
            Date: {formatNiceDate(displayDate)}
          </div>
          <div className="text-[16px] text-gray-300 md:mt-2 mt-0">
            <div>Subject: {subject}</div>
            <div>Batch: {batch}</div>
            <div>Section: {section}</div>
          </div>
        </div>
      </div>

      {/* badge */}
      <div className="mb-5">
        <span className="inline-block bg-[#198754] text-white text-sm md:px-4 px-2 py-1 rounded-full">
          Total Present: {presentCount}
        </span>
      </div>

      {/* table */}
      <TableMain
        columns={columns}
        dataSource={sampleData}
        rowKey="id"
        pagination={{ pageSize: 6 }}
        className="w-full custom-table"
      />

      {/* actions */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={handleReset}
          className="bg-[#3E1B1F] text-red-500 h-[40px] px-6 rounded-md"
        >
          Reset
        </button>
        <button
          onClick={() => console.log("submit", attendanceMap)}
          className="bg-[#1A5FA4] text-white h-[40px] px-6 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FilterTakeAttendance;