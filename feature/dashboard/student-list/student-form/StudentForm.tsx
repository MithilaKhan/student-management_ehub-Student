"use client";
import React from 'react';
import { Form, Input } from 'antd';
import { useRouter } from 'next/navigation';

const ProfilePDFForm = () => {  
    const router = useRouter();
    const onFinish = (values: any) => {
        router.push('/student-list/assigned-student-list/filtered-student-list');
    }
    return (
        <Form layout="vertical" className='md:w-[50%] w-[100%]' onFinish={onFinish}>
      <Form.Item
                label={<label className="block text-[#9CA3AF]">Barcode Value</label>}
                name="barcodeValue"
                rules={[{ required: true, message: "Please enter Barcode Value" }]}
            >
                <Input 
                    placeholder="Enter Barcode Value" 
                    style={{ 
                        height: 45,
                        backgroundColor: '#1C1C1E',
                        borderColor: '#333',
                        color: '#fff'
                    }} 
                />
            </Form.Item>

            <Form.Item
                label={<label className="block text-[#9CA3AF]">Student ID</label>}
                name="studentId"
                rules={[{ required: true, message: "Please enter Student ID" }]}
            >
                <Input 
                    placeholder="Enter Student ID" 
                    style={{ 
                        height: 45,
                        backgroundColor: '#1C1C1E',
                        borderColor: '#333',
                        color: '#fff'
                    }} 
                />
            </Form.Item>

            <Form.Item
                label={<label className="block text-[#9CA3AF]">Batch ID</label>}
                name="batchId"
                rules={[{ required: true, message: "Please enter Batch ID" }]}
            >
                <Input 
                    placeholder="Enter Batch ID" 
                    style={{ 
                        height: 45,
                        backgroundColor: '#1C1C1E',
                        borderColor: '#333',
                        color: '#fff'
                    }} 
                />
            </Form.Item>

            <Form.Item
                label={<label className="block text-[#9CA3AF]">Subject ID</label>}
                name="subjectId"
                rules={[{ required: true, message: "Please enter Subject ID" }]}
            >
                <Input 
                    placeholder="Enter Subject ID" 
                    style={{ 
                        height: 45,
                        backgroundColor: '#1C1C1E',
                        borderColor: '#333',
                        color: '#fff'
                    }} 
                />
            </Form.Item>

            <Form.Item
                label={<label className="block text-[#9CA3AF]">Section ID</label>}
                name="sectionId"
                rules={[{ required: true, message: "Please enter Section ID" }]}
            >
                <Input
                    placeholder="Enter Section ID" 
                    style={{ 
                        height: 45,
                        backgroundColor: '#1C1C1E',
                        borderColor: '#333',
                        color: '#fff'
                    }} 
                />
            </Form.Item>


            <Form.Item className="mt-6 flex justify-end">
                <button type="submit" className=" bg-[#1A5FA4] h-[45px]  px-8 rounded-md text-white">
                 Submit
                </button>
            </Form.Item>
        </Form>
    );
};

export default ProfilePDFForm;