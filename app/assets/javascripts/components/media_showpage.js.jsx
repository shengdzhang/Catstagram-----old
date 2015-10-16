

var MediaShowpage = React.createClass({

  getInitialState: function () {
    return {media: {}, comments: []};
  },
  componentDidMount: function () {
    ApiUtil.fetchSingleMedia(parseInt(this.props.params.mediumId));
    MediaStore.addSingleChangeListener(this.onMediaChange);
    //fetch single media
    //mount listeners
  },
  componentWillUnmount: function () {
    MediaStore.removeSingleChangeListener(this.onMediaChange);
    //unmount listerners
  },
  onMediaChange: function () {
    var media = MediaStore.fetchMedium ();
    this.setState({media: media});
    //fetch comments
    //set media
  },
  onCommentsChange: function () {
    //set comments
  },
  render: function () {

    return (
      <div className="media-show">
        <img src={this.state.media.link}/>
        <div className="media-comments">
          <div className="comments-list">

          </div>
          <div className="comment-wrap">

          </div>
        </div>
      </div>
    );
  }
});
