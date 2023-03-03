/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Header.module.css";
import ContactMe from "./ContactMe";
import Aboutme from "./Aboutme";
import Myservices from "./Myservices";
import Projects from "./Projects";

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
      {props.showContactMe && <ContactMe />}
      {props.show_aboutMe && <Aboutme />}
      {props.show_services && <Myservices />}
      {props.show_projects && <Projects />}
    </>
  );
};

export default Header;
