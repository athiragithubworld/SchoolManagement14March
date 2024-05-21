// created by Athira
import ClassManagementAttendanceSummary from "../../components/ClassManagement/Dashboard/ClassManagementAttendanceSummary";
import Teachers from "../../components/ClassManagement/Dashboard/Teachers";
import ClassRepresentative from '../../components/ClassManagement/Dashboard/ClassRepresentative'
import ClassManagementBirthday from "../../components/ClassManagement/Dashboard/ClassManagementBirthday";
import ClassManagementAbsentees from "../../components/ClassManagement/Dashboard/ClassManagementAbsentees";
import ClassManagementDashboardButtons from "../../components/ClassManagement/Dashboard/ClassManagementDashboardButtons";
import { useState } from "react";
import ClassRepresentativePopup from "../../components/Popup/ClassRepresentativePopup/ClassRepresentativePopup";


const ClassManagementDashboard = () => {


  const [showClassRepresentativePopup,setShowClassRepresentativePopup] = useState(false);

  return (
    <div className="flex overflow-y-auto ">
      <div className="grid grid-rows-[.01fr,1fr] gap-2 w-full ">
        {/* sravathi created */}
        <ClassManagementDashboardButtons />
        <div className="overflow-y-scroll w-full scrollbarnone h-full">
          <div className="grid grid-cols-[5fr 2fr] gap-3  grid-flow-col h-fit  max-[1280px]:grid-flow-row">
            <div className=" col-span-6 grid  grid-cols-3 gap-y-4 gap-x-3 h-fit m-2 ">
              {/* By Athira */}
              <ClassManagementAttendanceSummary />
              {/* By Sravanthi */}
              <Teachers />
              {/* By haider */}
              <ClassRepresentative
                setShowClassRepresentativePopup={
                  setShowClassRepresentativePopup
                }
              />
            </div>
            <div className="max-[1280px]:col-span-6 grid  grid-cols-1 gap-y-4 gap-x-3 h-fit m-2">
              <div className="xl:col-span-2 sm:col-span-6 h-fit ">
                {/* Design Athira and functionality Swati */}
                <ClassManagementBirthday />
              </div>
              <div className="xl:col-span-2 sm:col-span-6 h-fit">
                {/* By Swati */}
                <ClassManagementAbsentees />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-30">
        {showClassRepresentativePopup && (
          <ClassRepresentativePopup
            setShowClassRepresentativePopup={setShowClassRepresentativePopup}
          />
        )}
      </div>
    </div>
    // Haider implemented flex
    // <div className="flex flex-col gap-3  w-full">
    //   {/* sravathi created */}
    //   <ClassManagementDashboardButtons />

    //   <div className="flex flex-col w-full gap-4 h-fit xl:flex-row overflow-y-auto">
    //     <div className="flex flex-col gap-4 w-full xl:w-[70%] h-fit">
    //       {/* By Athira */}
    //       <ClassManagementAttendanceSummary />
    //       {/* By Sravanthi */}
    //       <Teachers />
    //       {/* By haider */}
    //       <ClassRepresentative />
    //     </div>
    //     <div className="flex flex-col gap-4 w-full xl:w-[30%] h-fit">
    //       {/* Design Athira and functionality Swati */}
    //       <ClassManagementBirthday />
    //       {/* By Swati */}
    //       <ClassManagementAbsentees />
    //     </div>
    //   </div>
    // </div>
  );
};

export default ClassManagementDashboard;
