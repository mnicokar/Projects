
import { useState } from 'react'

import topShape from "./assets/shape-1.png";
import bottomShape from "./assets/shape-2.png";



export default function Intro(props){
    return(
      <main>
        <section className='game-intro'>

        <img className = "top-shape" src={topShape} alt="Top Shape Blob" />
        <img className = "bottom-shape" src={bottomShape} alt="Bottom Shape Blob" />
      
          <h1 className='game-title'>Quizzical the Game</h1>
          
          <p className='game-description'>Welcome to this awesome trivia game! Press Start Quiz if you dare!</p>
  
          <button className="button-start" onClick = {props.startQuiz}>Start Quiz</button>
  
        </section>
      </main>
    )
  }