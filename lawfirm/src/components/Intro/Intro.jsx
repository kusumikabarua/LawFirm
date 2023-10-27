import React from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className ={styles.wrapper}>
      {/* <div className={styles.intro}> */}
      <div><h1>Let’s Introduce</h1><br/>
      <h1>Ourself</h1></div>
        <div>
          <h3>Criminal Lawyer</h3>
          <br/>
          <p  className ={styles.content}>
            Amet minim mollit non deserunt ullamco est <br/> sit aliqua dolor do amet
            sint. Velit officia consequatduis <br/> enim velit mollit Exercitation.
          </p>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Intro;
