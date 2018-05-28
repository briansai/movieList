"use strict";

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
      movies: dummyData
    };

    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.handleMovies = _this.handleMovies.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "handleSearch",
    value: function handleSearch(searchMovie) {
      this.setState({ movies: searchMovie });
    }
  }, {
    key: "handleMovies",
    value: function handleMovies(movies) {
      this.setState({ movies: movies });
      console.log(this.state.movies);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "header" },
          "Movie List"
        ),
        React.createElement(
          "div",
          { className: "bar" },
          React.createElement(Bar, { handleSearch: this.handleSearch })
        ),
        React.createElement(
          "div",
          { className: "movie-list" },
          React.createElement(MovieList, { movies: this.state.movies, handleMovies: this.handleMovies, handleNotWatched: this.handleNotWatched })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnQvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwibW92aWVzIiwiZHVtbXlEYXRhIiwiaGFuZGxlU2VhcmNoIiwiYmluZCIsImhhbmRsZU1vdmllcyIsInNlYXJjaE1vdmllIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTm90V2F0Y2hlZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwwR0FDVkEsS0FEVTs7QUFHaEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVFDO0FBREcsS0FBYjs7QUFJQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQVJnQjtBQVNqQjs7OztpQ0FFWUUsVyxFQUFhO0FBQ3hCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDTixRQUFRSyxXQUFULEVBQWQ7QUFDRDs7O2lDQUVZTCxNLEVBQVE7QUFDbkIsV0FBS00sUUFBTCxDQUFjLEVBQUNOLFFBQVFBLE1BQVQsRUFBZDtBQUNBTyxjQUFRQyxHQUFSLENBQVksS0FBS1QsS0FBTCxDQUFXQyxNQUF2QjtBQUNEOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUFBO0FBQUEsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNFLDhCQUFDLEdBQUQsSUFBSyxjQUFjLEtBQUtFLFlBQXhCO0FBREYsU0FKRjtBQU9FO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFLDhCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtILEtBQUwsQ0FBV0MsTUFBOUIsRUFBc0MsY0FBYyxLQUFLSSxZQUF6RCxFQUF1RSxrQkFBa0IsS0FBS0ssZ0JBQTlGO0FBREY7QUFQRixPQURGO0FBYUQ7Ozs7RUFwQ2VDLE1BQU1DLFM7O0FBdUN4QkMsT0FBT2YsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiBkdW1teURhdGFcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3ZpZXMgPSB0aGlzLmhhbmRsZU1vdmllcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKHNlYXJjaE1vdmllKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVzOiBzZWFyY2hNb3ZpZX0pXG4gIH1cblxuICBoYW5kbGVNb3ZpZXMobW92aWVzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVzOiBtb3ZpZXN9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVzKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgTW92aWUgTGlzdFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cbiAgICAgICAgICA8QmFyIGhhbmRsZVNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWxpc3RcIj5cbiAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IGhhbmRsZU1vdmllcz17dGhpcy5oYW5kbGVNb3ZpZXN9IGhhbmRsZU5vdFdhdGNoZWQ9e3RoaXMuaGFuZGxlTm90V2F0Y2hlZH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==