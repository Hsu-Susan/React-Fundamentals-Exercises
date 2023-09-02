import MovieListItem from "./MovieListItem";

const MovieList = ({ movies, userListByMovie, users }) => {
  const movieListItems = Object.keys(movies).map((id) => (
    <MovieListItem
      key={id}
      users={users}
      usersByMovie={userListByMovie[id]}
      movie={movies[id]}
    />
  ));
  return <ul>{movieListItems}</ul>;
};

export default MovieList;
