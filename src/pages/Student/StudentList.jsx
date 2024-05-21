
//THIS PAGE WAS CREATED BY HAIDER


import React from 'react'
import { useState,useEffect } from 'react';
import StudentListButtons from '../../components/Buttons/StudentListButtons/StudentListButtons';
import StudentListTable from '../../components/Tables/StudentListTable/StudentListTable';
import StudentListSteps from "../../components/Popup/StudentListPopup/StudentListSteps"

const studentListColumn = [
    {label: "Student Name"},
    {label: "Roll No"},
    {label: "Gender"},
    {label: "DOB"},
    {label: "Student ID"}
  ];


export const StudentList = () => {

    const [studentListDetails,setStudentListDetails] = useState([]);
    const [showStudentListPopup,setShowStudentListPopup] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:4000/StudentListDetails");
            if (!response.ok) {
            throw new Error("Failed to fetch data");
            }
            const jsonData = await response.json();
            
            // console.log(jsonData);
            setStudentListDetails(jsonData);
        } catch (error) {
            console.log(error.message);
        }
        };
        fetchData();
    },[]);

    const handleAddStudentDetails = (newDetails) => {
      const updatedDetailsArray = [...studentListDetails];
      updatedDetailsArray.push({
        id: Math.random(),
        ...newDetails,
      });
      setStudentListDetails(updatedDetailsArray);
    };


  return (
    <div className="flex flex-col gap-4 w-full h-full overflow-y-hidden rounded-2xl">

        <StudentListButtons showStudentListPopup={showStudentListPopup} setShowStudentListPopup={setShowStudentListPopup}></StudentListButtons>

        <StudentListTable studentListColumn={studentListColumn} studentListDetails={studentListDetails}></StudentListTable>

        {
          showStudentListPopup && <StudentListSteps handleAddStudentDetails={handleAddStudentDetails}/>
        }

    </div>
  )
}

export default StudentList;