import React from "react";
import airbnbLogo from '../../public/images/airbnb-logo.png'

export default function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--logo" src={airbnbLogo} alt="airbnb-logo" />
    </nav>
  )
}