MediaActions = {
  getAllMedia: function(media){
    AppDispatcher.dispatch({
      actionType: UsersConstants.FETCH_MEDIA,
      media: media
    });
  }
};
