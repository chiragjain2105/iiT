import React from 'react'
import { useNavigate ,Outlet,Navigate } from 'react-router-dom';

function Protected({authToken}) {
   
   // let auth ={"token":false}
    console.log("authtoken",authToken)

  return (
    
       
        authToken ? <Outlet/>:<Navigate to="/"/>
   
  )
}

export default Protected

