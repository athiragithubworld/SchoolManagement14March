import React from 'react'
import { useState } from 'react';
import classes from '../../../styles/RequestFeePopup.module.css';
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";


const RequestFeePopup = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div className={classes.popup}>
        <div className={classes.container}>
            <span className={classes.title}>Compose Campaign</span>
            <span className={classes.no}>No of Selection: 35</span>
        </div>
        <div className={classes.Frame}>
          <div className={classes.frame}>
            <span className={classes.campaign}>
              <span style={{fontSize:"18px"}}>Campaign Name</span>
              <span><input
              type="text"
              placeholder='School Fee Semester One'
              /></span>
            </span>
            <span className={classes.Message}>
              <span  style={{fontSize:"18px"}}>Message Type</span>
              <span className={classes.two}>
              <span className={classes.box}>
              <input type="radio" name="n" />
              <span>Sms</span>
              </span>
              <span className={classes.box}>
              <input type="radio" name="n"/>
              <span>Email</span>
              </span>
              <span className={classes.box}>
              <input type="radio" name="n"/>
              <span>Whatsapp</span>
              </span>
            </span>
            </span>
            <span className={classes.to}>
              <span style={{fontSize:"18px"}}>Send To:</span>
              <span className={classes.third}>
              <span className={classes.check}>
              <input type="radio" name="n" />
              <span>Garudians</span>
              </span>
              <span className={classes.check}>
              <input type="radio" name="n"/>
              <span>Students</span>
              </span>
              <span className={classes.check}>
              <input type="radio" name="n"/>
              <span>Faculty</span>
              </span>
            </span>
            </span>
          </div>
          <div className={classes.segmented}>
          <div className={classes.text}>{inputText}</div>
            <span className={classes.bar}>
              <span className={classes.emoji}><BsEmojiSmile /></span>
              <input 
          type='text' 
          placeholder='Text here' 
          value={inputText} 
          onChange={handleInputChange} 
          className={classes.input} 
        />
              <span className={classes.attach}><GrAttachment /></span>
              <button className={classes.send}><IoSend /></button>
            </span>
          </div>

        </div>
      
    </div>
  )
}

export default RequestFeePopup
