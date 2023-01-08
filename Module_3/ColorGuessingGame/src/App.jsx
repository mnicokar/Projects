import { useEffect } from "react";
import { useState } from "react";

import "./App.css";

const genRndColor = () =>{
  return '#' + Math.floor(Math.random() * 16777216).toString(16);
}

export default function App(){
  const [color,setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const genColors = () => {
    const boxColor = genRndColor()
    setColor(boxColor);


    setAnswers(shuffle([boxColor,genRndColor(),genRndColor()]))
  }



  //For randomizing the array so that whean we display it on the button it's not always the first answer choice. 
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  

  useEffect (() => {
    //Todo
    genColors();

  },[]);


  function handleAnswer(answer){
    if (answer === color) {
      setIsCorrect(true);
      genColors();
    } else {
      setIsCorrect(false);
    }

    //answer === color ? setIsCorrect(true) :setIsCorrect(false);
  }

  return (
    <div className = "App">
      <div>
        <div className="guess-me" style = {{background:color}}></div>

        {
          answers.map((answer) => (
            <button onClick = {() => handleAnswer(answer)} key = {answer}> {answer} </button>))
        }


        {isCorrect ? <div className="correct"> Correct Answer! </div> : <div className="incorrect"> Incorrect Answer </div>}
      </div>

      

    </div>
    
  );
}