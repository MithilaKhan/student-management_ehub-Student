
import { modalType } from '@/type';
import { Form, Input, Modal } from 'antd';
const AdminModal = ({ isOpen, setIsOpen }: modalType) => {
    return (
       <Modal
            centered
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            footer={null}
            width={620}
            className="custom-black-modal"
        >
            <h3 className="mb-5 text-white text-lg font-medium">Add Admin</h3>
            <Form layout="vertical">
                <Form.Item
                    label={<label className="block text-sm  text-[#9CA3AF]">Full Name</label>}
                    name="name"
                    rules={[{ required: true, message: "Please enter Full Name" }]}
                >
                    <Input placeholder="Enter Name" style={{ height: 45 }} />
                </Form.Item> 

                <Form.Item
                    label={<label className="block text-sm  text-[#9CA3AF]">Email</label>}
                    name="email"
                    rules={[{ required: true, message: "Please enter Email" }]}
                >
                    <Input placeholder="Enter Email" style={{ height: 45 }} />
                </Form.Item> 

                <Form.Item
                    label={<label className="block text-sm  text-[#9CA3AF]">Password</label>}
                    name="password"
                    rules={[{ required: true, message: "Please enter Password" }]}
                >
                    <Input.Password placeholder="Enter Password" style={{ height: 45 }} />
                </Form.Item>

                <Form.Item className="mt-6 flex justify-end">
                    <button type="submit" className=" bg-[#1A5FA4] h-[45px]  px-8 rounded-md text-white">
                        Submit
                    </button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AdminModal;