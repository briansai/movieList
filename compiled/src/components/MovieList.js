'use strict';

var MovieList = function MovieList(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'movie-list' },
      props.movies.map(function (movie) {
        return React.createElement(MovieEntry, { movie: movie /*handleClick = {props.handleClick}*/ });
      })
    )
  );
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Q7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBWSxZQUFqQjtBQUNHQSxZQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUI7QUFBQSxlQUNoQixvQkFBQyxVQUFELElBQVksT0FBT0MsS0FBbkIsQ0FBMEIscUNBQTFCLEdBRGdCO0FBQUEsT0FBakI7QUFESDtBQURGLEdBRGM7QUFBQSxDQUFoQjs7QUFVQUMsT0FBT0wsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1vdmllTGlzdCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lID0gJ21vdmllLWxpc3QnPlxuICAgICAge3Byb3BzLm1vdmllcy5tYXAobW92aWUgPT5cbiAgICAgICAgPE1vdmllRW50cnkgbW92aWU9e21vdmllfSAvKmhhbmRsZUNsaWNrID0ge3Byb3BzLmhhbmRsZUNsaWNrfSovIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdDsiXX0=