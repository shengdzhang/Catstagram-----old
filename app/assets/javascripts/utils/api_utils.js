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

  getFollowees: function () {
    $.ajax ({
      url: "/follows",
      method: "GET",
      datatype: "JSON",
      success: function (follows) {
        FollowsActions.getFollows(follows);
      }
    });
  },

  createFollow: function (idx) {
    $.ajax ({
      url: "/follows",
      method: "POST",
      data: {"followee_id": idx},
      datatype: "JSON",
      success: function (follow) {
        FollowsActions.updateSingleFollow(follow);
      }
    });
  },

  removeFollow: function (idx) {
    $.ajax ({
      url: "/follows/"+idx,
      method: "DELETE",
      data: {"followee_id": idx},
      datatype: "JSON",
      success: function (follow) {
        FollowsActions.deleteSingleFollow(follow);
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
  },

  createMedia: function (url, title, description) {
    $.ajax ({
      url: "/api/media",
      method: "POST",
      data: {"url": url, "title": title, "description": description},
      datatype: "JSON",
      success: function(medium) {
        MediaActions.createMedium(medium);
      }
    });
  }
};
