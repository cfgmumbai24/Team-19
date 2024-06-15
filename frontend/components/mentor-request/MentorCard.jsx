import React from "react";
import useMentorAuth from "./useMentorAuth";

const MentorCard = ({ mentor }) => {
  const { authMentor, deleteMentor } = useMentorAuth();
  const handleClick = (num) => {
    if (num === 1) authMentor(mentor._id);
    else deleteMentor(mentor._id);
  };

  return (
    <div className="card">
      <h1>{mentor.username}</h1>
      <p>{mentor.email}</p>
      <div className="button-container">
        <button
          className="button accept"
          onClick={() => {
            handleClick(1);
          }}
        >
          Accept
        </button>
        <button
          className="button decline"
          onClick={() => {
            handleClick(0);
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
