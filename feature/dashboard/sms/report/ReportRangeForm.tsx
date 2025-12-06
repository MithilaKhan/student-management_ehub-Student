"use client";
import React from 'react';
import { DatePicker, Form } from 'antd';
import { IoCalendarOutline } from 'react-icons/io5';

const ReportRangeForm = () => {
    const [form] = Form.useForm();

    const handleReset = () => {
        form.resetFields();
    };

    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <Form 
            form={form}
            layout="vertical" 
            className="md:w-[50%] w-[100%]"
            onFinish={onFinish}
        >
            <p className="text-[#1E88E5] text-lg mb-4">Report Date Range</p>
            
            <Form.Item
                label={<label className="block text-sm text-[#9CA3AF]">Start Date</label>}
                name="startDate"
                rules={[{ required: true, message: 'Please select start date' }]}
            >
                <DatePicker 
                    placeholder="mm/dd/yyyy"
                    format="MM/DD/YYYY"
                    style={{ width: '100%', height: 45 }}
                    suffixIcon={<IoCalendarOutline className="text-gray-400" />}
                />
            </Form.Item>

            <Form.Item
                label={<label className="block text-sm text-[#9CA3AF]">End Date</label>}
                name="endDate"
                rules={[{ required: true, message: 'Please select end date' }]}
            >
                <DatePicker 
                    placeholder="mm/dd/yyyy"
                    format="MM/DD/YYYY"
                    style={{ width: '100%', height: 45 }}
                    suffixIcon={<IoCalendarOutline className="text-gray-400" />}
                />
            </Form.Item>

            <div className="flex justify-end gap-4 mt-6">
                <button 
                    type="button" 
                    onClick={handleReset}
                    className="bg-[#3E1B1F] text-red-500 h-[45px] px-8 rounded-md hover:bg-[#4E2B2F]"
                >
                    Reset
                </button>
                <button 
                    type="submit" 
                    className="bg-[#1A5FA4] text-white h-[45px] px-8 rounded-md hover:bg-[#1550A0]"
                >
                    Submit
                </button>
            </div>
        </Form>
    );
};

export default ReportRangeForm;