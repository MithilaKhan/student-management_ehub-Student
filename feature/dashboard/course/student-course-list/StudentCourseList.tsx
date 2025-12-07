import { FiEdit } from 'react-icons/fi';
import StudentCourseTable from './StudentCourseTable';
import Link from 'next/link';

const StudentCourseList = () => {

    return (
        <div>
            <div className="">
                {/* header */}
                <div className="flex md:flex-row flex-col items-start justify-between md:gap-y-0 gap-y-4 pb-5 ">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-[#1e293b]">
                            <FiEdit className="text-white" />
                        </div>
                        <h3 className="text-white text-lg font-medium">
                            Student Assigned Courses
                        </h3>
                    </div>

                    <div className=" ">
                        <Link href={"/course/enroll-new-course"} className=" bg-[#198754] h-[45px]  px-8 py-2.5 rounded-md text-white">
                            Enrol To A New Course
                        </Link >
                    </div>
                </div>
                <StudentCourseTable />
            </div>
        </div>
    );
};

export default StudentCourseList;