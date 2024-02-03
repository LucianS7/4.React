import React from "react";


export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown(){
    setIsShown(!isShown)
  }

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
      <hr />
    </div>
  )
}



// <Story storyType="photo" story="first story"/>