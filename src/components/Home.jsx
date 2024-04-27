import {useLocation} from "react-router-dom";

import {useState,useEffect} from 'react';

const Home =()=>{
    const location = useLocation();
    
 if (location.pathname ==="/home"){
   return(
    <>
    <h1>Home</h1>
        </>
   );
  }
};

export default Home;