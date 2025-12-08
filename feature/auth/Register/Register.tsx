"use client"
import InputField from "@/shared/InputField";
import { Form, Input} from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
const Register = () => {
    const [form] = Form.useForm(); 
    const router = useRouter();

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

                <div className="grid grid-cols-4 gap-x-5">

                    <InputField name="firstName" label="First Name" />
                    <InputField name="lastName" label="Last Name" />
                    <InputField name="email" label="E-mail" />
                    {/* Phone Number */}
                    <InputField name="phoneNumber" label="Phone Number" />
                    {/* Address */}
                    <div className="md:col-span-2 ">
                        <InputField name="location" label="Address" />
                    </div>
                    {/* Student Contact */}
                    <InputField name="studentContact" label="Student's Contact" />
                    {/* Father's Name */}
                    <InputField name="fatherName" label="Father’s Name" />
                    {/* Father's Contact */}
                    <InputField name="fatherContact" label="Father’s Contact" />
                    {/* Mother's Name */}
                    <InputField name="motherName" label="Mother’s Name" />
                    {/* Mother's Contact */}
                    <InputField name="motherContact" label="Mother’s Contact" />
                    {/* Guardian Name */}
                    <InputField name="guardianName" label="Guardian's Name" />
                    {/* Guardian Contact */}
                    <InputField name="guardianContact" label="Guardian's Contact" />

                    {/* Passport/Birth Certificate No */}
                    <InputField
                        name="passportOrBirthCertificate"
                        label="Passport/Birth Certificate No."
                    />

                    {/* Date of Birth */}
                    <InputField name="dateOfBirth" label="Date of Birth" />

                    {/* Password */}
                    <div className=" col-span-2">
                        <Form.Item
                            name="password"
                            label={<p className="block text-[#f5f4f4]">Password</p>}
                            rules={[

                                { required: true, message: "Please enter your password!" },
                                { min: 8, message: "Password must be at least 8 characters" }
                            ]}
                            className="mb-5"
                        >
                            <Input.Password
                                placeholder="Enter password"
                                className="border border-gray-300 h-[50px] bg-white rounded-lg"
                            />
                        </Form.Item>
                    </div>

                    <div className=" col-span-2">
                        <Form.Item
                            name="confirm_password"
                            label={<p className="block text-[#f5f4f4]">Confirm Password</p>}
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                                { required: true, message: "Please confirm your password!" },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error("The passwords do not match!")
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
                    </div>

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
            onClick={() => router.push("/")}
            className="flex items-center justify-center bg-[#1A5FA4] rounded-lg"
          >
            Sign Up
          </button>
                </Form.Item>


            </Form>

            <div className=" flex items-center justify-center gap-1 py-4">
                <p className="text-[#e0dddd]">  Already have an account?</p>
                <Link href="/login" className="text-[#1854F9] font-semibold" > Log in </Link>
            </div>
        </div>
    );
};

export default Register;