import React from "react";

export default function Dice(props) {
  const faceElements = [
    <div 
      className={`die die--first-face ${props.isHeld ? "die--isHeld": ""}`}
      onClick={props.holdDice} 
    >
      <span className="die--dot"></span>
    </div>
    ,
    <div 
      className={`die die--second-face ${props.isHeld ? "die--isHeld": ""}`}
      onClick={props.holdDice} 
    >
      <span className="die--dot"></span>
      <span className="die--dot"></span>
    </div>
    ,
    <div 
      className={`die die--third-face ${props.isHeld ? "die--isHeld": ""}`}
      onClick={props.holdDice} 
    >
      <span className="die--dot"></span>
      <span className="die--dot"></span>
      <span className="die--dot"></span>
    </div>
    ,
    <div 
      className={`die die--fourth-face ${props.isHeld ? "die--isHeld": ""}`}
      onClick={props.holdDice} 
    >
      <div className="die--column">
        <span className="die--dot"></span>
        <span className="die--dot"></span>
      </div>
      <div className="die--column">
        <span className="die--dot"></span>
        <span className="die--dot"></span>
      </div>
    </div>
    ,
    <div 
      className={`die die--fifth-face ${props.isHeld ? "die--isHeld": ""}`}
      onClick={props.holdDice} 
    >
      <div className="die--column">
        <span className="die--dot"></span>
        <span className="die--dot"></span>
      </div>
      <div className="die--column">
        <span className="die--dot"></span>
      </div>
      <div className="die--column">
        <span className="die--dot"></span>
        <span className="die--dot"></span>
      </div>
    </div>
    ,
    <div 
      className={`die die--sixth-face ${props.isHeld ? "die--isHeld": ""}`}
      onClick={props.holdDice} 
    >
      <div className="die--column">
        <span className="die--dot"></span>
        <span className="die--dot"></span>
        <span className="die--dot"></span>
      </div>
      <div className="die--column">
        <span className="die--dot"></span>
        <span className="die--dot"></span>
        <span className="die--dot"></span>
      </div>
    </div>
  ]

  return (
    faceElements[props.value - 1]
  )
}