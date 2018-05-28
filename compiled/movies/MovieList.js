"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieList = function (_React$Component) {
  _inherits(MovieList, _React$Component);

  function MovieList(props) {
    _classCallCheck(this, MovieList);

    return _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).call(this, props));

    // this.handleHomeClick = this.handleHomeClick.bind(this);
    // this.handleWatchedClick = this.handleWatchedClick.bind(this);
    // this.handleNotWatchedClick = this.handleNotWatchedClick.bind(this);
  }

  _createClass(MovieList, [{
    key: "handleHomeClick",
    value: function handleHomeClick() {
      this.props.handleMovies(dummyData);
    }
  }, {
    key: "handleWatchedClick",
    value: function handleWatchedClick() {
      var movies = [];

      for (var x = 0; x < dummyData.length; x++) {
        if (dummyData[x].watched === true) {
          movies.push(dummyData[x]);
        }
      }

      this.props.handleMovies(movies);
    }
  }, {
    key: "handleNotWatchedClick",
    value: function handleNotWatchedClick() {
      var movies = [];

      for (var x = 0; x < dummyData.length; x++) {
        if (dummyData[x].watched === false) {
          movies.push(dummyData[x]);
        }
      }

      this.props.handleMovies(movies);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            "span",
            { className: "home" },
            React.createElement(
              "button",
              { type: "button", onClick: function onClick() {
                  return _this2.handleHomeClick();
                } },
              "Home"
            )
          ),
          React.createElement(
            "span",
            { className: "watched" },
            React.createElement(
              "button",
              { type: "button", onClick: function onClick() {
                  return _this2.handleWatchedClick();
                } },
              "Watched"
            )
          ),
          React.createElement(
            "span",
            { className: "Not Watched", onClick: function onClick() {
                return _this2.handleNotWatchedClick();
              } },
            React.createElement(
              "button",
              { type: "button" },
              "Not Watched"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "movies" },
          this.props.movies.map(function (movie, index) {
            return React.createElement(MovieEntry, { key: index, movie: movie });
          })
        )
      );
    }
  }]);

  return MovieList;
}(React.Component);

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvbW92aWVzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJoYW5kbGVNb3ZpZXMiLCJkdW1teURhdGEiLCJtb3ZpZXMiLCJ4IiwibGVuZ3RoIiwid2F0Y2hlZCIsInB1c2giLCJoYW5kbGVIb21lQ2xpY2siLCJoYW5kbGVXYXRjaGVkQ2xpY2siLCJoYW5kbGVOb3RXYXRjaGVkQ2xpY2siLCJtYXAiLCJtb3ZpZSIsImluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpSEFDWEEsS0FEVzs7QUFHakI7QUFDQTtBQUNBO0FBQ0Q7Ozs7c0NBRWlCO0FBQ2hCLFdBQUtBLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkMsU0FBeEI7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNQyxTQUFTLEVBQWY7O0FBRUEsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLFVBQVVHLE1BQTlCLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6QyxZQUFJRixVQUFVRSxDQUFWLEVBQWFFLE9BQWIsS0FBeUIsSUFBN0IsRUFBbUM7QUFDakNILGlCQUFPSSxJQUFQLENBQVlMLFVBQVVFLENBQVYsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsV0FBS0osS0FBTCxDQUFXQyxZQUFYLENBQXdCRSxNQUF4QjtBQUNEOzs7NENBRXVCO0FBQ3RCLFVBQU1BLFNBQVMsRUFBZjs7QUFFQSxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsVUFBVUcsTUFBOUIsRUFBc0NELEdBQXRDLEVBQTJDO0FBQ3pDLFlBQUlGLFVBQVVFLENBQVYsRUFBYUUsT0FBYixLQUF5QixLQUE3QixFQUFvQztBQUNsQ0gsaUJBQU9JLElBQVAsQ0FBWUwsVUFBVUUsQ0FBVixDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLSixLQUFMLENBQVdDLFlBQVgsQ0FBd0JFLE1BQXhCO0FBQ0Q7Ozs2QkFHUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxNQUFoQjtBQUNFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLFFBQWIsRUFBc0IsU0FBUztBQUFBLHlCQUFNLE9BQUtLLGVBQUwsRUFBTjtBQUFBLGlCQUEvQjtBQUFBO0FBQUE7QUFERixXQURGO0FBTUU7QUFBQTtBQUFBLGNBQU0sV0FBVSxTQUFoQjtBQUNFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLFFBQWIsRUFBc0IsU0FBUztBQUFBLHlCQUFNLE9BQUtDLGtCQUFMLEVBQU47QUFBQSxpQkFBL0I7QUFBQTtBQUFBO0FBREYsV0FORjtBQVdFO0FBQUE7QUFBQSxjQUFNLFdBQVUsYUFBaEIsRUFBOEIsU0FBUztBQUFBLHVCQUFNLE9BQUtDLHFCQUFMLEVBQU47QUFBQSxlQUF2QztBQUNFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBREY7QUFYRixTQURGO0FBa0JFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNHLGVBQUtWLEtBQUwsQ0FBV0csTUFBWCxDQUFrQlEsR0FBbEIsQ0FBc0IsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsbUJBQ3JCLG9CQUFDLFVBQUQsSUFBWSxLQUFLQSxLQUFqQixFQUF3QixPQUFPRCxLQUEvQixHQURxQjtBQUFBLFdBQXRCO0FBREg7QUFsQkYsT0FERjtBQXlCRDs7OztFQWhFcUJFLE1BQU1DLFM7O0FBbUU5QkMsT0FBT2pCLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICBcbiAgICAvLyB0aGlzLmhhbmRsZUhvbWVDbGljayA9IHRoaXMuaGFuZGxlSG9tZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5oYW5kbGVXYXRjaGVkQ2xpY2sgPSB0aGlzLmhhbmRsZVdhdGNoZWRDbGljay5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuaGFuZGxlTm90V2F0Y2hlZENsaWNrID0gdGhpcy5oYW5kbGVOb3RXYXRjaGVkQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuICBcbiAgaGFuZGxlSG9tZUNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlTW92aWVzKGR1bW15RGF0YSlcbiAgfVxuXG4gIGhhbmRsZVdhdGNoZWRDbGljaygpIHtcbiAgICBjb25zdCBtb3ZpZXMgPSBbXTtcblxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgZHVtbXlEYXRhLmxlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAoZHVtbXlEYXRhW3hdLndhdGNoZWQgPT09IHRydWUpIHtcbiAgICAgICAgbW92aWVzLnB1c2goZHVtbXlEYXRhW3hdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmhhbmRsZU1vdmllcyhtb3ZpZXMpO1xuICB9XG5cbiAgaGFuZGxlTm90V2F0Y2hlZENsaWNrKCkge1xuICAgIGNvbnN0IG1vdmllcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCBkdW1teURhdGEubGVuZ3RoOyB4KyspIHtcbiAgICAgIGlmIChkdW1teURhdGFbeF0ud2F0Y2hlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgbW92aWVzLnB1c2goZHVtbXlEYXRhW3hdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmhhbmRsZU1vdmllcyhtb3ZpZXMpO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVIb21lQ2xpY2soKX0+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3YXRjaGVkXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVdhdGNoZWRDbGljaygpfT5cbiAgICAgICAgICAgICAgV2F0Y2hlZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIk5vdCBXYXRjaGVkXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVOb3RXYXRjaGVkQ2xpY2soKX0+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgTm90IFdhdGNoZWRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVzXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMubW92aWVzLm1hcCgobW92aWUsIGluZGV4KSA9PiBcbiAgICAgICAgICAgIDxNb3ZpZUVudHJ5IGtleT17aW5kZXh9IG1vdmllPXttb3ZpZX0vPil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5Nb3ZpZUxpc3QgPSBNb3ZpZUxpc3Q7Il19