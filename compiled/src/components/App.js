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
      movies: Movies
    };
    return _this;
  }

  // handleClick() {
  //   this.setState({clickedOn: !this.state.clickedOn}) 
  // }

  _createClass(App, [{
    key: "render",
    value: function render() {
      console.log(Movies);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "header" },
          React.createElement(Header, { className: "header-description" })
        ),
        React.createElement(
          "div",
          { className: "search" },
          React.createElement(Search, { className: "search-bar" })
        ),
        React.createElement(
          "div",
          { className: "center-component" },
          React.createElement(
            "div",
            { className: "movie-list" },
            React.createElement(MovieList, { movies: this.state.movies /*handleClick={this.handleClick.bind(this)}*/ })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsIk1vdmllcyIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRQztBQURHLEtBQWI7QUFIaUI7QUFNbEI7O0FBRUQ7QUFDQTtBQUNBOzs7OzZCQUVTO0FBQ0hDLGNBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNKLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0UsOEJBQUMsTUFBRCxJQUFRLFdBQVUsb0JBQWxCO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFLDhCQUFDLE1BQUQsSUFBUSxXQUFVLFlBQWxCO0FBREYsU0FKRjtBQU9FO0FBQUE7QUFBQSxZQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRSxnQ0FBQyxTQUFELElBQVcsUUFBUSxLQUFLRixLQUFMLENBQVdDLE1BQTlCLENBQXNDLDZDQUF0QztBQURGO0FBREY7QUFQRixPQURGO0FBZUQ7Ozs7RUE5QmVJLE1BQU1DLFM7O0FBaUN4QkMsT0FBT1QsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IE1vdmllc1xuICAgIH1cbiAgfVxuXG4gIC8vIGhhbmRsZUNsaWNrKCkge1xuICAvLyAgIHRoaXMuc2V0U3RhdGUoe2NsaWNrZWRPbjogIXRoaXMuc3RhdGUuY2xpY2tlZE9ufSkgXG4gIC8vIH1cblxuICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKE1vdmllcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXItZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgICA8U2VhcmNoIGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItY29tcG9uZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1saXN0XCI+XG4gICAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IC8qaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0qLyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=