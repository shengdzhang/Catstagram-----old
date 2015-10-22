/*global React */
/*global MediaStore */
/* global ApiUtil */

var UserShowpage = React.createClass ({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {userId: parseInt(this.props.params.userId), media: [], user: UsersStore.getShowUser(), followers: []};
  },
  componentDidMount: function () {
    UsersStore.addChangeListener(this.onUserChange);
    MediaStore.addChangeListener(this.onMediaChange);
    ApiUtil.getSingleUser(this.state.userId);
    ApiUtil.getMedia(this.state.userId);
  },
  onUserChange: function (e) {
    var user = UsersStore.getShowUser();
    var followers = user.followers || [];
    this.setState({user: user, followers: followers});
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
  editProfile: function () {
    var url = "/users/" +  CURRENT_USER_ID + "/edit";
    this.history.pushState(null, url);
  },
  uploadMedia: function () {
    var follows = "";
    var followWord = "Followers";
    if(this.state.user){
      follows = this.state.followers.length;
      if (follows <= 1) {
        followWord = "Follower";
      }
    }
    var followz = followWord + ": " + follows;
    if(this.props.location.query.user) {
      var profile = <div></div>;
      if(CURRENT_USER_ID !== 16)
      {
        profile = <div className="user-profile">
                    <button onClick={this.editProfile} > Profile </button>
                  </div>;
      } else {
        followz = "";
      }
      return (
        <div>
          {followz}
          <div className="upload-wrapper">
            {profile}
            <div className="user-upload">
              <button onClick={this.handleMedia} > Upload Media </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          {followz}
        </div>
      );
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
          <br/>
          {this.uploadMedia()}
        </div>
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
