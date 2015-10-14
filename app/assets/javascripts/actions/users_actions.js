
UsersActions = {
  getAllUsers: function(users){
    AppDispatcher.dispatch({
      actionType: UsersConstants.FETCH_USERS,
      users: users
    });
  }
};
