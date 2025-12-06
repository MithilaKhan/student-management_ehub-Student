import { modalType } from '@/type';
import { Form, Input, Modal } from 'antd';

const SectionListModal = ({ isOpen, setIsOpen }: modalType) => {
    return (
         <Modal
      centered
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={null}
      width={620}
      className="custom-black-modal"
    >
      <h3 className="mb-5 text-white text-lg font-medium">Add Section</h3>
      <Form layout="vertical" onFinish={() => setIsOpen(false)}>
        <Form.Item
          label={<label className="block text-sm text-[#9CA3AF]">Section Name</label>}
          name="sectionName"
          rules={[{ required: true, message: 'Please enter Section Name' }]}
        >
          <Input placeholder="Section Name" style={{ height: 45 }} />
        </Form.Item>

        <Form.Item
          label={<label className="block text-sm text-[#9CA3AF]">Subject</label>}
          name="subjectName"
          rules={[{ required: true, message: 'Please enter Subject Name' }]}
        >
          <Input placeholder="Subject Name" style={{ height: 45 }} />
        </Form.Item>

        <Form.Item
          label={<label className="block text-sm text-[#9CA3AF]">Batch Name</label>}
          name="batchName"
          rules={[{ required: true, message: 'Please enter Batch Name' }]}
        >
          <Input placeholder="Batch Name" style={{ height: 45 }} />
        </Form.Item>

        <div className="grid grid-cols-3 gap-4">
          <Form.Item
            label={<label className="block text-sm text-[#9CA3AF]">Seats Empty</label>}
            name="seatsEmpty"
            rules={[{ required: true, message: 'Enter seats empty' }]}
          >
            <Input type="number" placeholder="Seats Empty" style={{ height: 45 }} />
          </Form.Item>

          <Form.Item
            label={<label className="block text-sm text-[#9CA3AF]">Seats Filled</label>}
            name="seatsFilled"
            rules={[{ required: true, message: 'Enter seats filled' }]}
          >
            <Input type="number" placeholder="Seats Filled" style={{ height: 45 }} />
          </Form.Item>

          <Form.Item
            label={<label className="block text-sm text-[#9CA3AF]">Total Seats</label>}
            name="totalSeats"
            rules={[{ required: true, message: 'Enter total seats' }]}
          >
            <Input type="number" placeholder="Total Seats" style={{ height: 45 }} />
          </Form.Item>
        </div>

        <Form.Item className="mt-6 flex justify-end">
          <button type="submit" className=" bg-[#1A5FA4] h-[45px]  px-8 rounded-md text-white">
            Save Changes
          </button>
        </Form.Item>
      </Form>
    </Modal>
    );
};

export default SectionListModal;