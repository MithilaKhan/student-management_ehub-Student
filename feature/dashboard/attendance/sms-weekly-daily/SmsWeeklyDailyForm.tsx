"use client";
import React from 'react';
import { Form, Select, DatePicker, Checkbox } from 'antd';
import { MdArrowDropDown } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { studentOptions } from '@/constants/dashboard/class-routine-data';

const { RangePicker } = DatePicker;

const SmsWeeklyDailyForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const reportTypeOptions = [
    { label: 'Select Report', value: '' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Daily', value: 'daily' },
  ];

  const gradeOptions = [
    { label: 'Select Grade', value: '' },
    { label: 'Grade 6', value: 'grade-6' },
    { label: 'Grade 7', value: 'grade-7' },
    { label: 'Grade 8', value: 'grade-8' },
  ];

  const subjectOptions = [
    { label: 'Select Subject', value: '' },
    { label: 'Mathematics', value: 'mathematics' },
    { label: 'Science', value: 'science' },
    { label: 'English', value: 'english' },
  ];

  const batchOptions = [
    { label: 'Select Batch', value: '' },
    { label: 'Batch 01', value: 'batch-01' },
    { label: 'Batch 02', value: 'batch-02' },
  ];

  const contactOptions = [
    { label: "Father's Contact", value: 'father' },
    { label: "Mother's Contact", value: 'mother' },
    { label: "Guardian's Contact", value: 'guardian' },
  ];

  const handleReset = () => form.resetFields();

  const onFinish = (values: any) => {
    // values: { reportType, grade, subject, batch, dateRange: [moment, moment], sendTo: ['father', ...] }
    console.log('SMS form values', values);
    // navigate or trigger API as needed
    // example: router.push('/somewhere')
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical" className="md:w-[55%] w-full">
      <Form.Item
        label={<label className="block text-sm text-[#9CA3AF]">Report Type</label>}
        name="reportType"
        rules={[{ required: true, message: 'Please select report type' }]}
      >
        <Select
          options={reportTypeOptions}
          placeholder="Select Report"
          style={{ width: '100%', height: 45 }}
          suffixIcon={<MdArrowDropDown className="text-white" />}
        />
      </Form.Item>

      <Form.Item
        label={<label className="block text-sm text-[#9CA3AF]">Grade</label>}
        name="grade"
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
      >
        <Select
          options={batchOptions}
          placeholder="Select Batch"
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

      <Form.Item
        label={<label className="block text-sm text-[#9CA3AF]">Send SMS to the contacts</label>}
        name="sendTo"
      >
        <Checkbox.Group options={contactOptions} />
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
          Send SMS
        </button>
      </div>
    </Form>
  );
};

export default SmsWeeklyDailyForm;