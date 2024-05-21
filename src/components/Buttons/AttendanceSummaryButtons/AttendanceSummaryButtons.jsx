
//THIS COMPONENT WAS CREATED BY HAIDER,ICONBUTTON WAS TAKEN FOR SRAVANTHI AND UPDATED


import React, { useState,useRef,useEffect} from 'react';
import * as XLSX from 'xlsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../../../styles/AttendanceRegisterButtons.module.css';
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { GoDownload } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


export const AttendanceSummaryButtons = () => {
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

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/AttendanceRegister");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const fetchedData = await response.json();
      // Convert JSON data to array of arrays
      const dataArray = fetchedData.map((item) => [
        item.Sno,
        item.Class,
        item.Section,
        item.Present,
        item.Absent,
        item.PresentPercent,
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
              />
            </div>
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div className="" >
                Edit
              </div>
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

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex w-full h-10 justify-between items-center">
      <div className="flex w-fit h-10 gap-2">
        <div className="w-fit h-10 p-2 gap-1 flex border-[1px] rounded-2xl bg-customblue items-center justify-center">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="w-[85px] h-[20px] text-xs font-normal blue-button-color text-white text-center outline-none cursor-pointer placeholder:text-white  placeholder:text-lg"
            placeholderText="Start Date"
          />
          <FaRegCalendarAlt className="w-5 h-5 text-white" />
        </div>

        <div className="w-fit h-10 p-2 gap-1 flex border-[1px] rounded-2xl  bg-customblue items-center justify-center">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="w-[85px] h-[20px] text-xs font-normal blue-button-color text-white text-center outline-none cursor-pointer placeholder:text-white  placeholder:text-lg"
            placeholderText="End Date"
          />
          <FaRegCalendarAlt className="w-5 h-5 text-white" />
        </div>
      </div>

      <IconButton icon="{{ext_8}}" />
    </div>
  );
}
 
export default AttendanceSummaryButtons;
