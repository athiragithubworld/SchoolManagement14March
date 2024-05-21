
//THIS COMPONENT WAS CREATED BY HAIDER,ICONBUTTON WAS TAKEN FOR SRAVANTHI AND UPDATED


import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useState,useEffect,useRef } from 'react';
import * as XLSX from 'xlsx';
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

//PROPS COMING FROM STUDENTLIST PAGE
export const StudentListButtons = ({showStudentListPopup,setShowStudentListPopup}) => {
  const [data, setData] = useState(null);

  const exportToExcel = () => {
    if (!data) {
      console.error("Data is not available");
      return;
    }

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };

  // Function to fetch data from the URL
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/StudentListDetails");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const fetchedData = await response.json();
      // Convert JSON data to array of arrays
      const dataArray = fetchedData.map((item) => [
        item.StudentName,
        item.RollNo,
        item.Gender,
        item.DOB,
        item.StudentID,
      ]);
      setData(dataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // function having the design for menu icon(edit, share, delete).
  function IconButton({ className }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropdown(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return (
      <div className="flex flex-col" ref={ref}>
        <div
          onClick={() => setShowDropdown((prevState) => !prevState)}
          className={`flex justify-center items-center p-2 w-10 h-10 bg-white rounded-2xl border border-solid border-stone-300 cursor-pointer ${className}`}
        >
          <img
            src={
              "https://cdn.builder.io/api/v1/image/assets/TEMP/71951dafcb37cb60651b14b34087ee7264766f4fab0c5ff297e941864f350c14?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
            }
            alt=""
            className="w-6 aspect-square"
          />
        </div>
        {showDropdown && (
          <div className="flex flex-col justify-left pl-2 pr-2 pt-2 pb-2 text-lg leading-9 whitespace-nowrap bg-white rounded-2xl border border-solid border-stone-300 absolute mt-12 ml-[-80px]">
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div>Download</div>
              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1abd5793beba4dce40c9b249b03a3c11548a27e0f16871929ff434fc2cee672?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                alt={`download icon`}
                className="shrink-0 my-auto w-6 aspect-square"
              /> */}
              <GoDownload
                className={` group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
                onClick={() => { fetchData(); exportToExcel()}}
              />
            </div>
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div className="">Edit</div>
              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/65a189dfb6f868722ac60d6733299f65ddf59f2dd6c99dc222528ac7b8f56d32?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                alt={`edit icon`}
                className="shrink-0 my-auto w-6 aspect-square fill-white"
              /> */}
              <FaRegEdit
                className={`group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div className="">Delete</div>
              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d999651e12724ea8e330f8f744c6e34186194cc7d53890eac88ba9070fe33388?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                alt={`delete icon`}
                className="shrink-0 my-auto w-6 aspect-square"
              /> */}
              <RiDeleteBin6Line
                className={`group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex w-full h-10 place-content-end">
      <span className="flex justify-between w-fit h-10 gap-2">
        {/* <div className="h-10 w-10 rounded-xl border-[1px] flex justify-center items-center border-gray-400">
          <button>
            <MdOutlineFileDownload className="h-6 w-6"/>
          </button>
        </div>

        <div className="h-10 w-10 rounded-xl border-[1px] flex justify-center items-center border-gray-400">
          <button>
              <FiEdit className="h-6 w-6" />
            </button>
        </div>

        <div className="h-10 w-10 rounded-xl border-[1px] flex justify-center items-center border-gray-400">
          <button>
              <RiDeleteBin5Line className="h-6 w-6" />
            </button>
        </div> */}

        <div className="w-32 h-10 p-2 rounded-2xl flex justify-center items-center text-white bg-customblue">
          <button
            className="flex gap-2 justify-center items-center w-full"
            onClick={() => setShowStudentListPopup(!showStudentListPopup)}
          >
            <div className="text-lg">Add New</div>
            <IoMdAdd className="w-5 h-5 text-white" />
          </button>
        </div>

        <IconButton icon="{{ext_8}}" />
      </span>
    </div>
  );
}

export default StudentListButtons;