import styles from "./Aboutme.module.css";
import { AppConsumer } from "./AppContext";
import React, { Component } from "react";

class Aboutme extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <AppConsumer>
        {(context) => {
          const { school } = context;
          const { University, Degree, Grd_yr, Grade } = school;
          return (
            <div className={styles.container}>
              <h2 className={styles.heading}>About Me</h2>
              <p className={styles.paragraph}>
                Hi, my name is ThankGod Munachimso Agu, and I am a front-end web
                developer. I recently graduated from {University} in December
                16, 2023{" "}
              </p>
              <p className={styles.paragraph}>
                I am excited to showcase my skills and projects in this
                portfolio. As a developer, I am passionate about using code to
                create beautiful, functional websites that provide a great user
                experience. My portfolio features a variety of projects that
                showcase my proficiency in HTML, CSS, JavaScript, and other
                front-end technologies
              </p>{" "}
              <p className={styles.paragraph}>
                From simple landing pages to more complex web applications, each
                project represents a unique challenge that I overcame through
                careful planning, problem-solving, and attention to detail.
                Although I am relatively new to the field, I am committed to
                continuous learning and improvement. I am constantly seeking out
                new resources and challenges to expand my skill set and stay
                up-to-date with the latest trends in web development.{" "}
              </p>{" "}
              <p className={styles.paragraph}>
                I hope that my portfolio gives you a sense of my abilities and
                demonstrates my passion for front-end development. Whether you
                are a potential employer, a fellow developer, or someone who
                simply appreciates good design, I welcome your feedback and look
                forward to connecting with you
              </p>
              <h3 className={styles.heading}>Education</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <b>Degree:</b> {""}
                  {Degree}
                </li>
                <li className={styles.listItem}>
                  <b>University: </b> {""}
                  {University}
                </li>
                <li className={styles.listItem}>
                  <b>Graduation year: </b> {""}
                  {Grd_yr}
                </li>
                <li>
                  <b>Grade: </b> {""}
                  {Grade}
                </li>
              </ul>
              <h3 className={styles.heading}>Experience</h3>
              <p className={styles.paragraph}>
                As a self-taught frontend developer, I have dedicated myself to
                honing my skills and creating projects that showcase my
                abilities. Using ReactJS, I have developed several applications,
                including a weather app, a temperature converter, a todo app,
                and an age converter. In addition, I have built my own portfolio
                website using ReactJS to demonstrate my capabilities and
                highlight my passion for frontend development.
              </p>{" "}
              <p className={styles.paragraph}>
                While I have not yet had formal work experience, my focus on
                self-improvement and commitment to learning new skills
                demonstrate my strong work ethic and desire to excel in my
                chosen field. I am confident that with the right opportunity, I
                can leverage my skills and make valuable contributions as a
                frontend developer.
              </p>{" "}
              <p className={styles.paragraph}>
                Overall, my experience summary highlights my dedication to
                self-development, passion for frontend development, and
                potential as a valuable asset to any team.
              </p>
              <h3 className={styles.heading}>Hobbies</h3>
              <p className={styles.paragraph}>
                {" "}
                In my free time, I enjoy playing video games, playing football,
                and experimenting with new recipes in the kitchen.
              </p>
            </div>
          );
        }}
      </AppConsumer>
    );
  }
}

export default Aboutme;
