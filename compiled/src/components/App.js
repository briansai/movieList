'use strict';

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
      movies: Movies[0].provided,
      searchQuery: '',
      addMovieQuery: '',
      movieWatched: false,
      watch: 'Not Watched'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'searchHandler',
    value: function searchHandler(queryString) {
      console.log(queryString.target.value);
      this.setState({ searchQuery: queryString.target.value });
    }
  }, {
    key: 'handleSearchClick',
    value: function handleSearchClick() {
      //pass searchHandler into handleClick
      var currentThis = this;
      var searchedMovie = this.state.movies.filter(function (movie) {
        return currentThis.state.searchQuery === movie.title;
      });

      if (searchedMovie.length !== 0) {
        this.setState({ movies: searchedMovie });
      } else if (this.state.searchQuery.length >= 0) {
        if (Movies[0].added.length !== 0) {
          this.setState({ movies: Movies[0].added });
        } else {
          this.setState({ movies: Movies[0].provided });
        }
      }
    }
  }, {
    key: 'addMovieHandler',
    value: function addMovieHandler(queryString) {
      console.log(queryString.target.value);
      this.setState({ addMovieQuery: queryString.target.value });
    }
  }, {
    key: 'handleAddClick',
    value: function handleAddClick() {
      Movies[0].added.push({ title: this.state.addMovieQuery });
      this.setState({ movies: Movies[0].added });
    }
  }, {
    key: 'handleWatchedClick',
    value: function handleWatchedClick() {
      this.setState({ movieWatched: !this.state.movieWatched });
      if (this.state.movieWatched) {
        this.setState({ watch: 'Watched' });
        console.log(this.state.watch);
      } else {
        this.setState({ watch: 'Not Watched' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'top' },
          React.createElement(Header, { className: 'header-description' })
        ),
        React.createElement(
          'div',
          null,
          React.createElement(AddMovie, { className: 'add-movie', handleAddClick: this.handleAddClick.bind(this), addMovieHandler: this.addMovieHandler.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'search' },
          React.createElement(Search, { className: 'search-bar', handleSearchClick: this.handleSearchClick.bind(this), searchHandler: this.searchHandler.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'center-component' },
          React.createElement(
            'div',
            { className: 'movie-list' },
            React.createElement(MovieList, { movies: this.state.movies,
              handleWatchView: this.handleWatchedClick.bind(this),
              toggleWatch: this.state.watch })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsIk1vdmllcyIsInByb3ZpZGVkIiwic2VhcmNoUXVlcnkiLCJhZGRNb3ZpZVF1ZXJ5IiwibW92aWVXYXRjaGVkIiwid2F0Y2giLCJxdWVyeVN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiY3VycmVudFRoaXMiLCJzZWFyY2hlZE1vdmllIiwiZmlsdGVyIiwibW92aWUiLCJ0aXRsZSIsImxlbmd0aCIsImFkZGVkIiwicHVzaCIsImhhbmRsZUFkZENsaWNrIiwiYmluZCIsImFkZE1vdmllSGFuZGxlciIsImhhbmRsZVNlYXJjaENsaWNrIiwic2VhcmNoSGFuZGxlciIsImhhbmRsZVdhdGNoZWRDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVFDLE9BQU8sQ0FBUCxFQUFVQyxRQURQO0FBRVhDLG1CQUFhLEVBRkY7QUFHWEMscUJBQWUsRUFISjtBQUlYQyxvQkFBYyxLQUpIO0FBS1hDLGFBQU87QUFMSSxLQUFiO0FBSGlCO0FBVWxCOzs7O2tDQUdhQyxXLEVBQWE7QUFDekJDLGNBQVFDLEdBQVIsQ0FBWUYsWUFBWUcsTUFBWixDQUFtQkMsS0FBL0I7QUFDQSxXQUFLQyxRQUFMLENBQWMsRUFBQ1QsYUFBYUksWUFBWUcsTUFBWixDQUFtQkMsS0FBakMsRUFBZDtBQUNEOzs7d0NBRW1CO0FBQ2xCO0FBQ0EsVUFBSUUsY0FBYyxJQUFsQjtBQUNBLFVBQUlDLGdCQUFnQixLQUFLZixLQUFMLENBQVdDLE1BQVgsQ0FBa0JlLE1BQWxCLENBQXlCLFVBQVNDLEtBQVQsRUFBZ0I7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b21wb25lbnQgeyBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiBNb3ZpZXNbMF0ucHJvdmlkZWQsXG4gICAgICBzZWFyY2hRdWVyeTogJycsXG4gICAgICBhZGRNb3ZpZVF1ZXJ5OiAnJyxcbiAgICAgIG1vdmllV2F0Y2hlZDogZmFsc2UsXG4gICAgICB3YXRjaDogJ05vdCBXYXRjaGVkJ1xuICAgIH1cbiAgfVxuXG4gIFxuICBzZWFyY2hIYW5kbGVyKHF1ZXJ5U3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2cocXVlcnlTdHJpbmcudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hRdWVyeTogcXVlcnlTdHJpbmcudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2hDbGljaygpIHtcbiAgICAvL3Bhc3Mgc2VhcmNoSGFuZGxlciBpbnRvIGhhbmRsZUNsaWNrXG4gICAgdmFyIGN1cnJlbnRUaGlzID0gdGhpczsgXG4gICAgdmFyIHNlYXJjaGVkTW92aWUgPSB0aGlzLnN0YXRlLm1vdmllcy5maWx0ZXIoZnVuY3Rpb24obW92aWUpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VGhpcy5zdGF0ZS5zZWFyY2hRdWVyeSA9PT0gbW92aWUudGl0bGVcbiAgICB9KTtcbiAgICAgIFxuICAgIGlmIChzZWFyY2hlZE1vdmllLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVzOiBzZWFyY2hlZE1vdmllfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkubGVuZ3RoID49IDApIHtcbiAgICAgIGlmIChNb3ZpZXNbMF0uYWRkZWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdmllczogTW92aWVzWzBdLmFkZGVkfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdmllczogTW92aWVzWzBdLnByb3ZpZGVkfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRNb3ZpZUhhbmRsZXIocXVlcnlTdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhxdWVyeVN0cmluZy50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2FkZE1vdmllUXVlcnk6IHF1ZXJ5U3RyaW5nLnRhcmdldC52YWx1ZX0pXG4gIH1cblxuICBoYW5kbGVBZGRDbGljaygpIHtcbiAgICBNb3ZpZXNbMF0uYWRkZWQucHVzaCh7dGl0bGU6IHRoaXMuc3RhdGUuYWRkTW92aWVRdWVyeX0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe21vdmllczogTW92aWVzWzBdLmFkZGVkfSlcbiAgfVxuXG4gIGhhbmRsZVdhdGNoZWRDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHttb3ZpZVdhdGNoZWQ6ICF0aGlzLnN0YXRlLm1vdmllV2F0Y2hlZH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLm1vdmllV2F0Y2hlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7d2F0Y2g6ICdXYXRjaGVkJ30pXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLndhdGNoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YXRjaDogJ05vdCBXYXRjaGVkJ30pXG4gICAgfVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXItZGVzY3JpcHRpb25cIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBZGRNb3ZpZSBjbGFzc05hbWU9XCJhZGQtbW92aWVcIiBoYW5kbGVBZGRDbGljaz17dGhpcy5oYW5kbGVBZGRDbGljay5iaW5kKHRoaXMpfSBhZGRNb3ZpZUhhbmRsZXI9e3RoaXMuYWRkTW92aWVIYW5kbGVyLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCIgaGFuZGxlU2VhcmNoQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNoQ2xpY2suYmluZCh0aGlzKX0gc2VhcmNoSGFuZGxlcj17dGhpcy5zZWFyY2hIYW5kbGVyLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNvbXBvbmVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxuICAgICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSBcbiAgICAgICAgICAgIGhhbmRsZVdhdGNoVmlldz17dGhpcy5oYW5kbGVXYXRjaGVkQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHRvZ2dsZVdhdGNoPXt0aGlzLnN0YXRlLndhdGNofS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==