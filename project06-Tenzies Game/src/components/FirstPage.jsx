import React from "react";


export default function FirstPage(props) {


  return (
    <div className="fp--container">
      <h1>Welcome!</h1>
      <h2>Please enter your name in the field below and press Start Game</h2>
      <input className="fp--name-input" onChange={props.name} type="text" placeholder="Name" />
      <button onClick={props.start} className="fp--button">Start Game</button>
    </div>
  )
}