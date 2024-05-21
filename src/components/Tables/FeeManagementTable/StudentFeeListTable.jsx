//table layout by athira, filters added by swati, name and pnr popup added by gunjan
import { AiOutlinePrinter } from "react-icons/ai";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import RequestFeePopup from "../../Popup/StudentFeePopup/RequestFeePopup";
import FeeCollectionPopup from "../../Popup/StudentFeePopup/FeeCollectionPopup";
import FeesRecieptPopup from "../../Popup/StudentFeePopup/FeesRecieptPopup";
import NameAndPNRPopup from "../../Popup/StudentFeePopup/NameAndPNRPopup";
import profile from "../../../assets/images/table-profile.webp";

const StudentListTable = ({ tableData, filterOption }) => {
  const [showRequestFeePopup, setShowRequestFeePopup] = useState(false);
  const [showFeeCollectionPopup, setShowFeeCollectionPopup] = useState(false);
  const [showFeeRecieptPopup, setShowFeeRecieptPopup] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});
  //name and PR popup added
  const [showNameAndPNRPopup, setShowNameAndPNRPopup] = useState(false);
  // function to get color based on filters
  function getColor(status) {
    switch (status) {
      case "Paid":
        return "bg-[#edffdd] rounded-xl border-[#0a8100] text-[#0a8100]";
      case "Unpaid":
        return "bg-[#ffdbd9] rounded-xl border-[#bf0000] text-[#bf0000]";
      default:
        return {};
    }
  }

  // function to close all modals
  const closeModal = () => {
    setShowRequestFeePopup(false);
    setShowFeeCollectionPopup(false);
    setShowFeeRecieptPopup(false);
    setShowNameAndPNRPopup(false);
  };

  //function to show fee reciept and set its data
  const handleFeeReciept = (studentDetails) => {
    setSelectedStudent(studentDetails);
    setShowFeeRecieptPopup(true);
  };

  return (
    <>
      <div className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}>
        <div className="flex flex-col overflow-hidden">
          <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
            <div className="inline-block min-w-full  sm:px-5 lg:px-7">
              <div className="overflow-hidden">

                <table className="w-full flex flex-col gap-[10px]">

                  <thead className="pr-2">
                    <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md text-lg">
                      <th
                        className={`w-32 h-fit text-custom text-center font-bold`}
                      >
                        Name
                      </th>
                      <th
                        className={`w-32 h-fit text-custom text-center font-bold`}
                      >
                        ID No
                      </th>
                      <th
                        className={`w-32 h-fit text-custom text-center font-bold`}
                      >
                        Date
                      </th>
                      <th
                        className={`w-32 h-fit text-custom text-center font-bold`}
                      >
                        Total Paid
                      </th>
                      <th
                        className={`w-32 h-fit text-custom text-center font-bold`}
                      >
                        Total Dues
                      </th>
                      <th
                        className={`w-32 h-fit text-custom text-center font-bold`}
                      >
                        Total Fees
                      </th>
                      {filterOption === "All Students" && ( //filterOption is props from pages/studentlist
                        <th
                          className={`w-32 h-fit text-custom text-center font-bold`}
                        >
                          Status
                        </th>
                      )}
                      {filterOption !== "All Students" && (
                        <th
                          className={`w-32 h-fit text-custom text-center font-bold`}
                        >
                          Request
                        </th>
                      )}
                      {filterOption === "Unpaid" && (
                        <>
                          <th
                            className={`w-32 h-fit text-custom text-center font-bold`}
                          >
                            Collect
                          </th>
                        </>
                      )}
                    </tr>
                  </thead>

                  <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                    {tableData.map((student) => {
                      //tableData is props from pages/studentlist
                      return (
                        <tr className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md cursor-pointer"
                          key={student.idNo}
                          onClick={() => {
                            setShowNameAndPNRPopup(true);
                            setSelectedStudent(student);
                          }}
                        >
                          <td className="w-32 h-fit text-custom lg:text-custom text-center font-normal">
                            <div className="flex gap-2 self-stretch text-lg leading-5 text-center text-black">
                              <img
                                loading="lazy"
                                src={profile}
                                alt={`Avatar of student`}
                                className="shrink-0 rounded-full aspect-square w-[40px] h-[40px]"
                              />{" "}
                              <div className="my-auto">{student.name}</div>{" "}
                            </div>{" "}
                          </td>
                          <td className="w-32 h-fit text-custom lg:text-custom text-center font-normal">
                            {student.idNo}
                          </td>
                          <td className="w-32 h-fit text-custom lg:text-custom text-center font-normal">
                            {student.date}
                          </td>
                          <td className="w-32 h-fit text-custom lg:text-custom text-center font-normal text-green-700">
                            &#8377; {student.totalPaid}
                          </td>
                          <td className="w-32 h-fit text-custom lg:text-custom text-center font-normal text-red-800">
                            &#8377; {student.totalFees - student.totalPaid}
                          </td>
                          <td className="w-32 h-fit text-custom lg:text-custom text-center font-normal">
                            &#8377; {student.totalFees}
                          </td>
                          {filterOption === "All Students" && (
                            <td className="w-32 h-fit text-custom lg:text-custom text-center font-normal flex justify-center">
                              <button
                                className={`w-20 px-2 py-1 ml-3 border-[1px] ${getColor(
                                  student.status
                                )}`}
                              >
                                {student.status}
                              </button>
                            </td>
                          )}
                          {filterOption === "Unpaid" && (
                            <>
                              <td className="w-32 h-fit text-custom lg:text-custom text-center font-normal flex justify-center">
                                <button
                                  className={`w-[90px] px-2 py-1 border-2 rounded-xl  bg-blue-200 border-blue-500 text-blue-500 flex justify-center items-center ml-3`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowRequestFeePopup(true);
                                  }}
                                >
                                  Request
                                </button>
                              </td>
                              <td className="w-32 h-fit text-custom lg:text-custom text-center font-normal flex justify-center">
                                <button
                                  className={`w-[90px] px-2 py-1 border-2 rounded-xl  bg-blue-200 border-blue-500 text-blue-500 flex justify-center items-center ml-4`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowFeeCollectionPopup(true);
                                  }}
                                >
                                  Collect
                                </button>
                              </td>
                            </>
                          )}
                          {filterOption === "Paid" && (
                            <td className="w-32 h-fit text-custom lg:text-custom text-center font-normal flex justify-center gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleFeeReciept(student);
                                }}
                                className={`w-[90px] px-2 py-1 rounded-xl  bg-[#eeeeee] flex justify-center items-center ml-4 gap-2 border border-[#c4c4c4]
                              `}
                              >
                                <AiOutlinePrinter className="text-gray-400 text-lg border" />
                                <span>Print</span>
                              </button>
                            </td>
                          )}
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
      {/* Popups will open based on buttons clicked */}
      <Modal handleClose={closeModal} isOpen={showRequestFeePopup}>
        <RequestFeePopup />
      </Modal>
      <Modal handleClose={closeModal} isOpen={showFeeCollectionPopup}>
        <FeeCollectionPopup />
      </Modal>
      <Modal handleClose={closeModal} isOpen={showFeeRecieptPopup}>
        <FeesRecieptPopup paidStudentData={selectedStudent} />
      </Modal>
      <Modal handleClose={closeModal} isOpen={showNameAndPNRPopup}>
        <NameAndPNRPopup paidStudentData={selectedStudent} />
      </Modal>
    </>
  );
};

export default StudentListTable;
