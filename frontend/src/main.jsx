import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import Sign from "../components/Sign/Sign.jsx";
import Login from "../components/Login/Login.jsx";
import Success from "../pages/Success/Success.jsx";
import Categories from "../pages/Categories/Categories.jsx";
import Category from "../pages/Category/Category.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import Chatbot from "../pages/Chatbot/Chatbot.jsx";
import MentorRequest from "../components/mentor-request/MentorRequest.jsx";
import CategoryForm from "../components/Category/Category.jsx";
import Logout from "../components/Logout/Logout.jsx";
import MentorForm from "../components/mentor-request/mentor/mentor_form.jsx";




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
        element: <Sign />,
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
        path: "/category",
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
        element: <Logout/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/chatbot",
        element: <Chatbot/>,
      },
      {
        path:"/mentor-form",
        element:<MentorForm/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
