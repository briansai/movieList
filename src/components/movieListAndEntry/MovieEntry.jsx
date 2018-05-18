var MovieEntry = (props) =>(
  <div>
    <div className="movie-entry">
      <div>{props.movie.title}
        <button type="button" className="watched" onClick={() => props.handleWatchedClick()}>
          {props.toggleWatched}
        </button>
      </div>
    </div>
  </div>
)

window.MovieEntry = MovieEntry;