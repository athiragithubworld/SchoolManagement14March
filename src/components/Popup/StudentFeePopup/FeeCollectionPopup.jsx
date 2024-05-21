import React from "react";
import { useState } from "react";
import classes from "../../../styles/FeeCollectionPopup.module.css";
import { AiOutlinePrinter } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Modal from "../../Modal/Modal";
import FeesRecieptPopup from "./FeesRecieptPopup";

const FeeCollectionPopup = () => {
  const [studentName, setStudentName] = useState();
  const [admission, setAdmission] = useState();
  const [Class, setClass] = useState();
  const [Section, setSection] = useState();
  const [totalFee, setTotalFee] = useState();
  const [pendingFee, setPendingFee] = useState();

  return (
    <div className={classes.popup}>
      <div className={classes.heading}>Fee Collection</div>
      <div className={classes.main}>
        <span className={classes.top}>
          <span className={classes.first}>
            <span className={classes.left}>
              <label>Student Name </label>
              <input
                type="number"
                // value={fee}
                placeholder="StudentName"
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </span>
            <span className={classes.right}>
              <label>Admission Year</label>
              <input
                type="number"
                // value={fee}
                placeholder="Admission Year"
                onChange={(e) => setAdmission(e.target.value)}
                required
              />
            </span>
          </span>
          <span className={classes.first}>
            <span className={classes.left}>
              <label>Class </label>
              <input
                type="number"
                // value={fee}
                placeholder="Class"
                onChange={(e) => setClass(e.target.value)}
                required
              />
            </span>
            <span className={classes.right}>
              <label>Section </label>
              <input
                type="number"
                // value={fee}
                placeholder="Section"
                // style={{marginLeft:"100px"}}
                onChange={(e) => setSection(e.target.value)}
                required
              />
            </span>
          </span>
          <span className={classes.first}>
            <span className={classes.left}>
              <label>Total Fees </label>
              <input
                type="number"
                // value={fee}
                placeholder="Total"
                onChange={(e) => setTotalFee(e.target.value)}
                required
              />
            </span>
            <span className={classes.right}>
              <label>Pending Fee </label>
              <input
                type="number"
                // value={fee}
                placeholder="Pending"
                onChange={(e) => setPendingFee(e.target.value)}
                required
              />
            </span>
          </span>
        </span>
        <span className={classes.middle}>
          <span className={classes.one}>Payment Mode</span>
          <span className={classes.two}>
            <span className={classes.box}>
              <input type="radio" name="n" />
              <span>Online</span>
            </span>
            <span className={classes.box}>
              <input type="radio" name="n" />
              <span>Net Banking</span>
            </span>
            <span className={classes.box}>
              <input type="radio" name="n" />
              <span>Cash</span>
            </span>
          </span>
        </span>
        <span className={classes.last}>
          <span className={classes.one}>Fees Type</span>
          <span className={classes.third}>
            <span className={classes.check}>
              <input type="checkbox" />
              <TiTick className={classes.icon} />
              <span className={classes.checkboxlabel}>Uniform</span>
            </span>
            <span className={classes.check}>
              <input type="checkbox" />
              <TiTick className={classes.icon} />
              <span>Transport</span>
            </span>
            <span className={classes.check}>
              <input type="checkbox" />
              <TiTick className={classes.icon} />
              <span>Books</span>
            </span>
            <span className={classes.check}>
              <input type="checkbox" />
              <TiTick className={classes.icon} />
              <span>Annual</span>
            </span>
            <span className={classes.check}>
              <input type="checkbox" />
              <TiTick className={classes.icon} />
              <span>Admission</span>
            </span>
          </span>
        </span>
      </div>
      <div className={classes.foot}>
        <button className={classes.print}>
          <AiOutlinePrinter />
          Receipt
        </button>
        <button className={classes.collect}>Collect Fee</button>
      </div>
    </div>
  );
};

export default FeeCollectionPopup;
