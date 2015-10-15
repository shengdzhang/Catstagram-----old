var FollowButton = React.createClass ({
  handleClick: function (e) {
    e.preventDefault();
    debugger;
  },
  render: function () {
    return (
      <button className="follow" onClick={this.handleClick}>
        Follow
      </button>
    );
  }
});
