/*
File Name: Home.jsx
Student Name: Funmi Adewoye
StudentID: 301341332
Date: 09/25/2025
*/


import React from 'react';
import { Link } from 'react-router-dom';
import profile from "../assets/profile.jpg";
import './Home.css'; 

const Home = () => {
  return (
    <div className = "home-content">
      <h1>Explore my Projects</h1>
      <p>As a developer, my mission is to ensure i keep learning , building and creating websites that provide meaningful experiences for users </p>
      <Link to="/about"><button>Get Started</button></Link>
    </div>
  );
};

export default Home;