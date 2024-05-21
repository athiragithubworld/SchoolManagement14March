import { useEffect, useState } from "react";

import FeeConfigurationTable from "../../components/Tables/FeeManagementTable/FeeConfigurationTable";
import FeeConfigurationButtons from "../../components/Buttons/FeeManagementButtons/FeeConfigurationButtons";
const FeeConfiguration = () => {
  useEffect(() => {
    document.title = "Student Fee"; // Set the title to 'Page Title'
    return () => {
      document.title = "School"; // Reset the title
    };
  }, []);
  const studentFeeColumnArr = [
    "Class",
    "Tution Fee",
    "Books Fee",
    "Uniform Fee",
    "Transportation Fee",
    "Total Fee",
  ];

 
  const [studentFeeColumn, setStudentFeeColumn] = useState(studentFeeColumnArr);
  const [studentFeedetails, setStudentFeeDetails] = useState([]);

  
  const handleStudentFeeColumn = (newColumn) => {
    setStudentFeeColumn((columns) => [...columns, newColumn]);
  };

  const handleAddFeeDetails = (newDetails) => {
    const updatedDetailsArray = [...studentFeedetails];
    updatedDetailsArray.push({
      id: Math.random(),
      ...newDetails,
    });
    setStudentFeeDetails(updatedDetailsArray);
  };

  function handleDeleteStudentFeeDetails() {
    setStudentFeeDetails([]);
  }

  function handleDeleteEachRowDetails(id) {
    const updatedFeeDetails = studentFeedetails.filter((detail) => {
      return detail.id !== Number(id);
    });
    setStudentFeeDetails(updatedFeeDetails);
  }

  function handleUpdateEachRowDetails(updatedRowDetails, updateId) {
    const index = studentFeedetails.findIndex((data) => data.id === updateId);
    studentFeedetails[index] = {
      id: studentFeedetails[index].id,
      ...updatedRowDetails,
    };
  }

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/StudentFeeDetails");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();

      setStudentFeeDetails(jsonData);
    } catch (error) {
      // console.log(error.message);
    }
  };
  
  useEffect(() => {
    
    fetchData();
  }, []);            //added this for refreshing as soon as data is added. adding this disables popup

  // console.log("object")

  return (
    <div className="flex flex-col w-full h-full overflow-y-hidden rounded-2xl">
      {/* <SalaryDetailsButton
        handleStudentFeeColumn={handleStudentFeeColumn}
        handleDeleteStudentFeeDetails={handleDeleteStudentFeeDetails}
      /> */}
      <FeeConfigurationButtons
        handleStudentFeeColumn={handleStudentFeeColumn}
        handleDeleteStudentFeeDetails={handleDeleteStudentFeeDetails}
        handleAddNew={handleAddFeeDetails}
      />
      <FeeConfigurationTable
        studentFeeColumn={studentFeeColumn}
        studentFeedetails={studentFeedetails}
        handleDeleteEachRowDetails={handleDeleteEachRowDetails}
        handleUpdateEachRowDetails={handleUpdateEachRowDetails}
      />
    </div>
  );
};

export default FeeConfiguration;
