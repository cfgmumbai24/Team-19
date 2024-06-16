import React, { useContext } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { userContext } from "../../src/context/userContext.js";

export default function Header() {
  const [user, setUser] = useContext(userContext);
  return (
    <header className="header">
      <div className="header__logo">
        <img src="https://margshala.com/wp-content/uploads/2023/08/Margshala-Logo.png" alt="NGO Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={user ? "/explore" : "/login"} activeClassName="active">
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
