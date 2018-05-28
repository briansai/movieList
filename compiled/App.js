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
    return _this;
  }

  _createClass(App, [{
    key: "handleSearch",
    value: function handleSearch(searchMovie) {
      this.setState({ movies: searchMovie });
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
          null,
          React.createElement(Bar, { handleSearch: this.handleSearch })
        ),
        React.createElement(
          "div",
          { className: "movie-list" },
          React.createElement(MovieList, { movies: this.state.movies })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnQvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwibW92aWVzIiwiZHVtbXlEYXRhIiwiaGFuZGxlU2VhcmNoIiwiYmluZCIsInNlYXJjaE1vdmllIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsMEdBQ1ZBLEtBRFU7O0FBR2hCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRQztBQURHLEtBQWI7O0FBSUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQVBnQjtBQVFqQjs7OztpQ0FFWUMsVyxFQUFhO0FBQ3hCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDTCxRQUFRSSxXQUFULEVBQWQ7QUFDRDs7OzZCQUlRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFBQTtBQUFBLFNBREY7QUFJRTtBQUFBO0FBQUE7QUFDRSw4QkFBQyxHQUFELElBQUssY0FBYyxLQUFLRixZQUF4QjtBQURGLFNBSkY7QUFPRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRSw4QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLSCxLQUFMLENBQVdDLE1BQTlCO0FBREY7QUFQRixPQURGO0FBYUQ7Ozs7RUEvQmVNLE1BQU1DLFM7O0FBa0N4QkMsT0FBT1gsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiBkdW1teURhdGFcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2goc2VhcmNoTW92aWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHttb3ZpZXM6IHNlYXJjaE1vdmllfSlcbiAgfVxuXG4gIFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIE1vdmllIExpc3RcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJhciBoYW5kbGVTZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNofSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1saXN0XCI+XG4gICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==