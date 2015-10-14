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
      <div id="homewrapper">
        <h3 className="heading"> Suggested Follows </h3>
        <ul className='group'>
            {
              this.state.users.map(function (user, idx){
                  return <li className='suggest' key={idx}> {user.username} <FollowButton/> </li>
              })
            }
          </ul>
      </div>
    )
  }
});
