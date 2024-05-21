import * as React from "react";
import { useState } from "react";

function InputField({ label, className, changeHandler}) {
  return (
    <div className="flex gap-1">
      <label className="my-auto w-[77px]">{label}</label>
      <input
        className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none ${className}`}
        onChange={changeHandler}
        name = {label.split(" ").join('')}
      />
    </div>
  );
}

//PROPS COMING FROM STUDENTLIST->STUDENTLISTSTEPS POPUP
export default function StudentDetails({studentDetails,setStudentDetails}) {

  function changeHandler(event){
    setStudentDetails( prevDetails => {
      return {
        ...prevDetails,
        [event.target.name] : event.target.value
      }
    })
  }

  const inputFields = [
    { label: "First Name" },
    { label: "Middle Name" },
    { label: "Last Name" },
    { label: "Class" },
    { label: "Section" },
    { label: "Roll No" },
    { label: "Gender" },
    { label: "DOB" },
    { label: "Mother Tongue" },
    { label: "Blood Group" },
    { label: "Disability" },
    { label: "Aadhar Card No" },
    { label: "Phone No", className: "leading-5" },
    { label: "Cast", className: "whitespace-nowrap" },
    { label: "Religion", className: "whitespace-nowrap" },
  ];

  return (
    <section className="flex flex-col bg-white rounded-3xl max-w-[955px] max-md:px-5">
      <div className="flex gap-3 justify-between px-px mt-3 text-base leading-5 text-black max-md:flex-wrap">
        {inputFields.slice(0, 3).map((field, index) => (
          <InputField changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-3 text-base leading-5 text-black max-md:flex-wrap">
        {inputFields.slice(3, 6).map((field, index) => (
          <InputField changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-2 text-base leading-5 text-black max-md:flex-wrap">
        {inputFields.slice(6, 9).map((field, index) => (
          <InputField changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-2 text-base leading-5 text-black max-md:flex-wrap">
        {inputFields.slice(9, 12).map((field, index) => (
          <InputField changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-2 text-base leading-5 text-black max-md:flex-wrap">
        {inputFields.slice(12).map((field, index) => (
          <InputField changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
          />
        ))}
      </div>
    </section>
  );
}
