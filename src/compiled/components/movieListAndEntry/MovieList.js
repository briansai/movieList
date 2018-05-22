"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieList = function (_React$Component) {
  _inherits(MovieList, _React$Component);

  function MovieList(props) {
    _classCallCheck(this, MovieList);

    var _this = _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).call(this, props));

    _this.state = {
      // watchedTab: 'Watched',
      watch: _this.props.movies
    };
    return _this;
  }

  _createClass(MovieList, [{
    key: "defaultTab",
    value: function defaultTab() {
      this.setState({ watch: Movies[0].provided });
    }
  }, {
    key: "handleWatchedTab",
    value: function handleWatchedTab() {
      //filter
      //if movie watched, display only movies watched
      //else display movie only movies unwatched

      // var filterWatched = this.props.movies.filter(function(movie) {
      //   return movie.watched;
      // })

      // this.setState({watch: filterWatched});

    }
  }, {
    key: "handleNotWatchedTab",
    value: function handleNotWatchedTab() {
      //filter
      //if movie watched, display only movies watched
      //else display movie only movies unwatched    

      // var filterNotWatched = this.props.movies.filter(function(movie) {
      //   return !movie.watched;
      // })

      // this.setState({watch:filterNotWatched});
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
          { className: "tabs" },
          React.createElement(
            "span",
            { className: "butt1" },
            React.createElement(
              "button",
              { type: "button", onClick: function onClick() {
                  return _this2.defaultTab();
                } },
              "Provided Movies"
            )
          ),
          React.createElement(
            "span",
            { className: "butt2" },
            React.createElement(
              "button",
              { type: "button", onClick: function onClick() {
                  return _this2.handleWatchedTab();
                } },
              "Watched"
            )
          ),
          React.createElement(
            "span",
            { className: "butt3" },
            React.createElement(
              "button",
              { type: "button", onClick: function onClick() {
                  return _this2.handleNotWatchedTab();
                } },
              "Not Watched"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "movie-list" },
          this.state.watch.map(function (movie) {
            return React.createElement(MovieEntry, { movie: movie });
          })
        )
      );
    }
  }]);

  return MovieList;
}(React.Component);

// <span className="butt2">
//            <button type="button" onClick={() => this.handleWatchedTab()}>
//              Watched
//            </button>
//          </span>
//          <span className="butt3">
//            <button type = "button" onClick={() => this.handleNotWatchedTab()}>
//              Not Watched
//            </button>
//          </span>


// var MovieList = (props) => (
//   <div>
//     <div className = 'movie-list'>
//       {props.movies.map(movie =>
//         <MovieEntry movie={movie} 
//         handleWatchedClick={props.handleWatchView} 
//         toggleWatched={props.toggleWatch}/>
//       )}
//     </div>
//   </div>
// )

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbW92aWVMaXN0QW5kRW50cnkvTW92aWVMaXN0LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3QiLCJwcm9wcyIsInN0YXRlIiwid2F0Y2giLCJtb3ZpZXMiLCJzZXRTdGF0ZSIsIk1vdmllcyIsInByb3ZpZGVkIiwiZGVmYXVsdFRhYiIsImhhbmRsZVdhdGNoZWRUYWIiLCJoYW5kbGVOb3RXYXRjaGVkVGFiIiwibWFwIiwibW92aWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWDtBQUNBQyxhQUFPLE1BQUtGLEtBQUwsQ0FBV0c7QUFGUCxLQUFiO0FBRmlCO0FBTWxCOzs7O2lDQUVZO0FBQ1gsV0FBS0MsUUFBTCxDQUFjLEVBQUNGLE9BQU9HLE9BQU8sQ0FBUCxFQUFVQyxRQUFsQixFQUFkO0FBQ0Q7Ozt1Q0FFa0I7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFRDs7OzBDQUVxQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Q7Ozs2QkFHUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxPQUFoQjtBQUNFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLFFBQWIsRUFBc0IsU0FBUztBQUFBLHlCQUFNLE9BQUtDLFVBQUwsRUFBTjtBQUFBLGlCQUEvQjtBQUFBO0FBQUE7QUFERixXQURGO0FBTUU7QUFBQTtBQUFBLGNBQU0sV0FBVSxPQUFoQjtBQUNFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLFFBQWIsRUFBc0IsU0FBUztBQUFBLHlCQUFNLE9BQUtDLGdCQUFMLEVBQU47QUFBQSxpQkFBL0I7QUFBQTtBQUFBO0FBREYsV0FORjtBQVdFO0FBQUE7QUFBQSxjQUFNLFdBQVUsT0FBaEI7QUFDRTtBQUFBO0FBQUEsZ0JBQVEsTUFBTyxRQUFmLEVBQXdCLFNBQVM7QUFBQSx5QkFBTSxPQUFLQyxtQkFBTCxFQUFOO0FBQUEsaUJBQWpDO0FBQUE7QUFBQTtBQURGO0FBWEYsU0FERjtBQWtCSTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRyxlQUFLUixLQUFMLENBQVdDLEtBQVgsQ0FBaUJRLEdBQWpCLENBQXFCO0FBQUEsbUJBQ3BCLG9CQUFDLFVBQUQsSUFBWSxPQUFPQyxLQUFuQixHQURvQjtBQUFBLFdBQXJCO0FBREg7QUFsQkosT0FERjtBQTBCRDs7OztFQWxFcUJDLE1BQU1DLFM7O0FBcUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBUUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsT0FBT2YsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIHdhdGNoZWRUYWI6ICdXYXRjaGVkJyxcbiAgICAgIHdhdGNoOiB0aGlzLnByb3BzLm1vdmllcyBcbiAgICB9XG4gIH1cblxuICBkZWZhdWx0VGFiKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3dhdGNoOiBNb3ZpZXNbMF0ucHJvdmlkZWR9KVxuICB9XG5cbiAgaGFuZGxlV2F0Y2hlZFRhYigpIHtcbiAgICAvL2ZpbHRlclxuICAgIC8vaWYgbW92aWUgd2F0Y2hlZCwgZGlzcGxheSBvbmx5IG1vdmllcyB3YXRjaGVkXG4gICAgLy9lbHNlIGRpc3BsYXkgbW92aWUgb25seSBtb3ZpZXMgdW53YXRjaGVkXG5cbiAgICAvLyB2YXIgZmlsdGVyV2F0Y2hlZCA9IHRoaXMucHJvcHMubW92aWVzLmZpbHRlcihmdW5jdGlvbihtb3ZpZSkge1xuICAgIC8vICAgcmV0dXJuIG1vdmllLndhdGNoZWQ7XG4gICAgLy8gfSlcblxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe3dhdGNoOiBmaWx0ZXJXYXRjaGVkfSk7XG5cbiAgfVxuXG4gIGhhbmRsZU5vdFdhdGNoZWRUYWIoKSB7XG4gICAgLy9maWx0ZXJcbiAgICAvL2lmIG1vdmllIHdhdGNoZWQsIGRpc3BsYXkgb25seSBtb3ZpZXMgd2F0Y2hlZFxuICAgIC8vZWxzZSBkaXNwbGF5IG1vdmllIG9ubHkgbW92aWVzIHVud2F0Y2hlZCAgICBcbiAgICBcbiAgICAvLyB2YXIgZmlsdGVyTm90V2F0Y2hlZCA9IHRoaXMucHJvcHMubW92aWVzLmZpbHRlcihmdW5jdGlvbihtb3ZpZSkge1xuICAgIC8vICAgcmV0dXJuICFtb3ZpZS53YXRjaGVkO1xuICAgIC8vIH0pXG5cbiAgICAvLyB0aGlzLnNldFN0YXRlKHt3YXRjaDpmaWx0ZXJOb3RXYXRjaGVkfSk7XG4gIH1cbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0MVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5kZWZhdWx0VGFiKCl9PlxuICAgICAgICAgICAgICBQcm92aWRlZCBNb3ZpZXNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0MlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVXYXRjaGVkVGFiKCl9PlxuICAgICAgICAgICAgICBXYXRjaGVkXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnV0dDNcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZSA9IFwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVOb3RXYXRjaGVkVGFiKCl9PlxuICAgICAgICAgICAgICBOb3QgV2F0Y2hlZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWUtbGlzdCcgPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUud2F0Y2gubWFwKG1vdmllID0+XG4gICAgICAgICAgICAgIDxNb3ZpZUVudHJ5IG1vdmllPXttb3ZpZX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIC8vIDxzcGFuIGNsYXNzTmFtZT1cImJ1dHQyXCI+XG4gLy8gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVdhdGNoZWRUYWIoKX0+XG4gLy8gICAgICAgICAgICAgIFdhdGNoZWRcbiAvLyAgICAgICAgICAgIDwvYnV0dG9uPlxuIC8vICAgICAgICAgIDwvc3Bhbj5cbiAvLyAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0M1wiPlxuIC8vICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU5vdFdhdGNoZWRUYWIoKX0+XG4gLy8gICAgICAgICAgICAgIE5vdCBXYXRjaGVkXG4gLy8gICAgICAgICAgICA8L2J1dHRvbj5cbiAvLyAgICAgICAgICA8L3NwYW4+XG5cblxuXG5cblxuXG5cbi8vIHZhciBNb3ZpZUxpc3QgPSAocHJvcHMpID0+IChcbi8vICAgPGRpdj5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdtb3ZpZS1saXN0Jz5cbi8vICAgICAgIHtwcm9wcy5tb3ZpZXMubWFwKG1vdmllID0+XG4vLyAgICAgICAgIDxNb3ZpZUVudHJ5IG1vdmllPXttb3ZpZX0gXG4vLyAgICAgICAgIGhhbmRsZVdhdGNoZWRDbGljaz17cHJvcHMuaGFuZGxlV2F0Y2hWaWV3fSBcbi8vICAgICAgICAgdG9nZ2xlV2F0Y2hlZD17cHJvcHMudG9nZ2xlV2F0Y2h9Lz5cbi8vICAgICAgICl9XG4vLyAgICAgPC9kaXY+XG4vLyAgIDwvZGl2PlxuLy8gKVxuXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0OyJdfQ==