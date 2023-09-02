import { useState } from "react";
import PropTypes from "prop-types";

const AddNewUser = ({ users, onAddUser }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [userExists, setUserExists] = useState(false);

  const checkUserExistsOrNot = (currentUserName) => {
    for (let user of users) {
      if (user.userName === currentUserName) {
        return true;
      }
    }
    return false;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const isUserExists = checkUserExistsOrNot(user.userName);
    if (!isUserExists) {
      onAddUser(user);
    }
    console.log(isUserExists);
    setUserExists(isUserExists);
    console.log(userExists);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const isDiabled = () => {
    const { firstName, lastName, userName } = user;
    return firstName === "" || lastName === "" || userName === "";
  };
  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={user.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={user.lastName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="userName"
            placeholder="Enter username"
            value={user.userName}
            onChange={handleInputChange}
          />
        </div>
        <button disabled={isDiabled()}>Add new user</button>
      </form>
      {userExists ? (
        <p className="error">You cannot add a user that already exists.</p>
      ) : (
        ""
      )}
    </div>
  );
};

AddNewUser.propTypes = {
  users: PropTypes.array.isRequired,
  onAddUser: PropTypes.func.isRequired,
};
export default AddNewUser;
