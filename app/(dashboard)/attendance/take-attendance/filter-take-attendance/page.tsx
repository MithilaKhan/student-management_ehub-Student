import FilterTakeAttendance from '@/feature/dashboard/attendance/take-attendance/filter-take-attendance';
import React from 'react';

const FilterTakeAttendancePage = () => {
    return (
        <div> 
            <React.Suspense> 
            <FilterTakeAttendance />
            </React.Suspense>
        </div>
    );
};

export default FilterTakeAttendancePage;