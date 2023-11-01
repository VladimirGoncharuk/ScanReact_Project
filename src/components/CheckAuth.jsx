import React, { useContext } from "react";
import { Context } from "../App";
import { Navigate } from "react-router-dom";

function AuthCheck({children}){
    const {store} = useContext(Context) 
    store.AuthCheck()
    if(!store.isAuth)
    {
        return <Navigate to={'/'}/>}
    
  return children;  
}

export default AuthCheck