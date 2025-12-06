"use client"
import { Form, Input } from 'antd';
const ChangePassword = () => {
    const [form] = Form.useForm();

    return (
        <div className="px-0 lg:px-12 mt-8">
            <Form
                form={form}
                layout="vertical"
                initialValues={{ remember: true }}
                className="w-full lg:w-1/2"
            >
                <Form.Item
                    label={
                        <label className="block text-primaryText mb-1 ">
                            Current Password
                        </label>
                    }
                    name="currentPassword"
                    rules={[{ required: true, message: 'Please input Current password!' }]}
                >
                    <Input.Password className=" h-12 px-6" />
                </Form.Item>
                <Form.Item
                    label={
                        <label className="block text-primaryText mb-1 ">
                            New Password
                        </label>
                    }
                    name="newPassword"
                    dependencies={['currentPassword']}
                    rules={[
                        {
                            required: true,
                            message: "Please input your New password!",
                        },
                        {
                            min: 8,
                            message: "Password must be at least 8 characters long!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('currentPassword') === value) {
                                    return Promise.reject(new Error('The New password is similar to the current Password'));
                                }
                                return Promise.resolve();
                            },
                        }),
                    ]}
                >
                    <Input.Password className="h-12 px-6" />
                </Form.Item>

                <Form.Item
                    label={
                        <label className="block text-primaryText mb-1 ">
                            Confirm Password
                        </label>
                    }
                    name="confirmPassword"
                    dependencies={['newPassword']}
                    rules={[
                        {
                            required: true,
                            message: "Please input your Confirm password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('newPassword') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password className="h-12 px-6" />
                </Form.Item>

                <Form.Item className="flex  justify-end">
                    <button
                        type="submit"
                        className="bg-[#1A5FA4] h-[45px] px-8 rounded-md text-white"
                    >
                        Save Changes
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ChangePassword;