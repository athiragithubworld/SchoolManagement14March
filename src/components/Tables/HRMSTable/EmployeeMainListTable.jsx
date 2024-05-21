// Implemented by swati

import styles from "../../../styles/EnrollmentTable.module.css";
import profile from "../../../assets/images/table-profile.webp";
import { useState } from "react";

const EmployeeMainListTable = ({
  employeeList,
  setShowLeaveManagementPopup,
  setSelectedEmployee,
}) => {
  function getStatusColor(status) {
    switch (status) {
      case "Pending":
        return {
          backgroundColor: "#FFE198",
          border: "1px solid #966B0B",
          color: "#966B0B",
        };
      case "Denied":
        return {
          backgroundColor: "#F1D0CE",
          border: "1px solid #BF0000",
          color: "#BF0000",
        };
      case "Approved":
        return {
          backgroundColor: "#C4FFBF",
          border: "1px solid #0A8100",
          color: "#0A8100",
        };
      default:
        return {};
    }
  }

  function clickHandler(employee) {
    if (employee.status === "Pending") {
      setShowLeaveManagementPopup(true);
      setSelectedEmployee(employee);
    }
  }

  return (
    <div
      className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}
    >
      <div className="flex flex-col overflow-hidden">
        <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
          <div className="inline-block min-w-full  sm:px-5 lg:px-7">
            <div className="overflow-hidden">
              <table className="w-full flex flex-col gap-[10px]">
                {/* tableheader */}
                <thead className="pr-2">
                  <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md text-lg">
                    <th
                      className={`w-48 h-fit text-custom text-center font-bold`}
                    >
                      Employee Name
                    </th>
                    <th
                      className={`w-48 h-fit text-custom text-center font-bold`}
                    >
                      Type of leave
                    </th>
                    <th
                      className={`w-48 h-fit text-custom text-center font-bold`}
                    >
                      Leave Date
                    </th>
                    <th
                      className={`w-48 h-fit text-custom text-center font-bold`}
                    >
                      Applied on
                    </th>
                    <th
                      className={`w-[110px] h-fit text-custom text-center font-bold`}
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                {/* tablebody */}
                <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                  {/* employeeList is props containing row data */}
                  {employeeList.map((employee) => {
                    return (
                      <tr
                        key={employee.id}
                        className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md cursor-pointer"
                        onClick={() => clickHandler(employee)}
                      >
                        <td className="w-48 h-fit text-[16px] lg:text-custom text-center font-normal">
                          <div className="flex gap-2 self-stretch text-lg leading-5 text-left text-black">
                            <img
                              loading="lazy"
                              src={profile}
                              alt={`Avatar of student`}
                              className="shrink-0 rounded-full aspect-square w-[46px]"
                            />{" "}
                            <div className="my-auto">
                              {employee.employeeName}
                            </div>{" "}
                          </div>{" "}
                        </td>
                        <td className="w-48 h-fit text-[16px] lg:text-custom text-center font-normal">
                          {employee.leaveType}
                        </td>
                        <td className=" w-48 h-fit text-[16px] lg:text-custom text-center font-normal">
                          {employee.leaveDate}
                        </td>
                        <td className="w-48 h-fit text-[16px] lg:text-custom text-center font-normal">
                          {employee.appliedOn}
                        </td>
                        <td
                          className=" w-[90px]"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div
                            className={` flex justify-center w-[90px] border rounded-xl`}
                            style={{ ...getStatusColor(employee.status) }}
                          >
                            {employee.status}
                          </div>
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
  );
};

export default EmployeeMainListTable;
