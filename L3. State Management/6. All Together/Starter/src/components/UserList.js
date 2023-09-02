import PropTypes from "prop-types";
import User from "./User";
import { useState } from "react";

const UserList = ({ users }) => {
  const [showGamesPlayed, setShowGamesPlayed] = useState(true);

  const toggleGamesPlayedCard = () => {
    setShowGamesPlayed(!showGamesPlayed);
  };

  const gamePlayedToggleBtn = (
    <div>
      <button className="smallButton" onClick={toggleGamesPlayedCard}>
        {showGamesPlayed ? "Hide " : "Show "}
        The Number of Games Played
      </button>
    </div>
  );
  return (
    <div>
      <h1> User List</h1>
      {users && users.length > 0 ? gamePlayedToggleBtn : ""}
      <ol>
        {users.map((user) => (
          <User
            key={user.userName}
            user={user}
            showGamesPlayed={showGamesPlayed}
          />
        ))}
      </ol>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
