"use client";
import React from 'react';
import { Form, Select, DatePicker } from 'antd';
import { MdArrowDropDown } from 'react-icons/md';
import { batchOptions, gradeOptions, sectionOptions, subjectOptions } from '@/constants/dashboard/attendance-data';
const { RangePicker } = DatePicker;

const ExcelOutputReportForm = () => {
  const [form] = Form.useForm();
  const handleReset = () => form.resetFields();
  return (
    <Form form={form}  layout="vertical" className="md:w-[55%] w-full">
      <Form.Item
        label={<label className="block text-sm text-[#9CA3AF]">Grade</label>}
        name="grade"
        rules={[{ required: true, message: 'Please select Grade' }]}
      >
        <Select
          options={gradeOptions}
          placeholder="Select Grade"
          style={{ width: '100%', height: 45 }}
          suffixIcon={<MdArrowDropDown className="text-white" />}
        />
      </Form.Item>

      <Form.Item
        label={<label className="block text-sm text-[#9CA3AF]">Subject</label>}
        name="subject"
        rules={[{ required: true, message: 'Please select Subject' }]}
      >
        <Select
          options={subjectOptions}
          placeholder="Select Subject"
          style={{ width: '100%', height: 45 }}
          suffixIcon={<MdArrowDropDown className="text-white" />}
        />
      </Form.Item>

      <Form.Item
        label={<label className="block text-sm text-[#9CA3AF]">Batch</label>}
        name="batch"
        rules={[{ required: true, message: 'Please select Batch' }]}
      >
        <Select
          options={batchOptions}
          placeholder="Select Batch"
          style={{ width: '100%', height: 45 }}
          suffixIcon={<MdArrowDropDown className="text-white" />}
        />
      </Form.Item>

      <Form.Item
        label={<label className="block text-sm text-[#9CA3AF]">Section Name</label>}
        name="section"
        rules={[{ required: true, message: 'Please select Section' }]}
      >
        <Select
          options={sectionOptions}
          placeholder="Select Section"
          style={{ width: '100%', height: 45 }}
          suffixIcon={<MdArrowDropDown className="text-white" />}
        />
      </Form.Item>

      <Form.Item
        label={<label className="block text-sm text-[#9CA3AF]">Report Date Range</label>}
        name="dateRange"
        rules={[{ required: true, message: 'Please select date range' }]}
      >
        <RangePicker
          placeholder={['mm/dd/yyyy', 'mm/dd/yyyy']}
          format="MM/DD/YYYY"
          style={{ width: '100%', height: 45 }}
        />
      </Form.Item>

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
          Download Excel Sheet
        </button>
      </div>
    </Form>
  );
};

export default ExcelOutputReportForm;