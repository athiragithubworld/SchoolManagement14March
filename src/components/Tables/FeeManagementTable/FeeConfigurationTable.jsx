// Created by swati , table implemented by Athira

import { useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
// import styles from "../../../styles/StudentFeeTable.module.css";
import DeleteStudentFeeDetails from "../../Popup/StudentFeePopup/DeleteStudentFeeDetails";
import AddNewFeeDetails from "../../Popup/StudentFeePopup/AddNewFeeDetails";

// Component for rendering the student fee table
const FeeConfigurationTable = ({
  studentFeeColumn,
  studentFeedetails,
  handleDeleteEachRowDetails,
  handleUpdateEachRowDetails,
}) => {
  // State variables for managing modal visibility and row details
  const [modalOpen, setModalOpen] = useState(false);
  const [rowId, setRowId] = useState(undefined);
  const [rowDetails, setRowDetails] = useState([]);

 
  // Function to open the modal and set row details
  const openModal = (data) => {
    setModalOpen(true);
    setRowId(data.id);
    const details = {
      id: data.id,
      className: data.className,
      section:data.section,
      admission: data.admission,
      tution: data.tution,
      books: data.books,
      uniform: data.uniform,
      transport: data.transport,
      total: data.total,
      admissionForm:data.admissionForm,
      tcfees:data.tcfees,
      annual:data.annual,
    };
    setRowDetails(details);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeleteEachFeeDetails = () => {
    handleDeleteEachRowDetails(rowId);
  };

  // Function to handle updating of each fee details row
  const updateEachFeeDetails = (updatedRowDetails) => {
    handleUpdateEachRowDetails(updatedRowDetails, rowId);
  };
// console.log('object')
  return (
    <>
      <div className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}>
        <div className="flex flex-col overflow-hidden">
          <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
            <div className="inline-block min-w-full  sm:px-5 lg:px-7">
              <div className="overflow-hidden">

                <table className="w-full flex flex-col gap-[10px]">

                  <thead className="pr-2">
                    <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md">
                      {studentFeeColumn.map((colName, index) => {
                        return (
                          <th
                            key={colName}
                            className={`w-40 h-[19px] text-customtext font-bold text-center text-lg`}
                          >
                            {colName}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>

                  <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                    {/* Render table rows */}
                    {studentFeedetails.length !== 0 &&
                      Array.isArray(studentFeedetails) &&
                      studentFeedetails.map((data, index) => {
                        const total =
                          parseFloat(data.tution) +
                          parseFloat(data.books) +
                          parseFloat(data.uniform) +
                          parseFloat(data.transport) +
                          parseFloat(data.admission)+
                          parseFloat(data.tcfees)+
                          parseFloat(data.admissionForm); 
                        return (
                          <tr key={index} className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md"
                          onClick={()=>openModal(data)}
                          >
                            <td className="w-40 text-customtext lg:text-customtext text-center font-normal">
                              {data.className} {data.section}
                            </td>
                            {/* <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.amount}
                            </td> */}
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.tution}
                            </td>
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.books}
                            </td>
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.uniform}
                            </td>
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.transport}
                            </td>
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              Rs.{total}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>

                </table>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render the modal for deleting student fee details */}
      <Modal handleClose={closeModal} isOpen={modalOpen}>
        <AddNewFeeDetails
          handleDeleteEachFeeDetails={handleDeleteEachFeeDetails}
          updateEachFeeDetails={updateEachFeeDetails}
          closeModal={closeModal}
          rowDetails={rowDetails}
        />
      </Modal>
    </>
  );
};

export default FeeConfigurationTable;
