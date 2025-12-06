"use client"
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const ResetPassword = () => {
const router = useRouter();
  return (
    <div>
      <div className=" mb-6">
        <h1 className="text-[25px] font-semibold text-primary ">Reset Password</h1>
      </div>

      <Form
        layout="vertical"
      >

        <Form.Item
          name="newPassword"
          label={<p className="font-normal text-[#f5f4f4]" >
            New Password
          </p>}
          rules={[
            {
              required: true,
              message: "Please input your new Password!",
            },
          ]}
          style={{ marginBottom: 0 }}
        >
          <Input.Password
            type="password"
            placeholder="Enter New password"
            style={{
              border: "1px solid #E0E4EC",
              height: "52px",
              background: "white",
              borderRadius: "8px",
              outline: "none",
            }}
            className="mb-6"
          />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: 0 }}
          label={<p className="font-normal text-[#f5f4f4]">
            Confirm Password
          </p>}
          name="confirmPassword"
          dependencies={["newPassword"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            type="password"
            placeholder="Enter Confirm password"
            style={{
              border: "1px solid #E0E4EC",
              height: "52px",
              background: "white",
              borderRadius: "8px",
              outline: "none",
            }}
            className="mb-6"
          />
        </Form.Item>


        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            htmlType="submit" 
            onClick={()=>router.push("/")}
            style={{
              width: '100%',
              height: 45,
              color: "white",
              fontWeight: "400px",
              fontSize: "18px",
              background: "#1A5FA4",
              marginTop: 20 ,
               outline: "none",
            }}
          >
            Update
          </Button>
        </Form.Item>



      </Form>


    </div>
  );
};

export default ResetPassword;