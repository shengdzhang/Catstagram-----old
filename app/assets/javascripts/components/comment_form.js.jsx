
var CommentForm = React.createClass ({
  getInitialState: function () {
    return {text: ""};
  },
  handleClick: function (e) {
    if(this.state.text !== "")
    {
      ApiUtil.createComment(this.props.type, this.props.typeId, this.state.text);
    }
  },
  textChange: function (e) {
    this.setState({text: e.target.value});
  },
  render: function () {
    return (
      <div>
        <div className="comment-form">
          <input type="text" placeholder="Add Comment" onChange={this.textChange} value={this.state.text}></input>
        </div>

        <div className="media-submit-container">
          <button onClick={this.handleClick}> Click </button>
        </div>
      </div>
    )
  }
});
