import React, { Component } from 'react';

function About(props) {
    return (  <div>
    <div className="cardE">
    {props.hero.aboutMe.map((item) => {
      return (
        <div key={JSON.stringify(item)}>
          
          <p>{item.info}</p>
          
        </div>
      );
    })}
  </div>
</div> );
}

export default About;