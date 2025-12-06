"use client";
import React from 'react';
import { Form, Select } from 'antd';
import { studentOptions } from '@/constants/dashboard/class-routine-data';
import { MdArrowDropDown } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const StudentWaitingForm = () => {  
    const router = useRouter();
    const onFinish = (values: any) => {
        router.push('/student-list/assigned-student-list/filtered-student-list');
    }
    return (
        <Form layout="vertical" className='md:w-[50%] w-[100%]' onFinish={onFinish}>
            <Form.Item
                label={<label className="block   text-[#9CA3AF]">Grade Name</label>}
                name="gradeName"
                rules={[{ required: true, message: "Please enter Grade Name" }]}
            >
                <Select
                    options={studentOptions}
                    placeholder="Select Grade"
                    showSearch
                    optionFilterProp="label"
                    style={{ width: '100%', height: 45 }}
                    suffixIcon={<p> <MdArrowDropDown color='white' size={22} /> </p>}
                />
            </Form.Item>
            <Form.Item
                label={<label className="block   text-[#9CA3AF]">Subject Name</label>}
                name="subjectName"
                rules={[{ required: true, message: "Please enter Subject Name" }]}
            >
                <Select
                    options={studentOptions}
                    placeholder="Select Subject"
                    showSearch
                    optionFilterProp="label"
                    style={{ width: '100%', height: 45 }}
                    suffixIcon={<p> <MdArrowDropDown color='white' size={22} /> </p>}
                />
            </Form.Item>
            <Form.Item
                label={<label className="block   text-[#9CA3AF]">Batch Name</label>}
                name="batchName"
                rules={[{ required: true, message: "Please enter Batch Name" }]}
            >
                <Select
                    options={studentOptions}
                    placeholder="Select Batch"
                    showSearch
                    optionFilterProp="label"
                    style={{ width: '100%', height: 45 }}
                    suffixIcon={<p> <MdArrowDropDown color='white' size={22} /> </p>}
                />
            </Form.Item>
            <Form.Item
                label={<label className="block   text-[#9CA3AF]">Section Name</label>}
                name="sectionName"
                rules={[{ required: true, message: "Please enter Section Name" }]}
            >
                <Select
                    options={studentOptions}
                    placeholder="Select Section"
                    showSearch
                    optionFilterProp="label"
                    style={{ width: '100%', height: 45 }}
                    suffixIcon={<p> <MdArrowDropDown color='white' size={22} /> </p>}
                />
            </Form.Item>

            <Form.Item className="mt-6 flex justify-end">
                <button type="submit" className=" bg-[#1A5FA4] h-[45px]  px-8 rounded-md text-white">
                  Get Filtered Student List
                </button>
            </Form.Item>
        </Form>
    );
};

export default StudentWaitingForm;