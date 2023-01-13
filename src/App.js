import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Aboutme from "./components/Aboutme"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
    <div id="top"></div>
   <Header/>
   <Home/>
   <br/>
   <div id="Projects"></div>
   <Projects/>
   <br/> 
   <div id="Aboutme"></div>
   <Aboutme/>
   <br/>
   <div id="Contact"></div>
   <Contact/>
   <Footer/>
    </>
  )
}

export default App;
