import { classRoutineData } from '@/constants/dashboard/student-list-data';
import { modalType } from '@/type';
import { Modal, Table } from 'antd';

const ClassRoutineModal = ({ isOpen, setIsOpen }: modalType) => {
    const columns = [
        {
            title: 'SL',
            dataIndex: 'id',
            key: 'id',
            width: 50,
        },
        {
            title: 'SAT',
            dataIndex: 'sat',
            key: 'sat',
            render: (text: string) => (
                <div className="whitespace-pre-line">{text || '---'}</div>
            ),
        },
        {
            title: 'SUN',
            dataIndex: 'sun',
            key: 'sun',
            render: (text: string) => (
                <div className="whitespace-pre-line">{text || '---'}</div>
            ),
        },
        {
            title: 'MON',
            dataIndex: 'mon',
            key: 'mon',
            render: (text: string) => (
                <div className="whitespace-pre-line">{text || '---'}</div>
            ),
        },
        {
            title: 'TUE',
            dataIndex: 'tue',
            key: 'tue',
            render: (text: string) => (
                <div className="whitespace-pre-line">{text || '---'}</div>
            ),
        },
        {
            title: 'WED',
            dataIndex: 'wed',
            key: 'wed',
            render: (text: string) => (
                <div className="whitespace-pre-line">{text || '---'}</div>
            ),
        },
        {
            title: 'THU',
            dataIndex: 'thu',
            key: 'thu',
            render: (text: string) => (
                <div className="whitespace-pre-line">{text || '---'}</div>
            ),
        },
        {
            title: 'FRI',
            dataIndex: 'fri',
            key: 'fri',
            render: (text: string) => (
                <div className="whitespace-pre-line">{text || '---'}</div>
            ),
        },
    ];

    return (
        <Modal
            centered
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            footer={null}
            width={720}
            className="custom-black-modal"
        >
            <h3 className="mb-5 text-white text-lg font-medium pt-3">IAL Accounting A2 - IAL - A2 Accounting May 2026 B#1</h3>
            <Table
                columns={columns}
                dataSource={classRoutineData}
                pagination={false}
                bordered
                scroll={{ x: "max-content" }}
                className="custom-table"
                rowKey="id"
            />
        </Modal>
    );
};

export default ClassRoutineModal;