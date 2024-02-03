import React from "react";


export default function FirstPage(props) {


  return (
    <div className="fp--container">
      <h1>Welcome!</h1>
      <h2>Please enter your name in the field below and press Start Game</h2>
      <input 
        type="text" 
        placeholder="Name"
        className="fp--name-input" 
        onChange={props.getName}
        value={props.name} 
      />
      <button 
        onClick={props.startGame} 
        className="fp--button"
      >
        Start Game
      </button>
    </div>
  )
}