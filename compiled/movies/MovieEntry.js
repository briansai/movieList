'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieEntry = function (_React$Component) {
  _inherits(MovieEntry, _React$Component);

  function MovieEntry(props) {
    _classCallCheck(this, MovieEntry);

    var _this = _possibleConstructorReturn(this, (MovieEntry.__proto__ || Object.getPrototypeOf(MovieEntry)).call(this, props));

    _this.state = {
      watched: 'Not Watched'
    };

    _this.handleWatched = _this.handleWatched.bind(_this);
    return _this;
  }

  _createClass(MovieEntry, [{
    key: 'handleWatched',
    value: function handleWatched() {
      if (this.state.watched === 'Not Watched') {
        this.setState({ watched: 'Watched' });
      } else {
        this.setState({ watched: 'Not Watched' });
      }

      for (var x = 0; x < dummyData.length; x++) {
        if (dummyData[x].title === this.props.movie.title) {
          dummyData[x].watched = !dummyData[x].watched;
        }
      }

      console.log(dummyData);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'movie-entry' },
        React.createElement(
          'span',
          { className: 'movie-title' },
          this.props.movie.title
        ),
        React.createElement(
          'span',
          { className: 'watched-button' },
          React.createElement(
            'button',
            { type: 'button', onClick: function onClick() {
                return _this2.handleWatched();
              } },
            this.state.watched
          )
        )
      );
    }
  }]);

  return MovieEntry;
}(React.Component);

window.MovieEntry = MovieEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvbW92aWVzL01vdmllRW50cnkuanN4Il0sIm5hbWVzIjpbIk1vdmllRW50cnkiLCJwcm9wcyIsInN0YXRlIiwid2F0Y2hlZCIsImhhbmRsZVdhdGNoZWQiLCJiaW5kIiwic2V0U3RhdGUiLCJ4IiwiZHVtbXlEYXRhIiwibGVuZ3RoIiwidGl0bGUiLCJtb3ZpZSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUztBQURFLEtBQWI7O0FBSUEsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQixPQUFyQjtBQVBpQjtBQVFsQjs7OztvQ0FFZTtBQUNkLFVBQUksS0FBS0gsS0FBTCxDQUFXQyxPQUFYLEtBQXVCLGFBQTNCLEVBQTBDO0FBQ3hDLGFBQUtHLFFBQUwsQ0FBYyxFQUFDSCxTQUFTLFNBQVYsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtHLFFBQUwsQ0FBYyxFQUFDSCxTQUFTLGFBQVYsRUFBZDtBQUNEOztBQUVELFdBQUssSUFBSUksSUFBSSxDQUFiLEVBQWdCQSxJQUFJQyxVQUFVQyxNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkM7QUFDekMsWUFBSUMsVUFBVUQsQ0FBVixFQUFhRyxLQUFiLEtBQXVCLEtBQUtULEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkQsS0FBNUMsRUFBbUQ7QUFDakRGLG9CQUFVRCxDQUFWLEVBQWFKLE9BQWIsR0FBdUIsQ0FBQ0ssVUFBVUQsQ0FBVixFQUFhSixPQUFyQztBQUNEO0FBQ0Y7O0FBRURTLGNBQVFDLEdBQVIsQ0FBWUwsU0FBWjtBQUNEOzs7NkJBRVE7QUFBQTs7QUFHUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFNLFdBQVUsYUFBaEI7QUFDRyxlQUFLUCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJEO0FBRHBCLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBTSxXQUFVLGdCQUFoQjtBQUNFO0FBQUE7QUFBQSxjQUFRLE1BQUssUUFBYixFQUFzQixTQUFTO0FBQUEsdUJBQU0sT0FBS04sYUFBTCxFQUFOO0FBQUEsZUFBL0I7QUFDRyxpQkFBS0YsS0FBTCxDQUFXQztBQURkO0FBREY7QUFKRixPQURGO0FBWUQ7Ozs7RUExQ3NCVyxNQUFNQyxTOztBQTZDL0JDLE9BQU9oQixVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJNb3ZpZUVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3YXRjaGVkOiAnTm90IFdhdGNoZWQnXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVXYXRjaGVkID0gdGhpcy5oYW5kbGVXYXRjaGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVXYXRjaGVkKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLndhdGNoZWQgPT09ICdOb3QgV2F0Y2hlZCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3dhdGNoZWQ6ICdXYXRjaGVkJ30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YXRjaGVkOiAnTm90IFdhdGNoZWQnfSk7XG4gICAgfVxuICBcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGR1bW15RGF0YS5sZW5ndGg7IHgrKykge1xuICAgICAgaWYgKGR1bW15RGF0YVt4XS50aXRsZSA9PT0gdGhpcy5wcm9wcy5tb3ZpZS50aXRsZSkge1xuICAgICAgICBkdW1teURhdGFbeF0ud2F0Y2hlZCA9ICFkdW1teURhdGFbeF0ud2F0Y2hlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhkdW1teURhdGEpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cblxuICAgIHJldHVybiggXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWVudHJ5XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vdmllLXRpdGxlXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMubW92aWUudGl0bGV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2F0Y2hlZC1idXR0b25cIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVdhdGNoZWQoKX0+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS53YXRjaGVkfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93Lk1vdmllRW50cnkgPSBNb3ZpZUVudHJ5OyJdfQ==