//Created by Gunjan
import { useEffect, useState } from "react";
import StudentFeeListTable from "../../components/Tables/FeeManagementTable/StudentFeeListTable";
import StudentFeeCollectionButtons from "../../components/Buttons/FeeManagementButtons/StudentFeeCollectionButton";

const FeeCollection = () => {
  const [classOption, setClassOption] = useState("");
  const [sectionOption, setSectionOption] = useState("");
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState(tableData);

  useEffect(() => {
    document.title = "Student List"; // Set the title to 'Page Title'
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/StudentFeeList");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setTableData(jsonData);
        const paidStudents = jsonData.filter(
          (student) => student.status === "Unpaid"
        );
        setFilteredData(paidStudents);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    return () => {
      document.title = "School"; // Reset the title
    };
  }, []);

  //filter for class
  const handleChangeClass = (selectedClass) => {
    setClassOption(selectedClass);
    if (sectionOption === "") {
      const filteredTable = tableData.filter((data) => {
        return data.className === selectedClass && data.status === "Unpaid";
      });
      setFilteredData(filteredTable);
    } else {
      const filteredTable = tableData.filter((data) => {
        return (
          data.className === selectedClass &&
          data.section === sectionOption &&
          data.status === "Unpaid"
        );
      });
      setFilteredData(filteredTable);
    }
  };

  //filter for section
  const handleChangeSection = (selectedSection) => {
    setSectionOption(selectedSection);
    const filteredTable = tableData.filter((data) => {
      return (
        data.status === "Unpaid" &&
        data.className === classOption &&
        data.section === selectedSection
      );
    });
    setFilteredData(filteredTable);
  };

  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden rounded-2xl mt-[5px]">
      <StudentFeeCollectionButtons
        filterOption="Unpaid"
        handleChangeClass={handleChangeClass}
        handleChangeSection={handleChangeSection}
      />
      <StudentFeeListTable tableData={filteredData} filterOption="Unpaid" />
    </div>
  );
};

export default FeeCollection;
