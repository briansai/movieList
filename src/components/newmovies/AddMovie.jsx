var AddMovie = (props) => (
  <div>
    <input type="text" placeholder="Add a movie :]" onChange={(event) => props.addMovieHandler(event)}/>
    <div>
      <button type="button" onClick={() => props.handleAddClick()}>
        Add Movie
      </button>
    </div> 
  </div>
)

window.AddMovie = AddMovie;