"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddMovie = function (_React$Component) {
  _inherits(AddMovie, _React$Component);

  function AddMovie(props) {
    _classCallCheck(this, AddMovie);

    var _this = _possibleConstructorReturn(this, (AddMovie.__proto__ || Object.getPrototypeOf(AddMovie)).call(this, props));

    _this.state = {
      addText: ''
    };

    _this.handleAddText = _this.handleAddText.bind(_this);
    return _this;
  }

  _createClass(AddMovie, [{
    key: "handleAddText",
    value: function handleAddText(event) {
      this.setState({ addText: event.target.value });
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
          React.createElement("input", { type: "text", placeholder: "Add Movie Name", className: "text-bar", onChange: function onChange(e) {
              return _this2.handleAddText(e);
            } })
        ),
        React.createElement(
          "span",
          null,
          React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                return _this2.props.handleAddClick(_this2.state.addText);
              } },
            "Add Movie"
          )
        )
      );
    }
  }]);

  return AddMovie;
}(React.Component);

window.AddMovie = AddMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvYmFyL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsInByb3BzIiwic3RhdGUiLCJhZGRUZXh0IiwiaGFuZGxlQWRkVGV4dCIsImJpbmQiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZSIsImhhbmRsZUFkZENsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVM7QUFERSxLQUFiOztBQUlBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7QUFQaUI7QUFRbEI7Ozs7a0NBRWFDLEssRUFBTztBQUNuQixXQUFLQyxRQUFMLENBQWMsRUFBQ0osU0FBU0csTUFBTUUsTUFBTixDQUFhQyxLQUF2QixFQUFkO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUwsTUFBTUUsTUFBTixDQUFhQyxLQUF6QjtBQUNEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHlDQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLGdCQUEvQixFQUFnRCxXQUFVLFVBQTFELEVBQXFFLFVBQVUsa0JBQUNHLENBQUQ7QUFBQSxxQkFBTyxPQUFLUixhQUFMLENBQW1CUSxDQUFuQixDQUFQO0FBQUEsYUFBL0U7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVM7QUFBQSx1QkFBTSxPQUFLWCxLQUFMLENBQVdZLGNBQVgsQ0FBMEIsT0FBS1gsS0FBTCxDQUFXQyxPQUFyQyxDQUFOO0FBQUEsZUFBL0I7QUFBQTtBQUFBO0FBREY7QUFKRixPQURGO0FBWUQ7Ozs7RUE3Qm9CVyxNQUFNQyxTOztBQWdDN0JDLE9BQU9oQixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJBZGRNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFkZE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWRkVGV4dDogJydcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUFkZFRleHQgPSB0aGlzLmhhbmRsZUFkZFRleHQuYmluZCh0aGlzKTtcbiAgfVxuICBcbiAgaGFuZGxlQWRkVGV4dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FkZFRleHQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIE1vdmllIE5hbWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhclwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVBZGRUZXh0KGUpfS8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVBZGRDbGljayh0aGlzLnN0YXRlLmFkZFRleHQpfT5cbiAgICAgICAgICAgIEFkZCBNb3ZpZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApICAgIFxuICB9XG59XG5cbndpbmRvdy5BZGRNb3ZpZSA9IEFkZE1vdmllOyAgIl19