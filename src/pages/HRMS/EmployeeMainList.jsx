//Implemented by Swati

import { useEffect, useState } from "react";
import EmployeeMainListTable from "../../components/Tables/HRMSTable/EmployeeMainListTable";
import EmployeeMainListButtons from "../../components/Buttons/HRMSButtons/EmployeeMainListButtons";
import LeaveManagementPopup from "../../components/Popup/HRMSPopup/LeaveManagementPopup";
import Notification from "../../ui/Notification";

const EmployeeMainList = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [showLeaveManagementPopup, setShowLeaveManagementPopup] =
    useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState(true);
  const [message, setMessage] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState({});

  useEffect(() => {
    //fetch the data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/EmployeeLeaveList");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setEmployeeList(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  async function showNotification(status, message, empId) {
    const updatedStatusEmp = employeeList.filter((emp) => emp.id === empId);
    console.log(employeeList, empId);
    const index = employeeList.findIndex((emp) => emp.id === empId);
    console.log(index);
    console.log("emp", updatedStatusEmp);
    await fetch(`http://localhost:4000/EmployeeLeaveList/${empId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...selectedEmployee,
        status: status === "success" ? "Approved" : "Denied",
      }),
    });
    const updatedEmployeeList = [...employeeList];
    updatedEmployeeList[index] = {
      ...selectedEmployee,
      status: status === "success" ? "Approved" : "Denied",
    };
    setEmployeeList(updatedEmployeeList);
    setShowLeaveManagementPopup(false);
    setShowAlert(true);
    setStatus(status);
    setMessage(message);
  }

  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden rounded-2xl">
      <EmployeeMainListButtons />
      <EmployeeMainListTable
        employeeList={employeeList}
        setShowLeaveManagementPopup={setShowLeaveManagementPopup}
        setSelectedEmployee={setSelectedEmployee}
      />
      {showLeaveManagementPopup && (
        <LeaveManagementPopup
          setShowLeaveManagementPopup={setShowLeaveManagementPopup}
          showNotification={showNotification}
          selectedEmployee={selectedEmployee}
        />
      )}
      {showAlert && (
        <Notification
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          status={status}
          message={message}
        />
      )}
    </div>
  );
};

export default EmployeeMainList;
