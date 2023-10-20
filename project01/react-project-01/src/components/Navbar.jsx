import React from "react";
import smallLogo from '../../public/images/react-icon-small.png'

export default function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--icon" src={smallLogo} alt='React small logo'/>
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
}