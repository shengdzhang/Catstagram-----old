

var MediaShowpage = React.createClass({
  getInitialState: function () {
    return {media: {}, comments: []};
  },
  componentDidMount: function () {
    ApiUtil.fetchSingleMedia(parseInt(this.props.params.mediumId));
    MediaStore.addSingleChangeListener(this.onMediaChange);
    CommentsStore.addChangeListener(this.onCommentsChange);
  },
  componentWillUnmount: function () {
    MediaStore.removeSingleChangeListener(this.onMediaChange);
    CommentsStore.removeChangeListener(this.onCommentsChange);
  },
  onMediaChange: function () {
    var media = MediaStore.fetchMedium ();
    this.setState({media: media});
    ApiUtil.fetchComments(media.id);
  },
  onCommentsChange: function () {
    var comments = CommentsStore.all();
    this.setState({comments: comments});
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
              <Like mediaId={this.state.media.id}/>
            </div>

            <CommentForm typeId={this.state.media.id} type="Medium"/>

          </div>
        </div>
      </div>
    );
  }
});
