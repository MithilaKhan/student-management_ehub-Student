"use client";
import React from "react";
import { Form, Select } from "antd";
import { MdArrowDropDown } from "react-icons/md";
import { studentOptions } from "@/constants/dashboard/class-routine-data";

const AdmitCardForm = () => {
    return (
            <Form layout="vertical" className="md:w-[50%] w-full ">

                {/* Section */}
                <Form.Item
                    label={<label className="text-[#9CA3AF]">Student Name</label>}
                    name="student"
                    rules={[{ required: true, message: "Please select Student" }]}
                >
                    <Select
                        options={studentOptions}
                        placeholder="Select Student Name"
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
                        Submit
                    </button>
                </Form.Item>
            </Form>
    );
};

export default AdmitCardForm;
