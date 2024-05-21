import { useEffect, useState } from "react";
import classes from "../../../styles/EnrollDetailsPopup.module.css";
import { AiOutlinePrinter } from "react-icons/ai";// Importing printer icon
import { RiDeleteBin5Line } from "react-icons/ri";// Importing delete icon
import { PiNotePencilLight } from "react-icons/pi";// Importing edit icon



export default function EnrollDetailsPopup({
  closeModal,
  enrollmentdetails,
  enrollSelectedStudentData,
  handleEnrollRefetchdata,
}) {
  // State for enrollment number, initialized with the last enrollment number from props or default value 101
  const enrollmentLastDataNumber = enrollmentdetails[
    enrollmentdetails.length - 1
  ]?.enrollNumber
    ? enrollmentdetails[enrollmentdetails.length - 1]?.enrollNumber + 1
    : 101;

  // State to manage enrollment number
  const [enrollNumber, setEnrollNumber] = useState(enrollmentLastDataNumber);

  // State to manage form data
  const [formState, setFormState] = useState({});

  const [isReadOnly, setIsReadOnly] = useState(false);

  // Function to handle selection of student data for enrollment
  function enrollSelectStudentDataHandler() {
    if (enrollSelectedStudentData && enrollSelectedStudentData.length !== 0) {
      setEnrollNumber(enrollSelectedStudentData[0].enrollNumber);

      setFormState(...enrollSelectedStudentData);

      setIsReadOnly(true);
    }
  }

  // Effect to handle changes in selected student data
  useEffect(() => {
    enrollSelectStudentDataHandler();
  }, [enrollSelectedStudentData]);

  // Function to handle input change in the form
  const handleInputChange = (e) => {
    setFormState((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  };

  // Function to handle closing the popup
  const handleOnClose = () => {
    closeModal();
  };

  // Function to submit enrollment details
  async function submitEnrollDetailsHandler(e) {
    e.preventDefault();

    // Form validation
    if (
      !formState.firstName ||
      !formState.lastName ||
      !formState.fatherName ||
      !formState.fatherPhoneNumber
    ) {
      alert(
        "Please fill in all required fields (First Name, Last Name, Father Name, Father Phone Number)"
      );
      return;
    }

    // Call the function to post form data

    await postFormData(formState);

    // Reset formState to initial state
    await handleEnrollRefetchdata();

    setFormState({});
  }

  // Function to post form data to server
  const postFormData = async (formData) => {
    // Include enroll number in formData
    formData.enrollNumber = enrollNumber;

    const filteredEnrollNumber =
      enrollSelectedStudentData?.length > 0
        ? enrollSelectedStudentData[0].enrollNumber
        : 0;

    // Determine base URL and request method
    let BASE_URL = "http://localhost:4000/StudentEnrollDetails";

    let query = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    // If editing existing enrollment, modify URL and method
    if (filteredEnrollNumber === enrollNumber) {
      BASE_URL += `/${enrollSelectedStudentData[0].id}`;
      query.method = "PUT";
    }

    // Fetch data from server
    try {
      const response = await fetch(BASE_URL, query);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      alert("Data is saved");
      // // Reset formState to initial state
      // handleEnrollRefetch();
      closeModal();

      // Update enrollment number after successful data submission
      setEnrollNumber((prevEnrollNumber) => prevEnrollNumber + 1);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle editing enrollment
  const enrollEditHandler = () => {
    setIsReadOnly(false);
  };

  return (
    <div className={classes.enrollContainer}>
      <div className={classes.enrollIdSection}>
        <div></div>
        <h4>Enrolement Number : {enrollNumber}</h4>
        <div className={classes.iconButtons}>
          {/* Buttons for printing, editing, and deleting */}
          <button>
            <AiOutlinePrinter size={23} />
          </button>
          <button onClick={enrollEditHandler}>
            <PiNotePencilLight size={23} />
          </button>
          <button>
            <RiDeleteBin5Line size={23} />
          </button>
        </div>
      </div>
      {/* Form for entering student details */}
      <div className={classes.enrollStudentDetails}>
        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formState.firstName}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className={classes.inputContainer}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formState.lastName}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label>Class</label>
            <input
              type="text"
              name="studentClass"
              placeholder="Student Class"
              value={formState.studentClass}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className={classes.inputContainer}>
            <label>Aadhaar Number</label>
            <input
              type="text"
              name="aadharNumber"
              placeholder="Aadhaar Number"
              value={formState.aadhaarNumber}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label>Gender</label>
            <select
              name="gender"
              value={formState.gender}
              onChange={handleInputChange}
              disabled={isReadOnly}
            >
              <option value=""> Gender </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Others</option>
            </select>
          </div>
          <div className={classes.inputContainer}>
            <label>Date Of Birth</label>
            <input
              type="date"
              name="dob"
              placeholder="27-3-2024"
              value={formState.dateOfBirth}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label>Father Name</label>
            <input
              type="text"
              name="fatherName"
              placeholder="Fathers Name"
              value={formState.fatherName}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className={classes.inputContainer}>
            <label>Father Phone Number</label>
            <input
              type="text"
              name="fatherPhoneNumber"
              placeholder=" Father Phone number"
              value={formState.fatherPhoneNumber}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label>Mother Name</label>
            <input
              type="text"
              name="mothername"
              placeholder="Mother's Name "
              value={formState.motherName}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className={classes.inputContainer}>
            <label>Mother Phone Number</label>
            <input
              type="text"
              name="momPhone"
              placeholder=" Mother Phone number"
              value={formState.motherPhoneNumber}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
        </div>

        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label>Current Address</label>
            <input
              type="text"
              name="currentAddress"
              placeholder="Current Address"
              value={formState.currentAddress}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className={classes.inputContainer}>
            <label>EMIS Number</label>
            <input
              type="text"
              name="emis"
              placeholder=" EMIS Number"
              value={formState.emisNumber}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label>Previous School</label>
            <input
              type="text"
              name="previousSchool"
              placeholder=" Previous School"
              value={formState.previousSchool}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className={classes.inputContainer}>
            <label>Religion</label>
            <input
              type="text"
              name="religion"
              placeholder=" Religion"
              value={formState.religion}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
        </div>
        <div className={classes.enrollSection}>
          <div className={classes.inputContainer}>
            <label>Caste</label>
            <input
              type="text"
              name="caste"
              placeholder=" Caste"
              value={formState.caste}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            />
          </div>
          <div className={classes.inputContainer}>
            <label>Status</label>

            <select
              name="status"
              value={formState.status}
              onChange={handleInputChange}
              readOnly={isReadOnly}
            >
              <option value=""> Status </option>
              <option value="Pending">Pending</option>
              <option value="Denied">Denied</option>
              <option value="Approved">Approved</option>
            </select>
          </div>
        </div>
      </div>
      {/* Buttons for canceling and saving enrollment */}
      <div className={classes.enrollButtonClass}>
        <button onClick={handleOnClose} className={classes.cancelButton}>
          Cancel
        </button>
        <button
          className={classes.saveButton}
          onClick={submitEnrollDetailsHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
}
