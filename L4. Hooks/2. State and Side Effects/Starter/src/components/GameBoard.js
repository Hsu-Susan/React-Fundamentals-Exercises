import { useEffect, useState } from "react";

const GameBoard = (props) => {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);
  const [answer, setAnswer] = useState(null);

  const createNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const answer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

    return [value1, value2, value3, answer];
  };

  const refreshQuestion = (newValues) => {
    setFirst(newValues[0]);
    setSecond(newValues[1]);
    setThird(newValues[2]);
    setAnswer(newValues[3]);
  };

  const evaluateAnswer = (answer) => {
    const correctAnswer = first + second + third;

    return (
      (correctAnswer === answer && answer === "true") ||
      (correctAnswer !== answer && answer === "false")
    );
  };

  useEffect(() => {
    let values = createNewQuestion();
    setFirst(values[0]);
    setSecond(values[1]);
    setThird(values[2]);
    setAnswer(values[3]);
  }, []);

  const handleAnswer = (event) => {
    const newValues = createNewQuestion();
    refreshQuestion(newValues);
    const checkAnswer = evaluateAnswer(event.target.name);
    props.handleAnswer(checkAnswer);
  };

  return (
    <div>
      <div className="equation">
        <p className="text">{`${first} + ${second} + ${third} = ${answer}`}</p>
      </div>
      <button name="true" onClick={handleAnswer}>
        True
      </button>
      <button name="false" onClick={handleAnswer}>
        False
      </button>
    </div>
  );
};

export default GameBoard;
