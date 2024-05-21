
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react'
import Field from './Field';

//PROPS COMING FROM STUDENTDETAIL PAGE
export const SecondaryDetails = ({secondaryDetails1 , secondaryDetails2 ,secondaryDetails3}) => {
  return (
    <div className='w-full rounded-2xl border-[1px] flex h-fit p-4 flex-col gap-6 shadow-student'>


      <div className='w-full flex flex-col gap-5'>
    
        <div className='flex place-items-start'><p className='text-lg font-bold'>Parent Details</p></div>

        <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
          {
            secondaryDetails1.map((detail) => <Field detail={detail}></Field>)
          }
        </div>

      </div>


      <div className='w-full flex flex-col gap-5'>
    
        <div className='flex place-items-start'><p className='text-lg font-bold'>Current Address</p></div>

        <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
          {
            secondaryDetails2.map((detail) => <Field detail={detail}></Field>)
          }
        </div>

      </div>


      <div className='w-full flex flex-col gap-5'>
    
        <div className='flex place-items-start'><p className='text-lg font-bold'>Permanent Address</p></div>

        <div className='flex items-center'>
            <div className='w-28 h-fit flex items-center font-medium text-left'>Address</div>
            <div className="w-full h-12 border-[1px] shadow-md rounded-2xl"></div>
        </div>

        <div className='grid grid-cols-3 gap-y-4 gap-x-8'>
          {
            secondaryDetails3.map((detail) => <Field detail={detail}></Field>)
          }
        </div>

      </div>


    </div>
  )
}

export default SecondaryDetails;