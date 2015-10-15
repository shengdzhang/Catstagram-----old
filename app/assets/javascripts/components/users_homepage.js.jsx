/*global React */
/*global UsersStore */
/* global ApiUtil */

var UserHomepage = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {users: UsersStore.all()};
  },
  componentDidMount: function () {
    UsersStore.addChangeListener(this.onChange);
  },
  onChange: function (e) {
    this.setState({users: UsersStore.all()});
  },
  componentWillUnmount: function () {
    UsersStore.removeChangeListener(this.onChange);
  },
  clickHandler: function (id, e) {
    var url = "users/" + (id+1);
    this.history.pushState(null, url);
  },
  render: function () {

    return (
      <div id="homewrapper">
        <h3 className="heading"> Suggested Follows </h3>
        <ul className='group'>
            {
              this.state.users.map(function (user, idx){
                  return <li className='suggest' key={idx}><a onClick={this.clickHandler.bind(this, idx)}> {user.username} </a><FollowButton idx={idx}/> </li>
              }.bind(this))
            }
          </ul>
      </div>
    )
  }
});
