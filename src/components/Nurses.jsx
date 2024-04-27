import {useLocation} from "react-router-dom";



const Nurses =()=>{
    const location = useLocation();
    
    console.log("location.pathname:::", location.pathname);
 if (location.pathname ==="/nurses"){
   return(
    <>
    <h1>Nurses</h1>
    </>
   );
  }
};

export default Nurses;