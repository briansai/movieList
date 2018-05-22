'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      movies: Movies[0].provided,
      searchQuery: '',
      addMovieQuery: ''
      // movieWatched: false,
      // watch: 'Not Watched'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'searchHandler',
    value: function searchHandler(queryString) {
      console.log(queryString.target.value);
      this.setState({ searchQuery: queryString.target.value });
    }
  }, {
    key: 'handleSearchClick',
    value: function handleSearchClick() {
      //pass searchHandler into handleClick
      var currentThis = this;
      var searchedMovie;

      for (var key in Movies[0]) {
        searchedMovie = this.state.Movies[0].filter(function (movie) {
          return currentThis.state.searchQuery === movie.title;
        });
      }

      // if there is a searched movie present
      //  set the state of the movie to the searched movie  
      if (searchedMovie.length !== 0) {
        this.setState({ movies: searchedMovie });
      };
    }
  }, {
    key: 'addMovieHandler',
    value: function addMovieHandler(queryString) {
      console.log(queryString.target.value);
      this.setState({ addMovieQuery: queryString.target.value });
    }
  }, {
    key: 'handleAddClick',
    value: function handleAddClick() {
      //put the new movie into the not watched category
      Movies[0].notWatched.push({
        title: this.state.addMovieQuery,
        watched: false
      });
    }

    // handleWatchedClick() {
    //   this.setState({movieWatched: !this.state.movieWatched});
    //   if (this.state.movieWatched) {
    //     this.setState({watch: 'Watched'})
    //     console.log(this.state.watch)
    //   } else {
    //     this.setState({watch: 'Not Watched'})
    //   }
    // }


  }, {
    key: 'render',
    value: function render() {
      console.log(this.state.movies);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'top' },
          React.createElement(Header, { className: 'header-description' })
        ),
        React.createElement(
          'div',
          null,
          React.createElement(AddMovie, { className: 'add-movie', handleAddClick: this.handleAddClick.bind(this), addMovieHandler: this.addMovieHandler.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'search' },
          React.createElement(Search, { className: 'search-bar', handleSearchClick: this.handleSearchClick.bind(this), searchHandler: this.searchHandler.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'center-component' },
          React.createElement(
            'div',
            { className: 'movie-list' },
            React.createElement(MovieList, { movies: this.state.movies })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwibW92aWVzIiwiTW92aWVzIiwicHJvdmlkZWQiLCJzZWFyY2hRdWVyeSIsImFkZE1vdmllUXVlcnkiLCJxdWVyeVN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiY3VycmVudFRoaXMiLCJzZWFyY2hlZE1vdmllIiwia2V5IiwiZmlsdGVyIiwibW92aWUiLCJ0aXRsZSIsImxlbmd0aCIsIm5vdFdhdGNoZWQiLCJwdXNoIiwid2F0Y2hlZCIsImhhbmRsZUFkZENsaWNrIiwiYmluZCIsImFkZE1vdmllSGFuZGxlciIsImhhbmRsZVNlYXJjaENsaWNrIiwic2VhcmNoSGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVFDLE9BQU8sQ0FBUCxFQUFVQyxRQURQO0FBRVhDLG1CQUFhLEVBRkY7QUFHWEMscUJBQWU7QUFDZjtBQUNBO0FBTFcsS0FBYjtBQUhpQjtBQVVsQjs7OztrQ0FHYUMsVyxFQUFhO0FBQ3pCQyxjQUFRQyxHQUFSLENBQVlGLFlBQVlHLE1BQVosQ0FBbUJDLEtBQS9CO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUNQLGFBQWFFLFlBQVlHLE1BQVosQ0FBbUJDLEtBQWpDLEVBQWQ7QUFDRDs7O3dDQUVtQjtBQUNsQjtBQUNBLFVBQUlFLGNBQWMsSUFBbEI7QUFDQSxVQUFJQyxhQUFKOztBQUVBLFdBQUssSUFBSUMsR0FBVCxJQUFnQlosT0FBTyxDQUFQLENBQWhCLEVBQTJCO0FBQ3pCVyx3QkFBZ0IsS0FBS2IsS0FBTCxDQUFXRSxNQUFYLENBQWtCLENBQWxCLEVBQXFCYSxNQUFyQixDQUE0QixVQUFTQyxLQUFULEVBQWdCO0FBQzFELGlCQUFPSixZQUFZWixLQUFaLENBQWtCSSxXQUFsQixLQUFrQ1ksTUFBTUMsS0FBL0M7QUFDRCxTQUZlLENBQWhCO0FBR0Q7O0FBRUQ7QUFDRTtBQUNGLFVBQUlKLGNBQWNLLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsYUFBS1AsUUFBTCxDQUFjLEVBQUNWLFFBQVFZLGFBQVQsRUFBZDtBQUNEO0FBQ0Y7OztvQ0FFZVAsVyxFQUFhO0FBQzNCQyxjQUFRQyxHQUFSLENBQVlGLFlBQVlHLE1BQVosQ0FBbUJDLEtBQS9CO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUNOLGVBQWVDLFlBQVlHLE1BQVosQ0FBbUJDLEtBQW5DLEVBQWQ7QUFDRDs7O3FDQUVnQjtBQUNmO0FBQ0FSLGFBQU8sQ0FBUCxFQUFVaUIsVUFBVixDQUFxQkMsSUFBckIsQ0FBMEI7QUFDeEJILGVBQU8sS0FBS2pCLEtBQUwsQ0FBV0ssYUFETTtBQUV4QmdCLGlCQUFTO0FBRmUsT0FBMUI7QUFJRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzZCQUdTO0FBQ1BkLGNBQVFDLEdBQVIsQ0FBWSxLQUFLUixLQUFMLENBQVdDLE1BQXZCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRSw4QkFBQyxNQUFELElBQVEsV0FBVSxvQkFBbEI7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsUUFBRCxJQUFVLFdBQVUsV0FBcEIsRUFBZ0MsZ0JBQWdCLEtBQUtxQixjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUFoRCxFQUFnRixpQkFBaUIsS0FBS0MsZUFBTCxDQUFxQkQsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBakc7QUFERixTQUpGO0FBT0U7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0UsOEJBQUMsTUFBRCxJQUFRLFdBQVUsWUFBbEIsRUFBK0IsbUJBQW1CLEtBQUtFLGlCQUFMLENBQXVCRixJQUF2QixDQUE0QixJQUE1QixDQUFsRCxFQUFxRixlQUFlLEtBQUtHLGFBQUwsQ0FBbUJILElBQW5CLENBQXdCLElBQXhCLENBQXBHO0FBREYsU0FQRjtBQVVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRSxnQ0FBQyxTQUFELElBQVcsUUFBUSxLQUFLdkIsS0FBTCxDQUFXQyxNQUE5QjtBQURGO0FBREY7QUFWRixPQURGO0FBa0JEOzs7O0VBakZlMEIsTUFBTUMsUzs7QUFvRnhCQyxPQUFPL0IsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IE1vdmllc1swXS5wcm92aWRlZCxcbiAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgIGFkZE1vdmllUXVlcnk6ICcnLFxuICAgICAgLy8gbW92aWVXYXRjaGVkOiBmYWxzZSxcbiAgICAgIC8vIHdhdGNoOiAnTm90IFdhdGNoZWQnXG4gICAgfVxuICB9XG5cbiAgXG4gIHNlYXJjaEhhbmRsZXIocXVlcnlTdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhxdWVyeVN0cmluZy50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFF1ZXJ5OiBxdWVyeVN0cmluZy50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaENsaWNrKCkge1xuICAgIC8vcGFzcyBzZWFyY2hIYW5kbGVyIGludG8gaGFuZGxlQ2xpY2tcbiAgICB2YXIgY3VycmVudFRoaXMgPSB0aGlzOyBcbiAgICB2YXIgc2VhcmNoZWRNb3ZpZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBNb3ZpZXNbMF0pIHtcbiAgICAgIHNlYXJjaGVkTW92aWUgPSB0aGlzLnN0YXRlLk1vdmllc1swXS5maWx0ZXIoZnVuY3Rpb24obW92aWUpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUaGlzLnN0YXRlLnNlYXJjaFF1ZXJ5ID09PSBtb3ZpZS50aXRsZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAgIFxuICAgIC8vIGlmIHRoZXJlIGlzIGEgc2VhcmNoZWQgbW92aWUgcHJlc2VudFxuICAgICAgLy8gIHNldCB0aGUgc3RhdGUgb2YgdGhlIG1vdmllIHRvIHRoZSBzZWFyY2hlZCBtb3ZpZSAgXG4gICAgaWYgKHNlYXJjaGVkTW92aWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHttb3ZpZXM6IHNlYXJjaGVkTW92aWV9KTtcbiAgICB9O1xuICB9XG5cbiAgYWRkTW92aWVIYW5kbGVyKHF1ZXJ5U3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2cocXVlcnlTdHJpbmcudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHthZGRNb3ZpZVF1ZXJ5OiBxdWVyeVN0cmluZy50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgaGFuZGxlQWRkQ2xpY2soKSB7XG4gICAgLy9wdXQgdGhlIG5ldyBtb3ZpZSBpbnRvIHRoZSBub3Qgd2F0Y2hlZCBjYXRlZ29yeVxuICAgIE1vdmllc1swXS5ub3RXYXRjaGVkLnB1c2goe1xuICAgICAgdGl0bGU6IHRoaXMuc3RhdGUuYWRkTW92aWVRdWVyeSxcbiAgICAgIHdhdGNoZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICAvLyBoYW5kbGVXYXRjaGVkQ2xpY2soKSB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVXYXRjaGVkOiAhdGhpcy5zdGF0ZS5tb3ZpZVdhdGNoZWR9KTtcbiAgLy8gICBpZiAodGhpcy5zdGF0ZS5tb3ZpZVdhdGNoZWQpIHtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe3dhdGNoOiAnV2F0Y2hlZCd9KVxuICAvLyAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS53YXRjaClcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7d2F0Y2g6ICdOb3QgV2F0Y2hlZCd9KVxuICAvLyAgIH1cbiAgLy8gfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cbiAgICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlci1kZXNjcmlwdGlvblwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFkZE1vdmllIGNsYXNzTmFtZT1cImFkZC1tb3ZpZVwiIGhhbmRsZUFkZENsaWNrPXt0aGlzLmhhbmRsZUFkZENsaWNrLmJpbmQodGhpcyl9IGFkZE1vdmllSGFuZGxlcj17dGhpcy5hZGRNb3ZpZUhhbmRsZXIuYmluZCh0aGlzKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgICA8U2VhcmNoIGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIiBoYW5kbGVTZWFyY2hDbGljaz17dGhpcy5oYW5kbGVTZWFyY2hDbGljay5iaW5kKHRoaXMpfSBzZWFyY2hIYW5kbGVyPXt0aGlzLnNlYXJjaEhhbmRsZXIuYmluZCh0aGlzKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItY29tcG9uZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1saXN0XCI+XG4gICAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==