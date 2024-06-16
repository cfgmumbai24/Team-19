import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./VideoDetail.css";

function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/media/${id}`
        );
        setVideo(response.data);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, [id]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="video-detail-page">
      <div className="video-card">
        <video src={video.url} controls></video>
        <div className="video-info">
          <h3>{video.title}</h3>
          <p>
            <strong>Location:</strong> {video.location}
          </p>
          <div className="tags-container">
            {video.videoTag.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
