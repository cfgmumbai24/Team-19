import { useEffect, useState } from "react";

const useGetUnauthMentors = () => {
  const [mentors, setMentors] = useState([]);
  const GetMentors = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/auth/mentor/unauth");
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setMentors(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetMentors();
  }, []);
  // console.log(blogs);

  return { mentors };
};

export default useGetUnauthMentors;
