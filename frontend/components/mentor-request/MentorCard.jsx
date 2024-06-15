import React from "react";

const MentorCard = () => {
  return (
    <div className="card">
      <h1>Card Title</h1>
      <p>This is a description of the card.</p>
      <div className="button-container">
        <button className="button accept">Accept</button>
        <button className="button decline">Decline</button>
      </div>
    </div>
  );
};

export default MentorCard;
