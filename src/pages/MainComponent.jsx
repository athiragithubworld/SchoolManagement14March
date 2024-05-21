import { useState } from "react";
import classes from "../styles/MainComponent.module.css";
import { Routes, Route } from "react-router-dom";
import Modal from "../components/Modal/Modal";
// import HRMSIcon from "../../public/assets/images/HRMSIcon.png";

import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
//Dashboard
import Dashboard from "../pages/Dashboard/Dashboard";
//Class Management
import StudentList from "./Student/StudentList";
// Fee Management
import StudentFeeList from "./FeeManagement/StudentFeeList";
import FeeConfiguration from "./FeeManagement/FeeConfiguration";
//Attendance
import AttendanceRegister from "../pages/AttendanceRegister/AttendanceRegister";
import StudentAttendance from "../pages/StudentAttendance/StudentAttendance";
import AttendanceSummary from "./AttendanceSummary/AttendanceSummary";
// Time Table
import TimeTableDashboard from "../pages/TimeTable/TimeTableDashboard";
//payroll
import PayrollDashboad from "../pages/Payroll/PayrollDashboard";
import NewBank from "./Payroll/NewBank";
import PayOuts from "./Payroll/PayOuts";
import EnrollmentDashboard from "../pages/Enrollment/EnrollmentDashboard";
import MarkRegister from "../pages/MarkRegister/MarkRegister";
import StudentDetail from "./Student/StudentDetail";
import ContainerPopup from "../components/Popup/CreateClassPopup/ContainerPopup";
import ClassManagementDashboard from "./ClassManagement/ClassManagementDashboard";
import EmployeeList from "./HRMS/EmployeeList";
import LeaveManagement from "./HRMS/LeaveManagement";
import EmployeeAttendance from "./HRMS/EmployeeAttendance";
import EmployeeMainList from "./HRMS/EmployeeMainList";
import EmployeeProfilePopup from "../components/Popup/HRMSPopup/EmployeeProfilePopup";
import FeeCollection from "./FeeManagement/FeeCollection"

// Functional component MainComponent
export default function MainComponent() {
  const [isOpenPayroll, setIsOpenPayroll] = useState(true);

  function closePayrollModal() {
    setIsOpenPayroll(false);
  }

  return (
    <>
      <Navbar />
      <div className={`${classes.maincomponentwraper} scrollbarnone  `}>
        <div className={classes["sidebar"]}>
          <Sidebar />
        </div>
        {/* <div className={`w-full overflow-y-auto  border border-black`}> */}
        <Routes>
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Class Management */}
          <Route path="/viewtimetable" element={<TimeTableDashboard />} />
          <Route path="/attendanceRegister" element={<AttendanceRegister />} />
          <Route path="/student/studentList" element={<StudentList />} />
          {/* Fee ManageMent */}
          <Route path="/studentFeeList" element={<StudentFeeList />} />
          <Route path="/feeConfiguration" element={<FeeConfiguration />} />
          <Route path="/feeCollection" element={<FeeCollection />} />
          {/* Attendance */}
          <Route path="/studentAttendance" element={<StudentAttendance />} />
          <Route path="/attendanceRegister" element={<AttendanceRegister />} />
          <Route path="/attendanceSummary" element={<AttendanceSummary />} />
          {/* TimeTable */}
          <Route path="/addtimetable" element={<TimeTableDashboard />} />
          <Route path="/viewtimetable" element={<TimeTableDashboard />} />
          <Route path="/updatetimetable" element={<TimeTableDashboard />} />
          {/* Payroll */}
          <Route path="/payroll" element={<PayrollDashboad />} />
          <Route path="/newBank" element={<NewBank />} />
          <Route path="/payouts" element={<PayOuts />} />
          <Route
            path="student/studentList/studentDetails"
            element={<StudentDetail />}
          />
          <Route path="/admission" element={<EnrollmentDashboard />} />
          <Route path="/markregister" element={<MarkRegister />} />
          {/* class Management Popup */}
          <Route path="/createClass" element={<ContainerPopup />} />

          {/* class management Dashboard */}
          <Route
            path="/classmanagementdashboard"
            element={<ClassManagementDashboard />}
          />
          {/* HRM Page */}
          <Route path="/employeeattendance" element={<EmployeeAttendance />} />
          {/* Employee List  */}
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route
            path="employeeList/employeeprofile"
            element={<EmployeeProfilePopup />}
          />
          {/* Leave Management */}
          <Route path="/employeeMainList" element={<EmployeeMainList />} />
          <Route path="/leavemanagement" element={<LeaveManagement />} />
          <Route
            path="employeeattendance/leavemanagement"
            element={<LeaveManagement />}
          />
        </Routes>
        {/* </div> */}
      </div>
      {/* <Modal isOpen={isOpenPayroll} closeModal={closePayrollModal}>

          <EmployeeListPagination />
        </Modal> */}
    </>
  );
}
