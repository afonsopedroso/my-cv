import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from  "./components/About";
import Education from  "./components/Education";

import { CV } from "./CV/CV";



function App() {
  return (
    <div className="App">
       <Hero hero={CV.hero} />
       <About hero={CV.hero} />
       <Education education={CV.education} />
         
    </div>
  );
}

export default App;
