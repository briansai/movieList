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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbW92aWVMaXN0QW5kRW50cnkvTW92aWVFbnRyeS5qc3giXSwibmFtZXMiOlsiTW92aWVFbnRyeSIsInByb3BzIiwibW92aWUiLCJ0aXRsZSIsImhhbmRsZVdhdGNoZWRDbGljayIsInRvZ2dsZVdhdGNoZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFNQSxjQUFNQyxLQUFOLENBQVlDLEtBQWxCO0FBQ0U7QUFBQTtBQUFBLFlBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsU0FBaEMsRUFBMEMsU0FBUztBQUFBLHFCQUFNRixNQUFNRyxrQkFBTixFQUFOO0FBQUEsYUFBbkQ7QUFDR0gsZ0JBQU1JO0FBRFQ7QUFERjtBQURGO0FBREYsR0FEZTtBQUFBLENBQWpCOztBQVlBQyxPQUFPTixVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJNb3ZpZUVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1vdmllRW50cnkgPSAocHJvcHMpID0+KFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtZW50cnlcIj5cbiAgICAgIDxkaXY+e3Byb3BzLm1vdmllLnRpdGxlfVxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ3YXRjaGVkXCIgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlV2F0Y2hlZENsaWNrKCl9PlxuICAgICAgICAgIHtwcm9wcy50b2dnbGVXYXRjaGVkfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxud2luZG93Lk1vdmllRW50cnkgPSBNb3ZpZUVudHJ5OyJdfQ==