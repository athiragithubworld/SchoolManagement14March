// Created by Athira

import React from "react";


function AddressFields({ title }) {
  return (
    <>
      <h2 className="mt-2 text-lg font-bold  text-black max-md:max-w-full">
        {title}
      </h2>
      {/* Address input field */}
      <div className="flex gap-0 mt-2 text-base  text-black whitespace-nowrap max-md:flex-wrap">
        <label className="my-auto w-[80px]">Address</label>
        <input
          type="text"
          className="shrink-0 ml-5 max-w-full bg-white rounded-xl shadow-primary h-[42px] w-[800px]"
        />
      </div>
      {/* Pin code, city, and state input fields */}
      <div className="flex gap-2 justify-between mt-3 text-base  text-black max-md:flex-wrap">
        <div className="flex gap-0 leading-4">
          <label className="my-auto w-[80px]">Pin Code</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto -ml-1 w-[80px]">City</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
        <div className="flex gap-2">
          <label className="my-auto ml-1 w-[80px]">State</label>
          <input
            type="text"
            className="shrink-0 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
      </div>
    </>
  );
}

export default function EmployeeProfileDetailsPopup() {
  return (
    <div className="flex flex-col justify-between   bg-white rounded-3xl max-w-[954px] max-md:px-5 ">
      {/* First Name , Middle Name , Last Name input fields */}
      <div className="flex gap-2 justify-between mt-2 text-base  text-black max-md:flex-wrap">
        <div className="flex gap-0 ">
          <label className="my-auto w-[80px]">First Name</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto -ml-1 w-[80px]">Middle Name</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
        <div className="flex gap-2">
          <label className="my-auto ml-1 w-[80px]">Last Name</label>
          <input
            type="text"
            className="shrink-0 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
      </div>
      {/* Mobile No ,Mobile No , E-mail  input fields */}
      <div className="flex gap-2 justify-between mt-2 text-base  text-black max-md:flex-wrap">
        <div className="flex gap-0 leading-4">
          <label className="my-auto w-[80px]">Mobile No</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto -ml-1 w-[80px]">Mobile No</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
        <div className="flex gap-2">
          <label className="my-auto ml-1 w-[80px]">E-mail</label>
          <input
            type="text"
            className="shrink-0 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
      </div>

      {/* Gender , DOB ,Mother Tongue input fields */}
      <div className="flex gap-2 justify-between mt-2 text-base leading-5 text-black max-md:flex-wrap">
        <div className="flex gap-0 leading-4">
          <label className="my-auto w-[80px]">Gender</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto -ml-1 w-[80px]">DOB</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
        <div className="flex gap-2 ">
          <label className="my-auto ml-1 w-[80px]">Mother Tongue</label>
          <input
            type="text"
            className="shrink-0 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
      </div>

      {/* Aadhar Card No., PAN Card No. and Religion input fields */}
      <div className="flex sm:gap-1 justify-between mt-2 text-base leading-5 text-black max-md:flex-wrap gap-2">
        <div className="flex gap-0 leading-4">
          <label className="my-auto w-[80px]">Aadhar Card No.</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto -ml-1 w-[80px]">PAN Card No.</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
        <div className="flex gap-2">
          <label className="my-auto ml-1 w-[80px]">Religion</label>
          <input
            type="text"
            className="shrink-0 bg-white rounded-xl shadow-primary h-[42px]  w-[190px]"
          />
        </div>
      </div>

      <AddressFields title="Current Address" />
      <AddressFields title="Permanent Address" />
    </div>
  );
}
