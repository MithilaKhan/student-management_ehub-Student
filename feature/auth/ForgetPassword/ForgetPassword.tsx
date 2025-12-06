"use client"
import InputField from "@/shared/InputField";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const ForgetPassword = () => { 
  const router = useRouter();

  return (
    <div>
      <div className="text-center mb-4">
        <h1 className="text-[25px] font-semibold ">Forgot Password ?</h1>
      </div>

      <Form layout="vertical" >
        <InputField name={"email"} label={"Email"} />

        <Form.Item>
          <button
            type="submit"
            style={{
              width: '100%',
              height: 45,
              color: "white",
              fontWeight: "400px",
              fontSize: "18px",
              marginTop: 20
            }} 
            onClick={() => router.push("/verify-otp")}
            className="flex items-center justify-center bg-[#1A5FA4] rounded-lg"
          >
            Send OTP
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetPassword;