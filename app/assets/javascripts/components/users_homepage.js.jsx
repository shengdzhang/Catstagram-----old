/*global React */
/*global UsersStore */
/* global ApiUtil */

var UserHomepage = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {users: UsersStore.all(), currentFollowees: FollowsStore.all()};
  },
  componentDidMount: function () {
    UsersStore.addChangeListener(this.onChange);
    FollowsStore.addChangeListener(this.onFollowerChange);
    ApiUtil.getFollowees();
  },
  onChange: function (e) {
    this.setState({users: UsersStore.all()});
  },
  onFollowerChange: function (e) {
    this.setState({currentFollowees: FollowsStore.all()});
  },
  componentWillUnmount: function () {
    UsersStore.removeChangeListener(this.onChange);
    FollowsStore.removeChangeListener(this.onFollowerChange);
  },
  clickHandler: function (id, e) {
    var url = "users/" + (id);
    this.history.pushState(null, url);
  },
  render: function () {

    return (
      <div id="homewrapper">
        <h3 className="heading"> Suggested Follows </h3>
        <ul className="suggest-wrapper group">
            {
              this.state.users.map(function (user, idx){
                  return <li className='suggest' key={idx}><a onClick={this.clickHandler.bind(this, user.id)}> {user.username} </a><FollowButton followees={this.state.currentFollowees} idx={user.id}/> </li>
              }.bind(this))
            }
          </ul>
      </div>
    )
  }
});
