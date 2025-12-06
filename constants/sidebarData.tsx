"use client";
import { FiBook } from 'react-icons/fi';
import { FaUsers, FaRegFileAlt, FaUserGraduate } from 'react-icons/fa';
import { BiListUl, BiMoney, BiHistory } from 'react-icons/bi';
import { RxCalendar } from 'react-icons/rx';
import { AiOutlineClockCircle, AiOutlineRight } from 'react-icons/ai';
import { BsPersonPlus } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlinePeople } from 'react-icons/md';
import { RiCalendarCheckLine } from 'react-icons/ri';
import { IoNotificationsOutline } from 'react-icons/io5';
import { GiGraduateCap } from 'react-icons/gi';
import Link from 'next/link';
import type { MenuProps } from 'antd';
import { TiUserOutline } from 'react-icons/ti';


const  menuItems: MenuProps['items'] = [
        {
            key: '/subject-list',
            icon: <FiBook size={18} />,
            label: <Link href="/subject-list">Subject List</Link>,
        },
        {
            key: '/batch-list',
            icon: <FaUsers size={18} />,
            label: <Link href="/batch-list">Batch List</Link>,
        },
        {
            key: '/section-list',
            icon: <BiListUl size={18} />,
            label: <Link href="/section-list">Section List</Link>,
        },
        {
            key: 'class-routine',
            icon: <RxCalendar size={18} />,
            label: 'Class Routine',
            children: [
                {
                    key: '/class-routine/overview',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/class-routine/overview">Class Routine</Link>
                        </span>
                    ),
                },
                {
                    key: '/class-routine/enrolled',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/class-routine/enrolled">Student Enrolled Routines</Link>
                        </span>
                    ),
                },
            ],
        },
        {
            key: 'student-list',
            icon: <FaUserGraduate size={18} />,
            label: 'Student List',
            children: [
                {
                    key: '/student-list/assigned',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/student-list/assigned-student-list">Assigned Student List</Link>
                        </span>
                    ),
                },
                {
                    key: '/student-list/assign-to-course',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/student-list/assign-to-course">Assign to Course</Link>
                        </span>
                    ),
                },
                {
                    key: '/student-list/form',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/student-list/student-form">Student Form</Link>
                        </span>
                    ),
                },
                {
                    key: '/student-list/deleted',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/student-list/deleted-student-list">Deleted Student List</Link>
                        </span>
                    ),
                },
            ],
        },
        {
            key: '/student-waiting-list',
            icon: <AiOutlineClockCircle size={18} />,
            label: <Link href="/student-waiting-list">Student Waiting List</Link>,
        },
        {
            key: '/student-registration',
            icon: <BsPersonPlus size={18} />,
            label: <Link href="/student-registration">Student Registration</Link>,
        },
        {
            key: 'sms-panel',
            icon: <HiOutlineMail size={18} />,
            label: 'SMS Panel',
            children: [
                {
                    key: '/sms/all-students',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/sms/all-students">SMS to All Students</Link>
                        </span>
                    ),
                },
                {
                    key: '/sms/unpaid-students',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/sms/unpaid-students">SMS to Unpaid Students</Link>
                        </span>
                    ),
                },
                {
                    key: '/sms/report',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/sms/report">SMS Report</Link>
                        </span>
                    ),
                },
            ],
        },
        {
            key: '/monthly-subscription-fee',
            icon: <BiMoney size={18} />,
            label: <Link href="/monthly-subscription-fee">Monthly Subscription Fee</Link>,
        },
        {
            key: '/all-student-list',
            icon: <MdOutlinePeople size={18} />,
            label: <Link href="/all-student-list">All Student List</Link>,
        },
        {
            key: '/student-history',
            icon: <BiHistory size={18} />,
            label: <Link href="/student-history">Student History</Link>,
        },
        {
            key: 'attendance',
            icon: <RiCalendarCheckLine size={18} />,
            label: 'Attendance',
            children: [
                {
                    key: '/attendance/take-attendance',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/attendance/take-attendance">Take Attendance</Link>
                        </span>
                    ),
                },
                {
                    key: '/attendance/sms-weekly-daily',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/attendance/sms-weekly-daily">SMS Weekly/Daily attendance</Link>
                        </span>
                    ),
                },
                {
                    key: '/attendance/full-month-report',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/attendance/full-month-report">Full Month Report</Link>
                        </span>
                    ),
                },
                {
                    key: '/attendance/excel-output-report',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/attendance/excel-output-report">Excel Output report</Link>
                        </span>
                    ),
                },
            ],
        },
        {
            key: '/notice-list',
            icon: <IoNotificationsOutline size={18} />,
            label: <Link href="/notice-list">Notice List</Link>,
        },
        {
            key: '/report-card',
            icon: <FaRegFileAlt size={18} />,
            label: <Link href="/report-card">Report Card</Link>,
        },
        {
            key: 'exam-module',
            icon: <GiGraduateCap size={18} />,
            label: 'Exam Module',
            children: [
                {
                    key: '/exam-module/exam-list',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/exam-module/exam-list">Exam list</Link>
                        </span>
                    ),
                },
                {
                    key: '/exam-module/admit-card',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/exam-module/admit-card">Admit Card</Link>
                        </span>
                    ),
                },
                {
                    key: '/exam-module/marks-entry',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/exam-module/marks-entry">Marks Entry</Link>
                        </span>
                    ),
                },
                {
                    key: '/exam-module/sms-exam-mark',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/exam-module/sms-exam-mark">SMS Exam Mark</Link>
                        </span>
                    ),
                },
                {
                    key: '/exam-module/marksheet',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/exam-module/marksheet">Marksheet</Link>
                        </span>
                    ),
                },
                {
                    key: '/exam-module/excel-output-marksheets',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/exam-module/excel-output-marksheets">Excel Output Marksheets</Link>
                        </span>
                    ),
                },
            ],
        }, 
          {
            key: 'super-admin',
            icon: <TiUserOutline size={18} />,
            label: 'Super Admin',
            children: [
                {
                    key: '/super-admin/add-admin',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/super-admin/add-admin">Add Admin</Link>
                        </span>
                    ),
                },
                {
                    key: '/super-admin/add-teacher',
                    label: (
                        <span className="flex items-center text-[12px]">
                            <AiOutlineRight className="mr-2 text-[12px] opacity-70" />
                            <Link href="/super-admin/add-teacher">Add Teacher</Link>
                        </span>
                    ),
                },
            ],
        },
]

export { menuItems };