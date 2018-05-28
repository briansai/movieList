class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    }
    this.handleSearchText = this.handleSearchText.bind(this);
  }

  handleSearchText(event) {
    this.setState({searchText: event.target.value})
    console.log(event.target.value)
  }

  render() {
    return (
      <div>
        <span>
          <input type="text" placeholder="Search Movie Name" className="text-bar" onChange={(e) => this.handleSearchText(e)}/>
        </span>
        <span>
          <button type="button" onClick={() => this.props.handleSearchClick(this.state.searchText)}>
            Search
          </button>
        </span>
      </div>
    )
  }
}

window.Search = Search;