import React from "react";
import styles from "./Card.module.css";
import { ReactComponent as CardImageSvg } from "../../assets/CardImage.svg";
 

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "whyChooseUs": {
        const { successrate, content } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.cardimg}><CardImageSvg /></div>   
              <h3>{successrate} Success Rate</h3>
              <p  className ={styles.content}>{content}</p>
            <button className={styles.cardButton}>Read More</button>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
