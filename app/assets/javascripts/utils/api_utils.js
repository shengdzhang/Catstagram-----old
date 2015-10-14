/* global ApiActions */
/* global UsersActions */
var ApiUtil = {
  getUsers: function(){
    $.ajax({
      url: "/users",
      method: "GET",
      success: function(users) {
        UsersActions.getAllUsers(users);
      }
    });
  }

};
