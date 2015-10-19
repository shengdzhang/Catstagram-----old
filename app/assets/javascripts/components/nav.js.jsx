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
    var current = {user: 'current'};
    var url = "users/" + (CURRENT_USER_ID);
    this.history.pushState(null, url, current);
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
      if (window.location.hash.match(/(current)/) === null) {
        username = this.state.user.username;
        note = <li onClick={this.handleClickProfile}> {username}</li>;
      } else {
        note = <li onClick={this.handleLogOut}> Log out</li>;
      }
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
