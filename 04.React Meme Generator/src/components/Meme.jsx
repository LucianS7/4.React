import React from "react";

export default function Meme() {

  const [memes, setMemes] = React.useState({});
  const [currentMeme, setCurrentMeme] = React.useState({});
  
  const url = "https://api.imgflip.com/get_memes";
  console.log(currentMeme);

  function getNewMemeImage() {
    const randomNr = Math.floor(Math.random() * memes.length + 1)
    setCurrentMeme((prevMeme) => ({
      ...prevMeme,
      ...memes[randomNr]
    }))
  }

  function onChangeHandler(event) { 
    const { name, value } = event.target
    setCurrentMeme((prevMeme) => (
      {...prevMeme,
        [name]: value
      }))
  }

  React.useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(memesData => setMemes(memesData.data.memes))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  React.useEffect(() => {
    if (memes.length > 0) {
      const randomNr = Math.floor(Math.random() * memes.length)
      setCurrentMeme(memes[randomNr])
    }
  }, [memes])


  return (
    <main>
      <div className="form">
        <label htmlFor="topText">Top text</label>
        <label htmlFor="bottomText">Bottom text</label>
        <input 
          type="text" 
          placeholder="Top text" 
          name="topText"
          className="form--input"
          onChange={onChangeHandler}
          value={currentMeme.topText ?? ""}
        />
        <input 
          type="text" 
          placeholder="Bottom text"
          name="bottomText" 
          className="form--input"
          onChange={onChangeHandler}
          value={currentMeme.bottomText ?? ""}
        />
        <button 
          className="form--button"
          onClick={getNewMemeImage}
        >
          Get a new meme image🖼
        </button>
      </div>
    <div className="meme">
      <img src={currentMeme?.url} className="meme--image" alt="meme-image"/>
      <div className="meme--text top">{currentMeme.topText}</div>
      <div className="meme--text bottom">{currentMeme.bottomText}</div>
    </div>
   </main>

  )
}