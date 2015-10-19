/* global ApiActions */
/* global UsersActions */
/* global MediaActions */
/* global FollowsActions */
/* global CommentsActions */

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

  logOut: function () {
    $.ajax ({
      url: "/session",
      method: "DELETE",
      success: function (e) {
        window.location.href = '/session/new';
      }
    })
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
  },

  fetchSingleMedia: function (id) {
    $.ajax ({
      url: "/api/media/" + id,
      method: "GET",
      datatype: "JSON",
      success: function(medium) {
        MediaActions.fetchMedium(medium);
      }
    });
  },

  fetchComments: function (id) {
    $.ajax ({
      url: "/api/comments",
      method: "GET",
      data: {"media_id": id},
      datatype: "JSON",
      success: function(comments) {
        CommentsActions.getComments(comments);
      }
    });
  },

  createComment: function(type, id, text){
    $.ajax ({
      url: "/api/comments",
      method: "POST",
      data: {"type":type, "type_id": id, "body": text},
      datatype: "JSON",
      success: function (comment) {
        CommentsActions.updateSingleComment(comment);
      }
    });
  },

  fetchComment: function(id) {
    $.ajax ({
      url: "/api/comments/" +id,
      method: "GET",
      datatype: "JSON",
      success: function (comment) {
        CommentsActions.getSingleComment(comment);
      }
    });
  }
};
