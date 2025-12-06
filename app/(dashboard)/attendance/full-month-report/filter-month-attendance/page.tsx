import FilterMonthAttendance from '@/feature/dashboard/attendance/full-month-report/filter-month-attendance';
import React from 'react';

const FilterMonthAttendancePage = () => {
    return (
        <div> 
            <React.Suspense> 
            <FilterMonthAttendance />
            </React.Suspense>
        </div>
    );
};

export default FilterMonthAttendancePage;