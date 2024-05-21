
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react'


export const LeaveManagementTable = ({leaveManagementDetails,setShowEmployeeAttendancePopup}) => {

  return (
    <table className="flex flex-col gap-[10px] h-[50%] xl:h-full rounded-3xl p-3 table-inner-shadow w-full xl:w-[75%] ">

        <thead className='pr-2'>
          <tr className="w-full h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100 p-3 shadow-md">

            <th className="w-28 lg:w-32 h-fit text-xs lg:text-lg text-center font-bold">Employee Name</th>
            <th className="w-20 lg:w-28 h-fit text-xs lg:text-lg text-center font-bold">Leave Type</th>
            <th className="w-20 lg:w-28 h-fit text-xs lg:text-lg text-center font-bold">Leave Date</th>
            <th className="w-20 lg:w-28 h-fit text-xs lg:text-lg text-center font-bold">Applied On</th>
            <th className="w-20 lg:w-28 h-fit text-xs lg:text-lg text-center font-bold">Status</th>

          </tr>
        </thead>

        <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
            {
              leaveManagementDetails.map((leaveManagementDetail, index) => (
                <tr key={index} className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md cursor-pointer"
                onClick={()=>setShowEmployeeAttendancePopup(true)}>

                  <td className="w-28 lg:w-32 h-fit text-xs lg:text-base font-normal flex items-center gap-2">
                    <img className='w-6 h-6 lg:w-8 lg:h-8 xl:h-10 xl:w-10 rounded-full' src="https://img.icons8.com/officel/16/bolivian-girl.png" alt="bolivian-girl"/>
                    <span>{leaveManagementDetail.employeeName}</span>
                  </td>
                  <td className="w-20 lg:w-28 h-fit text-xs lg:text-base text-center font-normal">{leaveManagementDetail.leaveType}</td>
                  <td className="w-20 lg:w-28 h-fit text-xs lg:text-base text-center font-normal">{leaveManagementDetail.leaveDate}</td>
                  <td className="w-20 lg:w-28 h-fit text-xs lg:text-base text-center font-normal">{leaveManagementDetail.appliedOn}</td>
                  <td className="w-20 lg:w-28 h-fit text-xs lg:text-base text-center font-normal">{leaveManagementDetail.status}</td>

                </tr>
              ))
            }
        </tbody>

    </table>


  )
}

export default LeaveManagementTable;