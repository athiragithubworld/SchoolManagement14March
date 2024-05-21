//Implemented by swati

import { useState, useEffect } from "react";
import EmployeeAttendanceButtons from "../../components/Buttons/HRMSButtons/EmployeeAttendanceButtons";
import EmployeeAttendanceTable from "../../components/Tables/HRMSTable/EmployeeAttendanceTable";

const EmployeeAttendance = () => {
  const [employeeAttendanceData, setEmployeeAttendanceData] = useState([]);
  const [filteredEmployeeData, setFilteredEmployeeData] = useState(
    employeeAttendanceData
  );

  useEffect(() => {
    //fetch the data
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/EmployeeAttendance"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setEmployeeAttendanceData(jsonData);
        setFilteredEmployeeData(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  //function to handle status change
  const statusHandler = async (employee, status) => {
    const newFilteredData = filteredEmployeeData.map((rowData) => {
      if (rowData.empId === employee.empId) {
        return { ...rowData, status: status };
      } else {
        return { ...rowData };
      }
    });
    setFilteredEmployeeData(newFilteredData);
  };

  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden rounded-2xl ">
      <EmployeeAttendanceButtons />
      <EmployeeAttendanceTable
        filteredEmployeeData={filteredEmployeeData}
        statusHandler={statusHandler}
      />
    </div>
  );
};

export default EmployeeAttendance;
