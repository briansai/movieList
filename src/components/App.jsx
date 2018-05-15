class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      movies: Movies
    }
  }

  // handleClick() {
  //   this.setState({clickedOn: !this.state.clickedOn}) 
  // }

  render() {
        console.log(Movies);
    return (
      <div>
        <div className="header">
          <Header className="header-description" />
        </div>
        <div className="search">
          <Search className="search-bar" />
        </div>
        <div className="center-component">
          <div className="movie-list">
            <MovieList movies={this.state.movies} /*handleClick={this.handleClick.bind(this)}*/ />
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;