class MovieList extends React.Component {
  constructor(props) {
    super(props);
  
    // this.handleHomeClick = this.handleHomeClick.bind(this);
    // this.handleWatchedClick = this.handleWatchedClick.bind(this);
    // this.handleNotWatchedClick = this.handleNotWatchedClick.bind(this);
  }
  
  handleHomeClick() {
    this.props.handleMovies(dummyData)
  }

  handleWatchedClick() {
    const movies = [];

    for (var x = 0; x < dummyData.length; x++) {
      if (dummyData[x].watched === true) {
        movies.push(dummyData[x]);
      }
    }

    this.props.handleMovies(movies);
  }

  handleNotWatchedClick() {
    const movies = [];

    for (var x = 0; x < dummyData.length; x++) {
      if (dummyData[x].watched === false) {
        movies.push(dummyData[x]);
      }
    }

    this.props.handleMovies(movies);
  }


  render() {
    return (
      <div>
        <div>
          <span className="home">
            <button type="button" onClick={() => this.handleHomeClick()}>
              Home
            </button>
          </span>
          <span className="watched">
            <button type="button" onClick={() => this.handleWatchedClick()}>
              Watched
            </button>
          </span>
          <span className="Not Watched" onClick={() => this.handleNotWatchedClick()}>
            <button type="button">
              Not Watched
            </button>
          </span>
        </div>
        <div className="movies">
          {this.props.movies.map((movie, index) => 
            <MovieEntry key={index} movie={movie}/>)}
        </div>
      </div>
    )
  }
}

window.MovieList = MovieList;