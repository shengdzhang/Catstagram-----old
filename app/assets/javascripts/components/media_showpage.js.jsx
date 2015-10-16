

var MediaShowpage = React.createClass({

  getInitialState: function () {
    return {media: {}, comments: [], text: ""};
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
  handleChange: function (e) {
    this.setState({text: e.target.value});
  },
  handleClick: function () {

  },
  render: function () {

    return (
      <div className="media-show">
        <img src={this.state.media.link}/>
        <div className="media-comments">
          <ul className="comments-list">
            {
              this.state.comments.map(function (comment, idx){
                return <li key={idx}>{comment.author_id} commented:<br/><br/> {comment.body}</li>
              })
            }
          </ul>
          <div className="comment-wrap">
            <div className="media-button-container">
              <button className="media-like"> Like </button>
            </div>

            <div className="comment-form">
              <textarea onChange={this.handleChange} placeholder="Enter Comment" value={this.state.text}></textarea>
            </div>

            <div className="media-submit-container">
              <button onClick={this.handleClick}> Click </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
});
