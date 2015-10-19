
var CommentForm = React.createClass ({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {text: ""};
  },
  handleClick: function (e) {
    if(this.state.text !== "")
    {
      ApiUtil.createComment(this.props.type, this.props.typeId, this.state.text);
    }
  },
  render: function () {
    <div>
      <div className="comment-form">
        <textarea placeholder="Enter Comment" valueLink={this.linkState('text')}></textarea>
      </div>

      <div className="media-submit-container">
        <button onClick={this.handleClick}> Click </button>
      </div>
    </div>
  }
});
