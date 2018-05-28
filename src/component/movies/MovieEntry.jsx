const MovieEntry = (props) => {
  return( 
    <div className="movie-entry">
      {props.movie.title}
    </div>
  )
}

window.MovieEntry = MovieEntry;