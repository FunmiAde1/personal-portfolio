/*
File Name: About.jsx
Student Name: Funmi Adewoye
StudentID: 301341332
Date: 09/25/2025
*/

import React from 'react';
import resume from '../assets/FunmiAdewoye-CV.pdf'; 
import profile from "../assets/profile.jpg";
import './About.css'; 

const About = () => {
  return (
    <div className='about-me-info'>
     
      <img
        src={profile}
        alt="Funmi"
      />
      <div>
         <h1>Oluwafunmilayo Adewoye</h1>
        <p>
          Customer Service Professional with over three years of experience in fraud detection, technical support, and reporting administration. 
          Skilled in handling high-volume inquiries, delivering empathetic and efficient customer service, and managing confidential information with discretion. 
          Proficient in HTML, CSS, JavaScript, and Python.
        </p>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button>Download My Resume </button>
        </a>
      </div>
    </div>
  );
};

export default About;