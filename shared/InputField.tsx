"use client";

import {  Form, Input } from "antd";
import React from "react";

const InputField: React.FC<{ name: string; label: string }> = ({ name, label }) => {
  return (
    <Form.Item
      name={name} 
      
      label={<p className="font-normal text-[#f5f4f4] text-[16px]">{label}</p>}
      rules={[
        {
          required: true,
          message: `Please enter your ${label.toLowerCase()}`,
        },
      ]}
    > 
      <Input
        placeholder={`Enter your ${label.toLowerCase()}`}
        style={{
            height: 48,
            border: "1px solid #d9d9d9",
            boxShadow: "none",
          }}
      /> 
    </Form.Item>
  );
};

export default InputField;
