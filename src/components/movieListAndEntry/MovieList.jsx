class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // watchedTab: 'Watched',
      watch: this.props.movies 
    }
  }

  defaultTab() {
    this.setState({watch: Movies[0].provided})
  }

  handleWatchedTab() {
    //filter
    //if movie watched, display only movies watched
    //else display movie only movies unwatched

    // var filterWatched = this.props.movies.filter(function(movie) {
    //   return movie.watched;
    // })

    // this.setState({watch: filterWatched});

  }

  handleNotWatchedTab() {
    //filter
    //if movie watched, display only movies watched
    //else display movie only movies unwatched    
    
    // var filterNotWatched = this.props.movies.filter(function(movie) {
    //   return !movie.watched;
    // })

    // this.setState({watch:filterNotWatched});
  }
  

  render() {
    return (
      <div>
        <div className="tabs">
          <span className="butt1">
            <button type="button" onClick={() => this.defaultTab()}>
              Provided Movies
            </button>
          </span>
          <span className="butt2">
            <button type="button" onClick={() => this.handleWatchedTab()}>
              Watched
            </button>
          </span>
          <span className="butt3">
            <button type = "button" onClick={() => this.handleNotWatchedTab()}>
              Not Watched
            </button>
          </span>
        </div>
          <div className='movie-list' >
            {this.state.watch.map(movie =>
              <MovieEntry movie={movie} />
            )}
          </div>
      </div>
    )
  }
}

 // <span className="butt2">
 //            <button type="button" onClick={() => this.handleWatchedTab()}>
 //              Watched
 //            </button>
 //          </span>
 //          <span className="butt3">
 //            <button type = "button" onClick={() => this.handleNotWatchedTab()}>
 //              Not Watched
 //            </button>
 //          </span>







// var MovieList = (props) => (
//   <div>
//     <div className = 'movie-list'>
//       {props.movies.map(movie =>
//         <MovieEntry movie={movie} 
//         handleWatchedClick={props.handleWatchView} 
//         toggleWatched={props.toggleWatch}/>
//       )}
//     </div>
//   </div>
// )

window.MovieList = MovieList;