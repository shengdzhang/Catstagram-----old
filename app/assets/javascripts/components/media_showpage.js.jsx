

var MediaShowpage = React.createClass({
  getInitialState: function () {
    return {media: {}, comments: [], likes: []};
  },
  componentDidMount: function () {
    ApiUtil.fetchSingleMedia(parseInt(this.props.params.mediumId));
    MediaStore.addSingleChangeListener(this.onMediaChange);
    CommentsStore.addChangeListener(this.onCommentsChange);
    LikesStore.addChangeListener(this.onLikesChange);
  },
  componentWillUnmount: function () {
    MediaStore.removeSingleChangeListener(this.onMediaChange);
    CommentsStore.removeChangeListener(this.onCommentsChange);
    LikesStore.removeChangeListener(this.onLikesChange);
  },
  onMediaChange: function () {
    var media = MediaStore.fetchMedium ();
    this.setState({media: media});
    ApiUtil.fetchComments(media.id);
    ApiUtil.fetchLikes(media.id);
  },
  onCommentsChange: function () {
    var comments = CommentsStore.all();
    this.setState({comments: comments});
  },
  onLikesChange: function () {
    var likes = LikesStore.all();
    this.setState({likes: likes});
  },
  render: function () {

    return (
      <div className="media-show">
        <img src={this.state.media.link}/>
        <div className="media-comments">
          <ul className="comments-list">
            {
              this.state.comments.map(function (comment, idx){
                return <CommentShow key={comment.id} commentId={comment.id}/>
              })
            }
          </ul>
          <div className="comment-wrap">
            <div className="media-button-container">
              <LikeButton likes={this.state.likes} mediaId={this.state.media.id}/>
            </div>

            <CommentForm typeId={this.state.media.id} type="Medium"/>

          </div>
        </div>
      </div>
    );
  }
});
