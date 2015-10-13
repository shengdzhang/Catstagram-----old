/*global React */

var SignButtons = React.createClass ({
  handleSignUp: function () {
  },
  // handleSignIn: function () {
  //
  // },
  render: function () {
    return (
      <div className="button">
        {
          <button onClick={this.handleSignUp}>Sign Up</button>
        }
      </div>
    );
  }
});
