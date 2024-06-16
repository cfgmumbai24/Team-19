import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import Sign from "../components/Sign/Sign.jsx";
import Success from "../pages/Success/Success.jsx";
import Categories from "../pages/Categories/Categories.jsx";
import Category from "../pages/Category/Category.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import Chatbot from "../pages/Chatbot/Chatbot.jsx";
import MentorRequest from "../components/mentor-request/MentorRequest.jsx";
import Logout from "../components/Logout/Logout.jsx";
// import Page from "../components/Landing/Page.jsx";
import Protected from "../components/AuthLayout.jsx";
// import MentorForm from "../components/mentor-request/mentor/mentor_form.jsx";
import Page from "../components/Landing/Page.jsx";
import MentorForm from "../components/mentor-request/mentor/mentor_form.jsx";
import Login from "../components/Login/Login.jsx";
import VideoUpload from "../pages/video-upload/VideoUpload.jsx";
import LMS from "../pages/lms/LMS.jsx";
import { useState } from "react";
import CategoryForm from "../components/Category/Category.jsx";

// const getUser = () => {
//   useEffect(() => {
//     setUser(localStorage.getItem("user"));
//   }, [localStorage.getItem("user")]);
// };const user = sessionStorage.getItem("user")
// console.log(user)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-up",
        element: <Sign/>,
      },
      {
        path: "/categories",
        element: <Categories />,
      },

      {
        path: "/category-form",
        element: <CategoryForm />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/mentor-requests",
        element: <MentorRequest />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/video-upload",
        element: <VideoUpload />,
      },
      {
        path: "/lms",
        element: <LMS />,
      },
      {
        path: "/chatbot",
        element: <Chatbot />,
      },
      {
        path: "/states",
        element: <Page />,
      },
      {
        path: "/mentor-form",
        element: <MentorForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
