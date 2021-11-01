import React, { Component } from 'react';
import "./Hero.css";

function Hero(props) {
    return ( 
        <div className="Hero">
             <div className="hero">
      <img src={props.hero.image} alt="" />
      <div className="card">
      <h2>
        {props.hero.name} {props.hero.adress}
      </h2>
        <p>🗺️{props.hero.city} </p>
        <p>🗓️{props.hero.birthDate}</p>
       
        <p>📱 {props.hero.phone}</p>
        <p>💾<a href={props.hero.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
        </div>
     );
};

export default Hero;


