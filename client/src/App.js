import React, { Component, useState,useEffect,useRef } from "react";

import "./App.css";
import NavBar from "./components/Navbar"
import Background from "./components/Background"
import Content from "./components/ContentSection"
import ProfileImg from "./components/ProfileImg"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



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
    <Router>
      <div className="App">
          
              <NavBar>
              </NavBar>
              <Background/>
              <Content />
              <ProfileImg />
          
      </div>
    </Router>
  );
}


export default App;
