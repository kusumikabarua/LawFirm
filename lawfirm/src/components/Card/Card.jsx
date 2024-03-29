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
            <div className={styles.cardimg}>
              <CardImageSvg />
            </div>
            <h3>{successrate} Success Rate</h3>
            <p className={styles.content}>{content}</p>
            <button className={styles.cardButton}>Read More</button>
          </div>
        );
      }
      case "clients": {
        const { title, image, job, content } = data;
        return (
          <div className={styles.wrapper}>
            <img
              className={styles.cardimg}
              src={require(`../../assets/${image}`)}
              alt={title}
            />
            <h3>{title}</h3>
            <h5>{job}</h5>
            <p className={styles.content}>{content}</p>
          </div>
        );
      }
      case "team": {
        const { title, image, cases } = data;
        return (
          <div className={styles.teamWrapper}>
            <img
              className={styles.cardimg}
              src={require(`../../assets/${image}`)}
              alt={title}
            />
            <div className={styles.teamDetails}>
              <h3>{title}</h3>
              <p className={styles.content}>{cases} cases</p>
            </div>
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
