/* global ReactRouter */

var RouteHandler = ReactRouter.RouteHandler;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function(){
    return (
        <div>
          <Nav/>
            <h1>
              <div className="headwrap">
              Catstagram
              <Search/>
              <div className="border"></div>
              </div>
            </h1>
            <div className="pagewrapper">
              {this.props.children}
            </div>
        </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={UserHomepage}/>
  </Route>
);

$(function() {

  var root = document.getElementById('content');
  React.render(<Router>{routes}</Router>, root);
});
