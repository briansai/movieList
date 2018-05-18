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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JhcnMvU2VhcmNoLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2giLCJwcm9wcyIsImV2ZW50Iiwic2VhcmNoSGFuZGxlciIsImhhbmRsZVNlYXJjaENsaWNrIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDWDtBQUFBO0FBQUE7QUFDQSxtQ0FBTyxNQUFLLFFBQVosRUFBcUIsTUFBSyxZQUExQixFQUF1QyxhQUFZLFFBQW5ELEVBQTRELFVBQVUsa0JBQUNDLEtBQUQ7QUFBQSxlQUFXRCxNQUFNRSxhQUFOLENBQW9CRCxLQUFwQixDQUFYO0FBQUEsT0FBdEUsR0FEQTtBQUVFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxVQUFRLE1BQUssUUFBYixFQUFzQixTQUFTO0FBQUEsbUJBQU1ELE1BQU1HLGlCQUFOLEVBQU47QUFBQSxXQUEvQjtBQUFBO0FBQUE7QUFEQTtBQUZGLEdBRFc7QUFBQSxDQUFiOztBQVdBQyxPQUFPTCxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+ICAgXG4gIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgdGV4dD1cInRleHQvcGxhaW5cIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLnNlYXJjaEhhbmRsZXIoZXZlbnQpfSAvPlxuICAgIDxkaXY+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlU2VhcmNoQ2xpY2soKX0+XG4gICAgICBTZWFyY2hcbiAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoOyJdfQ==