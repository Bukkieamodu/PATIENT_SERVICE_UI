import {useLocation} from "react-router-dom";
import {useState,useEffect} from 'react';

const Physicians =()=>{
    const location = useLocation();
    
 if (location.pathname ==="/physicians"){
   return(
    <>
    <h1>Physicians</h1>
        </>
   );
  }
};

export default Physicians;