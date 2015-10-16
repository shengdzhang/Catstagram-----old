MediaActions = {
  getMedia: function(media) {
    AppDispatcher.dispatch ({
      actionType: MediaConstants.FETCH_MEDIA,
      media: media
    });
  },
  createMedium: function(medium) {
    AppDispatcher.dispatch ({
      actionType: MediaConstants.CREATE_MEDIUM,
      medium: medium
    });
  }
};
