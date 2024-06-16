import React from 'react'
import "./Home.css"
import {NavLink, useNavigate} from "react-router-dom"
import { userContext } from '../../src/context/userContext'
import { useContext } from 'react'

export default function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useContext(userContext)
  return (
  <>
        <div className='homePage'>
        <img src="https://margshala.com/wp-content/uploads/2024/05/Time-1024x512.jpg" alt="" 
        
        className='imgBanner'
        />
      <div className='text'>
        <p className='para'>
        In 2019, a team of motivated development sector professionals came together to solve tough problems in hard places. We asked ourselves a simple question – how can we create opportunities for young people in the most remote of communities?
        <br /><br />
        Since then, we have run a number of innovative experimental pilots related to livelihoods, entrepreneurship, career awareness and environmental sustainability for close to 2000 young people.across remote districts of Uttarakhand. Over the last 3 years, our flagship program – the Margshala Swarozgar Fellowship – has grown into one of the few well-recognized youth entrepreneurship programs in the Himalayan region.
        </p>
      </div>

      
    </div>

    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>
      <img src="https://margshala.com/wp-content/uploads/2023/08/Margshala-Logo.png" alt="" 
      height={80}
      
      />
    </div>

    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      marginTop:"5%"

    }}>
    <div style={{
      textAlign:"center",
      display:"flex",
      flexBasis:"center",
      justifyContent:"center",
      alignItems:"center",
      width:"500px",
      height:"50px",
      backgroundColor:"rgb(32, 153, 127)",
      color:"white",
      borderRadius:"20px"
    }}>
      <NavLink to="/states">
        <h2>Click here Help</h2>
      </NavLink>
    </div>
    </div>
  </>
  )
}
