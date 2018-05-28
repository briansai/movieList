class Bar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchClick = this.handleSearchClick.bind(this);   
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleSearchClick(text) {
    const searchMovie = dummyData.filter(function(movie) {
      return movie.title === text;
    })
    console.log(searchMovie);
    this.props.handleSearch(searchMovie);
  }

  handleAddClick(text) {
    for (var x = 0; x < dummyData.length; x++) {
      if (dummyData[x].title === text) {
        dummyData[x].added = true;
      }
    }
    
    console.log(text);
    console.log(dummyData);
  }
 
  render() {
    return(
      <div>
        <div className="search-bar">
          <Search handleSearchClick={this.handleSearchClick}/>
        </div>
        <div className="add-movie">
          <AddMovie handleAddClick={this.handleAddClick}/>
        </div>
      </div>
    )
  }
}

window.Bar = Bar;