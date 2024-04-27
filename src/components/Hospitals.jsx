import {useLocation} from "react-router-dom";

import {useState,useEffect} from 'react';

const Hospitals =()=>{
    const location = useLocation();
    
 if (location.pathname ==="/hospitals"){
   return(
    <>
    <h1>Home</h1>
        </>
   );
  }
};

export default Hospitals;