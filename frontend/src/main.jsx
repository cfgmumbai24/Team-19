
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from '../components/Home/Home.jsx'
import Sign from '../components/Sign/Sign.jsx'
import Logout from '../components/Logout/Logout.jsx'
import Success from '../pages/Success/Success.jsx'
import Categories from '../pages/Categories/Categories.jsx'
import Category from '../pages/Category/Category.jsx'
import Admin from '../pages/Admin/Admin.jsx'
import Login from '../components/Login/Login.jsx'


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
        path: "/logout",
        element: <Logout/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);        


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
