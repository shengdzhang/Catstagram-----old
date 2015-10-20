

var MediaShowpage = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {media: {}, comments: [], likes: [], followees: []};
  },
  componentDidMount: function () {
    ApiUtil.fetchSingleMedia(parseInt(this.props.params.mediumId));
    FollowsStore.addChangeListener(this.onFollowsChange);
    MediaStore.addSingleChangeListener(this.onMediaChange);
    CommentsStore.addChangeListener(this.onCommentsChange);
    LikesStore.addChangeListener(this.onLikesChange);
  },
  componentWillUnmount: function () {
    MediaStore.removeSingleChangeListener(this.onMediaChange);
    CommentsStore.removeChangeListener(this.onCommentsChange);
    LikesStore.removeChangeListener(this.onLikesChange);
    FollowsStore.removeChangeListener(this.onFollowsChange);
  },
  onFollowsChange: function () {
    this.setState({followees: FollowsStore.all()});
  },
  onMediaChange: function () {
    var media = MediaStore.fetchMedium ();
    this.setState({media: media, user: UsersStore.getUser(media.author_id)});
    ApiUtil.getFollowees();
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
  editMedia: function () {
    var url = "/media/" + this.state.media.id +"/edit";
    this.history.pushState(null, url);
  },
  render: function () {
    var specialButton = <LikeButton likes={this.state.likes} mediaId={this.state.media.id}/>;
    if (this.state.media.author_id === CURRENT_USER_ID) {
      specialButton = <button onClick={this.editMedia}> Edit </button>
    }
    var likes = 0,
        id = null,
        followees=[],
        username = "";
    if (this.state.media.likes){
      likes = this.state.media.likes.length;
      username = this.state.user.username;
      followees = this.state.followees;
      id = this.state.user.id
    }
    return (
      <div className="media-show">
        <img src={this.state.media.link}/>
        <div className="media-info">
          <span className="media-show-author">Author: {username}</span>
          <span className="media-show-follow"><FollowButton followees={followees} idx={id}/></span>
          <br/>
          <span className="media-show-likes">Likes: {likes} </span>
        </div>
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
              {specialButton}
            </div>

            <CommentForm typeId={this.state.media.id} type="Medium"/>

          </div>
        </div>
      </div>
    );
  }
});
