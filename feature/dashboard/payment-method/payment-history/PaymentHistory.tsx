
import HeaderTitle from "@/shared/HeaderTitle";
import StudentCourseTable from "../../course/student-course-list/StudentCourseTable";

const PaymentHistory = () => {
    const summaryData = [
        { title: "Total Payable", value: "66,500.00" },
        { title: "Total Paid", value: "66,215.00" },
        { title: "Total Due", value: "7,500.00" },
        { title: "Total Other", value: "0.00" },
    ];
    return (
        <div>
            <div className="">
                <HeaderTitle title="Payment History" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 ">
                    {summaryData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#0A0B0D] rounded-xl px-6 py-5 text-center border border-neutral-800"
                        >
                            <p className="text-neutral-400 text-sm mb-2">{item.title}</p>
                            <h2 className="text-white text-2xl font-semibold">{item.value}</h2>
                        </div>
                    ))}
                </div>
                <StudentCourseTable />
            </div>
        </div>
    );
};

export default PaymentHistory;