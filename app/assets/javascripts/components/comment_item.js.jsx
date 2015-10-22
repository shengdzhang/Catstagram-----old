
var CommentItem = React.createClass({
  getInitialState: function () {
    return {body: this.props.comment.body, toggle: false};
  },
  textChange: function (e) {
    this.setState({body: e.target.value});
  },
  handleKeyUp: function (e) {
    if (e.keyCode === 13 && this.state.body !== "") {
      ApiUtil.updateComment(this.props.comment.id, this.state.body);
      this.setState({toggle: !this.state.toggle});
    }
  },
  handleToggle: function () {
    this.setState({toggle: !this.state.toggle});
  },
  commentContent: function () {

    if(this.props.comment.author_id === CURRENT_USER_ID) {
      var edit = <button className="comment-edit" onClick={this.handleToggle}>Edit</button>;
    } else {
      edit = ""
    }

    if(this.state.toggle){
      return (
        <div className="comment-edit-form">
          <input type="text" onKeyUp={this.handleKeyUp} onChange={this.textChange} value={this.state.body}></input>
        </div>
      );
    } else {
      return (
        <span className="comment-body"> {this.props.comment.body} {edit}</span>
      );
    }
  },
  render: function () {
    var author = "";
    if(this.props.comment.author){
      author = this.props.comment.author.username;
    }
    return (
      <li>
        <span className="comment-author"> {author}: </span>
        <br/>
        {this.commentContent()}
      </li>
    );
  }
});
