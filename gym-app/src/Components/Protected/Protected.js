import React, { useEffect } from "react";
import {Navigate, useNavigate} from 'react-router-dom'
import Body from "../Body/Body";

const Protected = (props) => {
   
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
  
     if(sessionStorage.getItem("admin")==="false" || sessionStorage.getItem("admin").length===0){
        navigate("/");         
     }   
    });

    return(
        <>
            <Component/>
        </>
    )
};

export default Protected;
