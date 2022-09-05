import React from 'react'
import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) { 
      handleChoice(card) 
    }
  }
  return (
    <div>
      <div className="card" key={card.id}>
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="card front" />
          <img className="back" src="cover.png" onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}
