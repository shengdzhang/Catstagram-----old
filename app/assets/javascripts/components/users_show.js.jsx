/*global React */
/*global MediaStore */
/* global ApiUtil */

var UserShowpage = React.createClass ({

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
    MediaStore.removeChangeListener(this.onChange);
    UsersStore.removeChangeListener(this.onUserChange);
  },
  uploadMedia: function () {
    if(this.state.user && this.state.user.id === CURRENT_USER_ID) {
      return (
        <div>
          Hello
        </div>
      )
    }
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
          {this.uploadMedia()}
        </div>
        <ul className="medialist">
          {
            this.state.media.map(function (media, idx){
                return <li className='media' key={idx}><a> {media.link} </a></li>
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
});
