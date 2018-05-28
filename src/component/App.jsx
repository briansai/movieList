class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movies: dummyData
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchMovie) {
    this.setState({movies: searchMovie})
  }

  

  render() {
    return(
      <div>
        <div className="header">
          Movie List
        </div>
        <div>
          <Bar handleSearch={this.handleSearch} />
        </div>
        <div className="movie-list">
          <MovieList movies={this.state.movies} />
        </div>
      </div>
    )
  }
}

window.App = App;