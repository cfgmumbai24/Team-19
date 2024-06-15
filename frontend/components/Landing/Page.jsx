import React from 'react'
import "./Page.css"
import {NavLink} from "react-router-dom"

export default function Page() {
  return (
    <div className='home'>
      <div className='bannerBg'>
        
      <div class="branches" >
            <div class="branch">
                <section class="sec1 jamu" className='states'>
                    <NavLink to="/categories">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZpQibIWbtuUjPO1QQPx7Qg-t1th-IwMJyA&s" alt="JamuKashmir" style={{
                      borderRadius:"99%",
                      height:200,
                      width:200
                    }}/>
                    </NavLink>
                    <div className='textchild'>
                    <h1>Uttarakhand</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consectetur ipsa rem, culpa dolore quaerat.</p>
                    </div>
                </section>

            </div>

            <div class="branch">
            <section class="sec1 jamu" className='states'>
                    <div className='textchild'>
                    <h1>Karnataka</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consectetur ipsa rem, culpa dolore quaerat.</p>
                    </div>
                    <NavLink to="/categories">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZpQibIWbtuUjPO1QQPx7Qg-t1th-IwMJyA&s" alt="JamuKashmir" style={{
                      borderRadius:"99%",
                      height:200,
                      width:200
                    }}/>
                    </NavLink>
                    
                </section>
            </div>

            <div class="branch">
            <section class="sec1 jamu" className='states'>
                    

            <NavLink to="/categories">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZpQibIWbtuUjPO1QQPx7Qg-t1th-IwMJyA&s" alt="JamuKashmir" style={{
                      borderRadius:"99%",
                      height:200,
                      width:200
                    }}/>
                    </NavLink>
                    <div className='textchild'>
                    <h1>Tamil Nadu</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consectetur ipsa rem, culpa dolore quaerat.</p>
                    </div>
                </section>
            </div>
        </div>

      </div>
    </div>
  )
}
