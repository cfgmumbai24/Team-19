import React, { useState } from 'react';
import axios from 'axios';

export default function CategoryForm() {
  const [formData, setFormData] = useState({
    categoryName: '',
    description: '',
    photo: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.categoryName);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('file', formData.photo);

    try {
      const response = await axios.post('http://localhost:4000/api/categoryUpload', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
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
          Category Name:
          <input type="text" name="categoryName" value={formData.categoryName} onChange={handleChange} required />
        </label>
        <label>
          Photo:
          <input type="file" name="photo" onChange={handleFileChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
