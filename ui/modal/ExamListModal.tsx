"use client";
import { ExamType } from "@/constants/dashboard/exam-module";
import { modalType } from "@/type";
import { Form, Input, Modal, Select } from "antd";
import { MdArrowDropDown } from "react-icons/md";

const ExamListModal = ({ isOpen, setIsOpen }: modalType) => {

  return (
    <Modal
      centered
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={null}
      width={620}
      className="custom-black-modal"
    >
      <h3 className="mb-5 text-white text-lg font-medium">Add Exam</h3>

      <Form layout="vertical" onFinish={() => setIsOpen(false)}>
        {/* Exam Title */}
        <Form.Item
          label={
            <label className="block text-sm text-[#9CA3AF]">
              Exam Title
            </label>
          }
          name="examTitle"
          rules={[{ required: true, message: "Please enter Exam Title" }]}
        >
          <Input placeholder="Enter Exam Title" style={{ height: 45 }} />
        </Form.Item>

        {/* Exam Type */}
        <Form.Item
          label={<label className="block   text-[#9CA3AF]">Exam Type</label>}
          name="examType"
          rules={[{ required: true, message: "Please enter Exam Type" }]}
        >
          <Select
            options={ExamType}
            placeholder="Select Exam Type"
            showSearch
            optionFilterProp="label"
            style={{ width: '100%', height: 45 }}
            suffixIcon={<p> <MdArrowDropDown color='white' size={22} /> </p>}
          />
        </Form.Item>

        {/* Exam Details */}
        <Form.Item
          label={
            <label className="block text-sm text-[#9CA3AF]">
              Exam Details
            </label>
          }
          name="examDetails"
          rules={[{ required: true, message: "Please enter Exam Details" }]}
        >
          <Input placeholder="e.g. January 2022" style={{ height: 45 }} />
        </Form.Item>

        {/* Subject Exam */}
        <Form.Item
          label={
            <label className="block text-sm text-[#9CA3AF]">
              Subject Exam
            </label>
          }
          name="subjectExam"
          rules={[{ required: true, message: "Please enter Subject Exam" }]}
        >
          <Input placeholder="e.g. IAL Mathematics P3P4 - AJM" style={{ height: 45 }} />
        </Form.Item>

        {/* Batch Name */}
        <Form.Item
          label={
            <label className="block text-sm text-[#9CA3AF]">
              Batch Name
            </label>
          }
          name="batchName"
          rules={[{ required: true, message: "Please enter Batch Name" }]}
        >
          <Input placeholder="e.g. IAL A2 OCT 25/ JAN 26" style={{ height: 45 }} />
        </Form.Item>

        {/* Submit */}
        <Form.Item className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-[#1A5FA4] h-[45px] px-8 rounded-md text-white"
          >
            Save Changes
          </button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ExamListModal;
