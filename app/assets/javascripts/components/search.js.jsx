var Search = React.createClass ({
  getInitialState: function () {
    return {searchQuery: "", users: UserStore.all()};
  },
  handleChange: function (e) {
    this.setState ({searchQuery: e.target.value});
  },
  componentDidMount: function () {

  },
  componentWillUnmount: function () {

  },
  onUserChange: function () {

  },
  render: function () {
    var names = [];
    var search = this.state.searchQuery.trim().toLowerCase();
    var self = this;
    if (search.length > 0){
      for(var i = 0; i < this.state.users.length; i++)
      {
        if (this.state.users[i].toLowerCase().slice(0,searchQuery.length).match(search)) {
          names.push(this.state.users[i]);
        }
      }
    }
    return (
      <div id="searchbar">
        <label>Search:
          <input id="search" onChange={this.handleChange} name="search" type="text" value={this.state.searchQuery} placeholder="Type here"/>
        </label>
        <ul>
          {
              names.map(function(l){
              return <li id={l} onClick={self.handleClick.bind(self, l.username)}> {l.username} </li>
            })
          }
        </ul>
      </div>
    );
  }
});
