//Table by athira toggle button by swati
import styles from "../../../styles/StudentAttendanceTable.module.css";
import profile from "../../../assets/images/table-profile.webp";

const Table = ({
  statusHandler,
  studentAttendanceColumnArr,
  studentAttendanceDetailsArr,
}) => {
  //function to change the status
  function clickHandler(student) {
    statusHandler(student, student.status === "true" ? "false" : "true"); //statusHandler is props function to toggle the status.
  }

  return (
    <div className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}>
      <div className="flex flex-col overflow-hidden">
        <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
          <div className="inline-block min-w-full  sm:px-5 lg:px-7">
            <div className="overflow-hidden">

              <table className="w-full flex flex-col gap-[10px]">
                {/* tableheader */}
                <thead className="pr-2">
                  <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100 shadow-md text-lg">
                    {studentAttendanceColumnArr.map((header) => {
                      //studentAttendanceColumnArr is props containing header names
                      return (
                        <th
                          key={header}
                          className={`w-40 h-fit text-custom text-center font-bold`}
                        >
                          {header}
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                {/* tablebody */}
                <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                  {studentAttendanceDetailsArr.map((student) => {
                    //studentAttendanceDetailsArr is props containing row data
                    return (
                      <tr key={student.id} className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md"
                      >
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          <div className="flex gap-2 self-stretch text-lg leading-5 text-center text-black">
                            <img
                              loading="lazy"
                              src={profile}
                              alt={`Avatar of student`}
                              className="shrink-0 rounded-full aspect-square w-[40px]"
                            />{" "}
                            <div className="my-auto">{student.name}</div>{" "}
                          </div>{" "}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {student.regNo}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {student.presentDays}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {student.absentDays}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {student.percentage}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal flex justify-center">
                          {/* toggle button */}
                          <div className="flex flex-col justify-center self-stretch my-auto w-[25%]">
                            <div
                              onClick={() => clickHandler(student)}
                              className={
                                student.status === "true"
                                  ? `${styles["toggle-btn"]} ${styles["success"]} cursor-pointer`
                                  : `${styles["toggle-btn"]} cursor-pointer`
                              }
                            >
                              <div
                                className={
                                  student.status === "true"
                                    ? `${styles["toggle-icon"]} ${styles["success-icon"]}`
                                    : styles["toggle-icon"]
                                }
                              ></div>
                            </div>
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

export default Table;
