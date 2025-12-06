import React from 'react'; 
import { Input } from 'antd';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import MarksheetTable from './MarksheetTable';

const FilterMarksheet = () => {
    return (
        <div>
            <div className="flex md:flex-row flex-col-reverse justify-between items-start  pb-10 ">
                {/* Left side: Title and info */}
                <div>
                    <div className="flex items-center gap-2 text-lg font-medium pb-3">
                        <FaRegCalendarAlt className="text-[#F1F1F1]" size={18} />
                        <h2 className='text-[#F1F1F1] text-xl'>Attendance Report</h2>
                    </div>
                    <div className=" mt-1 space-y-1.5 text-[#ABABAB]">
                        <p>
                            <span className="font-semibold pe-1 ">Subject:</span>{" "}
                            IAL Accounting A2
                        </p>
                        <p>
                            <span className="font-semibold  pe-1">Batch:</span>{" "}
                            IAL - A2 Accounting May 2026 B#1
                        </p>
                    </div>
                </div>

                   <Input placeholder="Search" className="w-[280px]  md:mb-0 mb-4 " style={{width: 280,  height: 40 }} prefix={<FiSearch size={20} />} />
            </div> 
            <MarksheetTable/>
        </div>
    );
};

export default FilterMarksheet;