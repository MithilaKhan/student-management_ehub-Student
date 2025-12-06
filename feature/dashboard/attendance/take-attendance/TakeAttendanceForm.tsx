"use client";
import React from 'react';
import { Form, Select, DatePicker } from 'antd';
import { MdArrowDropDown } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { studentOptions } from '@/constants/dashboard/class-routine-data';
import { batchOptions, gradeOptions, sectionOptions, subjectOptions } from '@/constants/dashboard/attendance-data';

const TakeAttendanceForm = () => {
    const [form] = Form.useForm();
    const router = useRouter();

    const handleReset = () => {
        form.resetFields();
    };

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

        router.push(`/attendance/take-attendance/filter-take-attendance?${query}`);
    };

    return (
        <Form form={form} onFinish={onFinish} layout="vertical" className=' md:w-[55%] w-full'>
            <div className="grid grid-cols-1 ">
                <Form.Item
                    label={<label className="block text-sm text-[#9CA3AF]">Grade</label>}
                    name="grade"
                >
                    <Select
                        options={gradeOptions}
                        placeholder="Select Grade"
                        showSearch
                        optionFilterProp="label"
                        style={{ width: '100%', height: 45 }}
                        suffixIcon={<p> <MdArrowDropDown color='white' size={22} /> </p>}
                    />
                </Form.Item>

                <Form.Item
                    label={<label className="block text-sm text-[#9CA3AF]">Subject</label>}
                    name="subject"
                >
                    <Select
                        options={subjectOptions}
                        placeholder="Select Subject"
                        showSearch
                        optionFilterProp="label"
                        style={{ width: '100%', height: 45 }}
                        suffixIcon={<p> <MdArrowDropDown color='white' size={22} /> </p>}
                    />
                </Form.Item>

                <Form.Item
                    label={<label className="block text-sm text-[#9CA3AF]">Batch</label>}
                    name="batch"
                >
                    <Select
                        options={batchOptions}
                        placeholder="Select Batch"
                        showSearch
                        optionFilterProp="label"
                        style={{ width: '100%', height: 45 }}
                        suffixIcon={<p> <MdArrowDropDown color='white' size={22} /> </p>}
                    />
                </Form.Item>

                <Form.Item
                    label={<label className="block text-sm text-[#9CA3AF]">Section</label>}
                    name="section"
                >
                    <Select
                        options={sectionOptions}
                        placeholder="Select Section"
                        showSearch
                        optionFilterProp="label"
                        style={{ width: '100%', height: 45 }}
                        suffixIcon={<p> <MdArrowDropDown color='white' size={22} /> </p>}
                    />
                </Form.Item>

                <Form.Item
                    label={<label className="block text-sm text-[#9CA3AF]">Report Of The Date</label>}
                    name="reportDate"
                    rules={[{ required: true, message: "Please select date" }]}
                >
                    <DatePicker
                        placeholder="mm/dd/yyyy"
                        format="MM/DD/YYYY"
                        style={{ width: '100%', height: 45 }}
                        suffixIcon={<MdArrowDropDown className="text-white" size={22} />}
                    />
                </Form.Item>

                <Form.Item
                    label={<label className="block text-sm text-[#9CA3AF]">Student Name</label>}
                    name="studentName"
                    rules={[{ required: true, message: "Please enter Student Name" }]}
                >
                    <Select
                        options={studentOptions}
                        placeholder="Select Student Name"
                        showSearch
                        optionFilterProp="label"
                        style={{ width: '100%', height: 45 }}
                        suffixIcon={<p> <MdArrowDropDown color='white' size={22} /> </p>}
                    />
                </Form.Item>
            </div>

            <div className="flex justify-end gap-4 mt-4">
                <button
                    type="button"
                    onClick={handleReset}
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

export default TakeAttendanceForm;