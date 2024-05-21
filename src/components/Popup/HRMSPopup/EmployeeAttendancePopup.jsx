
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react'
// import profile1 from "../../../assets/images/profile1.png";

const EmployeeAttendancePopupField = [
    {
      name : "Date"
    },
    {
      name : "Applied On"
    },
    {
      name : "Status"
    },
    {
      name : "Leave Type"
    }
]

const PopupField = ({detail}) => {

    return (
      <div className='flex items-center gap-x-2'>
          
          <div className='w-[100px] h-[52px] flex items-center font-medium text-lg'>{detail.name}</div>
          <div className="w-full h-[52px] p-4 border-[1px] shadow-md rounded-2xl text-base"></div>
  
      </div>
    )
}

export const EmployeeAttendancePopup = ({setShowEmployeeAttendancePopup}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="w-[705px] h-[415px] flex flex-col gap-[34px] p-[34px] border-[1px] rounded-2xl bg-white">
        <div className="flex flex-col gap-6">
          <div className="flex w-full justify-between">
            <div className="flex gap-[6px] justify-center items-center">
              <img
                src="/assets/images/profile1.png"
                className=" h-10 w-10"
              ></img>
              <div className="flex flex-col gap-[6px]">
                <span className=" text-lg font-bold">Suchita</span>
                <span>Support Staff</span>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <span className="text-xs">2 days</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {EmployeeAttendancePopupField.map((detail) => (
              <PopupField detail={detail}></PopupField>
            ))}
            <div className="flex items-center col-span-full gap-x-2">
              <div className="w-[80px] h-[52px] flex items-center font-medium text-base">
                Cause Of Leave
              </div>
              <div className="w-full h-[52px] p-4 border-[1px] shadow-md rounded-2xl text-sm"></div>
            </div>
          </div>
        </div>

        <div className="flex w-full place-content-center">
          <button
            className="p-2 w-32 h-10 bg-blue-500 text-white rounded-2xl"
            onClick={() => setShowEmployeeAttendancePopup(false)}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeAttendancePopup;