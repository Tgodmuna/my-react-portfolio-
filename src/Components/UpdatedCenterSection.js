import React, { useContext } from "react";
import styles from "./Center_section.module.css";
import { UserData } from "../App";
const UpdatedCenterSection = () => {
  const context = useContext(UserData);
  return (
    <div>

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
              <span className={styles.webX}>{context.job}</span> <br />
            </div>
          </div>

          <div className={styles.left}>
            <div>
              {/* introduction section */}
              <h3>Introduction</h3>
              <p className={styles.description}>
                Hi, I'm ThankGod, a self-taught front-end web developer with a
                passion for creating projects that showcase clean and elegant
                user experiences. My focus is on usability and accessibility,
                and I take pride in creating websites that are easy to navigate
                and visually appealing.
              </p>
            </div>
            {/* skills */}
            <h3>Skills</h3>
            <ul className={styles.skillsList}>
              <li>
                Proficient in HTML, CSS,JavaScript,React, Redux, Git&GitHub and
                Router
              </li>
              <li>
                Familiarity with responsive design principles and cross-browser
                compatibility
              </li>
              <li>Strong problem-solving and debugging skills</li>
            </ul>

            {/* button for  cv and viewing cv */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedCenterSection;
