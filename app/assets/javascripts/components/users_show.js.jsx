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
    var user = UsersStore.all();
    this.setState({user: user});
  },
  onMediaChange: function (e) {
    this.setState({media: MediaStore.all()});
  },
  componentWillUnmount: function () {
    MediaStore.removeChangeListener(this.onChange);
    UsersStore.removeChangeListener(this.onUserChange);
  },
  render: function () {
    var name = "";
    if(this.state.user){
      name = this.state.user.username;
      debugger;
    }
    return (
      <div>
        <ul>
          {
            this.state.media.map(function (media, idx){
                return <li className='media' key={idx}><a> {media} </a></li>
            }.bind(this))
          }
        </ul>
        <div>
          {
            name
          }
        </div>
      </div>
    );
  }
});
