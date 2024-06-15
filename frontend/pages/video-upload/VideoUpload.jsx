import React, { useState } from "react";
import "./video.css";

function VideoUpload() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState(null);

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log({ title, category, video });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Upload Video</h2>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={handleCategoryChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="video">Video</label>
          <input
            type="file"
            id="video"
            accept="video/*"
            onChange={handleVideoChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default VideoUpload;
