import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [inputData, setInputData] = useState("");
  const updateInputData = (inputData) => {
    setInputData(inputData.trim());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input
          type="text"
          placeholder="Say Something"
          value={inputData}
          onChange={(event) => updateInputData(event.target.value)}
        />
        <p className="echo">Echo:</p>
        <p>{inputData}</p>
      </div>
    </div>
  );
};

export default App;
