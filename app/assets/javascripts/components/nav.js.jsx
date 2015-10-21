/* global React */
var Nav = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {user: UsersStore.getCurrentUser()};
  },
  componentDidMount: function () {
    UsersStore.addChangeListener(this.onChange);
    ApiUtil.getUsers();
  },
  onChange: function () {
    this.setState({user: UsersStore.getCurrentUser()});
  },
  componentWillUnmount: function () {
    UsersStore.removeChangeListener(this.onChange);
  },
  handleClickProfile: function () {
    if (this.state.user.username) {
      var current = {user: 'current'};
      var url = "users/" + (CURRENT_USER_ID);
      this.history.pushState(null, url, current);
    }
  },
  handleClickHome: function () {
    this.history.pushState(null, '/');
  },
  handleLogOut: function () {
    ApiUtil.logOut();
  },
  render: function () {
    var username = "",
        note;
    if (this.state.user) {
      username = this.state.user.username || "Guest";
      note = <li> <span onClick={this.handleClickProfile}> {username} </span> <span onClick={this.handleLogOut}> Log out </span></li>;
    }
    return (
      <div>
        {
          <nav className='group'>
            <ul className='navbar'>
              <li onClick={this.handleClickHome}> Catstagram </li>
              <li> <Search/> </li>
              {note}
            </ul>
          </nav>
        }
      </div>
    )
  }
});
