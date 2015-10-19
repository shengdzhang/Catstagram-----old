CommentsActions = {
  getComments: function(comments){
    AppDispatcher.dispatch({
      actionType: CommentsConstants.FETCH_COMMENTS,
      comments: comments
    });
  },

  updateSingleComment: function (comment){
    AppDispatcher.dispatch({
      actionType: CommentsConstants.FETCH_SINGLE_COMMENT,
      comment: comment
    });
  },

  deleteSingleComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: CommentsConstants.REMOVE_SINGLE_COMMENT,
      comment: comment
    });
  },

  getSingleComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: CommentsConstants.FETCH_COMMENT,
      comment: comment
    });
  }
};
