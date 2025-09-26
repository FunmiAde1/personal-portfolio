/*
File Name: Contact.jsx
Student Name: Funmi Adewoye
StudentID: 301341332
Date: 09/25/2025
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css'; 

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate('/'); 
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="name-fields">
          <input name="firstName" placeholder="First Name" onChange={handleChange} />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
        <button className='contact-send' type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;