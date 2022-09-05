
import './App.css';
import React from 'react'
import { useState, useEffect } from 'react';
import SingleCard from './components/SingleCard';
const cardImages = [

  { "src": "helmet-1.png", matched: false },
  { "src": "potion-1.png", matched: false },
  { "src": "ring-1.png", matched: false },
  { "src": "scroll-1.png", matched: false },
  { "src": "shield-1.png", matched: false },
  { "src": "sword-1.png", matched: false },


]

console.log(cardImages)

/*
   const[turns,setTurns] = useState(0)
   const [cards,setCards]= useState([])
    const shuffleCards= ()=>
    {
       const shuffleCards= [...cardImages,...cardImages]

       .sort(()=> Math.random()-0.5)
       .map((card)=>({ ...card, id: Math.random() }))
       console.log(shuffleCards)
       setCards(shuffleCards)
       setTurns(0)
    }

   return (
    <div className="App">
      <h1>Magic game</h1>
      <button onClick={shuffleCards}>New game</button>
      <div className="card-grid">
      <div className="card-grid">
        {cards.map(card =>
        (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="fuck" />
              <img className="back" src="cover.png" alt="np" />
            </div>
          </div>
        ))}
      </div>
      );

}</div></div>
*/
function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled,setDisabled] = useState(false)
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffleCards)
    setTurns(0)
  }
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    console.log(turns)
  }

  useEffect(() => {
   
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(preCards => {
          return preCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            }
            else  {
              return card
            }
          })
        })
        console.log("CARD MATCHED")
     
        resetTurn()
      }
      else {
        console.log("NOT MATCHED")
      setTimeout(() => {
        resetTurn()
      }, 700);
   
        
      }
    }

  }, [choiceOne, choiceTwo])
  console.log(cards)
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }
  return (
    <div className="App">

      <h1 className="magic-game">Magic Match
      </h1>
      <button className="new-game" onClick={shuffleCards}>NEW GAME</button>
      <div className="card-grid">
        {cards.map(card => (

          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped = {card===choiceOne || card===choiceTwo || card.matched}
            disabled = {disabled} 
          />
        ))


        }
      </div>
      <h1>turns:{turns}</h1>
    </div>
    
  );
}
export default App;
