import React from "react";


export default function Joke(props) {
//   console.log(props);
//   function isPun() {
//     if (props.isPun) {
//       return 'isPun'
//     } else {
//       return 'notPun'
//     }
//   }

  return (
    <div>
      <h3>Setup: {props.setup}</h3>
      <h4>Punchline: {props.punchline}</h4>
      {/* <p>Upvotes: {props.upvotes}</p>
      <p>Downvotes: {props.downvotes}</p>
      <p>{isPun()}</p>
      <p>{props.comment}</p> */}
      <hr />
    </div>
  )
}



<Story storyType="photo" story="first story"/>