/* global React */
var MediaForm = React.createClass ({

  getInitialState: function () {
    return {url: "http://res.cloudinary.com/catstagram/image/upload/v1445014705/hsp3rfrvrgvbzmfl8czz.png", title: "", description: ""};
  },
  handleTitle: function (e) {
    this.setState({title: e.target.value});
  },
  handleDesc: function (e) {
    this.setState({description: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.createMedia(url, title, description);
  },
  handleLink: function () {
    var upload_preset = 'lg2jfbk8';
    var cloud_name = "catstagram";
    cloudinary.openUploadWidget({upload_preset: upload_preset, cloud_name: cloud_name}, this.handleResponse);
  },
  handleResponse: function (error, result) {
    if(error) {

    } else {
      var url = result[0].url;
      this.setState({url: url});
    }
  },
  render: function () {

    return (
      <form className="media-form group">
        <div className="column1">
          <input className="media-title" placeholder="Title" type="text" name="title" value={this.state.title} onChange={this.handleTitle}></input>
          <br/>
          <textarea className="media-desc" placeholder="  Description  " name="description" value={this.state.description} onChange={this.handleDesc}></textarea>
          <input className="media-submit" type="submit" value="Add new media" onClick={this.handleSubmit}/>
        </div>
        <div className="column2">
          <img className="media-img" src={this.state.url}/>
          <button className="media-upload-button" onClick={this.handleLink}> Upload </button>
        </div>
    </form>
    );
  }
});
