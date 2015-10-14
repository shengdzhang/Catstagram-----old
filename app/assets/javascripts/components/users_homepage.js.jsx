/*global React */
/*global UsersStore */
/* global ApiUtil */

var UserHomepage = React.createClass ({

  getInitialState: function () {
    return {users: UsersStore.all()};
  },
  componentDidMount: function () {
    UsersStore.addChangeListener(this.onChange);
    ApiUtil.getUsers();
  },
  onChange: function (e) {
    this.setState({users: UsersStore.all()});

  },
  componentWillUnmount: function () {
    UsersStore.removeChangeListener(this.onChange);
  },
  render: function () {
    return (
      <div>
        {
          <ul>
            {
              this.state.users.map(function (user, idx){
                  return <li key={idx}> {user.username} </li>
              })
            }
          </ul>
        }
      </div>
    )
  }
});
