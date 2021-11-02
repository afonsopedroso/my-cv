import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from  "./components/About";
import Education from  "./components/Education";

import { CV } from "./CV/CV";
import Experience from './components/Experience';



function App() {
const[showEperience,setExperience]= useState(false)

function showExp(){
  setExperience(true);
}

function showEdu(){
  setExperience(false);
}
  return (
    <div className="App">
       <Hero hero={CV.hero} />
        <About hero={CV.hero} /> 
        <div>
          <button onClick={showEdu}>show Education</button>
          <button onClick={showExp}>show Experience</button>
        </div>
       {!showEperience ? <Education education={CV.education} />:
        <Experience experience={CV.experience}/>}
    </div>
  );
}

export default App;
