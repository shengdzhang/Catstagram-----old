              <button className="media-like"> Like </button>

var LikeButton = React.createClass ({

  handleClickLike: function (e) {
    e.preventDefault();
    ApiUtil.createLike(this.props.mediaId);
  },
  handleClickUnlike: function (e) {
    e.preventDefault();
    ApiUtil.removeLike(this.props.mediaId);
  },
  render: function () {
    var name = "Like";
    var click = this.handleClickLike;
    var likes = this.props.likes;
    var idx = parseInt(this.props.mediaId);
    for (var i = 0; i < likes.length; i++) {
      if (idx === likes[i].media_id) {
        name = "Unlike";
        click = this.handleClickUnlike;
      }
    }
    return (
        <button className="media-like" onClick={click}>
          {name}
        </button>
    );

  }
});
