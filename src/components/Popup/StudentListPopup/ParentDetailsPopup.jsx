import React, { useState } from "react";
import { TiLeaf } from "react-icons/ti";

function InputField({ label, className, val ,changeHandler }) {
  return (
    <div className="flex gap-0 max-md:flex-wrap">
      <label className="my-auto w-[100px]">{label}</label>
      <input
        className={`shrink-0 ml-5 max-w-full rounded-2xl shadow-primary h-[43px] ${className}`}
        onChange={changeHandler}
        name={val}
      />
    </div>
  );
}

function AddressFields({ title , changeHandler }) {
  return (
    <>
      <h2 className="mt-6 text-lg font-bold leading-4 text-black max-md:max-w-full">
        {title}
      </h2>
      <div className="flex gap-0 mt-2 text-base leading-5 text-black whitespace-nowrap max-md:flex-wrap">
        <label className="my-auto">Address</label>
        <input
          type="text"
          className="shrink-0 ml-5 max-w-full bg-white rounded-xl shadow-primary h-[42px] w-[800px]"
          onChange={changeHandler}
          name = {title.split(" ").join('')}
        />
      </div>
      <div className="flex gap-2 justify-between mt-3 text-base leading-5 text-black max-md:flex-wrap">
        <div className="flex gap-0 leading-4">
          <label className="my-auto">Pin Code</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px] w-[190px]"
            onChange={changeHandler}
            name = {title.split(" ").at(0).concat("Pin")}
          />
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto -ml-1">City</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px] w-[190px]"
            onChange={changeHandler}
            name = {title.split(" ").at(0).concat("City")}
          />
        </div>
        <div className="flex gap-2">
          <label className="my-auto ml-1">State</label>
          <input
            type="text"
            className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] w-[190px]"
            onChange={changeHandler}
            name = {title.split(" ").at(0).concat("State")}
          />
        </div>
      </div>
    </>
  );
}

//PROPS COMING FROM STUDENTLIST->STUDENTLISTSTEPS POPUP
export default function ParentDetailsPopup({parentDetails,setParentDetails}) {

  function changeHandler(event){
    setParentDetails( prevDetails => {
      return {
        ...prevDetails,
        [event.target.name] : event.target.value
      }
    })
  }

  return (
    <div className="flex flex-col justify-between p-2 -ml-1 bg-white rounded-3xl max-w-[954px] max-md:px-5">
      <div className="flex gap-2 justify-between text-base leading-5 text-black max-md:flex-wrap max-md:mr-1.5">
        <InputField label="Father Name" className="w-[296px]" val="FatherName"  changeHandler={changeHandler}/>
        <InputField label="Mother Name" className="w-[296px]" val="MotherName" changeHandler={changeHandler}/>
      </div>
      <div className="flex gap-2 justify-between mt-2 text-base leading-5 text-black max-md:flex-wrap max-md:mr-1.5">
        <InputField label="Mobile No" className="w-[296px]" val="FatherMobileNo" changeHandler={changeHandler}/>
        <InputField label="Mobile No" className="w-[296px]" val="MotherMobileNo" changeHandler={changeHandler}/>
      </div>
      <div className="flex gap-2 justify-between mt-2 text-base leading-5 text-black whitespace-nowrap max-md:flex-wrap max-md:mr-1.5">
        <InputField label="E-mail" className="w-[296px]" val="FatherEmail" changeHandler={changeHandler}/>
        <InputField label="E-mail" className="w-[296px]" val="MotherEmail" changeHandler={changeHandler}/>
      </div>
      <AddressFields title="Current Address" changeHandler={changeHandler}/>
      <AddressFields title="Permanent Address" changeHandler={changeHandler}/>
    </div>
  );
}
