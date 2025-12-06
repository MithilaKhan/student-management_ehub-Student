"use client";
import React from "react";
import { Form, Select, Checkbox } from "antd";
import { MdArrowDropDown } from "react-icons/md";
import { studentOptions } from "@/constants/dashboard/class-routine-data";

const SMSExamMarkForm = () => {
    return (
        <div className="flex md:flex-row flex-col-reverse justify-between h-full ">
            {/* Left side form */} 
            <div className=" md:w-[75%] w-full"> 
            <Form layout="vertical" className="md:w-[70%] w-full bg-transparent">
                {/* Grade */}
                <Form.Item
                    label={<label className="text-[#9CA3AF]">Grade</label>}
                    name="grade"
                    rules={[{ required: true, message: "Please select Grade" }]}
                >
                    <Select
                        options={studentOptions}
                        placeholder="Select Grade"
                        showSearch
                        optionFilterProp="label"
                        style={{ width: "100%", height: 45 }}
                        suffixIcon={<MdArrowDropDown color="white" size={22} />}
                        className="custom-dark-select"
                    />
                </Form.Item>

                {/* Subject */}
                <Form.Item
                    label={<label className="text-[#9CA3AF]">Subject</label>}
                    name="subject"
                    rules={[{ required: true, message: "Please select Subject" }]}
                >
                    <Select
                        options={studentOptions}
                        placeholder="Select Subject"
                        showSearch
                        optionFilterProp="label"
                        style={{ width: "100%", height: 45 }}
                        suffixIcon={<MdArrowDropDown color="white" size={22} />}
                        className="custom-dark-select"
                    />
                </Form.Item>

                {/* Batch */}
                <Form.Item
                    label={<label className="text-[#9CA3AF]">Batch</label>}
                    name="batch"
                    rules={[{ required: true, message: "Please select Batch" }]}
                >
                    <Select
                        options={studentOptions}
                        placeholder="Select Batch"
                        showSearch
                        optionFilterProp="label"
                        style={{ width: "100%", height: 45 }}
                        suffixIcon={<MdArrowDropDown color="white" size={22} />}
                        className="custom-dark-select"
                    />
                </Form.Item>

                {/* Section */}
                <Form.Item
                    label={<label className="text-[#9CA3AF]">Section Name</label>}
                    name="section"
                    rules={[{ required: true, message: "Please select Section" }]}
                >
                    <Select
                        options={studentOptions}
                        placeholder="Select Section Name"
                        showSearch
                        optionFilterProp="label"
                        style={{ width: "100%", height: 45 }}
                        suffixIcon={<MdArrowDropDown color="white" size={22} />}
                        className="custom-dark-select"
                    />
                </Form.Item>

                {/* Exam Title */}
                <Form.Item
                    label={<label className="text-[#9CA3AF]">Exam Title</label>}
                    name="examTitle"
                >
                    <Select
                        options={[{ label: "NO EXAM AVAILABLE", value: "none" }]}
                        placeholder="NO EXAM AVAILABLE"
                        style={{ width: "100%", height: 45 }}
                        suffixIcon={<MdArrowDropDown color="white" size={22} />}
                        className="custom-dark-select"
                    />
                </Form.Item>

                {/* Checkboxes */}
                <div className="mb-6">
                    <p className="text-[#9CA3AF] mb-2">Send SMS to the contacts</p>
                    <div className="flex md:flex-row flex-wrap gap-6">
                        <Checkbox className="text-white">Father’s Contact</Checkbox>
                        <Checkbox className="text-white">Mother’s Contact</Checkbox>
                        <Checkbox className="text-white">Guardian’s Contact</Checkbox>
                    </div>
                </div>

                {/* Buttons */}
                <Form.Item className="mt-6 flex justify-end">
                    <button type="submit" className=" bg-[#1A5FA4] h-[45px]  px-8 rounded-md text-white">
                        Submit
                    </button>
                </Form.Item>
            </Form>
            </div>

            {/* Right side guide */}
            <div className="md:w-[25%] w-full md:pb-0 pb-6 ">
                <h2 className="text-[#F1F1F1] text-xl font-medium mb-3 underline underline-offset-4">How to input Marks</h2>
                <ul className="space-y-3 text-sm">
                    <li className="text-[#F1F1F1]">
                        <strong className="text-[#FF3333]">** Input 0-Any number:</strong>  Means It will be sent as mark.
                    </li>
                    <li className="text-[#F1F1F1]">
                        <strong className="text-[#FF3333]">** Input No number:</strong> Means student didn't appear the exam.
                    </li>
                    <li className="text-[#F1F1F1]">
                        <strong className="text-[#FF3333]">** Input -1:</strong>  Means while sending mark through sms this student or their parents won't get SMS.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SMSExamMarkForm;
