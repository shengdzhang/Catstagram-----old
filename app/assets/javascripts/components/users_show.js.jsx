/*global React */
/*global MediaStore */
/* global ApiUtil */

var UserShowpage = React.createClass ({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {userId: parseInt(this.props.params.userId), media: []};
  },
  componentDidMount: function () {
    UsersStore.addChangeListener(this.onUserChange);
    MediaStore.addChangeListener(this.onMediaChange);
    ApiUtil.getSingleUser(this.state.userId);
    ApiUtil.getMedia(this.state.userId);
  },
  onUserChange: function (e) {
    var user = UsersStore.getShowUser();
    this.setState({user: user});
  },
  onMediaChange: function (e) {
    this.setState({media: MediaStore.all()});
  },
  componentWillUnmount: function () {
    MediaStore.removeChangeListener(this.onMediaChange);
    UsersStore.removeChangeListener(this.onUserChange);
  },
  handleMedia: function () {
    this.history.pushState(null, "media/new");
  },
  uploadMedia: function () {
    if(this.props.location.query.user) {
      return (
        <div>
          <button onClick={this.handleMedia} > Upload Media </button>
        </div>
      )
    }
  },

  componentWillReceiveProps: function(val) {
      var id = val.params.userId;
      ApiUtil.getSingleUser(id);
      ApiUtil.getMedia(id);
      this.setState({userId: id});
  },

  pathMedia: function (id, e) {
    var url = "media/" + id;
    this.history.pushState(null, url);
  },
  render: function () {
    var name = "";
    if(this.state.user){
      name = this.state.user.username;
    }
    return (
      <div id="showwrapper">
        <div className="profile">
          {
            name
          }
        </div>
          {this.uploadMedia()}
        <ul className="media-list">
          {
            this.state.media.map(function (media){
                return <li className='media' key={media.id}><a onClick={this.pathMedia.bind(this, media.id)}><image className="user-show-img" src={media.link}/> </a></li>
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
});
