"use strict";

var MovieList = function MovieList(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "movies" },
      props.movies.map(function (movie, index) {
        return React.createElement(MovieEntry, { key: index, movie: movie });
      })
    )
  );
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvbW92aWVzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsImluZGV4Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDM0IsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFFBQWY7QUFDR0EsWUFBTUMsTUFBTixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLGVBQ2hCLG9CQUFDLFVBQUQsSUFBWSxLQUFLQSxLQUFqQixFQUF3QixPQUFPRCxLQUEvQixHQURnQjtBQUFBLE9BQWpCO0FBREg7QUFERixHQURGO0FBUUQsQ0FURDs7QUFXQUUsT0FBT04sU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVzXCI+XG4gICAgICAgIHtwcm9wcy5tb3ZpZXMubWFwKChtb3ZpZSwgaW5kZXgpID0+IFxuICAgICAgICAgIDxNb3ZpZUVudHJ5IGtleT17aW5kZXh9IG1vdmllPXttb3ZpZX0vPil9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0OyJdfQ==