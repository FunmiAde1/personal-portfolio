/*
File Name: Services.jsx
Student Name: Funmi Adewoye
StudentID: 301341332
Date: 09/25/2025
*/


import React from 'react';
import './Services.css';
import servicesImg from '../assets/web-design.jpg'; 

const Services = () => {
  const services = ["Web Development", "Web Design & Layouts", "Landing Pages", "Interactive Features"];
  
  return (
    <div className="service-section">
    
      <div className="service-text">
        <h1>Skills & Services</h1>
        <ul>
          {services.map((service, idx) => <li key={idx}>{service}</li>)}
        </ul>
      </div>

   
      <div className="service-image">
        <img src={servicesImg} alt="Skills Illustration" />
      </div>
    </div>
  );
};

export default Services;