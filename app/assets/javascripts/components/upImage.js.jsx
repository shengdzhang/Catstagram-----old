/* global React */

var UpImage = React.createClass ({

  handleClick: function () {
    var upload_preset = 'lg2jfbk8';
    var cloud_name = "catstagram";
    cloudinary.openUploadWidget({upload_preset: upload_preset, cloud_name: cloud_name}, this.handleResponse);
  },
  handleResponse: function (error, result) {
    if(error) {

    } else {
      var url = result[0].url;
      ApiUtil.createMedia(url);
    }
  },
  render: function () {
    return (
      <button onClick={this.handleClick}> Upload </button>
    );
  }
});
