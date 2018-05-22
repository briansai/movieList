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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbmV3bW92aWVzL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsInByb3BzIiwiZXZlbnQiLCJhZGRNb3ZpZUhhbmRsZXIiLCJoYW5kbGVBZGRDbGljayIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0UsbUNBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksZ0JBQS9CLEVBQWdELFVBQVUsa0JBQUNDLEtBQUQ7QUFBQSxlQUFXRCxNQUFNRSxlQUFOLENBQXNCRCxLQUF0QixDQUFYO0FBQUEsT0FBMUQsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFRLE1BQUssUUFBYixFQUFzQixTQUFTO0FBQUEsbUJBQU1ELE1BQU1HLGNBQU4sRUFBTjtBQUFBLFdBQS9CO0FBQUE7QUFBQTtBQURGO0FBRkYsR0FEYTtBQUFBLENBQWY7O0FBV0FDLE9BQU9MLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6IkFkZE1vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFkZE1vdmllID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZGQgYSBtb3ZpZSA6XVwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLmFkZE1vdmllSGFuZGxlcihldmVudCl9Lz5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQWRkQ2xpY2soKX0+XG4gICAgICAgIEFkZCBNb3ZpZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+IFxuICA8L2Rpdj5cbilcblxud2luZG93LkFkZE1vdmllID0gQWRkTW92aWU7Il19