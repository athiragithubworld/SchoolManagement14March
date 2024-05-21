import {useEffect,useState} from 'react';
import styles from '../../styles/MainComponent.module.css'
import EnrollmentButtons from "../../components/Buttons/EnrollmentButtons/EnrollmentButtons"
import EnrollmentTable from '../../components/Tables/EnrollmentTable/EnrollmentTable';

// const pathname = useLocation().pathname;



const EnrollmentDashboard = () => {

const [refetch, setRefetch] = useState(false);

  
  function handleEnrollRefetch() {
    console.log("refetch", refetch)
    setRefetch((prev) => !prev);
  }

    useEffect(()=>{
        document.title="Admission"
        return ()=>{
          document.title="School"
        };
      },[]);
      const EnrollmentColumnArr = [
        { label: "Enroll.no"},
        { label: "Name"},
        { label: "Class"},
        { label: "Father's Name"},
        { label: "Phone No"},
        { label: "Status"},
      ];
     

      const [enrollmentColumn, setEnrollmentColumn] = useState(EnrollmentColumnArr);
      const [enrollmentdetails, setEnrollmentDetails] =useState({});
      const handleEnrollColumn = (newColumn) => {
        setEnrollmentColumn(columns=>[...columns,newColumn])
      }
      
    function handleDeleteEnrollDetails() {
      setEnrollmentDetails([]) 
    }
    // function handleDeleteEachRowDetails(id) {
    //   const updatedPayDetails = enrollmentdetails.filter((detail) => {
    //     return detail.id !== Number(id);
    //   });
    //   setEnrollmentDetails(updatedPayDetails);
    // }
    // function handleUpdateEachRowDetails(updatedRowDetails, updateId) {
    //   const index = enrollmentdetails.findIndex(
    //     (data) => data.id === updateId
    //   );
    //   enrollmentdetails[index] = {
    //     id: enrollmentdetails[index].id,
    //     ...updatedRowDetails,
    //   };
    // }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/StudentEnrollDetails"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setEnrollmentDetails(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [refetch]);
  return (
    <div
      // className={styles.container}
      className="flex flex-col gap-4 w-full overflow-hidden rounded-2xl"
    >
      <EnrollmentButtons
        handleEnrollColumn={handleEnrollColumn}
        enrollmentdetails={enrollmentdetails}
        handleDeleteEnrollDetails={handleDeleteEnrollDetails}
      />
      <EnrollmentTable
        enrollmentColumn={enrollmentColumn}
        enrollmentdetails={enrollmentdetails}
        handleEnrollRefetch={handleEnrollRefetch}
      />
    </div>
  );
}

export default EnrollmentDashboard
