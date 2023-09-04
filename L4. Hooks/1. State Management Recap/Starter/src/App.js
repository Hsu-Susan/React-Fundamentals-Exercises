import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChatWindow from "./components/ChatWindow";

const users = [{ username: "Amy" }, { username: "John" }];

const messages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
  // set usestate for messages
  const [messages, setMessages] = useState([]);

  // function for sending message
  const onMessage = (sender, message) => {
    const newMessage = {
      username: sender,
      text: message,
    };
    setMessages(messages.concat([newMessage]));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map((user) => (
          <ChatWindow
            key={user.username}
            sender={user}
            messages={messages}
            onMessage={onMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
