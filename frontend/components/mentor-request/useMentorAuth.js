import { useEffect, useState } from "react";

const useMentorAuth = () => {
  const AuthMentor = async (id) => {
    try {
      const res = await fetch(
        "http://localhost:4000/api/auth/mentor/accept/" + id,
        {
          method: "POST",
        }
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteMentor = async (id) => {
    try {
      const res = await fetch(
        "http://localhost:4000/api/auth/mentor/decline/" + id,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return { AuthMentor, deleteMentor };
  // console.log(blogs);
};

export default useMentorAuth;
