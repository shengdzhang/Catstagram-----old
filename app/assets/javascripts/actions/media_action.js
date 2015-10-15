MediaActions = {
  getMedia: function(media){
    AppDispatcher.dispatch({
      actionType: MediaConstants.FETCH_MEDIA,
      media: media
    });
  }
};
