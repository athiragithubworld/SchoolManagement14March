
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react'
import { useNavigate } from "react-router-dom";

//PROPS COMING FROM STUDENTLIST PAGE
export const StudentListTable = ({studentListColumn,studentListDetails}) => {

  const navigate = useNavigate();

  function getDetails() {
    navigate("studentDetails");
  }
  
  return (

      <table className="flex flex-col gap-[10px] w-full h-full rounded-[20px] p-3 table-inner-shadow">

        <thead className=' pr-2'>

          <tr className="w-full h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100 p-3 shadow-md">

            <th className="w-56 h-fit text-sm lg:text-lg text-center font-bold">Student Name</th>
            <th className="w-36 h-fit text-sm lg:text-lg text-center font-bold">Roll No</th>
            <th className="w-36 h-fit text-sm lg:text-lg text-center font-bold">Gender</th>
            <th className="w-36 h-fit text-sm lg:text-lg text-center font-bold">DOB</th>
            <th className="w-36 h-fit text-sm lg:text-lg text-center font-bold">Student ID</th>

          </tr>

        </thead>

        <tbody className="flex flex-col gap-[10px] w-full overflow-y-scroll table-scrollbar h-tbodyheight py-1 pr-2">

            {studentListDetails.map((studentListDetail, index) => (
              <tr key={index} className="w-full h-[52px] rounded-[14px] flex border-[1px] items-center justify-between p-3 shadow-md bg-white cursor-pointer"
              onClick={getDetails}>

                <td className="w-56 h-fit text-sm lg:text-lg text-center font-normal flex items-center gap-2">
                  <img className='h-10 w-10 rounded-full' src="https://img.icons8.com/officel/16/bolivian-girl.png" alt="bolivian-girl"/>
                  {studentListDetail.StudentName}
                </td>
                <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">{studentListDetail.RollNo}</td>
                <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">{studentListDetail.Gender}</td>
                <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">{studentListDetail.DOB}</td>
                <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">{studentListDetail.StudentID}</td>

              </tr>
            ))}

        </tbody>

      </table>
  )
}


export default StudentListTable;