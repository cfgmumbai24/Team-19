import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    {/* toast.error("skis") */}
      <Header scrollToFooter={scrollToFooter}/>
      <Outlet />
      <div style={{marginTop:"150px"}}>
      <Footer ref={footerRef} />
      <Toaster />
      </div>
    </>
  );
}

export default App;
