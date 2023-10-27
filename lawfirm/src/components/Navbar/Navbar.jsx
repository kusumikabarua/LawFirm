import React from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.centerLink}>
        <a>Home</a>
        <a>Attorneys</a>
        <a>Practice Areas</a>
        <a>About Us</a>
      </div>
      <Button children="Contact Now" />
    </nav>
  );
};

export default Navbar;
