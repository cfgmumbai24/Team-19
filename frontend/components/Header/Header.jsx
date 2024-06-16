import React from 'react'
import "./Header.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from '../../src/context/userContext'
import { useContext } from 'react'

export default function Header({ scrollToFooter }) {
  const navigate = useNavigate()
  const [user, setUser] = useContext(userContext)
  // const handleClick = ()=>{
  //   navigate("/")
  // }
  // const user = sessionStorage.getItem("user")
  return (
    <header className="header">
      
      <nav className="header__nav">
      <img src="https://margshala.com/wp-content/uploads/2023/08/Margshala-Logo.png" alt="NGO Logo" height={50}/>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
          <li onClick={scrollToFooter}><NavLink  activeClassName="active">Contact</NavLink></li>
          {/* <li><NavLink to="/explore" activeClassName="active">Explore</NavLink></li> */}
          <li><NavLink to="/login" activeClassName="active" >login</NavLink></li>
          {/* {user&& <button onClick={handleClick}>logout</button>} */}
        </ul>
      </nav>
      <hr 
      style={{
        height:"1px",
        backgroundColor:"rgb(39, 139, 126)"
      }}
      />
    </header>
  );
}
