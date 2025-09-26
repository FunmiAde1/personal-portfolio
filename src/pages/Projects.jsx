/*
File Name: Projects.jsx
Student Name: Funmi Adewoye
StudentID: 301341332
Date: 09/25/2025
*/


import React from 'react';
import Project1Img from '../assets/Project-1.png';
import Project2Img from '../assets/Project-2.png';
import Project3Img from '../assets/Project-3.png';
import './Projects.css'; 

const Projects = () => {
  const projectList = [
    {
      name: "Social Meeting",
      img: Project1Img,
      description: "Created Social Meeting, a one-page web app to help users connect socially. Handled layout, producing a polished and responsive interface.",
    },
    {
      name: "Single-Price Grid:",
      img: Project2Img,
      description: "Responsible for designing the layout, implementing responsive styling, and ensuring smooth user navigation.",
    },
    {
      name: "Stats-Preview Card",
      img: Project3Img,
      description: "A modern web page showcasing key statistics with interactive and visually appealing cards",
    },
  ];

  const firstProject = projectList[0];
  const bottomProjects = projectList.slice(1);

  return (
    <div className="projects-container">
   
      <div className="first-project">
        <a href={firstProject.link} target="_blank" rel="noopener noreferrer">
          <img src={firstProject.img} alt={firstProject.name} />
        </a>
        <h3>{firstProject.name}</h3>
        <p>{firstProject.description}</p>
      </div>

    
      <div className="second-third-projects">
        {bottomProjects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              <img src={proj.img} alt={proj.name} />
            </a>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;