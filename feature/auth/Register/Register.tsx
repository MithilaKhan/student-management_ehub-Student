"use client"
import InputField from "@/shared/InputField";
import { Checkbox, ConfigProvider, Form, Input, Select } from "antd";
import Link from "next/link";
import React from "react";
const Register = () => {
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        const totalData = {
            ...values,
        };
        console.log(totalData);
    };

    return (
        <div className=""
        >
            <div className=" mb-6">
                <h1 className="text-[25px] font-semibold mb-2">Register Now</h1>
                <p className="text-[#11D279]"> To proceed with your application, we first need some information from you</p>
            </div>
            <Form
                onFinish={onFinish}
                layout="vertical"
                initialValues={{
                    remember: true,
                    gender: "MALE"
                }}
                form={form}
            >

                <div className="grid grid-cols-2 gap-x-5">

                    <InputField name={"firstName"} label={"First Name"} />
                    <InputField name={"lastName"} label={"Last Name"} />
                    <InputField name={"location"} label={"Address"} />

                    <ConfigProvider
                        theme={{
                            components: {
                                Select: {
                                    activeBorderColor: "#BABABA",
                                    hoverBorderColor: "#BABABA"
                                },
                            },
                            token: {
                                borderRadius: 0,
                            },

                        }}
                    >
                        <Form.Item name="gender" label={<p className='text-[#4E4E4E] text-[16px]'>Gender</p>}>
                            <Select

                                style={{ width: "100%", height: "48px" }}
                                options={[
                                    { value: 'MALE', label: 'Male' },
                                    { value: 'FEMALE', label: 'Female' },

                                ]}
                            />
                        </Form.Item>
                    </ConfigProvider>

                    <InputField name={"email"} label={"Email"} />
                    <InputField name={"contact"} label={"Contact Number"} />

                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 0,
                            },

                        }}
                    >
                        <Form.Item
                            name="password"
                            label={<p className="block"> Password</p>}
                            rules={[
                                {
                                    required: true,
                                    message: "Please confirm your password!",
                                },
                                {
                                    min: 8,
                                    message: "Password must be at least 8 characters",
                                },

                            ]}
                            className="mb-5"
                        >
                            <Input.Password
                                placeholder="Enter password"
                                className="border border-gray-300 h-[50px] bg-white rounded-lg"
                            />
                        </Form.Item>
                    </ConfigProvider>

                    <ConfigProvider
                        theme={{

                            components: {
                                Select: {
                                    activeBorderColor: "#d9d9d9",
                                    activeOutlineColor: "#d9d9d9",
                                    hoverBorderColor: "#d9d9d9"
                                },
                            },
                            token: {
                                borderRadius: 0,
                            },
                        }}>
                        <Form.Item
                            name="confirm_password"
                            label={<p className="block">Confirm Password</p>}
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Please confirm your password!",
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error("The new password that you entered do not match!")
                                        );
                                    },
                                }),
                            ]}
                            className="mb-10"
                        >

                            <Input.Password
                                placeholder="Enter password"
                                className="border border-gray-300 h-[50px] bg-white rounded-lg"
                            />
                        </Form.Item>
                    </ConfigProvider>

                    <Form.Item
                        name={"country"}

                        label={<p className="text-[#4E4E4E] text-[16px]">Country</p>}
                        rules={[
                            {
                                required: true,
                                message: `Please enter your country`,
                            },
                        ]}
                    >
                        <Input
                            placeholder={`Enter your country`}
                            style={{
                                height: 48,
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none",
                                backgroundColor: "white",
                            }}
                            readOnly
                        />
                    </Form.Item>
                    <InputField name='dateOfBirth' label='Date of Birth' />
                </div>

                <div className="flex items-center justify-between">
                    <Form.Item style={{ marginBottom: 0 }} name="agree" valuePropName="checked" rules={[{ required: true }]}>
                        <Checkbox>I agree with terms of service and privacy policy</Checkbox>
                    </Form.Item>


                </div>

                <Form.Item style={{ marginBottom: 0 }}>
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
                        className="flex items-center justify-center bg-primary rounded-lg"
                    >
                       Sign up 
                    </button>
                </Form.Item>


            </Form>

            <div className=" flex items-center justify-center gap-1 py-4">
                <p className="text-[#636363]"> have any account?</p>
                <Link href="/login" className="text-[#1854F9] font-semibold" > Log in </Link>
            </div>
        </div>
    );
};

export default Register;