import  { useRef } from "react";
import classes from "../../../styles/Faculty.module.css";
import FacultyItem from "./FacultyItem";
import { useLocation } from "react-router-dom";

const facultyDetails = [
  {
    id: "1",
    name: "ABC",
    subject: "Mathematics",
    className: "maths", // Assuming you have a CSS class named "maths"
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ",
  },
  {
    id: "2",
    name: "ABC",
    subject: "Science",
    className: "science", // Assuming you have a CSS class named "science"
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ",
  },
  {
    id: "3",
    name: "ABC",
    subject: "Social",
    className: "social", // Assuming you have a CSS class named "social"
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ",
  },
  {
    id: "4",
    name: "ABC",
    subject: "English",
    className: "english", // Assuming you have a CSS class named "english"
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ",
  },
  {
    id: "5",
    name: "ABC",
    subject: "Hindi",
    className: "hindi", // Assuming you have a CSS class named "hindi"
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ",
  },
  {
    id: "6",
    name: "ABC",
    subject: "Hindi",
    className: "hindi", // Assuming you have a CSS class named "hindi"
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ",
  },
  {
    id: "7",
    name: "ABC",
    subject: "Hindi",
    className: "hindi", // Assuming you have a CSS class named "hindi"
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ",
  },
];
  // console.log("object")

export default function Faculty() {
  const facultyDetailsRef = useRef([]);
  facultyDetailsRef.current = facultyDetails;

  const pathName = useLocation().pathname;

  return (
    <div
      className={classes.facultyContainer}
      style={{
        opacity: pathName === "/viewtimetable" ? 1 : 1,
        pointerEvents: pathName === "/viewtimetable" ? "none" : "auto",
      }}
    >
      <div className={classes.facultyheader}>Faculty</div>
      <div className={classes.facultyList}>
        {/* Render each faculty item with the FacultyItem component */}

        {facultyDetailsRef.current.map(
          ({ id, name, subject, className, image }) => (
            <FacultyItem
              key={id}
              id={id}
              name={name}
              subject={subject}
              className={className}
              image={image}
            />
          )
        )}
      </div>
    </div>
  );
}
