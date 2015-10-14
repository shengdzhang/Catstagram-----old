var Search = React.createClass ({
  getInitialState: function () {
    return {searchQuery: ""};
  },
  handleChange: function (e) {
    this.setState ({searchQuery: e.target.value});
  },
  render: function () {
    return (
      <form id="searchbar">
        {
          <label>Search:
            <input id="search" onChange={this.handleChange} name="search" type="text" value={this.state.searchQuery}/>
          </label>
        }
      </form>
    );
  }
});
