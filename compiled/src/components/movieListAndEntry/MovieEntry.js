"use strict";

var MovieEntry = function MovieEntry(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "movie-entry" },
      React.createElement(
        "div",
        null,
        props.movie.title,
        React.createElement(
          "button",
          { type: "button", className: "watched", onClick: function onClick() {
              return props.handleWatchedClick();
            } },
          props.toggleWatched
        )
      )
    )
  );
};

window.MovieEntry = MovieEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdEFuZEVudHJ5L01vdmllRW50cnkuanN4Il0sIm5hbWVzIjpbIk1vdmllRW50cnkiLCJwcm9wcyIsIm1vdmllIiwidGl0bGUiLCJoYW5kbGVXYXRjaGVkQ2xpY2siLCJ0b2dnbGVXYXRjaGVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxLQUFEO0FBQUEsU0FDZjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUE7QUFBTUEsY0FBTUMsS0FBTixDQUFZQyxLQUFsQjtBQUNFO0FBQUE7QUFBQSxZQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLFNBQWhDLEVBQTBDLFNBQVM7QUFBQSxxQkFBTUYsTUFBTUcsa0JBQU4sRUFBTjtBQUFBLGFBQW5EO0FBQ0dILGdCQUFNSTtBQURUO0FBREY7QUFERjtBQURGLEdBRGU7QUFBQSxDQUFqQjs7QUFZQUMsT0FBT04sVUFBUCxHQUFvQkEsVUFBcEIiLCJmaWxlIjoiTW92aWVFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUVudHJ5ID0gKHByb3BzKSA9PihcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWVudHJ5XCI+XG4gICAgICA8ZGl2Pntwcm9wcy5tb3ZpZS50aXRsZX1cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwid2F0Y2hlZFwiIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZVdhdGNoZWRDbGljaygpfT5cbiAgICAgICAgICB7cHJvcHMudG9nZ2xlV2F0Y2hlZH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cbndpbmRvdy5Nb3ZpZUVudHJ5ID0gTW92aWVFbnRyeTsiXX0=