import React from "react";

export default function Meme() {

  const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemes, setAllMemes] = React.useState({})


  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(memesData => setAllMemes(memesData.data.memes))
  }, [])

 
    const {name, value} = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value 
    }))

  }
  
  
  function getMemeImage() {
    const randomNr = Math.floor(Math.random() * allMemes.length) + 1;
    const url = allMemes[randomNr].url;
    setMeme(prevMeme => ({
      ... prevMeme,
      randomImage: url
    }))
  }

  return (
    <main>
        <div className="form">
          <label className="form--label">Top text</label>
          <label className="form--label">Bottom text</label>
          <input 
            type="text"
            className="form--input" 
            placeholder="Top text"
            name="topText"
            onChange={changeHandler}
            value={meme.topText} 
          />
          <input 
            type="text"
            className="form--input" 
            placeholder="Bottom text"
            name="bottomText"
            onChange={changeHandler}
            value={meme.bottomText} 
          />

          <button 
            className="form--button"
            onClick={getMemeImage} 
          >
            Get a new meme image 🖼
          </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )


