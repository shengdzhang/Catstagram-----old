

var NestedComment = React.createClass({
  getInitialState: function () {
    return {comments: []};
    //stores comments to iterate later
  },
  componentDidMount: function () {
    ApiUtil.showComments(this.props.commentId);
    //call show on a comment and grab all its associated comments
    CommentsStore.addShowListener(this.onChange);
    //store a different change listener /store emitter?
  },
  componentWillUnmount: function () {
    // unmount from comment store
    CommentsStore.removeShowListener(this.onChange);
  },
  onChange: function () {
    // would require a second store? How would it affect other nested comments
    var comments = CommentsStore.all();
    this.setState({comments: comments});
  },
  render: function () {
    return (

      <div>
        {
          this.state.comments.map (function (comment) {
            return <li key=comment.id>{comment.author_id} commented:<br/><br/> {comment.body} </li>
          });
        }
        <CommentForm type="Comment" typeId={this.props.commentId}/>
      </div>

    );
  }
})
