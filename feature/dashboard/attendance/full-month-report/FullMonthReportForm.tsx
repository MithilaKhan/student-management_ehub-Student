"use client";
import React from 'react';
import { Form, Select, DatePicker } from 'antd';
import { MdArrowDropDown } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { batchOptions, gradeOptions, sectionOptions, subjectOptions } from '@/constants/dashboard/attendance-data'; 

const FullMonthReportForm = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const onFinish = (values: any) => {
        const grade = values.grade || '';
        const subject = values.subject || '';
        const batch = values.batch || '';
        const section = values.section || '';
        const date = values.reportDate ? values.reportDate.format('YYYY-MM-DD') : '';

        const query = new URLSearchParams({
            grade,
            subject,
            batch,
            section,
            date,
        }).toString();

        router.push(`/attendance/full-month-report/filter-month-attendance?${query}`);
    };

    return (
        <Form form={form} onFinish={onFinish} layout="vertical" className="md:w-[55%] w-full">
            <div className="space-y-4">
                <Form.Item
                    label={<label className="block text-sm text-[#9CA3AF]">Grade</label>}
                    name="grade"
                    rules={[{ required: true, message: "Please select Grade" }]}
                >
                    <Select
                        options={gradeOptions}
                        placeholder="Select Grade"
                        style={{ width: '100%', height: 45 }}
                        suffixIcon={<MdArrowDropDown color="white" size={22} />}
                    />
                </Form.Item>

                <Form.Item
                    label={<label className="block text-sm text-[#9CA3AF]">Subject</label>}
                    name="subject"
                    rules={[{ required: true, message: "Please select Subject" }]}
                >
                    <Select
                        options={subjectOptions}
                        placeholder="Select Subject"
                        style={{ width: '100%', height: 45 }}
                        suffixIcon={<MdArrowDropDown color="white" size={22} />}
                    />
                </Form.Item>

                <Form.Item
                    label={<label className="block text-sm text-[#9CA3AF]">Batch</label>}
                    name="batch"
                    rules={[{ required: true, message: "Please select Batch" }]}
                >
                    <Select
                        options={batchOptions}
                        placeholder="Select Batch"
                        style={{ width: '100%', height: 45 }}
                        suffixIcon={<MdArrowDropDown color="white" size={22} />}
                    />
                </Form.Item>

                <Form.Item
                    label={<label className="block text-sm text-[#9CA3AF]">Section Name</label>}
                    name="section"
                    rules={[{ required: true, message: "Please select Section" }]}
                >
                    <Select
                        options={sectionOptions}
                        placeholder="Select Section"
                        style={{ width: '100%', height: 45 }}
                        suffixIcon={<MdArrowDropDown color="white" size={22} />}
                    />
                </Form.Item>

                <Form.Item
                    label={<label className="block text-sm text-[#9CA3AF]">Report Date Range</label>}
                    name="reportDate"
                    rules={[{ required: true, message: "Please select date" }]}
                >
                    <DatePicker
                        placeholder="mm/dd/yyyy"
                        format="MM/DD/YYYY"
                        style={{ width: '100%', height: 45 }}
                        suffixIcon={<MdArrowDropDown color="white" size={22} />}
                    />
                </Form.Item>
            </div>

            <div className="flex justify-end gap-4 mt-6">
                <button
                    type="button"
                    onClick={() => form.resetFields()}
                    className="bg-[#3E1B1F] text-red-500 h-[40px] px-8 rounded-md hover:bg-[#4E2B2F]"
                >
                    Reset
                </button>
                <button
                    type="submit"
                    className="bg-[#1A5FA4] text-white h-[40px] px-8 rounded-md hover:bg-[#1550A0]"
                >
                    Get Filtered Student List
                </button>
            </div>
        </Form>
    );
};

export default FullMonthReportForm;