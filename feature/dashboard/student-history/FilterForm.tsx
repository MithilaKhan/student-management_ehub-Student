"use client";
import React from 'react';
import { Form, Select } from 'antd';
import { MdArrowDropDown } from 'react-icons/md';
import { studentOptions } from '@/constants/dashboard/class-routine-data';

const FilterForm = () => {
    const [form] = Form.useForm();
    const handleReset = () => {
        form.resetFields();
    };
    return (
        <Form layout="vertical" className=' md:w-[55%] w-full'>
            <Form.Item
                label={<label className="block   text-[#9CA3AF]">Student Name</label>}
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
            <div className="flex justify-end gap-4 ">
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
                    Submit
                </button>
            </div>
        </Form>
    );
};

export default FilterForm;