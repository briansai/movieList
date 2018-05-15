var MovieEntry = (props) =>(
  <div>
    <div className="movie-entry" /*onClick={props.handleClick}*/>{props.movie.title}</div>
  </div>
)

window.MovieEntry = MovieEntry;