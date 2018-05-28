"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bar = function (_React$Component) {
  _inherits(Bar, _React$Component);

  function Bar(props) {
    _classCallCheck(this, Bar);

    var _this = _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).call(this, props));

    _this.handleSearchClick = _this.handleSearchClick.bind(_this);
    _this.handleAddClick = _this.handleAddClick.bind(_this);
    return _this;
  }

  _createClass(Bar, [{
    key: "handleSearchClick",
    value: function handleSearchClick(text) {
      var searchMovie = dummyData.filter(function (movie) {
        return movie.title === text;
      });
      console.log(searchMovie);
      this.props.handleSearch(searchMovie);
    }
  }, {
    key: "handleAddClick",
    value: function handleAddClick(text) {
      for (var x = 0; x < dummyData.length; x++) {
        if (dummyData[x].title === text) {
          dummyData[x].added = true;
        }
      }

      console.log(text);
      console.log(dummyData);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "search-bar" },
          React.createElement(Search, { handleSearchClick: this.handleSearchClick })
        ),
        React.createElement(
          "div",
          { className: "add-movie" },
          React.createElement(AddMovie, { handleAddClick: this.handleAddClick })
        )
      );
    }
  }]);

  return Bar;
}(React.Component);

window.Bar = Bar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvYmFyL0Jhci5qc3giXSwibmFtZXMiOlsiQmFyIiwicHJvcHMiLCJoYW5kbGVTZWFyY2hDbGljayIsImJpbmQiLCJoYW5kbGVBZGRDbGljayIsInRleHQiLCJzZWFyY2hNb3ZpZSIsImR1bW15RGF0YSIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2VhcmNoIiwieCIsImxlbmd0aCIsImFkZGVkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsT0FBekI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBSmlCO0FBS2xCOzs7O3NDQUVpQkUsSSxFQUFNO0FBQ3RCLFVBQU1DLGNBQWNDLFVBQVVDLE1BQVYsQ0FBaUIsVUFBU0MsS0FBVCxFQUFnQjtBQUNuRCxlQUFPQSxNQUFNQyxLQUFOLEtBQWdCTCxJQUF2QjtBQUNELE9BRm1CLENBQXBCO0FBR0FNLGNBQVFDLEdBQVIsQ0FBWU4sV0FBWjtBQUNBLFdBQUtMLEtBQUwsQ0FBV1ksWUFBWCxDQUF3QlAsV0FBeEI7QUFDRDs7O21DQUVjRCxJLEVBQU07QUFDbkIsV0FBSyxJQUFJUyxJQUFJLENBQWIsRUFBZ0JBLElBQUlQLFVBQVVRLE1BQTlCLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6QyxZQUFJUCxVQUFVTyxDQUFWLEVBQWFKLEtBQWIsS0FBdUJMLElBQTNCLEVBQWlDO0FBQy9CRSxvQkFBVU8sQ0FBVixFQUFhRSxLQUFiLEdBQXFCLElBQXJCO0FBQ0Q7QUFDRjs7QUFFREwsY0FBUUMsR0FBUixDQUFZUCxJQUFaO0FBQ0FNLGNBQVFDLEdBQVIsQ0FBWUwsU0FBWjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFLDhCQUFDLE1BQUQsSUFBUSxtQkFBbUIsS0FBS0wsaUJBQWhDO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZjtBQUNFLDhCQUFDLFFBQUQsSUFBVSxnQkFBZ0IsS0FBS0UsY0FBL0I7QUFERjtBQUpGLE9BREY7QUFVRDs7OztFQXRDZWEsTUFBTUMsUzs7QUF5Q3hCQyxPQUFPbkIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5oYW5kbGVTZWFyY2hDbGljayA9IHRoaXMuaGFuZGxlU2VhcmNoQ2xpY2suYmluZCh0aGlzKTsgICBcbiAgICB0aGlzLmhhbmRsZUFkZENsaWNrID0gdGhpcy5oYW5kbGVBZGRDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoQ2xpY2sodGV4dCkge1xuICAgIGNvbnN0IHNlYXJjaE1vdmllID0gZHVtbXlEYXRhLmZpbHRlcihmdW5jdGlvbihtb3ZpZSkge1xuICAgICAgcmV0dXJuIG1vdmllLnRpdGxlID09PSB0ZXh0O1xuICAgIH0pXG4gICAgY29uc29sZS5sb2coc2VhcmNoTW92aWUpO1xuICAgIHRoaXMucHJvcHMuaGFuZGxlU2VhcmNoKHNlYXJjaE1vdmllKTtcbiAgfVxuXG4gIGhhbmRsZUFkZENsaWNrKHRleHQpIHtcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGR1bW15RGF0YS5sZW5ndGg7IHgrKykge1xuICAgICAgaWYgKGR1bW15RGF0YVt4XS50aXRsZSA9PT0gdGV4dCkge1xuICAgICAgICBkdW1teURhdGFbeF0uYWRkZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICBjb25zb2xlLmxvZyhkdW1teURhdGEpO1xuICB9XG4gXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIj5cbiAgICAgICAgICA8U2VhcmNoIGhhbmRsZVNlYXJjaENsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaENsaWNrfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1tb3ZpZVwiPlxuICAgICAgICAgIDxBZGRNb3ZpZSBoYW5kbGVBZGRDbGljaz17dGhpcy5oYW5kbGVBZGRDbGlja30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuQmFyID0gQmFyOyJdfQ==