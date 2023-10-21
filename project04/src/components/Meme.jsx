import React from "react";
import memesData from "../data/memesData.js"

export default function Meme() {

  const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)


  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNr = Math.floor(Math.random() * memesArray.length) + 1;
    const url = allMemeImages.data.memes[randomNr].url;
    setMeme(prevMeme => ({
      ... prevMeme,
      randomImage: url
    }))
  }

  return (
    <main>
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

        <button 
          onClick={getMemeImage} 
          className="form--button"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme-image" />
    </main>
  )
}

