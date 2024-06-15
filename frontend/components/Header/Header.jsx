import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="https://margshala.com/wp-content/uploads/2023/08/Margshala-Logo.png" alt="NGO Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/explore" activeClassName="active">Explore</NavLink></li>
          <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
