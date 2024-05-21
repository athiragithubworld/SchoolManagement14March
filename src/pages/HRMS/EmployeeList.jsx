
// Created by Athira

import React, { useState } from 'react'
import EmployeeListButtons from '../../components/Buttons/HRMSButtons/EmployeeListButtons';
import EmployeeListTable from '../../components/Tables/HRMSTable/EmployeeListTable';
import employeeImage from "../../../src/assets/images/employeeImage.png";
import { useEffect } from 'react';

// Arrays defining column names for different employee roles
const employeeListColumnArr = [
  "Employee Name",
  "Employee Id",
  "Designation",
  "Qualification",
  "Role",
];
const facultyListColumnArr = [
  "Employee Name",
  "Employee Id",
  "Primary Subject",
  "Secondary Subject",
  "Qualification",
];

// Sample data for different employee roles
const facultyDetailsArr = [
  {
    employeeName: "Suchita",
    employeeId: "12345",
    primarySubject: "Maths",
    secondarySubject: "Physics",
    qualification: "BA,B.Ed",
    image: employeeImage,
  },
  {
    employeeName: "Suchita",
    employeeId: "12345",
    primarySubject: "Maths",
    secondarySubject: "Physics",
    qualification: "BA,B.Ed",
    image: employeeImage,
  },
  {
    employeeName: "Suchita",
    employeeId: "12345",
    primarySubject: "Maths",
    secondarySubject: "Physics",
    qualification: "BA,B.Ed",
    image: employeeImage,
  },
  {
    employeeName: "Suchita",
    employeeId: "12345",
    primarySubject: "Maths",
    secondarySubject: "Physics",
    qualification: "BA,B.Ed",
    image: employeeImage,
  },
];

const employeeDetailsArr = [
  {
    employeeName: "Suchita",
    employeeId: "12345",
    designation: "Faculty",
    qualification: "BA,B.Ed",
    role: "Teaching",
    image: employeeImage,
  },
  {
    employeeName: "Suthi",
    employeeId: "123456789",
    designation: "Librarian",
    qualification: "Degree",
    role: "Support Staff",
    image: employeeImage,
  },
  {
    employeeName: "Sunil",
    employeeId: "123456",
    designation: "Driver",
    qualification: "Plus Two",
    role: "Non Teaching",
    image: employeeImage,
  },
  {
    employeeName: "Suthish",
    employeeId: "89457",
    designation: "Supervisor",
    qualification: "MBA",
    role: "Admin Staff",
    image: employeeImage,
  },
  {
    employeeName: "Suthi",
    employeeId: "123456789",
    designation: "Librarian",
    qualification: "Degree",
    role: "Support Staff",
    image: employeeImage,
  },
  {
    employeeName: "Sunil",
    employeeId: "123456",
    designation: "Driver",
    qualification: "Plus Two",
    role: "Non Teaching",
    image: employeeImage,
  },
  {
    employeeName: "Sunil",
    employeeId: "123456",
    designation: "Cleaner",
    qualification: "Plus Two",
    role: "Non Teaching",
    image: employeeImage,
  },
  {
    employeeName: "Sunil",
    employeeId: "123456",
    designation: "Peon",
    qualification: "Plus Two",
    role: "Non Teaching",
    image: employeeImage,
  },
  {
    employeeName: "Sunila",
    employeeId: "123456",
    designation: "Cafeteria",
    qualification: "Plus Two",
    role: "Non Teaching",
    image: employeeImage,
  },
  {
    employeeName: "Suthish",
    employeeId: "89457",
    designation: "Supervisor",
    qualification: "MBA",
    role: "Admin Staff",
    image: employeeImage,
  },
  {
    employeeName: "Sunira",
    employeeId: "89457",
    designation: "Clerk",
    qualification: "MBA",
    role: "Admin Staff",
    image: employeeImage,
  },
  {
    employeeName: "Suthish",
    employeeId: "89457",
    designation: "Supervisor",
    qualification: "MBA",
    role: "Admin Staff",
    image: employeeImage,
  },
  {
    employeeName: "Sunira",
    employeeId: "89457",
    designation: "Clerk",
    qualification: "MBA",
    role: "Admin Staff",
    image: employeeImage,
  },
  {
    employeeName: "Suchita",
    employeeId: "12345",
    designation: "Faculty",
    qualification: "BA,B.Ed",
    role: "Teaching",
    image: employeeImage,
  },
  {
    employeeName: "Suthi",
    employeeId: "123456789",
    designation: "Librarian",
    qualification: "Degree",
    role: "Support Staff",
    image: employeeImage,
  },
  {
    employeeName: "Suchita",
    employeeId: "12345",
    designation: "Faculty",
    qualification: "BA,B.Ed",
    role: "Teaching",
    image: employeeImage,
  },
  {
    employeeName: "Suchita",
    employeeId: "12345",
    designation: "Faculty",
    qualification: "BA,B.Ed",
    role: "Teaching",
    image: employeeImage,
  },
];

// Condition for sorting employee


export default function EmployeeList() {
  const [selectEmployeeRole, setSelectEmployeeRole] = useState();
  const [employeeListColumn, setEmployeeListColumn] = useState(
    employeeListColumnArr
  );
  const [employeeDetails, setEmployeeDetails] = useState(employeeDetailsArr);

  // Function to handle selection of employee role
  function handleselectedEmployeeRole(selectedEmployeeRole) {
    setSelectEmployeeRole(selectedEmployeeRole);
  }

  // Effect hook to update employee list based on selected role
  useEffect(() => {
    // Filter employee list based on selected role
    if (
      selectEmployeeRole !== "All Employee" &&
      selectEmployeeRole !== null &&
      selectEmployeeRole !== undefined &&
      selectEmployeeRole !== "Teaching"
    ) {
      const filteredEmployeeList = employeeDetailsArr.filter(
        (employee) => employee.role === selectEmployeeRole
      );
      setEmployeeListColumn(employeeListColumnArr);
      setEmployeeDetails(filteredEmployeeList);
    } else if (selectEmployeeRole === "Teaching") {
      // If role is "Teaching", update column names and use faculty details
      setEmployeeListColumn(facultyListColumnArr);
      setEmployeeDetails(facultyDetailsArr);
    } else {
      // If no role is selected or "All Employee" is selected, reset to the original array
      setEmployeeListColumn(employeeListColumnArr);
      setEmployeeDetails(employeeDetailsArr);
    }
  }, [selectEmployeeRole]);

  return (
    <div className="flex flex-col gap-4 w-full  overflow-hidden rounded-2xl">
      {/* Component for selecting employee role */}
      <EmployeeListButtons
        handleselectedEmployeeRole={handleselectedEmployeeRole}
      />
      {/* Component for displaying employee list table */}
      <EmployeeListTable
        employeeListColumn={employeeListColumn}
        employeeDetails={employeeDetails}
        selectEmployeeRole={selectEmployeeRole}
      />
    </div>
  );
}
