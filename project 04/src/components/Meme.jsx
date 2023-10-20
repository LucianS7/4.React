import React from "react";
import memeData from "../data/memeData.js"

export default function Meme() {
  let url;

  function memeGenerator() {
    const memes = memeData.data.memes;
    const n = memes.length;
    const randomNr = Math.floor(Math.random() * n) + 1;
    const memeUrl = memeData.data.memes[randomNr].url;
    return memeUrl
  }

  return (
    <main>
      <p>{url}</p>
      <div className="form">
        <input 
          type="text"
          className="form--input" 
          placeholder="Top text" 
          />
        <input 
          type="text"
          className="form--input" 
          placeholder="Bottom text" 
          />

        <button onClick={memeGenerator} className="form--button">Get a new meme image 🖼</button>
      </div>
    </main>
  )
}
