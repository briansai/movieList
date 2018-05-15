"use strict";

var MovieEntry = function MovieEntry(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "movie-entry" /*onClick={props.handleClick}*/ },
      props.movie.title
    )
  );
};

window.MovieEntry = MovieEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllRW50cnkuanN4Il0sIm5hbWVzIjpbIk1vdmllRW50cnkiLCJwcm9wcyIsIm1vdmllIiwidGl0bGUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsYUFBZixDQUE2QiwrQkFBN0I7QUFBOERBLFlBQU1DLEtBQU4sQ0FBWUM7QUFBMUU7QUFERixHQURlO0FBQUEsQ0FBakI7O0FBTUFDLE9BQU9KLFVBQVAsR0FBb0JBLFVBQXBCIiwiZmlsZSI6Ik1vdmllRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTW92aWVFbnRyeSA9IChwcm9wcykgPT4oXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1lbnRyeVwiIC8qb25DbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9Ki8+e3Byb3BzLm1vdmllLnRpdGxlfTwvZGl2PlxuICA8L2Rpdj5cbilcblxud2luZG93Lk1vdmllRW50cnkgPSBNb3ZpZUVudHJ5OyJdfQ==