class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      movies: Movies[0].provided,
      searchQuery: '',
      addMovieQuery: '',
      // movieWatched: false,
      // watch: 'Not Watched'
    }
  }

  
  searchHandler(queryString) {
    console.log(queryString.target.value);
    this.setState({searchQuery: queryString.target.value});
  }

  handleSearchClick() {
    //pass searchHandler into handleClick
    var currentThis = this; 
    var searchedMovie;

    for (var key in Movies[0]) {
      searchedMovie = this.state.Movies[0].filter(function(movie) {
        return currentThis.state.searchQuery === movie.title;
      });
    }
      
    // if there is a searched movie present
      //  set the state of the movie to the searched movie  
    if (searchedMovie.length !== 0) {
      this.setState({movies: searchedMovie});
    };
  }

  addMovieHandler(queryString) {
    console.log(queryString.target.value);
    this.setState({addMovieQuery: queryString.target.value})
  }

  handleAddClick() {
    //put the new movie into the not watched category
    Movies[0].notWatched.push({
      title: this.state.addMovieQuery,
      watched: false
    });
  }

  // handleWatchedClick() {
  //   this.setState({movieWatched: !this.state.movieWatched});
  //   if (this.state.movieWatched) {
  //     this.setState({watch: 'Watched'})
  //     console.log(this.state.watch)
  //   } else {
  //     this.setState({watch: 'Not Watched'})
  //   }
  // }


  render() {
    console.log(this.state.movies);
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
            <MovieList movies={this.state.movies} />
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;