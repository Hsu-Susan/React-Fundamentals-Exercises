import UserList from "./UserList";

const MovieListItem = ({ users, usersByMovie, movie }) => {
  return (
    <li key={movie.id}>
      <p>{movie.name} liked by</p>
      <UserList users={users} usersWhoLikedMovie={usersByMovie} />
    </li>
  );
};

export default MovieListItem;
