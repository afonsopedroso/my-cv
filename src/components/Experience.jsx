import React, { Component } from 'react';

function Experience(props) {
    return (  <div>
    <div className="cardE">
    {props.experience.map((item) => {
      return (
        <div key={JSON.stringify(item)}>
          <p className="name">📕 {item.name}</p>
          <p>{item.date}</p>
          <p>{item.where}</p>
          <p>{item.description}</p>
        </div>
      );
    })}
  </div>
</div> );
}

export default Experience;