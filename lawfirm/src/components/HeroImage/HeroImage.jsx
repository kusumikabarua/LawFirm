import React from "react";
import styles from "./HeroImage.module.css";
import { ReactComponent as HeroImageSvg } from "../../assets/HeroImage.svg";
import LetsTalk from "../LetsTalk/LetsTalk";

const HeroImage = () => {
  return (
    <div className={styles.heroImage}>
      <div>
        <div className={styles.header}>
          <p>You don’t have to <br/>
          Fight them Alone.</p>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, <br/>
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, <br/>
          hac massa gravida arcu interdum proin curae.
        </div>
        <LetsTalk />
      </div>

      <HeroImageSvg />
    </div>
  );
};

export default HeroImage;
