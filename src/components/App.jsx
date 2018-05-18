class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      movies: Movies[0].provided,
      searchQuery: '',
      addMovieQuery: '',
      movieWatched: false,
      watch: 'Not Watched'
    }
  }

  
  searchHandler(queryString) {
    console.log(queryString.target.value);
    this.setState({searchQuery: queryString.target.value});
  }

  handleSearchClick() {
    //pass searchHandler into handleClick
    var currentThis = this; 
    var searchedMovie = this.state.movies.filter(function(movie) {
      return currentThis.state.searchQuery === movie.title
    });
      
    if (searchedMovie.length !== 0) {
      this.setState({movies: searchedMovie})
    } else if (this.state.searchQuery.length >= 0) {
      if (Movies[0].added.length !== 0) {
        this.setState({movies: Movies[0].added})
      } else {
        this.setState({movies: Movies[0].provided})
      }
    }
  }

  addMovieHandler(queryString) {
    console.log(queryString.target.value);
    this.setState({addMovieQuery: queryString.target.value})
  }

  handleAddClick() {
    Movies[0].added.push({title: this.state.addMovieQuery});
    this.setState({movies: Movies[0].added})
  }

  handleWatchedClick() {
    this.setState({movieWatched: !this.state.movieWatched});
    if (this.state.movieWatched) {
      this.setState({watch: 'Watched'})
      console.log(this.state.watch)
    } else {
      this.setState({watch: 'Not Watched'})
    }
  }


  render() {
    return (
      <div>
        <div className="top">
          <Header className="header-description"/>
        </div>
        <div>
          <AddMovie className="add-movie" handleAddClick={this.handleAddClick.bind(this)} addMovieHandler={this.addMovieHandler.bind(this)}/>
        </div>
        <div className="search">
          <Search className="search-bar" handleSearchClick={this.handleSearchClick.bind(this)} searchHandler={this.searchHandler.bind(this)}/>
        </div>
        <div className="center-component">
          <div className="movie-list">
            <MovieList movies={this.state.movies} 
            handleWatchView={this.handleWatchedClick.bind(this)}
            toggleWatch={this.state.watch}/>
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;