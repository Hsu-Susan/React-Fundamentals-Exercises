import { useState } from "react";
import corgi from "./corgi.jpg";
import "./App.css";

const App = () => {
  const [likes, setLikes] = useState(0);
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <button onClick={() => setLikes(likes + 1)}>❤️ Like</button>
      <p>Amount of likes: {likes}</p>
    </div>
  );
};

export default App;
