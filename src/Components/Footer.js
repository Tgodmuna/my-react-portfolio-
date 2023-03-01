import React from "react";
import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <div>
      <div className={styles.footer_main}>
        <ul className={styles.footer}>
          <li className={styles.footerlist}>
            ©{props.Copywrites} all rights reserved{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
