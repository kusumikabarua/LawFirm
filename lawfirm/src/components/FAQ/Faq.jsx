import React from "react";
import Section from "../Section/Section";
import { faqs } from "../../constants/constants";
import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>FAQ</h1>
      <div className={styles.faqWrapper}>
        <p className={styles.content}>
          Amet minim mollit non deserunt ullamco est sit
          <br />
          aliqua dolor do amet sint.
        </p>
        <Section data={faqs} type="faq" />
      </div>
    </div>
  );
};

export default Faq;
