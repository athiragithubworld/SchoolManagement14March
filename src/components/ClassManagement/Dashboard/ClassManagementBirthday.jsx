// Created by Athira functionality by swati

import * as React from "react";

// Component for displaying birthday cards
const BirthdayCard = ({ image, message }) => (
  <div className="flex flex-col shrink-0 sm:flex-row gap-2 justify-center items-center p-2 mt-2 text-base leading-5 text-black bg-white rounded-[14px] border border-solid shadow-primary border-stone-300">
    <img
      src={image}
      alt="Birthday person"
      className="shrink-0 self-stretch aspect-square w-[60px] h-[60px]"
    />
    <div className="flex-1 w-[100px] my-auto text-wrap text-sm text-left sm:text-left">
      {message}
    </div>
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/68792f9b72aad35e0ae89fec99b82b3f6656300e50017d153519667ea8409458?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&"
      alt=""
      className="shrink-0 self-stretch my-auto w-4 aspect-square"
    />
  </div>
);

const ClassManagementBirthday = () => {
  // Data for birthdays
  const birthdayData = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Science teacher Bob's Birthday. Wish Him!",
      role: "employee",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Math teacher Alice's Birthday. Wish Her!",
      role: "employee",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is English teacher Jane's Birthday. Wish Her!",
      role: "employee",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is English teacher Jane's Birthday. Wish Her!",
      role: "employee",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is English teacher Jane's Birthday. Wish Her!",
      role: "employee",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Jane's Birthday. Wish Her!",
      role: "student",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Jane's Birthday. Wish Her!",
      role: "student",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Jane's Birthday. Wish Her!",
      role: "student",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Jane's Birthday. Wish Her!",
      role: "student",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07657ecadba96e31799a95dd9e8ca4030350fc88b5ff1aa3d6a911ad71a768?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&",
      message: "Today is Jane's Birthday. Wish Her!",
      role: "student",
    },
  ];
  //Data initially set to student's birthday
  const [filteredRolesData, setFilteredRolesData] = React.useState(
    birthdayData.filter((person) => person.role === "student")
  );
  //state to handle toggle
  const [studentActive, setStudentActive] = React.useState(true);

  //filter the data based on roles
  const filterData = (role) => {
    if (role === "student") {
      setStudentActive(true);
      setFilteredRolesData(
        birthdayData.filter((person) => person.role === "student")
      );
    } else {
      setStudentActive(false);
      setFilteredRolesData(
        birthdayData.filter((person) => person.role === "employee")
      );
    }
  };

  return (
    <div className="flex flex-col p-4   bg-white rounded-[20px] shadow-dashboardShadow leading-[120%] md:max-h-[373px] lg:min-h-[16.25rem] ">
      <h2 className="text-customtext font-bold text-black">
        Today's birthdays
      </h2>

      {/* Header with faculty and student sections */}
      <div className="flex flex-col sm:flex-row gap-1 justify-center p-1 mt-3 text-base  text-center whitespace-nowrap bg-blue-50 rounded-[14px] shadow-inner">
        <div
          className={`cursor-pointer ${
            studentActive
              ? "w-1/2 my-auto text-black text-ellipsis"
              : "bg-customblue text-white justify-center shadow-sm rounded-[14px] flex-1 p-2"
          }`}
          onClick={() => filterData("employee")}
        >
          Employees
        </div>
        <div
          className={`cursor-pointer ${
            studentActive
              ? "bg-customblue text-white justify-center shadow-sm rounded-[14px] flex-1 p-2"
              : "w-1/2 my-auto text-black text-ellipsis"
          }`}
          onClick={() => filterData("student")}
        >
          Student
        </div>
      </div>

      {/* List of birthday cards */}
      <div className="max-[1280px]:flex gap-2 overflow-x-auto xl:overflow-y-auto scrollbarnone max-h-[300px]">
        {filteredRolesData.map((birthday, index) => (
          <BirthdayCard
            key={index}
            image={birthday.image}
            message={birthday.message}
          />
        ))}
      </div>

      {/* Footer with blessing message and send button */}
      <div className="flex flex-col sm:flex-row gap-1 justify-between p-2 mt-3 text-center bg-blue-50 rounded-[14px] shadow-sm">
        <div className="my-auto text-xl text-ellipsis text-zinc-500">
          Give them blessings
        </div>
        <button className="flex gap-2 justify-center px-3 py-2 text-sm text-white whitespace-nowrap bg-customblue rounded-[14px]">
          <span className="my-auto text-ellipsis">Send</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98a74848e56c4ca03ca2d4c9aa7f278b113e41ba4373273a0ccef169d199f34d?apiKey=22ffeeb12a7e4b579f845cd7c80146cd&"
            alt=""
            className="shrink-0 w-6 aspect-square"
          />
        </button>
      </div>
    </div>
  );
};

export default ClassManagementBirthday;
