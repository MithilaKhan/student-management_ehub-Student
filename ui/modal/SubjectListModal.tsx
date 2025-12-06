import { modalType } from '@/type';
import { Form, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const SubjectListModal = ({ isOpen, setIsOpen }: modalType) => {
    return (
        <Modal
            centered
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            footer={null}
            width={620}
            className="custom-black-modal"
        >
            <h3 className="mb-5 text-white text-lg font-medium">Add Subject</h3>
            <Form layout="vertical">
                <Form.Item
                    label={<label className="block text-sm  text-[#9CA3AF]">Subject Name</label>}
                    name="name"
                    rules={[{ required: true, message: "Please enter Subject Name" }]}
                >
                    <Input placeholder="Name" style={{ height: 45 }} />
                </Form.Item>

                <Form.Item
                    label={<label className="block text-sm  text-[#9CA3AF]">Subject Details</label>}
                    name="details"
                    rules={[{ required: true, message: "Please enter Subject Details" }]}
                >
                    <TextArea rows={4} placeholder="Please enter Subject Details"  />
                </Form.Item>

                <Form.Item className="mt-6 flex justify-end">
                    <button type="submit" className=" bg-[#1A5FA4] h-[45px]  px-8 rounded-md text-white">
                        Save Changes
                    </button>
                </Form.Item>
            </Form>


        </Modal>
    );
};

export default SubjectListModal;