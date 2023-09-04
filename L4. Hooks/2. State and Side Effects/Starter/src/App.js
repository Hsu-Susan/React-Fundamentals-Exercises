import logo from "./logo.svg";
import "./App.css";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import { useState } from "react";

const App = () => {
  const [numCorrect, setNumCorrect] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0);

  const handleAnswer = (checkAnswer) => {
    if (checkAnswer) {
      setNumCorrect(numCorrect + 1);
    }
    setNumQuestions(numQuestions + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <GameBoard handleAnswer={handleAnswer} />
        <ScoreBoard numCorrect={numCorrect} numQuestions={numQuestions} />
      </div>
    </div>
  );
};

export default App;
