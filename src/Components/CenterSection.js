import React from "react";
import styles from "./Center_section.module.css";
import { AppConsumer } from "./AppContext";

const RightSection = (props) => {
  return (
    <AppConsumer>
      {
        (context) => {
          return (
            <div className={styles.parent}>
              <div className={styles.overall}>
                <div className={styles.right}>
                  <div className={styles.imageHolder}>
                    <img
                      className={styles.image}
                      src={context.profilePic}
                      alt='My pic'
                    />
                  </div>
                  <div className={styles.intro}>
                    <span className={styles.webX}>front-end Web Developer</span>{" "}
                    <br />
                  </div>
                </div>

                <div className={styles.left}>
                  <div>
                    <h3>Introduction</h3>
                    <p className={styles.description}>
                      Hi, I'm TGod, a self-taught front-end web developer with a
                      passion for creating projects that showcase clean and
                      elegant user experiences. My focus is on usability and
                      accessibility, and I take pride in creating websites that
                      are easy to navigate and visually appealing.
                      <p></p>
                    </p>
                  </div>
                  <h3>Skills</h3>
                  <ul className={styles.skillsList}>
                    <li>
                      Proficient in HTML, CSS,JavaScript,React, Redux, and
                      Node.js
                    </li>
                    <li>
                      Familiarity with responsive design principles and
                      cross-browser compatibility
                    </li>
                    <li>Strong problem-solving and debugging skills</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        }
      }
    </AppConsumer>
  );
};

export default RightSection;
