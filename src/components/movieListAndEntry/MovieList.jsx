var MovieList = (props) => (
  <div>
    <div className = 'movie-list'>
      {props.movies.map(movie =>
        <MovieEntry movie={movie} 
        handleWatchedClick={props.handleWatchView} 
        toggleWatched={props.toggleWatch}/>
      )}
    </div>
  </div>
)

window.MovieList = MovieList;