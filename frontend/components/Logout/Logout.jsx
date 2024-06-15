import React, { useState } from 'react';
import './Logout.css'; 
import axios from "axios"

export default function Logout() {

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        
    
        try {
          const response = await axios.post('http://localhost:4000/api/auth/logout');
          console.log(response.data);
          sessionStorage.setItem("user", JSON.stringify(response.data))
          throw new Error(data.error)
          // Handle successful registration
        } catch (error) {
          console.error(error);
          // Handle registration error
        }
      };


  return (
    <button onClick={handleSubmit}>Logout</button>
  )
}
