import  { useState } from "react"; // Importing necessary dependencies from React
import classes from "../../../styles/AddNewFeeDetails.module.css"; // Importing CSS module for styling
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRef, useEffect } from "react";
import { GoDownload } from "react-icons/go";
import { RiDeleteBin5Line, RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePrinter } from "react-icons/ai";
import { PiNotePencilLight } from "react-icons/pi";
///////Made by Abhishek Kumar//////

// Functional component TimeSettingModal
export default function AddNewFeeDetails({  closeModal,rowDetails,handleAddNew,updateEachFeeDetails }) {
  const [className, setClassName] = useState();
  const [section, setSection] = useState();
  const [admissionForm,setAdmissionForm] = useState();
  const [tcfees,setTcfees] = useState();
  const [annual,setAnnual] = useState();
  const [admission,setAdmission] = useState();
  const [tution, setTution] = useState();
  const [books, setBooks] = useState();
  const [uniform, setUniform] = useState();
  const [transport, setTransport] = useState();
  const [feeEdit,setFeeEdit] = useState(false);

  useEffect(()=>{                                   //function to show popup with row details
    if(rowDetails){    
    
        setClassName(rowDetails.className);
        setSection(rowDetails.section);
        setAdmission(rowDetails.admission);
        setAdmissionForm(rowDetails.admissionForm);

        setAnnual(rowDetails.annual);

        setBooks(rowDetails.books);

        setTransport(rowDetails.transport);

        setUniform(rowDetails.uniform);

        setTution(rowDetails.tution);

        setTcfees(rowDetails.tcfees);
        setFeeEdit(true);              
  }},[])

  
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (
      className &&
      section &&
      tution &&
      books &&
      uniform &&
      transport &&
      admission &&
      admissionForm &&
      tcfees &&
     annual
    ) {
      // Prepare form data
      const formData = {
        className,
        section,
        tution,
        uniform,
        books,
        transport,
        admission ,
      admissionForm ,
      tcfees ,
     annual
      };
     let id = null;
      if(rowDetails)
        {
          id = rowDetails.id ;
        }
      // Call the function to post form data
      postFormData(formData,id);    
      
    } else {
      alert("Please fill in all required fields");
    }
  }

  function handleCloseModal() {   
    closeModal(false);
  }

   // Function to post form data after adding or updating
   const postFormData = (formData,id) => {
    if(id!==null){                           
      fetch(`http://localhost:4000/StudentFeeDetails/${id}`, {    //for updating data in the table
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          
          closeModal(true);
         
         
          alert("Data is saved");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
        
        updateEachFeeDetails(formData,id);
    }
       else  if(id=== null){               //for posting new data in the table
        fetch("http://localhost:4000/StudentFeeDetails", {  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        
        closeModal(true);
        // handleRefetch();
        alert("Data is saved");
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      handleAddNew(formData);}
  };


  const feeEditHandler=()=>{   //function for removing read only mode in popup
      setFeeEdit(!feeEdit);
  }

  //Function for the top right button popup

  function IconButton({ className }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropdown(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return (
      <div className="flex flex-col" ref={ref}>
       { rowDetails ? <div className="flex gap-4 mb-2"><button className="border border-gray-400 rounded-xl p-2">
            <AiOutlinePrinter size={23} />
          </button>
          <button onClick={feeEditHandler} className="border border-gray-400 rounded-xl p-2">
            <PiNotePencilLight size={23} />
          </button>
          <button className="border border-gray-400 rounded-xl p-2">
            <RiDeleteBin5Line size={23} />
          </button></div> : <div
          onClick={() => setShowDropdown((prevState) => !prevState)}
          className={`flex justify-center items-center p-2 w-10 h-10 bg-white rounded-2xl border border-solid border-stone-300 cursor-pointer ${className}`}
        >
       <BsThreeDotsVertical/>
        </div>}
        {showDropdown && (
          <div className="flex flex-col z-10 justify-left pl-2 pr-2 pt-2 pb-2 text-lg leading-9 whitespace-nowrap bg-white rounded-2xl border border-solid border-stone-300 absolute mt-12 ml-[-80px]">
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div>Download</div>
             
              <GoDownload
                className={` group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
           
            <div
              className={`group flex gap-2 justify-between rounded-xl items-center cursor-pointer hover:bg-[#009dfd] hover:text-white p-1 hover:pl-2 hover:pr-2`}
            >
              <div className="">Delete</div>
             
              <RiDeleteBin6Line
                className={`group-hover:text-white h-5 w-[17.1px] text-[#a6a6a6]`}
              />
            </div>
          </div>
        )}
      </div>
    );
  }



  return (
    <div className="flex-col bg-white w-[850px] lg:w-[900px] h-[563px] p-6 rounded-3xl">
       <div className="w-[800px] lg:w-[832px] h-[421px]">    
      <form className="">
      <div className="flex items-center justify-between">
          <h4 className="font-bold text-lg">Add New Fees Details</h4>
          <IconButton className=""/>
           
          
        </div>
        <div className="flex-col w-[800px] lg:w-[832px] h-[357px] mt-2">
          
           <div className="flex w-full gap-6 mb-6 ">
           <div className="flex w-1/2 items-center justify-between">
              <label>Class</label>
                {/* <select className={classes.select}      Option mode disabled for now
                  style={{ marginLeft: "10px" }}
                  onChange={(e) => setClassName(e.target.value)}
                  required
                >
                  <option value="" disabled selected>
                    Class Name
                  </option>
                  <option value="Pre Kg">Pre Kg</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="First Class">First Class</option>
                  <option value="Second Class">Second Class</option>
                  <option value="Third Class">Third Class</option>
                  <option value="Fourth Class">Fourth Class</option>
                  <option value="Fifth Class">Fifth Class</option>
                  <option value="Sixth Class">Sixth Class</option>
                  <option value="Seventh Class">Seventh Class</option>
                  <option value="Eight Class">Eight Class</option>
                  <option value="Ninth Class">Ninth Class</option>
                  <option value="Tenth Class">Tenth Class</option>

                </select> */}
              <input
                type="text"
                value={className}
                placeholder="Class Name"
                onChange={(e) => setClassName(e.target.value)}
                required
                className="shadow-primary rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                readOnly={feeEdit}
              />
            </div>
            <div className="flex w-1/2 h-14 items-center justify-between">
              <label>Section</label>
              <input
                type="text"
                value={section}
                placeholder="Section Name"
                onChange={(e) => setSection(e.target.value)}
                required
                className="shadow-primary rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                readOnly={feeEdit}
              />
            </div>
           </div>
            <div className="w-full gap-6 flex mb-6">
            <div className="flex w-1/2 h-14 items-center justify-between">
              <label className="w-28">Admission Form Fees </label>
              <input
                type="number"
                value={admissionForm}
                placeholder="Admisson Form Fees"
                onChange={(e) => setAdmissionForm(e.target.value)}
                required
                className="shadow-primary rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                readOnly={feeEdit}
              />
            </div>         
          
            <div className="flex w-1/2 h-14 items-center justify-between">
              <label>TC Fees</label>
              <input
                type="number"
                value={tcfees}
                placeholder="TC Fees"
                onChange={(e) => setTcfees(e.target.value)}
                required
                className="shadow-primary rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                readOnly={feeEdit}
              />
            </div>
            </div>
           <div className="w-full gap-6 flex mb-6">
           <div className="flex w-1/2 h-14 items-center justify-between">
              <label>Admission Fees</label>
              <input
                style={{ marginLeft: "10px" }}
                type="number"
                value={admission}
                placeholder="Admission Fees"
                onChange={(e) => setAdmission(e.target.value)}
                required
                className="shadow-primary rounded-2xl p-3 w-56 lg:w-64 border border-gray-300"
                readOnly={feeEdit}
              />
            </div>
            <div className="flex w-1/2 h-14 items-center justify-between">
              <label>Annual Fees</label>
              <input
                type="number"
                value={annual}
                placeholder="Annual Fees"
                onChange={(e) => setAnnual(e.target.value)}
                required
                className="shadow-primary rounded-2xl p-3 w-56 lg:w-64 border border-gray-300"
                readOnly={feeEdit}
              />
            </div>
          </div>
          <div className="w-full gap-6 flex mb-6">
           <div className="flex w-1/2 h-14 items-center justify-between">
              <label>Books Fees</label>
              <input
                type="number"
                value={books}
                placeholder="Books Fees"
                onChange={(e) => setBooks(e.target.value)}
                required
                className="shadow-primary rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                readOnly={feeEdit}
              />
            </div>
            <div className="flex w-1/2 h-14 items-center justify-between">
              <label>Transportation Fees</label>
              <input
                type="number"
                value={transport}
                placeholder="Transportation Fees"
                onChange={(e) => setTransport(e.target.value)}
                required
                className="shadow-primary rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                readOnly={feeEdit}
              />
            </div>
          </div>
          <div className="w-full gap-6 flex mb-6">
           <div className="flex w-1/2 h-14 items-center justify-between">
              <label>Uniform Fees</label>
              <input
                style={{ marginLeft: "10px" }}
                type="number"
                value={uniform}
                placeholder="Uniform Fees"
                onChange={(e) => setUniform(e.target.value)}
                required
                className="shadow-primary rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                readOnly={feeEdit}
              />
            </div>
            <div className="flex w-1/2 h-14 items-center justify-between">
              <label>Tuition Fees</label>
              <input
                type="number"
                value={tution}
                placeholder="Tuition Fees"
                onChange={(e) => setTution(e.target.value)}
                required
                className="shadow-primary rounded-2xl p-3 border border-gray-300 w-56 lg:w-64"
                readOnly={feeEdit}
              />
            </div>
          </div>
           </div>
      
        
      </form>
      </div> 
      <div className="flex items-center justify-center mt-8 gap-4">
          <button className="w-32 border-[1px] border-[#A6A6A6] p-2 rounded-xl" onClick={handleCloseModal}>
            Cancel
          </button>
          <button className="w-32 border-1 bg-[#009dff] text-white p-2 rounded-xl" onClick={handleSubmit}>
            Submit
          </button>
        </div>
    </div>
  );
}
