import React, { Component, useState,useEffect,useRef } from "react";

import "./App.css";
import NavBar from "./components/Navbar"
import Background from "./components/Background"



function App() {
  const [offsetY,setOffesetY] = useState(0);

  const handleScroll = () =>{
    setOffesetY(window.pageYOffset)
  }

  //runs once when the component first mounts
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)

    return ()=> window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <div className="App">
        <NavBar/>
        <Background/>
    </div>
  );
}


export default App;