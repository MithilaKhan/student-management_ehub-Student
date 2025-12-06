import HeaderTitle from '@/shared/HeaderTitle';
import React from 'react';
import TakeAttendanceForm from './TakeAttendanceForm';

const TakeAttendance = () => {
    return (
        <div>
            <HeaderTitle title="Filter Student Attendance List" />
            <div className='flex-center w-full h-full pt-6'>
                <TakeAttendanceForm />
            </div>
        </div>
    );
};

export default TakeAttendance;