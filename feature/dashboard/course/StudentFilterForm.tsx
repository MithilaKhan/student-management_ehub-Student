"use client";
import React from 'react';
import { DatePicker, Form, Select } from 'antd';
import { studentOptions } from '@/constants/dashboard/class-routine-data';
import { MdArrowDropDown } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { IoCalendarOutline } from 'react-icons/io5';

const StudentFilterForm = () => {
    const router = useRouter();
      const onFinish = (values: any) => {
        const grade = values.grade || '';
        const subject = values.subject || '';
        const batch = values.batch || '';
        const section = values.section || '';

        const month = values.month ? values.month.format('MMMM') : '';
        const year = values.year ? values.year.format('YYYY') : '';

        const params = new URLSearchParams({
            grade,
            subject,
            batch,
            section,
            month,
            year,
        });

        // router.push(`/report-card/filtered-student-list?${params.toString()}`);
    }
    return (
        <Form layout="vertical" className=' md:w-[50%] w-full' onFinish={onFinish}> 
         <p className=' text-[#1A5FA4] font-medium text-xl pb-4'>Enrol Student to Course</p>
            <Form.Item
                label={<label className="block text-sm text-[#9CA3AF]">Student Name</label>}
                name="name"
                rules={[{ required: true, message: "Please select student name" }]}
            >
                <Select
                    options={studentOptions}
                    placeholder="Select Student Name"
                    showSearch
                    optionFilterProp="label"
                    style={{ width: '100%', height: 45 }}
                    suffixIcon={<p><MdArrowDropDown color='white' size={22} /></p>}
                />
            </Form.Item>

            <Form.Item
                label={<label className="block text-sm text-[#9CA3AF]">Subject Name</label>}
                name="subject"
                rules={[{ required: true, message: "Please select Subject" }]}
            >
                <Select
                    options={studentOptions}
                    placeholder="Select Subject"
                    showSearch
                    optionFilterProp="label"
                    style={{ width: '100%', height: 45 }}
                    suffixIcon={<p><MdArrowDropDown color='white' size={22} /></p>}
                />
            </Form.Item>

            <Form.Item
                label={<label className="block text-sm text-[#9CA3AF]">Batch</label>}
                name="batch"
                rules={[{ required: true, message: "Please select Batch" }]}
            >
                <Select
                    options={studentOptions}
                    placeholder="Select Batch"
                    showSearch
                    optionFilterProp="label"
                    style={{ width: '100%', height: 45 }}
                    suffixIcon={<p><MdArrowDropDown color='white' size={22} /></p>}
                />
            </Form.Item>

            <Form.Item
                label={<label className="block text-sm text-[#9CA3AF]">Section Name</label>}
                name="section"
                rules={[{ required: true, message: "Please select Section" }]}
            >
                <Select
                    options={studentOptions}
                    placeholder="Select Section"
                    showSearch
                    optionFilterProp="label"
                    style={{ width: '100%', height: 45 }}
                    suffixIcon={<p><MdArrowDropDown color='white' size={22} /></p>}
                />
            </Form.Item>

            <Form.Item className="mt-6 flex justify-end">
                <button type="submit" className=" bg-[#198754] h-[45px]  px-8 rounded-md text-white">
                   Class Routine
                </button>
            </Form.Item>
        </Form>
    );
};

export default StudentFilterForm;