
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react'
import { useState,useEffect } from 'react';
import LeaveManagementButtons from '../../components/Buttons/HRMSButtons/LeaveManagementButtons';
import LeaveManagementTable from '../../components/Tables/HRMSTable/LeaveManagementTable';
import LeaveManagementInfo from '../../components/LeaveManagementInfo/LeaveManagementInfo';
import EmployeeAttendancePopup from '../../components/Popup/HRMSPopup/EmployeeAttendancePopup';

const leaveManagementColumn = [
  {label: "Employee Name"},
  {label: "Leave Type"},
  {label: "Leave Date"},
  {label: "Applied On"},
  {label: "Status"}
];

export const LeaveManagement = () => {

  const [leaveManagementDetails,setLeaveManagementDetails] = useState([]);
  const [showEmployeeAttendancePopup,setShowEmployeeAttendancePopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:4000/LeaveManagement");
        if (!response.ok) {
        throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        
        // console.log(jsonData);
        setLeaveManagementDetails(jsonData);
    } catch (error) {
        console.log(error.message);
    }
    };
    fetchData();
  },[]);


  return (
    <div className="flex flex-col gap-4 w-full rounded-2xl  ">
      <LeaveManagementButtons></LeaveManagementButtons>

      <div className="flex gap-4 w-full flex-col xl:flex-row h-full overflow-hidden">
        <LeaveManagementTable
          showEmployeeAttendancePopup={showEmployeeAttendancePopup}
          setShowEmployeeAttendancePopup={setShowEmployeeAttendancePopup}
          leaveManagementDetails={leaveManagementDetails}
        ></LeaveManagementTable>

        <LeaveManagementInfo></LeaveManagementInfo>
      </div>

      {showEmployeeAttendancePopup && (
        <EmployeeAttendancePopup
          setShowEmployeeAttendancePopup={setShowEmployeeAttendancePopup}
        ></EmployeeAttendancePopup>
      )}
    </div>
  );
}

export default LeaveManagement;