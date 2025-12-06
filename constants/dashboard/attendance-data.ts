
const gradeOptions = [
    { label: 'Select Grade', value: '' },
    { label: 'Grade 6', value: 'grade-6' },
    { label: 'Grade 7', value: 'grade-7' },
    { label: 'Grade 8', value: 'grade-8' },
];

const subjectOptions = [
    { label: 'Select Subject', value: '' },
    { label: 'Mathematics', value: 'mathematics' },
    { label: 'Science', value: 'science' },
    { label: 'English', value: 'english' },
];

const batchOptions = [
    { label: 'Select Batch', value: '' },
    { label: 'Batch 01', value: 'batch-01' },
    { label: 'Batch 02', value: 'batch-02' },
];

const sectionOptions = [
    { label: 'Select Section', value: '' },
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
];

const monthlyData = [
    {
        id: 1,
        studentName: "Adiyat Rahman",
        attendance: Array(31).fill("-"),
        totalAttendance: 0,
        totalClasses: 0,
        fatherNumber: "8801795541385",
        motherNumber: "8801758219917",
    },
    {
        id: 2,
        studentName: "Shafana mahmud",
        attendance: Array(31).fill("-"),
        totalAttendance: 0,
        totalClasses: 0,
        fatherNumber: "8801795541386",
        motherNumber: "8801758219918",
    },
    {
        id: 3,
        studentName: "Afnan akter nancy",
        attendance: Array(31).fill("-"),
        totalAttendance: 0,
        totalClasses: 0,
        fatherNumber: "8801795541387",
        motherNumber: "8801758219919",
    },
    {
        id: 4,
        studentName: "Rahima Khan",
        attendance: Array(31).fill("-"),
        totalAttendance: 0,
        totalClasses: 0,
        fatherNumber: "8801795541390",
        motherNumber: "8801758219920",
    },
    {
        id: 5,
        studentName: "Karim Ahmed",
        attendance: Array(31).fill("-"),
        totalAttendance: 0,
        totalClasses: 0,
        fatherNumber: "8801795541391",
        motherNumber: "8801758219921",
    },
    {
        id: 6,
        studentName: "Sarah Rahman",
        attendance: Array(31).fill("-"),
        totalAttendance: 0,
        totalClasses: 0,
        fatherNumber: "8801795541392",
        motherNumber: "8801758219922",
    },
    {
        id: 7,
        studentName: "Imran Hasan",
        attendance: Array(31).fill("-"),
        totalAttendance: 0,
        totalClasses: 0,
        fatherNumber: "8801795541393",
        motherNumber: "8801758219923",
    },
    {
        id: 8,
        studentName: "Nadia Islam",
        attendance: Array(31).fill("-"),
        totalAttendance: 0,
        totalClasses: 0,
        fatherNumber: "8801795541394",
        motherNumber: "8801758219924",
    },
    {
        id: 9,
        studentName: "Fahim Uddin",
        attendance: Array(31).fill("-"),
        totalAttendance: 0,
        totalClasses: 0,
        fatherNumber: "8801795541395",
        motherNumber: "8801758219925",
    },
    {
        id: 10,
        studentName: "Tasnia Akter",
        attendance: Array(31).fill("-"),
        totalAttendance: 0,
        totalClasses: 0,
        fatherNumber: "8801795541396",
        motherNumber: "8801758219926",
    },
];

const reportTypeOptions = [
    { label: 'Select Report', value: '' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Daily', value: 'daily' },
];

const contactOptions = [
    { label: "Father's Contact", value: 'father' },
    { label: "Mother's Contact", value: 'mother' },
    { label: "Guardian's Contact", value: 'guardian' },
];

export { gradeOptions, subjectOptions, batchOptions, sectionOptions, monthlyData , reportTypeOptions, contactOptions};