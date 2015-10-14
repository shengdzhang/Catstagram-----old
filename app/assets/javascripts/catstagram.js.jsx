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
          <br/>
            <h1>Catstagram</h1>
            <br/>
              {this.props.children}
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
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
