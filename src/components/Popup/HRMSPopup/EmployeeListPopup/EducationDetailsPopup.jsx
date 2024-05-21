// Created by Athira

import React, { useState } from "react";

// Define a functional component EducationDetailsForm that receives educationData as props

function EducationDetailsForm({ educationData }) {
  return (
    <>
      {/* Map over educationData array to render input fields for each education */}
      {educationData.map((education, index) => (
        <div
          key={index}
          className="flex gap-5 justify-center mt-4 text-base leading-5 text-black max-md:flex-wrap"
        >
          {/* Input field for school */}
          <div className="flex gap-2 text-center whitespace-nowrap">
            <label
              htmlFor={`${education.type}-school`}
              className="gap-0 my-auto w-[67px]"
            >
              {education.type}
            </label>
            <input
              id={`${education.type}-school`}
              className="shrink-0 gap-0 bg-white rounded-2xl shadow-primary h-[52px] w-[170px]"
            />
          </div>
          <div className="flex gap-2 text-center whitespace-nowrap">
            <label
              htmlFor={`${education.type}-degree`}
              className="gap-0 my-auto w-[32px]"
            >
              {education.degree}
            </label>
            <input
              id={`${education.type}-degree`}
              className="shrink-0 gap-0 bg-white rounded-2xl shadow-primary h-[52px] w-[170px]"
            />
          </div>
          {/* Input field for year of passing */}
          <div className="flex gap-2">
            <label htmlFor={`${education.type}-year`} className="gap-0 my-auto w-[102px]">
              Year of Passing
            </label>
            <input
              id={`${education.type}-year`}
              className="shrink-0 gap-0 bg-white rounded-2xl shadow-primary h-[52px] w-[170px]"
            />
          </div>
          {/* Input field for score */}
          <div className="flex gap-2 whitespace-nowrap">
            <label
              htmlFor={`${education.type}-score`}
              className="gap-0 my-auto w-[39px]"
            >
              Score
            </label>
            <input
              id={`${education.type}-score`}
              className="shrink-0 gap-0 bg-white rounded-2xl shadow-primary h-[52px] w-[170px]"
            />
          </div>
        </div>
      ))}
    </>
  );
}


// Define a functional component EducationDetailsPopup
function EducationDetailsPopup() {
  // Define educationData array with educational details
  const educationData = [
    { type: "School", degree: "SSC" },
    { type: "College", degree: "HSC" },
    { type: "University", degree: "UG" },
    { type: "University", degree: "PG" },
  ];

  return (
    <div>
      {/* Section for additional details */}
      <section className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
        <div className="flex gap-2">
          <label
            htmlFor="date-of-joining"
            className="gap-0 my-auto text-lg leading-6 text-black"
          >
            Date Of Joining
          </label>
          <input
            id="date-of-joining"
            className="justify-center p-3 text-base leading-5 whitespace-nowrap bg-white rounded-2xl shadow-primary text-neutral-400"
          />
        </div>
        {/* Input field for experience */}
        <div className="flex gap-2 leading-[120%]">
          <label
            htmlFor="experience"
            className="gap-0 my-auto text-lg text-black"
          >
            Experience
          </label>
          <input
            id="experience"
            className="justify-center p-3 text-base bg-white rounded-2xl shadow-primary text-neutral-400"
          />
        </div>
        {/* Input field for pre-leaved school */}
        <div className="flex gap-2">
          <label
            htmlFor="pre-leaved-school"
            className="gap-0 my-auto text-lg leading-6 text-black"
          >
            Pre-Leaved School
          </label>
          <input
            id="pre-leaved-school"
            className="justify-center p-3 text-base leading-5 whitespace-nowrap bg-white rounded-2xl shadow-primary text-neutral-400"
          />
        </div>
      </section>
      {/* Title for education qualifications */}
      <h2 className="gap-0 mt-4 text-lg font-bold leading-5 text-black max-md:flex-wrap max-md:max-w-full">
        Qualification
      </h2>
      {/* Render EducationDetailsForm component with educationData */}
      <EducationDetailsForm educationData={educationData} />
    </div>
  );
}

export default EducationDetailsPopup;
