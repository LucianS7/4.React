import React from "react"
import Die from "./components/Die"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


export default function App() {

  const [dice, setDice] = React.useState(() => allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [nrOfRolls, setNrOfRolls] = React.useState(0)
  const [time, setTime] = React.useState(0)
  const [timerIsRunning, setTimerIsRunning] = React.useState(false)
  const [bestTime, setBestTime] = React.useState(
    () => JSON.parse(localStorage.getItem("bestTime")) || 0
  )
  
  React.useEffect(() => {
    let allHeld = dice.every(die => die.isHeld)
    if (allHeld) {
      const firstValue = dice[0].value
      const allSameValue = dice.every(die => die.value === firstValue)
      if (allHeld && allSameValue) {
        console.log("You won!")
        setTenzies(true)
      }
    }
  }, [dice])

  React.useEffect(() => {
    let intervalID;
    if (!tenzies && timerIsRunning) {
      intervalID = setInterval(()=>setTime((prevTime) => prevTime + 1), 100)
    } else if (tenzies) {
      clearInterval(intervalID)
      if (bestTime === 0 || time < bestTime) {
        setBestTime(time)
        localStorage.setItem("bestTime", JSON.stringify(time))
      }
    } 
    return () => clearInterval(intervalID)
  },[tenzies, timerIsRunning])


  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }


  function allNewDice() {
    const numberOfDice = 10;
    let newDice = [];
    for (let i = 1; i <= numberOfDice; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      newDice.push(generateNewDie())
    }
    return newDice
  }


  function rollDice () {
    if (!tenzies) { 
      const rolledDice = dice.map((die) => (
        die.isHeld ? die : generateNewDie()
      ))
        if (nrOfRolls === 0) {
          setTimerIsRunning(true)
        }
      setNrOfRolls(nrOfRolls + 1)
      setDice(rolledDice)
    } else {
      setTenzies(false)
      setDice(allNewDice())
      setNrOfRolls(0)
      setTime(0)
      setTimerIsRunning(false)
    }
  }


  function holdDice(id) {
    const heldDice = dice.map((die) => 
      (die.id === id? {...die, isHeld: !die.isHeld} : die)
    )
   setDice(heldDice)
  }
  

  const diceElements = dice.map(die => (
    <Die 
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />)
  )
  

    return (
      <main className="main">
        {tenzies && <Confetti />}
        <h1 className="main--title">Tenzies</h1>
        <p className="main--instructions">Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>
        <div className="main--dice-container">
          {diceElements}
        </div>
        <button onClick={rollDice} className="main--roll-button">{tenzies? "New Game" : "Roll"}</button>
        <p className="main--number-of-rolls">Nr. of rolls: {nrOfRolls}</p>
        <p className="main--time">
          <span>Best time: {parseFloat(bestTime/10).toFixed(1)}</span>
          <span>Time: {parseFloat(time/10).toFixed(1)}</span>
        </p>
      </main>
    )
  }




  