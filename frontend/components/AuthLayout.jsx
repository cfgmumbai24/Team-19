import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Protected({children, authentication=true}) {
    
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();


    useEffect(()=>{
        if(authentication ){
            navigate("/login")
        }
        else if(!authentication){
            navigate("/")
        }
        setLoader(false);
    },[navigate,authentication])


  return loader? <h1>Loading...</h1> : <>{children}</>
}

export default Protected