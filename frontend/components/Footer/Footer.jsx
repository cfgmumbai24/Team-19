import React from 'react'
import "./Footer.css"

export default function Footer({ref}) {
  return (
    <footer ref={ref}>
            <div class="details">
                <img src="https://margshala.com/wp-content/uploads/2023/08/Margshala-Logo.png"
                  style={{
                    height:"70px"
                  }}
                 />
                <div class="text">
                Margshala Foundation, Plot 2A, 1st Floor, Khasra 294, Kehar Singh Estate, Saidulajab, Lane Number 2, New Delhi - 110030 ©2023 Margshala Foundation
                </div>
                
                
            </div>
            
        </footer>
  )
}
