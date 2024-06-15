import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { userContext } from "./context/userContext";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  useEffect(() => {
    setUser(localStorage.getItem("user"));
    console.log(user);
  }, [localStorage.getItem("user")]);
  return (
    <>
      <userContext.Provider value={[user, setUser]}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </>
  );
}

export default App;
