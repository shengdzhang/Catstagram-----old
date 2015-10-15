/* global ApiActions */
/* global UsersActions */
/* global MediaActions */
var ApiUtil = {
  getUsers: function(){
    $.ajax({
      url: "/users",
      method: "GET",
      success: function(users) {
        UsersActions.getAllUsers(users);
      }
    });
  },

  getSingleUser: function (id) {
    $.ajax ({
      url: "/users/"+id,
      method: "GET",
      datatype: "JSON",
      success: function(user) {
        UsersActions.getSingleUser(user);
      }
    });
  },

  getMedia: function (id) {
    $.ajax ({
      url: "/api/media/",
      method: "GET",
      data: {"user_id": id},
      datatype: "JSON",
      success: function(media) {
        MediaActions.getMedia(media);
      }
    });
  }


};
