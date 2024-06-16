import React from "react";
import MentorCard from "./MentorCard";
import useGetUnauthMentors from "./useMentorGet";

const MentorRequest = () => {
  const mentors = useGetUnauthMentors().mentors;
  console.log(mentors);
  return (
    <div>
      {mentors.map((mentor) => (
        <MentorCard mentor={mentor} key={mentor._id} />
      ))}
    </div>
  );
};

export default MentorRequest;
