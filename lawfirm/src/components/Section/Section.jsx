import React from "react";
import styles from "./Section.module.css";

import Card from "../Card/Card";
import BasicGrid from "../Grid/BasicGrid";

const Section = ({ data, type }) => {
  const getSection = (type) => {
    switch (type) {
      case "whyChooseUs": {
        return (
          <div className={styles.cardWrapper}>
            <div className={styles.wrapper}>
              {data.map((item) => {
                return <Card data={item} type={type} />;
              })}
            </div>
          </div>
        );
      }
      case "clients": {
        return (
          <div className={styles.cardWrapper}>
            <div className={styles.wrapper}>
              {data.map((item) => {
                return <Card data={item} type={type} />;
              })}
            </div>
          </div>
        );
      }
      case "areaOfPractices": {
        return (
          <div className={styles.cardWrapper}>
            <div className={styles.wrapper}>
              <BasicGrid data={data} />
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getSection(type);
};

export default Section;
