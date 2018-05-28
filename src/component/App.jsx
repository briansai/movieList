class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movies: dummyData
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleMovies = this.handleMovies.bind(this);
  }

  handleSearch(searchMovie) {
    this.setState({movies: searchMovie})
  }

  handleMovies(movies) {
    this.setState({movies: movies})
    console.log(this.state.movies);
  }


  render() {
    return(
      <div>
        <div className="header">
          Movie List
        </div>
        <div className="bar">
          <Bar handleSearch={this.handleSearch} />
        </div>
        <div className="movie-list">
          <MovieList movies={this.state.movies} handleMovies={this.handleMovies} handleNotWatched={this.handleNotWatched}/>
        </div>
      </div>
    )
  }
}

window.App = App;