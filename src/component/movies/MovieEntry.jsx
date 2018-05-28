class MovieEntry extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      watched: 'Not Watched'
    }

    this.handleWatched = this.handleWatched.bind(this);
  }

  handleWatched() {
    if (this.state.watched === 'Not Watched') {
      this.setState({watched: 'Watched'});
    } else {
      this.setState({watched: 'Not Watched'});
    }
  
    for (var x = 0; x < dummyData.length; x++) {
      if (dummyData[x].title === this.props.movie.title) {
        dummyData[x].watched = !dummyData[x].watched;
      }
    }

    console.log(dummyData)
  }

  render() {


    return( 
      <div className="movie-entry">
        <span className="movie-title">
          {this.props.movie.title}
        </span>
        <span className="watched-button">
          <button type="button" onClick={() => this.handleWatched()}>
            {this.state.watched}
          </button>
        </span>
      </div>
    )
  }
}

window.MovieEntry = MovieEntry;