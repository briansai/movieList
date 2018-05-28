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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvYmFyL0Jhci5qc3giXSwibmFtZXMiOlsiQmFyIiwicHJvcHMiLCJoYW5kbGVTZWFyY2hDbGljayIsImJpbmQiLCJoYW5kbGVBZGRDbGljayIsInRleHQiLCJzZWFyY2hNb3ZpZSIsImR1bW15RGF0YSIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJoYW5kbGVTZWFyY2giLCJ4IiwibGVuZ3RoIiwiYWRkZWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2QixPQUF6QjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkQsSUFBcEIsT0FBdEI7QUFKaUI7QUFLbEI7Ozs7c0NBRWlCRSxJLEVBQU07QUFDdEIsVUFBTUMsY0FBY0MsVUFBVUMsTUFBVixDQUFpQixVQUFTQyxLQUFULEVBQWdCO0FBQ25ELGVBQU9BLE1BQU1DLEtBQU4sS0FBZ0JMLElBQXZCO0FBQ0QsT0FGbUIsQ0FBcEI7O0FBSUEsV0FBS0osS0FBTCxDQUFXVSxZQUFYLENBQXdCTCxXQUF4QjtBQUNEOzs7bUNBRWNELEksRUFBTTtBQUNuQixXQUFLLElBQUlPLElBQUksQ0FBYixFQUFnQkEsSUFBSUwsVUFBVU0sTUFBOUIsRUFBc0NELEdBQXRDLEVBQTJDO0FBQ3pDLFlBQUlMLFVBQVVLLENBQVYsRUFBYUYsS0FBYixLQUF1QkwsSUFBM0IsRUFBaUM7QUFDL0JFLG9CQUFVSyxDQUFWLEVBQWFFLEtBQWIsR0FBcUIsSUFBckI7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0UsOEJBQUMsTUFBRCxJQUFRLG1CQUFtQixLQUFLWixpQkFBaEM7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0UsOEJBQUMsUUFBRCxJQUFVLGdCQUFnQixLQUFLRSxjQUEvQjtBQURGO0FBSkYsT0FERjtBQVVEOzs7O0VBbkNlVyxNQUFNQyxTOztBQXNDeEJDLE9BQU9qQixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmhhbmRsZVNlYXJjaENsaWNrID0gdGhpcy5oYW5kbGVTZWFyY2hDbGljay5iaW5kKHRoaXMpOyAgIFxuICAgIHRoaXMuaGFuZGxlQWRkQ2xpY2sgPSB0aGlzLmhhbmRsZUFkZENsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2hDbGljayh0ZXh0KSB7XG4gICAgY29uc3Qgc2VhcmNoTW92aWUgPSBkdW1teURhdGEuZmlsdGVyKGZ1bmN0aW9uKG1vdmllKSB7XG4gICAgICByZXR1cm4gbW92aWUudGl0bGUgPT09IHRleHQ7XG4gICAgfSlcblxuICAgIHRoaXMucHJvcHMuaGFuZGxlU2VhcmNoKHNlYXJjaE1vdmllKTtcbiAgfVxuXG4gIGhhbmRsZUFkZENsaWNrKHRleHQpIHtcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGR1bW15RGF0YS5sZW5ndGg7IHgrKykge1xuICAgICAgaWYgKGR1bW15RGF0YVt4XS50aXRsZSA9PT0gdGV4dCkge1xuICAgICAgICBkdW1teURhdGFbeF0uYWRkZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XG4gICAgICAgICAgPFNlYXJjaCBoYW5kbGVTZWFyY2hDbGljaz17dGhpcy5oYW5kbGVTZWFyY2hDbGlja30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtbW92aWVcIj5cbiAgICAgICAgICA8QWRkTW92aWUgaGFuZGxlQWRkQ2xpY2s9e3RoaXMuaGFuZGxlQWRkQ2xpY2t9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkJhciA9IEJhcjsiXX0=