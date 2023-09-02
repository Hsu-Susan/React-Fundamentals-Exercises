import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import UserList from "./components/UserList";
import AddNewUser from "./components/AddNewUser";

const App = () => {
  const [users, setUsers] = useState([]);

  const createNewUser = (user) => {
    user.numOfGamesPlayed = 0;
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <AddNewUser users={users} onAddUser={createNewUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
