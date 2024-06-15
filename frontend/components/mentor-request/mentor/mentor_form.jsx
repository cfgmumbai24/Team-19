import React, { useState } from 'react';
import axios from 'axios';

export default function MentorForm() {
  const [formData, setFormData] = useState({
    title: '',
    username: '',
    categoryName: '',
    url: null,
    content: '',
    location: '',
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
      url: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('username', formData.username);
    formDataToSend.append('category', formData.categoryName); // corrected to 'category'
    formDataToSend.append('file', formData.url); // corrected to 'file'
    formDataToSend.append('content', formData.content);
    formDataToSend.append('location', formData.location);

    try {
      const response = await axios.post('http://localhost:4000/api/upload', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Handle successful registration or form submission
    } catch (error) {
      console.error(error);
      // Handle registration or form submission error
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <label>
          Category:
          <input type="text" name="categoryName" value={formData.categoryName} onChange={handleChange} required />
        </label>
        <label>
          URL (File):
          <input type="file" name="url" onChange={handleFileChange} required />
        </label>
        <label>
          Content:
          <input type="text" name="content" value={formData.content} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
