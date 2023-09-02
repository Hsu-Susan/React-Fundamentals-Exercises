import PropTypes from "prop-types";
const User = ({ user, showGamesPlayed }) => {
  return (
    <li>
      <p>Username: {user.userName}</p>
      <p>
        Number of games played: {showGamesPlayed ? user.numOfGamesPlayed : "*"}
      </p>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  showGamesPlayed: PropTypes.bool.isRequired,
};

export default User;
