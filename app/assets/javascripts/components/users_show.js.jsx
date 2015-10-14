/*global React */
/*global MediaStore */
/* global ApiUtil */

var UserShowpage = React.createClass ({

  getInitialState: function () {
    return {user: this.props.user, media: []};
  },
  componentDidMount: function () {
    MediaStore.addChangeListener(this.onChange);
    ApiUtil.getMedia(this.state.user);
  },
  onChange: function (e) {
    this.setState({media: MediaStore.all()});
  },
  componentWillUnmount: function () {
    MediaStore.removeChangeListener(this.onChange);
  },
  render: function () {

    return (
      <div>

      </div>
    );
  }
});
