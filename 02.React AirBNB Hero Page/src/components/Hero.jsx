import React from "react";
import photoGrid from "../../public/images/photo-grid.png";

export default function MainComponent() {
  return (
    <section className="hero">
      <img className="hero--photo_grid" src={photoGrid} alt="photo-grid" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home</p>
    </section>
  )
}