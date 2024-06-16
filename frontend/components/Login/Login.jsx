import React, { useState } from 'react';
import './Login.css'; 
import axios from "axios"
import { NavLink, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()


    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:4000/api/auth/login', formData);
          console.log(response.data);
          sessionStorage.setItem("user", JSON.stringify(response.data))
          const data = JSON.stringify(response.data)
          if(data.error)
            throw new Error(data.error)
        console.log(data);
          // Handle successful registration
        } catch (error) {
          console.error(error);
          // Handle registration error
        }

        navigate("/")
      };
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:4000/api/auth/login",
  //       formData
  //     );
  //     console.log(response.data);
  //     sessionStorage.setItem("user", JSON.stringify(response.data));
  //     const data = JSON.stringify(response.data);
  //     if (data.error) throw new Error(data.error);
  //     console.log(data);
  //     // Handle successful registration
  //   } catch (error) {
  //     console.error(error);
  //     // Handle registration error
  //   }
  // };

  return (
    <div className="form-container" style={{ marginTop: "100px" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <NavLink to="/sign-up">Create account?</NavLink>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
