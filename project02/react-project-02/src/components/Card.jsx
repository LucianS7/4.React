import React from "react";
import star_image from "../../public/images/star.png"

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === 'Online') {
    badgeText = "ONLINE"
  }
  

  return (
    <div className="card">
      <img className="card--image" src={`../images/${props.item.coverImg}`} alt="katie-zaferes-image" />
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="card--stats">
        <img className="card--star" src={star_image} alt="star-image" />
        <span className="card--stats_text">{props.item.stats.rating}</span>
        <span className="card--stats_number">({props.item.stats.reviewCount}) • </span>
        <span className="card--stats_location"> &nbsp; {props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price"><span>From ${props.item.price} </span>/ person</p>
    </div>
  )
}