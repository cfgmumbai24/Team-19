import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import Sign from "../components/Sign/Sign.jsx";
import Categories from "../pages/Categories/Categories.jsx";
import Category from "../pages/Category/Category.jsx";
import Success from "../pages/Success/Success.jsx";

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
        path: "/login",
        element: <Sign />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/category",
        element: <Category />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
