import React from "react";
import styles from "./LetsTalk.module.css";
import { ReactComponent as Email } from "../../assets/email.svg";


const LetsTalk = () => {
  return (
    <form className= {styles.wrapper}>
      <Email className= {styles.icon}/>
      <input className= {styles.letsTalk} placeholder="        Enter your email address" />
      <button className= {styles.letsTalkButton}>
      Let’s Talk
      </button>
    </form>
  );
};

export default LetsTalk;
