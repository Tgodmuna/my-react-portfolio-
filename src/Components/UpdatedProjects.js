import React, { useState } from "react";
import styles from "./Projects.module.css";
const descrption = (
  <>
    <h4> This project can perfome three operations like:</h4>
    <ul>
      <li>adding a todo in the todolist,</li>
      <li> deleting a todo from todolist,</li>
      <li> and editing a todo in the todolist </li>
    </ul>
  </>
);

const portfolioDescriptions = (
  <>
    <h4> my developer portfolio, built using</h4>
    <ul>
      <li>React.Js</li>
      <li>hooks</li>
      <li>React-Router</li>
      <li>styled with module CSS"</li>
    </ul>
  </>
);
const weatherDescription = (
  <>      <h4>weather app built using :</h4>

    <ul>
      <li>reactjs</li>
      <li>openWeatherMapAPI</li>
      <li>context</li>
      <li>Styled Components</li>
    </ul>
  </>
);

const UpdatedProjects = () => {
  const [state, setstate] = useState({
    projects: [
      {
        id: 1,
        name: "weather app",
        description: weatherDescription,
        image: "https://via.placeholder.com/150",
        link: "https://tgweather-app.netlify.app",
      },
      {
        id: 2,
        name: "My portFolio",
        description: portfolioDescriptions,
        image: "https://via.placeholder.com/150",
        link: "https://twitter.com/i_am_tgodmunahttps://thankgod-muna.netlify.app/",
      },
      {
        id: 3,
        name: "temperature calculator",
        description: "This is the third project",
        image: "https://via.placeholder.com/150",
        link: "https://github.com/Tgodmuna",
      },
      {
        id: 4,
        name: "Todo app",
        description: descrption,
        image: "https://via.placeholder.com/150",
        link: "https://github.com/Tgodmuna",
      },
    ],
  });
  const projectList = state.projects.map((value, index, array) => {
    return (
      <div key={value.id}>
        <img src={value.image} alt={value.name} />
        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>{value.name}</h3>
          <p className={styles.projectDescription}>{value.description}</p>
          <a
            href={value.link}
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
    <div>
      <div className={styles.projectsContainer}>
        <h2 className={styles.projectsTitle}>My Projects</h2>
        <div className={styles.projectList}>{projectList}</div>
      </div>
    </div>
  );
};
export default UpdatedProjects;
