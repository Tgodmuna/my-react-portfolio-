/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Header.module.css";
import Aboutme from './Aboutme'
// import Projects from "./Projects";
// import Myservices from "./Myservices";
// import ContactMe from "./ContactMe";

const Header = (props) => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Title}>
          <h1>
            <a href='/'>TGOD</a>
          </h1>
        </div>
        <div className={styles.nav_bar}>
          <ul className={styles.mylist}>
            <li className={styles.list_items}>
              <a onClick={props.handle_aboutMe_click}>About Me</a>
            </li>
            <li className={styles.list_items}>
              <a onClick={props.handle_services_click}>My services</a>
            </li>
            <li className={styles.list_items}>
              <a onClick={props.handle_projects_click}>Projects</a>
            </li>

            <li className={styles.list_items}>
              <a onClick={props.handleContactMeClick}>Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
