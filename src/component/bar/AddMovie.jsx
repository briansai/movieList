class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addText: ''
    }

    this.handleAddText = this.handleAddText.bind(this);
  }
  
  handleAddText(event) {
    this.setState({addText: event.target.value});
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <span>
          <input type="text" placeholder="Add Movie Name" className="text-bar" onChange={(e) => this.handleAddText(e)}/>
        </span>
        <span>
          <button type="button" onClick={() => this.props.handleAddClick(this.state.addText)}>
            Add Movie
          </button>
        </span>
      </div>
    )    
  }
}

window.AddMovie = AddMovie;  