

var MediaShowpage = React.createClass({
  mixins: [LinkedStateMixin],
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
  handleClick: function (type, e) {
    if(this.state.text !== "")
    {
      ApiUtil.createComment(type, this.state.media.id, this.state.text);
    }
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
              <textarea placeholder="Enter Comment" valueLink={this.linkState('text')}></textarea>
            </div>

            <div className="media-submit-container">
              <button onClick={this.handleClick.bind(this, "Medium")}> Click </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
});
