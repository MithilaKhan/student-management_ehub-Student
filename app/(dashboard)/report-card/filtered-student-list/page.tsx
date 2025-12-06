import FilteredStudentList from "@/feature/dashboard/report-card/filtered-student-list/FilteredStudentList";
import React from "react";

const filteredStudentListPage = () => {
    return (
        <div> 
            <React.Suspense> 
            <FilteredStudentList />
            </React.Suspense>
        </div>
    );
};

export default filteredStudentListPage;