import React, { Component } from "react";
import styles from "./Projects.module.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          name: "weather app",
          description:
            "this project is all about  weather app built only using React.js",
          image: "https://via.placeholder.com/150",
          link: "https://tgweather-app.netlify.app",
        },
        {
          id: 2,
          name: "My portFolio",
          description:
            "my developer's portfolio, built using React.Js styled with CSS",
          image: "https://via.placeholder.com/150",
          link: "",
        },
        {
          id: 3,
          name: "temperature calculator",
          description: "This is the third project",
          image: "https://via.placeholder.com/150",
          link: "https://www.example.com/project-three",
        },
      ],
    };
  }

  render() {
    const projectList = this.state.projects.map((project) => {
      return (
        <div key={project.id} className={styles.project}>
          <img
            src={project.image}
            alt={project.name}
            className={styles.projectImage}
          />
          <div className={styles.projectInfo}>
            <h3 className={styles.projectTitle}>{project.name}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.projectLink}>
              View Project
            </a>
          </div>
        </div>
      );
    });

    return (
      <div className={styles.projectsContainer}>
        <h2 className={styles.projectsTitle}>My Projects</h2>
        <div className={styles.projectList}>{projectList}</div>
      </div>
    );
  }
}

export default Projects;
