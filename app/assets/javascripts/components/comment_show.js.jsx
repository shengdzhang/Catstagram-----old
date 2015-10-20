

var CommentShow = React.createClass({
  getInitialState: function () {
    return {comment: {}, comments: []};
  },
  componentDidMount: function () {
    ApiUtil.fetchComment(this.props.commentId);
    CommentsStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function () {
    CommentsStore.removeChangeListener(this.onChange);
  },
  onChange: function () {
    var comment = CommentsStore.fetchComment(this.props.commentId);
    var comments = comment.comments || [];
    this.setState({comment: comment, comments: comments});
  },
  render: function () {
    var author = "";
    if(this.state.comment.author){
      author = this.state.comment.author.username;
    }
    return (
      <div>
        <li>
          <span className="comment-author"> {author}: </span>
          <br/>
          <span className="comment-body"> {this.state.comment.body} </span>
        </li>
        <ul className="nested-comments group">
          {
            this.state.comments.map (function (comment) {
              if(comment.author) {
                author = comment.author.username
              }
              return (
              <li key={comment.id}>
                {author}
                <br/>
                {comment.body}
              </li>
              )
            })
          }
          <CommentForm type="Comment" typeId={this.props.commentId}/>
        </ul>
        <br/>

      </div>

    );
  }
})
