//This component is created by Athira.

import classes from "../../../../styles/EnrollmentPopup.module.css"; // Importing CSS module for styling
import { useState } from "react";
// import Modal from "../../Modal/Modal";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";

import EmployeeListPagination from "../../../../ui/EmployeeListPagination";
import EmployeeListDocuments from "./EmployeeListDocuments";
import EmployeeProfileDetailsPopup from "./EmployeeProfileDetailsPopup";
import EducationDetailsPopup from "./EducationDetailsPopup";
import BankDetailsPopupPage from "./BankDetailsPopupPage";

// Functional component EmployeeListMainPopup
export default function EmployeeListMainPopup() {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of tabs for the popup
  const tabs = [
    { label: "Profile Details" },
    { label: "Education Details" },
    { label: "Bank Details" },
    { label: "Documents" },
  ];

  // Function to handle moving to the next step
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    setStep((prevIndex) => prevIndex + 1);
  };

  // Function to handle tab click
  const handleTabClick = (index) => {
    console.log(index);
    setActiveIndex(index);
    setStep(index + 1);
  };

  // Function to close the modal
  const closeModal = () => {
    
      setShowModal(false);
    
  }
    
    // Function to handle moving to the previous step
    const handlePrevious = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1) % tabs.length);
      if (step === 4) {
        closeModal();
      } else {
        setStep(step - 1);
      }
    };

    return (
      // <Modal handleClose={closeModal} isOpen={showModal}>
      <div className={classes.container}>
        {/* Rendering pagination component */}
        <EmployeeListPagination
          setStep={setStep}
          step={step}
          activeIndex={activeIndex}
          handleTabClick={handleTabClick}
        />
        {/* Render the popup according to the step number */}
        {step === 1 && <EmployeeProfileDetailsPopup />}
        {step === 2 && <EducationDetailsPopup />}
        {step === 3 && <BankDetailsPopupPage />}
        {step === 4 && <EmployeeListDocuments />}

      
        {/* Render buttons based on the current step */}
        <span className={classes.parentbutton}>
          {step !== 1 && step !== 4 && (
            <button className={classes.previousbutton} onClick={handlePrevious}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <AiOutlineVerticalRight style={{ display: "inline" }} />
                Previous
              </span>
            </button>
          )}

          {/* Render cancel button if it's the last step */}

          {step === 4 && (
            <button className={classes.previousbutton} onClick={closeModal}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                Cancel
              </span>
            </button>
          )}

          {/* Render next button if it's not the last step */}
          {step !== 4 && (
            <button className={classes.submitbutton} onClick={handleNext}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                {" "}
                Next
                <AiOutlineVerticalLeft style={{ display: "inline" }} />
              </span>
            </button>
          )}
          {/* Render save button if it's the last step */}
          {step === 4 && (
            <button className={classes.submitbutton}>
              <span> Save</span>
            </button>
          )}
        </span>
      </div>
      // </Modal>
    );
  }

