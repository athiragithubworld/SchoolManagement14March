// this component did by sravanthi
import styles from "../../../styles/AttendanceRegisterTable.module.css";
const Table = ({ // Props from pages/attendanceRegister 
  attendanceRegColumn, 
  attendanceRegdetails, 
  selectedRows, 
  setSelectedRows
 }) => {
  
 // Function to toggle row selection
  const toggleRowSelection = (id) => {
     // Check if the row is already selected
        const isSelected = selectedRows.includes(id);
        // If  selected, remove it from the selectedRows array
        if (isSelected) {
          setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
          // If not, add it to the selectedRows array
          setSelectedRows([...selectedRows, id]);
        }
      };
    // Function to handle row click
      const handleRowClick = (id) => {
        toggleRowSelection(id);
        console.log("Selected row details:", attendanceRegdetails.find(row => row.id === id));
      };

  return (
// this container from athira 
<>
       <div className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}>
        <div className="flex flex-col overflow-hidden">
           <div className="scrollbarnone overflow-x-auto sm:-mx-5 lg:-mx-7">
             <div className="inline-block min-w-full sm:px-5 lg:px-7">
               <div className="overflow-hidden">

                 <table className="w-full flex flex-col gap-[10px]">

                   <thead className="pr-2">
                     <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md">
                      {/* label from pages/attendanceRegister*/}
                     {attendanceRegColumn.map(({ label }, index) => {
                         return (
                          <th
                             key={label}
                             className={`w-40 h-fit text-customtext font-bold text-center`}
                           >
                             {label}
                           </th>
                         );
                      })}
                     </tr>
                   </thead>
                   
                   <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                    {/* data is comming from json server */}
                     {attendanceRegdetails.length !== 0 &&
                       Array.isArray(attendanceRegdetails) &&
                       attendanceRegdetails.map((data, index) => {
                         const isSelected = selectedRows.includes(data.id);
                         return (
                          <tr key={data.id} className={`w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md ${isSelected ? styles.selectedRow : ''}`}
                          onClick={() => handleRowClick(data.id)}>    
                             <td className="w-40  h-fit text-customtext lg:text-customtext text-center font-normal ">

                               {index + 1}
                            </td>
                             <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal">
                               {data.studentName}
                             </td>
                             <td className="w-40  h-fit text-customtext lg:text-customtext text-center font-normal">
                               {data.rollNo}
                             </td>
                            <td className="w-40  h-fit text-customtext lg:text-customtext text-center font-normal">
                               {data.totalWorking}
                             </td>
                             <td className="w-40  h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.present}
                             </td>
                            <td className="w-40  h-fit text-customtext lg:text-customtext text-center font-normal">
                               {data.absent}
                             </td>
                             <td className="w-40  h-fit text-customtext lg:text-customtext text-center font-normal">
                               {data.percent}
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
     </>
  );
};

export default Table;









