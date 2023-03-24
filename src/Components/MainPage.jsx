import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Skills from "../Components/Skills";
import Projects from "./Projects";
import About from "./About";
import TopNavbar from "./TopNavbar";
import Social from "./Social";
import Contact from "./Contact";
const MainPage = () => {
  return (
    <div>
      <div id="nav-menu">
      <TopNavbar />
        </div>
      
      <Navbar />
       <Home />
      <About />
      <Skills />
      <Projects /> 
      <Social />
      <Contact />  
    </div>
  );
};
export default MainPage;
