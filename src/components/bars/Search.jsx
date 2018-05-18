var Search = (props) => (
  <div>   
  <input type="search" text="text/plain" placeholder="Search" onChange={(event) => props.searchHandler(event)} />
    <div>
    <button type="button" onClick={() => props.handleSearchClick()}>
      Search
    </button>
    </div>
  </div>
);

window.Search = Search;