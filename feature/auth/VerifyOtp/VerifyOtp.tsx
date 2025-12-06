"use client"
import { Button, ConfigProvider, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import React from "react"
const { Text } = Typography;

const VerifyOtp = () => {  
  const router = useRouter();
  return (
    <div>
      <div className=" mb-6">
        <h1 className="text-[25px] font-semibold mb-6 text-primary ">Verification code</h1>
        <p className=" ">We&apos;ll send a verification code to your email. Check your inbox and
          enter the code here.</p>
      </div>
      <Form layout="vertical" className=' w-full mx-auto'>
        <ConfigProvider
          theme={{
            components: {
              Input: {
                // lineHeight: 3,
                controlHeight: 55,
                borderRadius: 10,
              },
            },
            token: {
              colorPrimary: '#292C61',
            },
          }}
        >
          <Form.Item
            className="flex items-center justify-center mx-auto"
            name="otp"
            rules={[{ required: true, message: 'Please input otp code here!' }]}
          >
            <Input.OTP
              style={{
                width: 300,
                height: 50,
              }}
              className=""
              variant="filled"
              length={4}
            />
          </Form.Item>
        </ConfigProvider>


        <div className="flex items-center justify-between mb-6 font-normal text-[#f5f4f4]">
          <Text>Don&apos;t received code?</Text>
          <p 
            className="login-form-forgot underline font-medium"
            style={{ color: "#00B047", cursor: "pointer" }}
          >
            Resend
          </p>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            htmlType="submit"
            style={{
              width: "100%",
              height: 40,
              border: "1px solid #d9d9d9",
              outline: "none",
              boxShadow: "none",
              background: "#1A5FA4",
              color: "white"
            }} 
            onClick={() => router.push("/reset-password")}
          >
            Verify
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VerifyOtp;