"use strict";

var AddMovie = function AddMovie(props) {
  return React.createElement(
    "div",
    null,
    React.createElement("input", { type: "text", placeholder: "Add a movie :]", onChange: function onChange(event) {
        return props.addMovieHandler(event);
      } }),
    React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { type: "button", onClick: function onClick() {
            return props.handleAddClick();
          } },
        "Add Movie"
      )
    )
  );
};

window.AddMovie = AddMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25ld21vdmllcy9BZGRNb3ZpZS5qc3giXSwibmFtZXMiOlsiQWRkTW92aWUiLCJwcm9wcyIsImV2ZW50IiwiYWRkTW92aWVIYW5kbGVyIiwiaGFuZGxlQWRkQ2xpY2siLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUNFLG1DQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLGdCQUEvQixFQUFnRCxVQUFVLGtCQUFDQyxLQUFEO0FBQUEsZUFBV0QsTUFBTUUsZUFBTixDQUFzQkQsS0FBdEIsQ0FBWDtBQUFBLE9BQTFELEdBREY7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBUSxNQUFLLFFBQWIsRUFBc0IsU0FBUztBQUFBLG1CQUFNRCxNQUFNRyxjQUFOLEVBQU47QUFBQSxXQUEvQjtBQUFBO0FBQUE7QUFERjtBQUZGLEdBRGE7QUFBQSxDQUFmOztBQVdBQyxPQUFPTCxRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJBZGRNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBZGRNb3ZpZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgbW92aWUgOl1cIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBwcm9wcy5hZGRNb3ZpZUhhbmRsZXIoZXZlbnQpfS8+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUFkZENsaWNrKCl9PlxuICAgICAgICBBZGQgTW92aWVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PiBcbiAgPC9kaXY+XG4pXG5cbndpbmRvdy5BZGRNb3ZpZSA9IEFkZE1vdmllOyJdfQ==