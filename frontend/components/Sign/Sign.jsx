import React, { useState } from 'react';
import './Sign.css'; 
import axios from "axios"
import { NavLink } from 'react-router-dom';

export default function Sign() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      
    }

    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', formData);
      console.log(response.data);
      sessionStorage.setItem("user", JSON.stringify(response.data))

      // Handle successful registration
    } catch (error) {
      console.error(error);
      // Handle registration error
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>
        <NavLink to="/"><button type="submit">Register</button></NavLink>
      </form>

      <NavLink to="/login">already have an account?</NavLink>
    </div>
  );
}
