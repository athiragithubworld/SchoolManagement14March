
//THIS COMPONENT WAS CREATED BY HAIDER USING StudentListPopup-StudentListDocument


import { useEffect, useRef, useState } from "react";
import classes from "../../styles/UploadDocumentsPopup.module.css";
import { IoIosAdd } from "react-icons/io";

//PROPS COMING FROM STUDENTDETAIL PAGE
export default function UploadStudentDocuments({ fileImages, setFileImages }) {
  const photoInputRef = useRef();
  const aadhaarInputRef = useRef();
  const panInputRef = useRef();
  const parentAadharInputRef = useRef();
  const birthCertificateInputRef = useRef();
  const validityInputRef = useRef();
  const migrationCertificateInputRef = useRef();
  const tcInputRef = useRef();
  const residentialCertificateInputRef = useRef();
  const castCertificateInputRef = useRef();
  const domicileCertificateInputRef = useRef();
  const addDocumentInputRef = useRef();
  

  //   const [fileImages, fileImages] = useState(fileNames);

  function handleFileChange(event, currFileName) {
    //get the file from the input
    const file = event.target.files[0];
    //read the file using FileReader
    const reader = new FileReader();
    //reading of file is async so below function is executed once file has been read.
    reader.onload = () => {
      //   //setting the src of image based on result of filereader.
      setFileImages((prevState) => ({
        ...prevState,
        [currFileName]: reader.result,
      }));
    };
    //getting the url of file.
    reader.readAsDataURL(file);
  }

  return (

    <form className='w-full rounded-2xl border-[1px] flex h-fit p-4 flex-col gap-6 shadow-student'>

      <div className='flex place-items-start'><p className='text-lg font-bold'>Documentation</p></div>

        <div className='flex gap-4 items-center justify-between w-full'>

          <div className="w-1/5 h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => photoInputRef.current.click()}
            >
              {fileImages.photo && (
                <img
                  src={fileImages.photo}
                  alt="photo"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={photoInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "photo")}
              />
              {!fileImages.photo && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
               )}
            </div>
            <p className="text-lg text-center w-full">Passport Size Photo</p>
          </div>

          <div className="w-1/5 h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => aadhaarInputRef.current.click()}
            >
              {fileImages.aadhar && (
                <img
                  src={fileImages.aadhar}
                  alt="aadhar"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={aadhaarInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "aadhar")}
              />
              {!fileImages.aadhar && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Adhaar Card</p>
          </div>

          <div className="w-1/5 h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => panInputRef.current.click()}
            >
              {fileImages.pan && (
                <img
                  src={fileImages.pan}
                  alt="pan"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={panInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "pan")}
              />
              {!fileImages.pan && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Pan Card</p>
          </div>

          <div className="w-1/5 h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => parentAadharInputRef.current.click()}
            >
              {fileImages.parentAadhar && (
                <img
                  src={fileImages.parentAadhar}
                  alt="parentAadhar"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={parentAadharInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "parentAadhar")}
              />
              {!fileImages.parentAadhar && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Parents Adhaar</p>
          </div>
        
        </div>

        <div className='flex gap-4 items-center justify-between w-full'>

          <div className="w-1/5 h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => birthCertificateInputRef.current.click()}
            >
              {fileImages.birthCertificate && (
                <img
                  src={fileImages.birthCertificate}
                  alt="birthCertificate"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={birthCertificateInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "birthCertificate")}
              />
              {!fileImages.birthCertificate && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Birth Certificate</p>
          </div>

          <div className="w-1/5 h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => validityInputRef.current.click()}
            >
              {fileImages.validity && (
                <img
                  src={fileImages.validity}
                  alt="validity"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={validityInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "validity")}
              />
              {!fileImages.validity && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Validity</p>
          </div>

          <div className="w-1/5 h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => migrationCertificateInputRef.current.click()}
            >
              {fileImages.migrationCertificate && (
                <img
                  src={fileImages.migrationCertificate}
                  alt="migrationCertificate"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={migrationCertificateInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "migrationCertificate")}
              />
              {!fileImages.migrationCertificate && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Migration Certificate</p>
          </div>

          <div className="w-1/5 h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => tcInputRef.current.click()}
            >
              {fileImages.tc && (
                <img
                  src={fileImages.tc}
                  alt="tc"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={tcInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "tc")}
              />
              {!fileImages.tc && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">TC</p>
          </div>
        
        </div>

        <div className='flex gap-4 items-center justify-between w-full'>

          <div className="w-1/5 h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => residentialCertificateInputRef.current.click()}
            >
              {fileImages.residentialCertificate && (
                <img
                  src={fileImages.residentialCertificate}
                  alt="residentialCertificate"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={residentialCertificateInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "residentialCertificate")}
              />
              {!fileImages.residentialCertificate && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Residential Certificate</p>
          </div>

          <div className="w-1/5 h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => castCertificateInputRef.current.click()}
            >
              {fileImages.castCertificate && (
                <img
                  src={fileImages.castCertificate}
                  alt="castCertificate"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={castCertificateInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "castCertificate")}
              />
              {!fileImages.castCertificate && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Cast Certificate</p>
          </div>

          <div className="w-1/5 h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => domicileCertificateInputRef.current.click()}
            >
              {fileImages.domicileCertificate && (
                <img
                  src={fileImages.domicileCertificate}
                  alt="domicileCertificate"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={domicileCertificateInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "domicileCertificate")}
              />
              {!fileImages.domicileCertificate && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Domicile Certificate</p>
          </div>

          <div className="w-1/5 h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => addDocumentInputRef.current.click()}
            >
              {fileImages.addDocument && (
                <img
                  src={fileImages.addDocument}
                  alt="addDocument"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={addDocumentInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "addDocument")}
              />
              {!fileImages.addDocument && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Add Document</p>
          </div>
        
        </div>

    </form>

  );
}
