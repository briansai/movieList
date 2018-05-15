var MovieList = (props) => (
  <div>
    <div className = 'movie-list'>
      {props.movies.map(movie =>
        <MovieEntry movie={movie} /*handleClick = {props.handleClick}*/ />
      )}
    </div>
  </div>
)

window.MovieList = MovieList;