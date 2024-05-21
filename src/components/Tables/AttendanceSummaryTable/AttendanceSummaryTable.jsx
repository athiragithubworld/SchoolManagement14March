
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react'


//PROPS COMING FROM ATTENDANCESUMMARY PAGE
export const AttendanceSummaryTable = ({attendanceSummaryColumn,attendanceSummaryDetails}) => {

  return (

      <table className="flex flex-col gap-[10px] w-full h-full rounded-[20px] p-3 table-inner-shadow">

        <thead className=' pr-2'>
          <tr className="w-full h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100 p-4 shadow-md">

            {
              attendanceSummaryColumn.map(({ label, index }) => (
                <th key={index}
                className="w-40 h-fit text-lg text-center font-bold">

                  {label}

                </th>
              ))
            }

          </tr>
        </thead>

        <tbody className="flex flex-col gap-[10px] w-full overflow-y-scroll SCROLLBAR h-tbodyheight  py-1 pr-2">

            {attendanceSummaryDetails.map((attendanceSummaryDetail, index) => (
              <tr key={index} className="w-full h-[52px] rounded-[14px] flex border-[1px] items-center justify-between p-4 shadow-md bg-white">
                <td className="w-40 h-fit text-lg text-center font-normal">{attendanceSummaryDetail.Sno}</td>
                <td className="w-40 h-fit text-lg text-center font-normal">{attendanceSummaryDetail.Class}</td>
                <td className="w-40 h-fit text-lg text-center font-normal">{attendanceSummaryDetail.Section}</td>
                <td className="w-40 h-fit text-lg text-center font-normal">{attendanceSummaryDetail.Present}</td>
                <td className="w-40 h-fit text-lg text-center font-normal">{attendanceSummaryDetail.Absent}</td>
                <td className="w-40 h-fit text-lg text-center font-normal">{attendanceSummaryDetail.PresentPercent}</td>
              </tr>
            ))}

        </tbody>

      </table>
  )
}

export default AttendanceSummaryTable;
