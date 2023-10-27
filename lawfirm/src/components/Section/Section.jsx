import React from "react";
import styles from "./Section.module.css";

import Card from "../Card/Card";


const Section = ({data, type}) => {
  console.log(data);
 
  return (
        <div className={styles.cardWrapper} >
            <div className={styles.wrapper}>
              {data.map((item) => {
                console.log(item);
                return <Card data={item} type={type} />;
              })}
            </div>   
        </div>     
  );
};

export default Section;
