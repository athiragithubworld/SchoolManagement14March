
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react'
import Field from "./Field"
// import abc from "../../assets/women-profile.webp"

//PROPS COMING FROM STUDENTDETAIL PAGE
export const PrimaryDetails = ({primaryDetails}) => {
  return (
    <div className=' w-full rounded-2xl flex h-fit p-4 border-[1px] justify-between shadow-student'>
    
      <div className='flex justify-center items-center w-1/6'>
        <img className='w-[153px] rounded-full' alt="person-female--v2" src={("../../assets/women-profile.webp")}/>
      </div>


      <div className='grid grid-cols-3 w-5/6 gap-y-4 gap-x-8'>

        {
          primaryDetails.map((detail) => <Field detail={detail}></Field>)
        }

      </div>

    </div>
  )
}

export default PrimaryDetails;