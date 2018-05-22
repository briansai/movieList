"use strict";

var Search = function Search(props) {
  return React.createElement(
    "div",
    null,
    React.createElement("input", { type: "search", text: "text/plain", placeholder: "Search", onChange: function onChange(event) {
        return props.searchHandler(event);
      } }),
    React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { type: "button", onClick: function onClick() {
            return props.handleSearchClick();
          } },
        "Search"
      )
    )
  );
};

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYmFycy9TZWFyY2guanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwiZXZlbnQiLCJzZWFyY2hIYW5kbGVyIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUNYO0FBQUE7QUFBQTtBQUNBLG1DQUFPLE1BQUssUUFBWixFQUFxQixNQUFLLFlBQTFCLEVBQXVDLGFBQVksUUFBbkQsRUFBNEQsVUFBVSxrQkFBQ0MsS0FBRDtBQUFBLGVBQVdELE1BQU1FLGFBQU4sQ0FBb0JELEtBQXBCLENBQVg7QUFBQSxPQUF0RSxHQURBO0FBRUU7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFVBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVM7QUFBQSxtQkFBTUQsTUFBTUcsaUJBQU4sRUFBTjtBQUFBLFdBQS9CO0FBQUE7QUFBQTtBQURBO0FBRkYsR0FEVztBQUFBLENBQWI7O0FBV0FDLE9BQU9MLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTZWFyY2ggPSAocHJvcHMpID0+IChcbiAgPGRpdj4gICBcbiAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiB0ZXh0PVwidGV4dC9wbGFpblwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gcHJvcHMuc2VhcmNoSGFuZGxlcihldmVudCl9IC8+XG4gICAgPGRpdj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVTZWFyY2hDbGljaygpfT5cbiAgICAgIFNlYXJjaFxuICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7Il19