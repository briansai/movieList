const MovieList = (props) => {
  return (
    <div>
      <div className="movies">
        {props.movies.map((movie, index) => 
          <MovieEntry key={index} movie={movie}/>)}
      </div>
    </div>
  )
}

window.MovieList = MovieList;