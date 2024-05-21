
//THIS PAGE WAS CREATED BY HAIDER


import React, { useState } from 'react'
import StudentDetailButtons from '../../components/Buttons/StudentDetailButtons/StudentDetailButtons';
import StudentPrimaryDetails from '../../components/Student/StudentPrimaryDetails';
import StudentSecondaryDetails from '../../components/Student/StudentSecondaryDetails';
import UploadStudentDocuments from '../../components/Student/UploadStudentDocuments';

const primaryDetails = [
  {
    name : "First Name"
  },
  {
    name : "Middle Name"
  },
  {
    name : "Last Name"
  },
  {
    name : "Class"
  },
  {
    name : "Section"
  },
  {
    name : "Roll No"
  },
  {
    name : "Gender"
  },
  {
    name : "DOB"
  },
  {
    name : "Mother Tongue"
  },
  {
    name : "Blood Group"
  },
  {
    name : "Disability"
  },
  {
    name : "Adhaar Card No."
  },
  {
    name : "Phone No"
  },
  {
    name : "Cast"
  },
  {
    name : "Religion"
  },
]

const secondaryDetails1 = [
  {
    name : "Father Name"
  },
  {
    name : "Mother Name"
  },
  {
    name : "Mobile No"
  },
  {
    name : "Mobile No"
  },
  {
    name : "E-mail"
  },
  {
    name : "E-mail"
  },
]

const secondaryDetails2 = [
  {
    name : "Current Address"
  },
  {
    name : "Permanent Address"
  },
  {
    name : "Pin Code"
  },
  {
    name : "State"
  }
]

const secondaryDetails3 = [
  {
    name : "Pin Code"
  },
  {
    name : "City"
  },
  {
    name : "State"
  }
]


export const StudentDetail = () => {

  const [studentUploadFiles,setStudentUploadFiles] = useState({
    photo: "",
    aadhar:"",
    pan:"",
    parentAadhar:"",
    birthCertificate:"",
    validity:"",
    migrationCertificate:"",
    tc:"",
    residentialCertificate:"",
    castCertificate:"",
    domicileCertificate:"",
    addDocument:""
  })
 
  return (

    <div className="flex flex-col gap-4 w-full overflow-y-hidden rounded-2xl">

        <StudentDetailButtons></StudentDetailButtons>

        <div className='w-full overflow-y-scroll studentDetail-scrollbar border rounded-2xl shadow-inner p-4 flex flex-col gap-4'>

          <StudentPrimaryDetails primaryDetails={primaryDetails}></StudentPrimaryDetails>

          <StudentSecondaryDetails secondaryDetails1={secondaryDetails1} secondaryDetails2={secondaryDetails2} secondaryDetails3={secondaryDetails3}></StudentSecondaryDetails>

          <UploadStudentDocuments fileImages={studentUploadFiles} setFileImages={setStudentUploadFiles}></UploadStudentDocuments>

        </div>

    </div>

  )

}

export default StudentDetail;