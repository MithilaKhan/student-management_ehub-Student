"use client";
import React from "react";
import { Form, Select } from "antd";
import { MdArrowDropDown } from "react-icons/md";
import { studentOptions } from "@/constants/dashboard/class-routine-data";

const ExcelOutputMarksheetForm = () => {
    return (  
            <Form layout="vertical" className="lg:w-[70%] w-full bg-transparent">
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

                {/* Buttons */}
                <Form.Item className="mt-6 flex justify-end">
                    <button type="submit" className=" bg-[#1A5FA4] h-[45px]  px-8 rounded-md text-white">
                        Excel Marksheet
                    </button>
                </Form.Item>
            </Form>
    );
};

export default ExcelOutputMarksheetForm;
