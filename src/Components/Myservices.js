import React, { Component } from "react";
import styles from "./Myservices.module.css";

class Services extends Component {
  render() {
    return (
      <div className={styles.servicesContainer}>
        <h2>My Services</h2>
        <div className={styles.servicesList}>
          <div className={styles.service}>
            <h3>Software Development</h3>
            <p>
              As a computer science graduate, I am equipped with the skills and
              knowledge to develop high-quality software solutions that meet the
              needs of my clients.
            </p>
            <ul className={styles.ex}>
              <li> IT consulting</li>
              <li>information managements</li>
              <li>technical supports and consultant</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Front-End Development</h3>
            <p>
              As a front-end developer, I specialize in building responsive and
              user-friendly interfaces using modern web technologies such as
              HTML, CSS, and JavaScript(reactJs,reducx,jest).
            </p>
            <ul className={styles.ex}>
              <li>testing and debugging</li>
              <li>Collaboration with back-end developers:</li>
              <li>responsive design</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
