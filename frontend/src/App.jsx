import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
import { userContext } from "./context/userContext";

function App() {
  const footerRef = useRef(null);
  const [user, setUser] = useState(localStorage.getItem("user"))
  useEffect(()=>{
    setUser(localStorage.getItem("user"))
  }, [localStorage.getItem("user")])
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <userContext.Provider value={[user, setUser]}>
      <Header scrollToFooter={scrollToFooter}/>
      <Outlet />
      <div style={{marginTop:"150px"}}>
      <Footer ref={footerRef} />
    
      </div>
      </userContext.Provider>
    </>
  );
}

export default App;
