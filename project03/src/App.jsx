import React from "react";
import Joke  from "./components/Joke";
import jokesData from "./jokesData.js";


export default function App() {
    const jokeElements = jokesData.map(joke => {
      return <Joke setup = {joke.setup} punchline = {joke.punchline} />
    });

    return (
      <div>
        {jokeElements}
      </div>
    )
  }


//     <div>
//       <Joke
//         setup = "I got my daughter a fridge for her birthday."
//         punchline = "I can't wait to see her face light up when she opens it." 
//         upvotes= {10}
//         downvotes = {2}
//         comments = {["comm1", "comm2", "comm3", "comm4"]}
//         isPun = {true}
//       />
//       <Joke
//         setup = "How did the hacker escape the police?"
//         punchline = "He just ransomware!" 
//         upvotes= {45}
//         downvotes = {8}
//         comments = {["comm1", "comm2", "comm3", "comm4"]}
//         isPun = {true}
//       />
//       <Joke
//         setup = "Why don't pirates travel on mountain roads?"
//         punchline = "Scurvy."
//         upvotes= {15}
//         downvotes = {1}
//         comments = {["comm1", "comm2", "comm3", "comm4"]}
//         isPun = {false}
//       />
//       <Joke
//         setup = "What's the best thing about Switzerland?" 
//         punchline = "I don't know, but the flag is a big plus!"
//         upvotes= {20}
//         downvotes = {3}
//         comments = {["comm1", "comm2", "comm3", "comm4"]}
//         isPun = {true}
//       />
//     </div>
//  )
// }