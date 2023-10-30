import React from "react";

import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Subscribe Our Newsletter</h1>
      <div className={styles.content}>
        <input className={styles.name} placeholder="Name : " />
        <input   className={styles.email} placeholder="Enter your email" />
        <button className={styles.sendButton}>  
        SEND 
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
