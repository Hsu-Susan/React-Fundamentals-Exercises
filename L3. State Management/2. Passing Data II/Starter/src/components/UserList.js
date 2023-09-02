const UserList = ({ users, usersWhoLikedMovie }) => {
  if (!usersWhoLikedMovie || usersWhoLikedMovie.length == 0) {
    return <p>😢 None of the current users liked this movie.</p>;
  }
  const userListItems = usersWhoLikedMovie.map((userID) => (
    <li key={userID}>
      <p>{users[userID].name}</p>
    </li>
  ));

  return <ul>{userListItems}</ul>;
};
export default UserList;
