import { modalType } from '@/type';
import { Form, Input, Modal } from 'antd';

const OverviewModal = ({ isOpen, setIsOpen }: modalType) => {
    return (
        <Modal
            centered
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            footer={null}
            width={620}
            className="custom-black-modal"
        >
            <h3 className="mb-5 text-white text-lg font-medium">Add Routine</h3>
            <Form layout="vertical">
                <Form.Item
                    label={<label className="block text-sm  text-[#9CA3AF]">Batch Name</label>}
                    name="batchName"
                    rules={[{ required: true, message: "Please enter Batch Name" }]}
                >
                    <Input placeholder="Batch Name" style={{ height: 45 }} />
                </Form.Item>

                <Form.Item
                    label={<label className="block text-sm  text-[#9CA3AF]">Subject Name</label>}
                    name="subjectName"
                    rules={[{ required: true, message: "Please enter Subject Name" }]}
                >
                    <Input placeholder="Subject Name" style={{ height: 45 }} />
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

export default OverviewModal;