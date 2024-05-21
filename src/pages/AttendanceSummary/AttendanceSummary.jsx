
//THIS PAGE WAS CREATED BY HAIDER


import React, { useState,useEffect } from 'react'
import AttendanceSummaryButtons from '../../components/Buttons/AttendanceSummaryButtons/AttendanceSummaryButtons';
import AttendanceSummaryTable from '../../components/Tables/AttendanceSummaryTable/AttendanceSummaryTable';


const attendanceSummaryColumn = [
    {label: "S.No"},
    {label: "Class"},
    {label: "Section"},
    {label: "Present"},
    {label: "Absent"},
    {label: "Present Percent"}
];



export const AttendanceSummary = () => {

    const [attendanceSummaryDetails,setAttendanceSummaryDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:4000/AttendanceSummary");
            if (!response.ok) {
            throw new Error("Failed to fetch data");
            }
            const jsonData = await response.json();
            
            // console.log(jsonData);
            setAttendanceSummaryDetails(jsonData);
        } catch (error) {
            console.log(error.message);
        }
        };
        fetchData();
    },[]);


  return (
    <div className="flex flex-col gap-4 w-full h-full overflow-y-hidden rounded-2xl">

        <AttendanceSummaryButtons></AttendanceSummaryButtons>

        <AttendanceSummaryTable attendanceSummaryColumn={attendanceSummaryColumn} attendanceSummaryDetails={attendanceSummaryDetails}></AttendanceSummaryTable>

    </div>
  )
}

export default AttendanceSummary;