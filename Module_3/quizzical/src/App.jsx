import { useState } from 'react'

import Intro from './Intro.jsx';



import './App.css'

export default function App(){
  const [showStart, setShowStart] = React.useState(true)

  function startQuiz()
  {      
      setShowStart(true)    
  }
  

  return(
    <main>


      {/* Passing props to intro*/}
      <Intro
        startQuiz = {true}
      />

    </main>
    
  )
}