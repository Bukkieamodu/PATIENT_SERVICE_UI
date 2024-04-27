import {useLocation} from "react-router-dom";

import {useState,useEffect} from 'react';

const Appointments =()=>{
    const location = useLocation();
    
 if (location.pathname ==="/appointments"){
   return(
    <>
    <h1>Appointments</h1>
        </>
   );
  }
};

export default Appointments;