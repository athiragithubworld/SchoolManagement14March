
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react'

const classRepresentativeListDetails = [
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
    {
        name: "Alkesh Jadhav",
        rollno: "1",
        gender: "Male",
        attendancePercentage: "95%",
        selectMonitor:""
    },
]

export const ClassRepresentativePopup = ({setShowClassRepresentativePopup}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
        <table className="flex flex-col gap-3 w-[1116px] rounded-3xl p-4 table-inner-shadow bg-white overflow-auto">

            <h2 className=' text-xl font-bold'>Student List</h2>

            <thead>

            <tr className="w-full h-[74px] rounded-2xl flex border-[1px] items-center justify-between bg-blue-100 p-3 shadow-md">

                <th className="w-56 h-fit text-sm lg:text-lg text-center font-normal">Student Name</th>
                <th className="w-36 h-fit text-sm lg:text-lg text-center font-normal">Roll No</th>
                <th className="w-36 h-fit text-sm lg:text-lg text-center font-normal">Gender</th>
                <th className="w-36 h-fit text-sm lg:text-lg text-center font-normal">Percentage</th>
                <th className="w-36 h-fit text-sm lg:text-lg text-center font-normal">Select Monitor</th>

            </tr>

            </thead>

            <tbody className="flex flex-col gap-4 w-full overflow-y-scroll table-scrollbar py-1 h-tbodyheight">

                <tr className="w-full h-[52px] rounded-2xl flex border-[1px] items-center justify-between p-3 shadow-md bg-white">

                    <td className="w-56 h-fit text-sm lg:text-lg text-center font-normal flex items-center gap-2 justify-center">
                        <img className='h-10 w-10 rounded-full' src="https://img.icons8.com/officel/16/bolivian-girl.png" alt="bolivian-girl"/>
                        Alkesh Jadhav
                    </td>
                    <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">1</td>
                    <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">Male</td>
                    <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">95%</td>
                    <td className="w-36 h-fit flex justify-center items-center font-bold">
                        <img
                            className="h-6 w-6 rounded-full"
                            src="https://img.icons8.com/emoji/48/star-emoji.png"
                            alt="star-emoji"
                        />
                    </td>   

                </tr>
                
                {classRepresentativeListDetails.map((classRepresentativeListDetail, index) => (
                <tr key={index}
                className="w-full h-[52px] rounded-2xl flex border-[1px] items-center justify-between p-3 shadow-md bg-white">

                    <td className="w-56 h-fit text-sm lg:text-lg text-center font-normal flex items-center gap-2 justify-center">
                        <img className='h-10 w-10 rounded-full' src="https://img.icons8.com/officel/16/bolivian-girl.png" alt="bolivian-girl"/>
                        {classRepresentativeListDetail.name}
                    </td>
                    <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">{classRepresentativeListDetail.rollno}</td>
                    <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">{classRepresentativeListDetail.gender}</td>
                    <td className="w-36 h-fit text-sm lg:text-lg text-center font-normal">{classRepresentativeListDetail.attendancePercentage}</td>
                    <td className="w-36 h-fit flex justify-center items-center font-bold">
                        <img
                            className="h-6 w-6 rounded-full"
                            src="https://img.icons8.com/forma-regular/24/star.png"
                            alt="star-emoji"
                        />
                    </td>
                </tr>
                ))}

            </tbody>

            <div className='flex w-full place-content-center'>
                <button className='p-2 w-32 h-10 bg-blue-500 text-white rounded-2xl' onClick={()=>setShowClassRepresentativePopup(false)}>Save</button>
            </div>

        </table>
    </div>
  )
}

export default ClassRepresentativePopup;
