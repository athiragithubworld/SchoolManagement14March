
//THIS COMPONENT WAS CREATED BY HAIDER

//PROPS COMING FROM STUDENTPRIMARYDETAILS OR STUDENTSECONDARYDETAILS PAGE
import React from 'react'

export const Field = ({detail}) => {

  return (
    <div className='flex items-center'>
        
        <div className='w-32 h-fit flex items-center font-medium text-left text-base'>
            {detail.name}
        </div>

        <div className="w-full h-12 border-[1px] shadow-md rounded-2xl">

        </div>

    </div>
  )
}

export default Field;