"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      searchText: ''
    };
    _this.handleSearchText = _this.handleSearchText.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: "handleSearchText",
    value: function handleSearchText(event) {
      this.setState({ searchText: event.target.value });
      console.log(event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "span",
          null,
          React.createElement("input", { type: "text", placeholder: "Search Movie Name", className: "text-bar", onChange: function onChange(e) {
              return _this2.handleSearchText(e);
            } })
        ),
        React.createElement(
          "span",
          null,
          React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                return _this2.props.handleSearchClick(_this2.state.searchText);
              } },
            "Search"
          )
        )
      );
    }
  }]);

  return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvYmFyL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaFRleHQiLCJoYW5kbGVTZWFyY2hUZXh0IiwiYmluZCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVk7QUFERCxLQUFiO0FBR0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBTmlCO0FBT2xCOzs7O3FDQUVnQkMsSyxFQUFPO0FBQ3RCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSixZQUFZRyxNQUFNRSxNQUFOLENBQWFDLEtBQTFCLEVBQWQ7QUFDQUMsY0FBUUMsR0FBUixDQUFZTCxNQUFNRSxNQUFOLENBQWFDLEtBQXpCO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UseUNBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksbUJBQS9CLEVBQW1ELFdBQVUsVUFBN0QsRUFBd0UsVUFBVSxrQkFBQ0csQ0FBRDtBQUFBLHFCQUFPLE9BQUtSLGdCQUFMLENBQXNCUSxDQUF0QixDQUFQO0FBQUEsYUFBbEY7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVM7QUFBQSx1QkFBTSxPQUFLWCxLQUFMLENBQVdZLGlCQUFYLENBQTZCLE9BQUtYLEtBQUwsQ0FBV0MsVUFBeEMsQ0FBTjtBQUFBLGVBQS9CO0FBQUE7QUFBQTtBQURGO0FBSkYsT0FERjtBQVlEOzs7O0VBNUJrQlcsTUFBTUMsUzs7QUErQjNCQyxPQUFPaEIsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVGV4dDogJydcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVTZWFyY2hUZXh0ID0gdGhpcy5oYW5kbGVTZWFyY2hUZXh0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2hUZXh0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIE1vdmllIE5hbWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhclwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVTZWFyY2hUZXh0KGUpfS8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVTZWFyY2hDbGljayh0aGlzLnN0YXRlLnNlYXJjaFRleHQpfT5cbiAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LlNlYXJjaCA9IFNlYXJjaDsiXX0=