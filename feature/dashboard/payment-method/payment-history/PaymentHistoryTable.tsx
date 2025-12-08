"use client";
import React from "react";
import TableMain from "@/shared/TableMain";

const PaymentHistoryTable = () => {
    const dataSource = Array.from({ length: 10 }).map((_, i) => ({
        key: i + 1,
        date: "Jan 29, 2025",
        collectedBy: "ASHULIA",
        head: "Tuition Fee",
        receivable: "0.00",
        paid: "26,150.00",
        other: "0.00",
    }));

    const columns = [
        {
            title: "SL",
            dataIndex: "key",
            width: 60,
            render: (value: any, row: any) =>
                row.isTotal ? <b>Total</b> : value,
        },
        {
            title: "Transaction Date",
            dataIndex: "date",
        },
        {
            title: "Collected By",
            dataIndex: "collectedBy",
        },
        {
            title: "Head Description",
            dataIndex: "head",
        },
        {
            title: "Receivable",
            dataIndex: "receivable",
        },
        {
            title: "Paid",
            dataIndex: "paid",
        },
        {
            title: "Other",
            dataIndex: "other",
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

export default PaymentHistoryTable;
