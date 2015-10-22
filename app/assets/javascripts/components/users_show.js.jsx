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

    return (
      <div id="show-wrapper">
        <UserProfile user={this.state.user} followers={this.state.followers} current={this.props.location.query.user}/>
        <ul className="media-list">
          {
            this.state.media.map(function (media){
                return <li className='media' key={media.id}><a draggable="true" onClick={this.pathMedia.bind(this, media.id)}><image className="user-show-img" src={media.link}/> </a></li>
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
});
