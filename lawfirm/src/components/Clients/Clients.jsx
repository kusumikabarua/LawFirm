import React from "react";
import Section from "../Section/Section";
import { clients } from "../../constants/constants";
import styles from "./Clients.module.css";

const Clients = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>What says our <br/> happy Clients</h1>
      <Section data={clients} type="clients" />
    </div>
  );
};

export default Clients;
