
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
          <textarea placeholder="Enter Comment" onChange={this.textChange} value={this.state.text}></textarea>
        </div>

        <div className="media-submit-container">
          <button onClick={this.handleClick}> Click </button>
        </div>
      </div>
    )
  }
});
