import React from "react";

import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { icons } from "../../constants/constants";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.link}>
        <Logo />
        <div className={styles.centerLink}>
          <a>Home</a>
          <a>Attorneys</a>
          <a>Practice Areas</a>
          <a>About Us</a>
        </div>
        <div className={styles.iconsWrapper}>
          {icons.map((item) => {
            return (
              <img
                className={styles.icons}
                src={require(`../../assets/${item.image}`)}
                alt={item.title}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.policy}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
