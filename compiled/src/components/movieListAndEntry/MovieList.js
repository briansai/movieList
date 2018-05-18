'use strict';

var MovieList = function MovieList(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'movie-list' },
      props.movies.map(function (movie) {
        return React.createElement(MovieEntry, { movie: movie,
          handleWatchedClick: props.handleWatchView,
          toggleWatched: props.toggleWatch });
      })
    )
  );
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdEFuZEVudHJ5L01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsImhhbmRsZVdhdGNoVmlldyIsInRvZ2dsZVdhdGNoIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsU0FDZDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFZLFlBQWpCO0FBQ0dBLFlBQU1DLE1BQU4sQ0FBYUMsR0FBYixDQUFpQjtBQUFBLGVBQ2hCLG9CQUFDLFVBQUQsSUFBWSxPQUFPQyxLQUFuQjtBQUNBLDhCQUFvQkgsTUFBTUksZUFEMUI7QUFFQSx5QkFBZUosTUFBTUssV0FGckIsR0FEZ0I7QUFBQSxPQUFqQjtBQURIO0FBREYsR0FEYztBQUFBLENBQWhCOztBQVlBQyxPQUFPUCxTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJNb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWUgPSAnbW92aWUtbGlzdCc+XG4gICAgICB7cHJvcHMubW92aWVzLm1hcChtb3ZpZSA9PlxuICAgICAgICA8TW92aWVFbnRyeSBtb3ZpZT17bW92aWV9IFxuICAgICAgICBoYW5kbGVXYXRjaGVkQ2xpY2s9e3Byb3BzLmhhbmRsZVdhdGNoVmlld30gXG4gICAgICAgIHRvZ2dsZVdhdGNoZWQ9e3Byb3BzLnRvZ2dsZVdhdGNofS8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdDsiXX0=