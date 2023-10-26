import React from "react"
import Die from "../components/Die"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


export default function App() {

  const [dice, setDice] = React.useState(() => allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  console.log(tenzies)

  
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
      setDice(rolledDice)
    } else {
      setTenzies(false)
      setDice(allNewDice())
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
      <main>
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {diceElements}
        </div>
        <button onClick={rollDice} className="roll-button">{tenzies? "New Game" : "Roll"}</button>
      </main>
    )
  }




  